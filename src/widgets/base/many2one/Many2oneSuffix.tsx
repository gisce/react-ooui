import React, { useContext, useState } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
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

type Props = {
  id: number;
  formView?: FormView;
  targetValues: any;
  readOnly: boolean;
};

export const Many2oneSuffix = (props: Props) => {
  const { id, formView, targetValues, readOnly } = props;
  const [actionModalVisible, setActionModalVisible] = useState<boolean>(false);
  const [printModalVisible, setPrintModalVisible] = useState<boolean>(false);

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openRelate } = tabManagerContext || {};

  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext;

  if (!id || !formView?.toolbar) {
    return null;
  }

  function menu() {
    const relateItems = formView!.toolbar.relate.map((item: any) => {
      return <Menu.Item key={item.id}>... {item.name}</Menu.Item>;
    });

    return (
      <Menu onClick={handleMenuClick}>
        {[
          <Menu.Item
            key="action"
            disabled={
              readOnly ||
              !formView!.toolbar.action ||
              formView!.toolbar.action.length === 0
            }
          >
            Acció
          </Menu.Item>,
          <Menu.Item
            key="print"
            disabled={
              !formView!.toolbar.print || formView!.toolbar.print.length === 0
            }
          >
            Informe
          </Menu.Item>,
          <Menu.Divider />,
          ...relateItems,
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
          onClick={(e) => e.preventDefault()}
        />
      </Dropdown>
      <Many2oneSuffixModal
        visible={actionModalVisible}
        items={formView!.toolbar.action}
        onItemClicked={onActionItemClicked}
        onCancel={() => setActionModalVisible(false)}
      />
      <Many2oneSuffixModal
        visible={printModalVisible}
        items={formView!.toolbar.print}
        onItemClicked={onPrintItemClicked}
        onCancel={() => setPrintModalVisible(false)}
      />
    </>
  );
};
