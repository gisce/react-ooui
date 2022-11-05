import React, { useContext, useState } from "react";
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
  FilterOutlined,
  ExportOutlined,
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
import { ExportModal } from "..";
import { mergeParams } from "@/helpers/searchHelper";

type Props = {
  parentContext?: any;
  treeExpandable: boolean;
  toolbar: any;
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
    searchParams,
    searchVisible,
    setSearchVisible,
    setSearchTreeNameSearch,
    searchTreeNameSearch,
    treeIsLoading,
    setPreviousView,
    previousView,
    results,
    limit,
    totalItems,
  } = useContext(ActionViewContext) as ActionViewContextType;

  const { parentContext = {}, treeExpandable, toolbar } = props;

  const { t, lang } = useContext(LocaleContext) as LocaleContextType;
  const contentRootContext = useContext(
    ContentRootContext
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};
  const [exportModalVisible, setExportModalVisible] = useState(false);

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

  return (
    <Space wrap={true}>
      {treeExpandable ? null : (
        <>
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
              !(selectedRowItems && selectedRowItems?.length > 0) ||
              treeIsLoading
            }
            loading={removingItem}
            onClick={tryDelete}
          />
          {separator()}
        </>
      )}
      {!treeExpandable && (
        <ButtonWithBadge
          icon={
            <FilterOutlined
              style={{ color: searchVisible ? "white" : undefined }}
            />
          }
          tooltip={t("advanced_search")}
          type={searchVisible ? "primary" : "default"}
          onClick={() => {
            setSearchVisible?.(!searchVisible);
          }}
          disabled={duplicatingItem || removingItem || treeIsLoading}
          badgeNumber={searchParams?.length}
        />
      )}
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
      {!treeExpandable && (
        <>
          {separator()}
          <ChangeViewButton
            currentView={currentView}
            availableViews={availableViews}
            onChangeView={(newView) => {
              setPreviousView?.(currentView);
              setCurrentView?.(newView);
            }}
            previousView={previousView}
            disabled={treeIsLoading}
          />
        </>
      )}
      {separator()}
      <ActionButton
        icon={<ExportOutlined />}
        tooltip={t("export")}
        disabled={duplicatingItem || removingItem || treeIsLoading}
        loading={false}
        onClick={() => {
          setExportModalVisible(true);
        }}
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
      <ExportModal
        visible={exportModalVisible}
        locale={lang}
        onClose={() => setExportModalVisible(false)}
        model={currentModel!}
        treeFields={searchTreeRef?.current?.getFields()}
        domain={mergeParams(
          searchTreeRef?.current?.getDomain() || [],
          searchParams || []
        )}
        limit={limit}
        totalRegisters={totalItems}
        selectedRegistersToExport={
          results && results.length && results.length > 0
            ? results.length
            : undefined
        }
        context={parentContext}
      />
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default TreeActionBar;
