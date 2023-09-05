import React, { useContext, useState, useEffect } from "react";
import {
  RightCircleOutlined,
  PrinterOutlined,
  ThunderboltOutlined,
  EnterOutlined,
} from "@ant-design/icons";
import { Menu, Dropdown, Spin } from "antd";
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
import showErrorDialog from "@/ui/ActionErrorDialog";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { parseContextFields, parseDomainFields } from "@gisce/ooui";

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
    TabManagerContext
  ) as TabManagerContextType;
  const { openRelate } = tabManagerContext || {};

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  if (!id) {
    return null;
  }

  async function fetchData() {
    setIsLoading(true);

    try {
      const formView = await ConnectionProvider.getHandler().getView({
        model,
        type: "form",
        context,
      }) as FormView;
      setFormView(formView);
      let fields: string[] = [];
      const { toolbar } = formView;
      toolbar.action?.filter((item: any) => item.hasOwnProperty('context')).map((item: any) => fields.push(...parseContextFields(item.context)));
      toolbar.action?.filter((item: any) => item.hasOwnProperty('domain')).map((item: any) => fields.push(...parseDomainFields(item.domain)));
      toolbar.relate?.filter((item: any) => item.hasOwnProperty('context')).map((item: any) => fields.push(...parseContextFields(item.context)));
      toolbar.relate?.filter((item: any) => item.hasOwnProperty('domain')).map((item: any) => fields.push(...parseDomainFields(item.domain)));
      toolbar.print?.filter((item: any) => item.hasOwnProperty('context')).map((item: any) => fields.push(...parseContextFields(item.context)));
      fields = fields.filter((i) => Object.keys(formView.fields).indexOf(i) > -1)

      let values = {}

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
      console.log('Values', targetValues, values);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      showErrorDialog(err);
      return;
    }
  }

  function menu() {
    if (isLoading) {
      return (
        <Menu>
          <div style={{ padding: 15 }}>
            <Spin />
          </div>
        </Menu>
      );
    }

    if (!formView || !formView.toolbar) {
      return <Menu />;
    }

    const relateItems = formView?.toolbar?.relate.map((item: any) => {
      return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
    });

    return (
      <Menu onClick={handleMenuClick}>
        {[
          <Menu.Item
            key="action"
            disabled={
              !formView!.toolbar.action || formView!.toolbar.action.length === 0
            }
            icon={<ThunderboltOutlined />}
          >
            {t("action")}
          </Menu.Item>,
          <Menu.Item
            key="print"
            disabled={
              !formView!.toolbar.print || formView!.toolbar.print.length === 0
            }
            icon={<PrinterOutlined />}
          >
            {t("report")}
          </Menu.Item>,
          <Menu.Divider />,
          <Menu.ItemGroup
            title={
              <>
                <EnterOutlined /> <span> {t("related")}</span>
              </>
            }
          >
            {relateItems}
          </Menu.ItemGroup>,
        ]}
      </Menu>
    );
  }

  function handleMenuClick(event: any) {
    if (event.key === "action") {
      setActionModalVisible(true);
    } else if (event.key === "print") {
      setPrintModalVisible(true);
    } else {
      const relateItemClicked = formView!.toolbar.relate.find((item: any) => {
        return item.id === parseInt(event.key);
      });
      if (!relateItemClicked) {
        return;
      }

      console.log(targetValues);

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
      <Dropdown overlay={menu()} trigger={["click"]}>
        <RightCircleOutlined
          style={{ color: "rgba(0,0,0,.45)" }}
          onClick={(e) => {
            e.preventDefault();
            fetchData();
          }}
        />
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
