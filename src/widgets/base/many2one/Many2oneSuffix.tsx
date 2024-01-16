import { useCallback, useContext, useState } from "react";
import {
  RightCircleOutlined,
  PrinterOutlined,
  ThunderboltOutlined,
  EnterOutlined,
} from "@ant-design/icons";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { FormView } from "@/types";
import { Many2oneSuffixModal } from "./Many2oneSuffixModal";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import ConnectionProvider from "@/ConnectionProvider";
import { processValues } from "@/helpers/formHelper";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { parseContextFields, parseDomainFields } from "@gisce/ooui";
import {
  Dropdown,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@gisce/react-formiga-components";

type Props = {
  id: number;
  model: string;
  context?: any;
};

export const Many2oneSuffix = (props: Props) => {
  const { id, model, context = {} } = props;
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);
  const [printModalVisible, setPrintModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formView, setFormView] = useState<FormView>();
  const [targetValues, setTargetValues] = useState<any>();
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { openRelate } = tabManagerContext || {};

  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  const fetchData = useCallback(async (): Promise<DropdownMenuGroup[]> => {
    const formView = (await ConnectionProvider.getHandler().getView({
      model,
      type: "form",
      context,
    })) as FormView;
    setFormView(formView);
    let fields: string[] = [];
    const { toolbar } = formView;
    toolbar.action
      ?.filter((item: any) => "context" in item)
      .map((item: any) => fields.push(...parseContextFields(item.context)));
    toolbar.action
      ?.filter((item: any) => "domain" in item)
      .map((item: any) => fields.push(...parseDomainFields(item.domain)));
    toolbar.relate
      ?.filter((item: any) => "context" in item)
      .map((item: any) => fields.push(...parseContextFields(item.context)));
    toolbar.relate
      ?.filter((item: any) => "domain" in item)
      .map((item: any) => fields.push(...parseDomainFields(item.domain)));
    toolbar.print
      ?.filter((item: any) => "context" in item)
      .map((item: any) => fields.push(...parseContextFields(item.context)));
    fields = fields.filter((i) => Object.keys(formView.fields).indexOf(i) > -1);

    let values = {};

    // Remove duplicates in fields string[] array
    fields = [...new Set(fields)];

    if (fields.length > 0) {
      values = (
        await ConnectionProvider.getHandler().readObjects({
          model,
          ids: [id],
          fieldsToRetrieve: fields,
          context,
        })
      )[0];
    }
    values = { ...processValues(values, fields), active_id: id };
    setTargetValues(values);
    if (!formView || !formView.toolbar) {
      return [];
    }
    return [
      {
        sticky: true,
        items: [
          {
            id: "action",
            name: t("action"),
            disabled:
              !formView!.toolbar.action ||
              formView!.toolbar.action.length === 0,
            icon: <ThunderboltOutlined />,
          },
          {
            id: "print",
            name: t("report"),
            disabled:
              !formView!.toolbar.print || formView!.toolbar.print.length === 0,
            icon: <PrinterOutlined />,
          },
          {
            id: "divider",
            type: "divider",
          },
        ],
      },
      {
        label: t("related"),
        icon: <EnterOutlined />,
        items: formView?.toolbar?.relate,
      },
    ];
  }, [context, id, model, t]);

  if (!id) {
    return null;
  }

  function handleMenuClick(item: DropdownMenuItem) {
    if (item.id === "action") {
      setActionModalVisible(true);
    } else if (item.id === "print") {
      setPrintModalVisible(true);
    } else {
      const relateItemClicked = formView!.toolbar.relate.find((item: any) => {
        return item.id === parseInt(item.id);
      });
      if (!relateItemClicked) {
        return;
      }

      openRelate({
        relateData: relateItemClicked,
        values: targetValues,
        fields: formView!.fields,
        action_id: relateItemClicked.id,
        action_type: relateItemClicked.type,
      });
    }
  }

  function onActionItemClicked(actionData: any) {
    setActionModalVisible(false);
    processAction?.({
      actionData,
      values: targetValues,
      fields: formView!.fields,
      context: { active_id: id, active_ids: [id] },
    });
  }

  function onPrintItemClicked(reportData: any) {
    setPrintModalVisible(false);
    processAction?.({
      actionData: {
        ...reportData,
        datas: { ...(reportData.datas || {}), ids: [id] },
      },
      values: targetValues,
      fields: formView!.fields,
    });
  }

  return (
    <>
      <Dropdown
        onRetrieveData={fetchData}
        onItemClick={handleMenuClick}
        maxHeight={300}
        trigger={["click"]}
      >
        <RightCircleOutlined style={{ color: "rgba(0,0,0,.45)" }} />
      </Dropdown>
      <Many2oneSuffixModal
        visible={actionModalVisible}
        items={formView?.toolbar?.action}
        onItemClicked={onActionItemClicked}
        onCancel={() => setActionModalVisible(false)}
      />
      <Many2oneSuffixModal
        visible={printModalVisible}
        items={formView?.toolbar?.print}
        onItemClicked={onPrintItemClicked}
        onCancel={() => setPrintModalVisible(false)}
      />
    </>
  );
};
