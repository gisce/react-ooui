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
  CopyOutlined,
  ReloadOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showConfirmDialog from "@/ui/ConfirmDialog";
import ConnectionProvider from "@/ConnectionProvider";
import showErrorDialog from "@/ui/ActionErrorDialog";
import DropdownButton from "./DropdownButton";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import ButtonWithBadge from "./ButtonWithBadge";
import { showLogInfo } from "@/helpers/logInfoHelper";
import SearchBar from "./SearchBar";

type Props = {
  parentContext?: any;
};

function TreeActionBar(props: Props) {
  const {
    availableViews,
    currentView,
    setCurrentView,
    selectedRowItems,
    setRemovingItem,
    removingItem,
    duplicatingItem,
    setDuplicatingItem,
    currentModel,
    searchTreeRef,
    setCurrentId,
    setCurrentItemIndex,
    toolbar,
    searchParams,
    searchVisible,
    setSearchVisible,
    setSearchTreeNameSearch,
    searchTreeNameSearch,
    treeIsLoading,
  } = useContext(ActionViewContext) as ActionViewContextType;

  const { parentContext = {} } = props;

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
      showErrorDialog(e);
    } finally {
      setRemovingItem?.(false);
    }
  }

  async function duplicate() {
    try {
      setDuplicatingItem?.(true);

      const currentId = selectedRowItems![0].id;

      const newId = await ConnectionProvider.getHandler().duplicate({
        id: currentId,
        model: currentModel!,
        context: { ...parentContext },
      });

      if (newId) {
        searchTreeRef?.current?.refreshResults();
      }
    } catch (e) {
      showErrorDialog(e);
    } finally {
      setDuplicatingItem?.(false);
    }
  }

  function runAction(actionData: any) {
    processAction?.({
      actionData,
      values: {
        active_id: selectedRowItems?.map((item) => item.id)[0],
        active_ids: selectedRowItems?.map((item) => item.id),
      },
      fields: {},
      context: {
        ...parentContext,
        active_id: selectedRowItems?.map((item) => item.id)[0],
        active_ids: selectedRowItems?.map((item) => item.id),
      },
      onRefreshParentValues: () => {
        searchTreeRef?.current?.refreshResults();
      },
    });
  }

  if (!currentView) {
    return null;
  }

  return (
    <Space wrap={true}>
      <SearchBar
        disabled={duplicatingItem || removingItem || treeIsLoading}
        searchText={searchTreeNameSearch}
        onSearch={(searchString?: string) => {
          if (searchString && searchString.trim().length > 0) {
            setSearchTreeNameSearch?.(searchString);
          } else {
            setSearchTreeNameSearch?.(undefined);
          }
        }}
      />
      {separator()}
      <NewButton disabled={treeIsLoading} />
      {separator()}
      <ActionButton
        icon={<CopyOutlined />}
        tooltip={t("duplicate")}
        disabled={
          !selectedRowItems ||
          selectedRowItems?.length !== 1 ||
          duplicatingItem ||
          treeIsLoading
        }
        loading={duplicatingItem}
        onClick={duplicate}
      />
      <ActionButton
        icon={<DeleteOutlined />}
        tooltip={t("delete")}
        disabled={
          !(selectedRowItems && selectedRowItems?.length > 0) || treeIsLoading
        }
        loading={removingItem}
        onClick={tryDelete}
      />
      {separator()}
      <ButtonWithBadge
        onClick={() => {
          setSearchVisible?.(!searchVisible);
        }}
        disabled={duplicatingItem || removingItem || treeIsLoading}
        badgeNumber={searchParams?.length}
      />
      <ActionButton
        icon={<InfoCircleOutlined />}
        tooltip={t("showLogs")}
        disabled={
          !(selectedRowItems && selectedRowItems?.length > 0) || treeIsLoading
        }
        loading={false}
        onClick={() => {
          showLogInfo(currentModel!, selectedRowItems![0].id, t);
        }}
      />
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={duplicatingItem || removingItem || treeIsLoading}
        loading={false}
        onClick={() => {
          searchTreeRef?.current?.refreshResults();
        }}
      />
      {separator()}
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={setCurrentView}
        disabled={treeIsLoading}
      />
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        disabled={
          !(selectedRowItems && selectedRowItems?.length > 0) || treeIsLoading
        }
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
        disabled={
          !(selectedRowItems && selectedRowItems?.length > 0) || treeIsLoading
        }
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
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default TreeActionBar;
