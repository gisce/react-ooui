import React, { useContext, useState, useEffect } from "react";
import { RightCircleOutlined, PrinterOutlined, ThunderboltOutlined, EnterOutlined } from "@ant-design/icons";
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

type Props = {
  id: number;
  model: string;
};

export const Many2oneSuffix = (props: Props) => {
  const { id, model } = props;
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);
  const [printModalVisible, setPrintModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [formView, setFormView] = useState<FormView>();
  const [targetValues, setTargetValues] = useState<any>();

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
      });
      setFormView(formView);
      const { fields, arch } = formView;

      const values = (
        await ConnectionProvider.getHandler().readObjects({
          arch,
          model,
          ids: [id],
          fields,
        })
      )[0];

      setTargetValues({ ...processValues(values, fields), active_id: id });

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
            icon={<ThunderboltOutlined/>}
          >
            Acció
          </Menu.Item>,
          <Menu.Item
            key="print"
            disabled={
              !formView!.toolbar.print || formView!.toolbar.print.length === 0
            }
            icon={<PrinterOutlined/>}
          >
            Informe
          </Menu.Item>,
          <Menu.Divider />,
          <Menu.ItemGroup
            title={<><EnterOutlined /> <span>Relacions</span></>}
          >
          {relateItems}
          </Menu.ItemGroup>
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

      openRelate({
        relateData: relateItemClicked,
        values: targetValues,
        fields: formView!.fields,
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
