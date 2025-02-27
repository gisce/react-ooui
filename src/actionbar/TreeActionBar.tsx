import {
  useContext,
  useEffect,
  useState,
  useRef,
  memo,
  useCallback,
  useMemo,
} from "react";
import { Space, Spin } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import NewButton from "./NewButton";
import ActionButton, { ActionDangerButton } from "./ActionButton";
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
import ButtonWithBadge from "./ButtonWithBadge";
import { showLogInfo } from "@/helpers/logInfoHelper";
import SearchBar from "./SearchBar";
import { ExportModal } from "..";
import { mergeParams } from "@/helpers/searchHelper";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { useHotkeys } from "react-hotkeys-hook";
import {
  useTreeToolbarButtons,
  useRunTreeAction,
} from "@/hooks/useTreeToolbarButtons";
import { ActionBarSeparator } from "./ActionBarSeparator";
import { ShareUrlButton } from "./ShareUrlButton";

type Props = {
  parentContext?: any;
  treeExpandable: boolean;
  toolbar?: any;
};

function TreeActionBarComponent({
  parentContext = {},
  treeExpandable,
  toolbar,
}: Props) {
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
    isActive,
    treeType,
  } = useContext(ActionViewContext) as ActionViewContextType;

  const advancedExportEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_ADVANCED_EXPORT,
  );
  const { t } = useLocale();
  const [exportModalVisible, setExportModalVisible] = useState(false);
  const isFirstMount = useRef(true);

  const handleRefresh = useCallback(() => {
    searchTreeRef?.current?.refreshResults();
  }, [searchTreeRef]);

  const { actionButtonProps, printButtonProps } = useTreeToolbarButtons({
    toolbar,
    disabled: treeIsLoading,
    parentContext,
    selectedRowItems,
    onRefreshParentValues: handleRefresh,
  });

  const runAction = useRunTreeAction({
    selectedRowItems,
    onRefreshParentValues: handleRefresh,
  });

  const hasNameSearch = useMemo(
    () =>
      searchTreeNameSearch !== undefined &&
      searchTreeNameSearch.trim().length > 0,
    [searchTreeNameSearch],
  );

  const finalDomain = useMemo(() => {
    const domain = searchTreeRef?.current?.getDomain();
    return mergeParams(domain || [], searchParams || []);
  }, [searchTreeRef, searchParams]);

  const handleDuplicate = useCallback(async () => {
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
  }, [
    currentModel,
    parentContext,
    searchTreeRef,
    selectedRowItems,
    setDuplicatingItem,
  ]);

  const handleRemove = useCallback(async () => {
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
  }, [
    currentModel,
    parentContext,
    searchTreeRef,
    selectedRowItems,
    setCurrentId,
    setCurrentItemIndex,
    setRemovingItem,
  ]);

  const handleChangeView = useCallback(
    (newView: any) => {
      setPreviousView?.(currentView);
      setCurrentView?.(newView);
    },
    [currentView, setPreviousView, setCurrentView],
  );

  const handleSearch = useCallback(
    (searchString?: string) => {
      if (searchString === searchTreeNameSearch) {
        return;
      }

      if (searchString && searchString.trim().length > 0) {
        setSearchTreeNameSearch?.(searchString);
        return;
      }

      if (searchTreeNameSearch !== undefined) {
        setSearchTreeNameSearch?.(undefined);

        if (treeType !== "infinite") {
          setTimeout(() => {
            searchTreeRef?.current?.refreshResults();
          }, 50);
        }
      }
    },
    [treeType, searchTreeRef, setSearchTreeNameSearch, searchTreeNameSearch],
  );

  const handleExportAction = useCallback(
    (itemClicked: any) => {
      if (itemClicked.id === "print_screen") {
        let idsToExport = selectedRowItems?.map((item) => item.id) || [];
        if (idsToExport.length === 0) {
          idsToExport = results?.map((item) => item.id) || [];
        }

        runAction(
          {
            id: -1,
            model: currentModel,
            report_name: "printscreen.list",
            type: "ir.actions.report.xml",
            datas: {
              model: currentModel,
              ids: idsToExport,
            },
          },
          parentContext,
        );
        return;
      }
      setExportModalVisible(true);
    },
    [currentModel, parentContext, results, runAction, selectedRowItems],
  );

  useEffect(() => {
    if (treeType === "infinite" && searchTreeNameSearch === undefined) {
      if (isFirstMount.current) {
        isFirstMount.current = false;
        return;
      }

      setTimeout(() => {
        searchTreeRef?.current?.refreshResults();
      }, 0);
    }
  }, [treeType, searchTreeNameSearch, searchTreeRef]);

  useHotkeys(
    "ctrl+l,command+l",
    () => {
      if (!isActive) return;
      if (previousView) {
        setPreviousView?.(currentView);
        setCurrentView?.(previousView);
      }
    },
    { enableOnFormTags: true, preventDefault: true },
    [previousView, currentView, isActive, setPreviousView, setCurrentView],
  );

  useHotkeys(
    "ctrl+f,command+f",
    () => {
      if (!isActive) return;
      setSearchVisible?.(!searchVisible);
    },
    { enableOnFormTags: true, preventDefault: true },
    [searchVisible, isActive, setSearchVisible],
  );

  const tryDuplicate = useCallback(() => {
    showConfirmDialog({
      confirmMessage: t("confirmDuplicate"),
      t,
      onOk: handleDuplicate,
    });
  }, [handleDuplicate, t]);

  const tryDelete = useCallback(() => {
    showConfirmDialog({
      confirmMessage: t("confirmRemove"),
      t,
      onOk: handleRemove,
    });
  }, [handleRemove, t]);

  return (
    <Space wrap={true}>
      {treeIsLoading && (
        <>
          <Spin />
          <ActionBarSeparator />
          <ActionBarSeparator />
        </>
      )}
      {!treeExpandable && (
        <>
          <SearchBar
            disabled={duplicatingItem || removingItem || treeIsLoading}
            searchText={searchTreeNameSearch}
            onSearch={handleSearch}
          />
          <ButtonWithBadge
            icon={
              <FilterOutlined
                style={{ color: searchVisible ? "white" : undefined }}
              />
            }
            tooltip={t("advanced_search")}
            type={searchVisible ? "primary" : "default"}
            onClick={() => setSearchVisible?.(!searchVisible)}
            disabled={duplicatingItem || removingItem || treeIsLoading}
            badgeNumber={searchParams?.length}
          />
          <ActionBarSeparator />
          <NewButton disabled={treeIsLoading} />
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
            onClick={tryDuplicate}
          />
          <ActionDangerButton
            icon={<DeleteOutlined />}
            tooltip={t("delete")}
            disabled={
              !(selectedRowItems && selectedRowItems?.length > 0) ||
              treeIsLoading
            }
            loading={removingItem}
            onClick={tryDelete}
          />
          <ActionBarSeparator />
        </>
      )}
      <ActionButton
        icon={<InfoCircleOutlined />}
        tooltip={t("showLogs")}
        disabled={
          !(selectedRowItems && selectedRowItems?.length === 1) || treeIsLoading
        }
        onClick={() => showLogInfo(currentModel!, selectedRowItems![0].id, t)}
      />
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={duplicatingItem || removingItem || treeIsLoading}
        onClick={handleRefresh}
      />
      {!treeExpandable && (
        <>
          <ActionBarSeparator />
          <ChangeViewButton
            currentView={currentView}
            availableViews={availableViews}
            onChangeView={handleChangeView}
            previousView={previousView}
            disabled={treeIsLoading}
          />
        </>
      )}
      <ActionBarSeparator />
      <DropdownButton icon={<ThunderboltOutlined />} {...actionButtonProps} />
      <DropdownButton icon={<PrinterOutlined />} {...printButtonProps} />
      {advancedExportEnabled && (
        <>
          <ActionBarSeparator />
          <DropdownButton
            placement="bottomRight"
            icon={<ExportIcon />}
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
            onItemClick={handleExportAction}
            disabled={
              duplicatingItem || removingItem || treeIsLoading || hasNameSearch
            }
          />
          <ExportModal
            visible={exportModalVisible}
            onClose={() => setExportModalVisible(false)}
            model={currentModel!}
            domain={finalDomain}
            limit={limit}
            totalRegisters={totalItems || 0}
            selectedRegistersToExport={selectedRowItems}
            visibleRegisters={results?.length || 0}
            context={parentContext}
          />
        </>
      )}
      <ActionBarSeparator />
      <ShareUrlButton searchParams={searchParams} />
    </Space>
  );
}

const TreeActionBar = memo(TreeActionBarComponent);
export default TreeActionBar;

const ExportIcon = memo(() => (
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
));

ExportIcon.displayName = "ExportIcon";
