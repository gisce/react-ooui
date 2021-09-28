import React, { useContext } from "react";
import { Space } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import NewButton from "./NewButton";
import ActionButton from "./ActionButton";
import {
  DeleteOutlined,
  PrinterOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showConfirmDialog from "@/ui/ConfirmDialog";
import ConnectionProvider from "@/ConnectionProvider";
import showErrorDialog from "@/ui/GenericErrorDialog";
import DropdownButton from "./DropdownButton";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";

function TreeActionBar() {
  const {
    availableViews,
    currentView,
    setCurrentView,
    selectedRowItems,
    setRemovingItem,
    removingItem,
    currentModel,
    searchTreeRef,
    setCurrentId,
    setCurrentItemIndex,
    toolbar,
  } = useContext(ActionViewContext) as ActionViewContextType;

  const { t, lang } = useContext(LocaleContext) as LocaleContextType;
  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};

  function tryDelete() {
    showConfirmDialog({
      confirmMessage: t("confirmRemove"),
      lang,
      onOk: () => {
        remove();
      },
    });
  }

  async function remove() {
    try {
      setRemovingItem?.(true);

      await ConnectionProvider.getHandler().delete({
        model: currentModel!,
        ids: selectedRowItems!.map((item) => item.id),
      });

      setCurrentId?.(undefined);
      setCurrentItemIndex?.(undefined);

      searchTreeRef?.current?.refreshResults();
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setRemovingItem?.(false);
    }
  }

  function runAction(actionData: any) {
    processAction?.({
      actionData,
      values: {},
      fields: {},
      context: {
        active_id: selectedRowItems?.map((item) => item.id)[0],
        active_ids: selectedRowItems?.map((item) => item.id),
      },
    });
  }

  return (
    <Space wrap={true}>
      <NewButton />
      {separator()}
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={t("delete")}
        disabled={!(selectedRowItems && selectedRowItems?.length > 0)}
        loading={removingItem}
        onClick={tryDelete}
      />
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        disabled={!(selectedRowItems && selectedRowItems?.length > 0)}
        tooltip={t("actions")}
        items={toolbar?.action}
        onItemClick={(action: any) => {
          if (!action) {
            return;
          }

          runAction(action);
        }}
      />
      <DropdownButton
        icon={<PrinterOutlined />}
        disabled={!(selectedRowItems && selectedRowItems?.length > 0)}
        tooltip={t("reports")}
        items={toolbar?.print}
        onItemClick={(report: any) => {
          if (!report) {
            return;
          }

          runAction({
            ...report,
            datas: {
              ...(report.datas || {}),
              ids: selectedRowItems!.map((item) => item.id),
            },
          });
        }}
      />
      {separator()}
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={setCurrentView}
      />
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default TreeActionBar;
