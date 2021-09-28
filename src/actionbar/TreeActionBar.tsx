import React, { useContext } from "react";
import { Space } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import NewButton from "./NewButton";
import ActionButton from "./ActionButton";
import { DeleteOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showConfirmDialog from "@/ui/ConfirmDialog";
import ConnectionProvider from "@/ConnectionProvider";
import showErrorDialog from "@/ui/GenericErrorDialog";

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
  } = useContext(ActionViewContext) as ActionViewContextType;

  const { t, lang } = useContext(LocaleContext) as LocaleContextType;

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
