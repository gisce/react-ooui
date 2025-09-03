import TreeActionBar from "@/actionbar/TreeActionBar";
import { FormView, TreeView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import {
  Fragment,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  ActionViewContext,
  ActionViewContextType,
  useActionViewContext,
} from "@/context/ActionViewContext";
import { Tooltip, theme } from "antd";
import { FilterOutlined, CloseOutlined } from "@ant-design/icons";
import { SearchTreeInfinite } from "@/widgets/views/SearchTreeInfinite";
import SearchTree from "@/widgets/views/SearchTree";
import { SearchTreePaginated } from "@/widgets/views/Tree/Paginated/SearchTreePaginated";
import { useDeepCompareEffect } from "use-deep-compare";
import { useConfigContext, useFeatureIsEnabled } from "@/context/ConfigContext";
import { DEFAULT_SEARCH_LIMIT } from "@/models/constants";
import { determineTreeType, isTreeExpandable } from "@/helpers/treeHelper";
import { useLocale } from "@gisce/react-formiga-components";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import deepEqual from "deep-equal";
import { ErpFeatureKeys } from "@/models/erpFeature";

const { useToken } = theme;

export type TreeActionViewProps = {
  formView: FormView;
  treeView: TreeView;
  visible: boolean;
  searchTreeRef: any;
  model: string;
  domain: any;
  context: any;
  results: any[];
  setCurrentItemIndex: (value?: number) => void;
  setCurrentId: (id?: number) => void;
  setCurrentView: (view: View) => void;
  availableViews: View[];
  searchTreeNameSearch?: string;
  limit?: number;
};

export type TreeType = "infinite" | "paginated" | "legacy";
export const DEFAULT_TREE_TYPE: TreeType = "legacy";

export const TreeActionView = (props: TreeActionViewProps) => {
  const {
    visible,
    searchTreeRef,
    model,
    context,
    formView,
    treeView,
    domain,
    setCurrentItemIndex,
    results,
    setCurrentId,
    setCurrentView,
    availableViews,
    searchTreeNameSearch,
    limit,
  } = props;
  const previousVisibleRef = useRef(visible);

  const [treeType, setTreeType] = useState<TreeType>(DEFAULT_TREE_TYPE);
  const { treeMaxLimit } = useConfigContext();

  const { setLimit } = useActionViewContext();

  useDeepCompareEffect(() => {
    const newTreeType = determineTreeType({
      treeView,
      limit,
      treeMaxLimit,
    });

    setTreeType(newTreeType);
  }, [treeView, limit, treeMaxLimit]);

  const {
    currentView,
    setPreviousView,
    setTreeType: setContextTreeType,
    setSelectedRowItems,
    currentSavedSearch,
    setCurrentSavedSearch,
    setSavedSearches,
    savedSearches,
    setSearchVisible,
    setSearchParams,
    setSearchValues,
    searchParams,
    isActive,
  } = useContext(ActionViewContext) as ActionViewContextType;
  const { token } = useToken();
  const { t } = useLocale();

  const savedSearchesEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_SAVED_SEARCHES,
  );

  const [searchAllIdsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );
  const [readObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readEvalUiObjects,
  );

  const fetchSavedSearches = useCallback(async () => {
    if (!savedSearchesEnabled || !model) {
      setSavedSearches?.([]);
      setCurrentSavedSearch?.(null);
      return [];
    }

    try {
      const searchIds = await searchAllIdsRequest({
        params: [["model", "=", model]],
        model: "ir.search",
        order: "last_run desc",
        context,
      });

      if (searchIds.length === 0) {
        setSavedSearches?.([]);
        setCurrentSavedSearch?.(null);
        return [];
      }

      const [searches] = await readObjectsRequest({
        model: "ir.search",
        ids: searchIds,
        fieldsToRetrieve: ["id", "model", "domain", "name", "last_run"],
        context,
      });

      setSavedSearches?.(searches);
      return searches || [];
    } catch (error) {
      console.error("Error fetching saved searches:", error);
      setSavedSearches?.([]);
      setCurrentSavedSearch?.(null);
      return [];
    }
  }, [
    savedSearchesEnabled,
    model,
    context,
    searchAllIdsRequest,
    readObjectsRequest,
    setSavedSearches,
    setCurrentSavedSearch,
  ]);

  useEffect(() => {
    setContextTreeType?.(treeType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [treeType]);

  useEffect(() => {
    fetchSavedSearches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const wasActiveRef = useRef(isActive);

  useEffect(() => {
    if (isActive && !wasActiveRef.current && savedSearchesEnabled) {
      fetchSavedSearches();
    }
    wasActiveRef.current = isActive;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  useEffect(() => {
    if (
      savedSearchesEnabled &&
      savedSearches &&
      savedSearches.length > 0 &&
      searchParams &&
      !currentSavedSearch
    ) {
      // Find a saved search that matches current search params
      const matchingSavedSearch = savedSearches.find((savedSearch: any) =>
        deepEqual(savedSearch.domain, searchParams),
      );

      if (matchingSavedSearch) {
        setCurrentSavedSearch?.(matchingSavedSearch);
      }
    }
  }, [
    savedSearchesEnabled,
    savedSearches,
    searchParams,
    currentSavedSearch,
    setCurrentSavedSearch,
  ]);

  const onRowClicked = useCallback(
    (event: any) => {
      const { id } = event;
      setCurrentId(id);
      const itemIndex = results.findIndex((item: any) => {
        return item.id === id;
      });
      setPreviousView?.(currentView);
      setCurrentItemIndex(itemIndex);
      const formView = availableViews.find(
        (v) => v.type === "form",
      ) as FormView;
      setCurrentView(formView);
    },
    [
      availableViews,
      currentView,
      results,
      setCurrentId,
      setCurrentItemIndex,
      setCurrentView,
      setPreviousView,
    ],
  );

  useEffect(() => {
    if (previousVisibleRef.current && !visible && treeType === "infinite") {
      setSelectedRowItems?.([]);
    }
    previousVisibleRef.current = visible;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, treeType]);

  const handleTreeTypeChange = useCallback(
    (newType: TreeType) => {
      setTreeType(newType);
      if (newType === "paginated") {
        setLimit?.(limit || DEFAULT_SEARCH_LIMIT);
      }
      if (newType === "infinite") {
        setLimit?.(0);
      }
    },
    [limit, setLimit],
  );

  const handleClearSavedSearch = useCallback(() => {
    setCurrentSavedSearch?.(null);
    setSearchParams?.([]);
    setSearchValues?.({});

    setTimeout(() => {
      searchTreeRef?.current?.refreshResults();
    }, 100);
  }, [setCurrentSavedSearch, setSearchParams, setSearchValues, searchTreeRef]);

  const handleOpenSidebar = useCallback(() => {
    setSearchVisible?.(true);
  }, [setSearchVisible]);

  const subtitle = useMemo(() => {
    return currentSavedSearch?.name ? (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "6px",
        }}
      >
        <Tooltip
          title={
            <div>
              <div>{t("openSavedSearchInSidebar")}</div>
              <div style={{ fontWeight: "bold", marginTop: "2px" }}>
                {currentSavedSearch.name}
              </div>
            </div>
          }
        >
          <div
            style={{
              backgroundColor: token.colorPrimary,
              color: "white",
              borderRadius: "8px",
              padding: "2px 6px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              fontSize: "11px",
              opacity: 0.8,
              maxWidth: "200px",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            onClick={handleOpenSidebar}
          >
            <FilterOutlined
              style={{ marginRight: "3px", fontSize: "10px", flexShrink: 0 }}
            />
            <span
              style={{
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {currentSavedSearch.name}
            </span>
          </div>
        </Tooltip>
        <Tooltip title={t("clear_search")}>
          <CloseOutlined
            style={{
              marginLeft: "4px",
              cursor: "pointer",
              color: token.colorText,
              fontSize: "9px",
              display: "flex",
              alignItems: "flex-end",
              fontWeight: "bold",
              transform: "translateY(1px)",
            }}
            onClick={handleClearSavedSearch}
          />
        </Tooltip>
      </div>
    ) : null;
  }, [
    currentSavedSearch?.name,
    token.colorPrimary,
    token.colorText,
    handleOpenSidebar,
    handleClearSavedSearch,
    t,
  ]);

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <TitleHeader showSummary={treeType !== "infinite"} subtitle={subtitle}>
        <TreeActionBar
          domain={domain}
          toolbar={treeView?.toolbar}
          parentContext={context}
          treeExpandable={isTreeExpandable(treeView)}
          onRefetchSavedSearches={fetchSavedSearches}
          onClearSavedSearch={handleClearSavedSearch}
        />
      </TitleHeader>
      {treeType === "infinite" && (
        <SearchTreeInfinite
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
          onChangeTreeType={handleTreeTypeChange}
        />
      )}
      {treeType === "paginated" && (
        <SearchTreePaginated
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          nameSearch={searchTreeNameSearch}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
          onChangeTreeType={handleTreeTypeChange}
        />
      )}
      {treeType === "legacy" && (
        <SearchTree
          ref={searchTreeRef}
          rootTree={true}
          model={model}
          parentContext={context}
          nameSearch={searchTreeNameSearch}
          formView={formView}
          treeView={treeView}
          domain={domain}
          onRowClicked={onRowClicked}
        />
      )}
    </Fragment>
  );
};
