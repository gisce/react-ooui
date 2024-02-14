import { useContext, useState } from "react";
import { Space, Spin } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import NewButton from "./NewButton";
import ActionButton from "./ActionButton";
import Icon, {
  DeleteOutlined,
  PrinterOutlined,
  ThunderboltOutlined,
  CopyOutlined,
  ReloadOutlined,
  InfoCircleOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { useLocale, DropdownButton } from "@gisce/react-formiga-components";
import showConfirmDialog from "@/ui/ConfirmDialog";
import ConnectionProvider from "@/ConnectionProvider";
import showErrorDialog from "@/ui/ActionErrorDialog";
import {
  ContentRootContext,
  ContentRootContextType,
} from "@/context/ContentRootContext";
import ButtonWithBadge from "./ButtonWithBadge";
import { showLogInfo } from "@/helpers/logInfoHelper";
import SearchBar from "./SearchBar";
import { ExportModal } from "..";
import { mergeParams } from "@/helpers/searchHelper";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";

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
  const advancedExportEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_ADVANCED_EXPORT,
  );
  const { t } = useLocale();
  const contentRootContext = useContext(
    ContentRootContext,
  ) as ContentRootContextType;
  const { processAction } = contentRootContext || {};
  const [exportModalVisible, setExportModalVisible] = useState(false);

  const hasNameSearch: boolean =
    searchTreeNameSearch !== undefined &&
    searchTreeNameSearch.trim().length > 0;

  function tryDelete() {
    showConfirmDialog({
      confirmMessage: t("confirmRemove"),
      t,
      onOk: () => {
        remove();
      },
    });
  }

  async function remove() {
    try {
      setRemovingItem?.(true);

      await ConnectionProvider.getHandler().deleteObjects({
        model: currentModel!,
        ids: selectedRowItems!.map((item) => item.id),
        context: { ...parentContext },
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
      {treeIsLoading && (
        <>
          <Spin />
          {separator()}
          {separator()}
        </>
      )}
      {treeExpandable ? null : (
        <>
          <SearchBar
            disabled={duplicatingItem || removingItem}
            searchText={searchTreeNameSearch}
            onSearch={(searchString?: string) => {
              if (searchString && searchString.trim().length > 0) {
                setSearchTreeNameSearch?.(searchString);
              } else {
                setSearchTreeNameSearch?.(undefined);
              }
            }}
          />
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
              disabled={duplicatingItem || removingItem}
              badgeNumber={searchParams?.length}
            />
          )}
          {separator()}
          <NewButton />
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
          />
        </>
      )}
      {separator()}
      <DropdownButton
        icon={<ThunderboltOutlined />}
        placement="bottomRight"
        disabled={
          !(selectedRowItems && selectedRowItems?.length > 0) || treeIsLoading
        }
        onRetrieveData={async () => [
          { label: t("actions"), items: toolbar?.action },
        ]}
        onItemClick={(action: any) => {
          if (!action) {
            return;
          }

          runAction(action);
        }}
      />
      <DropdownButton
        icon={<PrinterOutlined />}
        placement="bottomRight"
        disabled={
          !(selectedRowItems && selectedRowItems?.length > 0) || treeIsLoading
        }
        onRetrieveData={async () => [
          { label: t("reports"), items: toolbar?.print },
        ]}
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
      {advancedExportEnabled && (
        <>
          {separator()}
          <DropdownButton
            placement="bottomRight"
            icon={
              <Icon
                component={() => (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-database-export"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <ellipse cx="12" cy="6" rx="8" ry="3" />
                    <path d="M4 6v6c0 1.657 3.582 3 8 3a19.84 19.84 0 0 0 3.302 -.267m4.698 -2.733v-6" />
                    <path d="M4 12v6c0 1.599 3.335 2.905 7.538 2.995m8.462 -6.995v-2m-6 7h7m-3 -3l3 3l-3 3" />
                  </svg>
                )}
              />
            }
            onRetrieveData={async () => [
              {
                label: t("export"),
                items: [
                  {
                    id: "print_screen",
                    name: t("printScreen"),
                  },
                  {
                    id: "export",
                    name: t("advancedExport"),
                  },
                ],
              },
            ]}
            onItemClick={(itemClicked: any) => {
              if (itemClicked.id === "print_screen") {
                let idsToExport =
                  selectedRowItems?.map((item) => item.id) || [];

                if (idsToExport.length === 0) {
                  idsToExport = results?.map((item) => item.id) || [];
                }

                runAction({
                  id: -1,
                  model: currentModel,
                  report_name: "printscreen.list",
                  type: "ir.actions.report.xml",
                  datas: {
                    model: currentModel,
                    ids: idsToExport,
                  },
                });
                return;
              }

              setExportModalVisible(true);
            }}
            disabled={
              duplicatingItem || removingItem || treeIsLoading || hasNameSearch
            }
          />
          <ExportModal
            visible={exportModalVisible}
            onClose={() => setExportModalVisible(false)}
            model={currentModel!}
            domain={mergeParams(
              searchTreeRef?.current?.getDomain() || [],
              searchParams || [],
            )}
            limit={limit}
            totalRegisters={totalItems || 0}
            selectedRegistersToExport={selectedRowItems}
            visibleRegisters={results?.length || 0}
            context={parentContext}
          />
        </>
      )}
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default TreeActionBar;
