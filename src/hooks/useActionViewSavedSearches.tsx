import { useCallback, useEffect, useMemo, useRef } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import { Tooltip, theme } from "antd";
import { FilterOutlined, CloseOutlined } from "@ant-design/icons";
import deepEqual from "deep-equal";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useFeatureIsEnabled, useConfigContext } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import ConnectionProvider from "@/ConnectionProvider";
import { useActionViewContext } from "@/context/ActionViewContext";

const { useToken } = theme;

export type UseActionViewSavedSearchesParams = {
  model: string;
  context: any;
  viewRef: any;
  setSearchParams?: (params: any) => void;
  setSearchValues?: (values: any) => void;
  setSearchVisible?: (visible: boolean) => void;
};

export type UseActionViewSavedSearchesReturn = {
  fetchSavedSearches: () => Promise<any[]>;
  handleClearSavedSearch: () => void;
  handleOpenSidebar: () => void;
  subtitle: React.ReactNode;
  savedSearchesEnabled: boolean;
};

export const useActionViewSavedSearches = ({
  model,
  context,
  viewRef,
  setSearchParams,
  setSearchValues,
  setSearchVisible,
}: UseActionViewSavedSearchesParams): UseActionViewSavedSearchesReturn => {
  const { t } = useLocale();
  const { token } = useToken();
  const { globalValues } = useConfigContext();

  const savedSearchesEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_SAVED_SEARCHES,
  );

  const {
    currentSavedSearch,
    setCurrentSavedSearch,
    setSavedSearches,
    savedSearches,
    searchParams,
    isActive,
  } = useActionViewContext();

  const [searchAllIdsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );
  const [readObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readEvalUiObjects,
  );

  const fetchSavedSearches = useCallback(async (): Promise<any[]> => {
    if (!savedSearchesEnabled || !model) {
      setSavedSearches?.([]);
      setCurrentSavedSearch?.(null);
      return [];
    }

    try {
      const searchIds = await searchAllIdsRequest({
        params: [
          ["model", "=", model],
          ["create_uid", "=", globalValues?.uid],
        ],
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
    globalValues,
    searchAllIdsRequest,
    readObjectsRequest,
    setSavedSearches,
    setCurrentSavedSearch,
  ]);

  const handleClearSavedSearch = useCallback(() => {
    setCurrentSavedSearch?.(null);
    setSearchParams?.([]);
    setSearchValues?.({});

    setTimeout(() => {
      viewRef?.current?.refreshResults();
    }, 100);
  }, [setCurrentSavedSearch, setSearchParams, setSearchValues, viewRef]);

  const handleOpenSidebar = useCallback(() => {
    setSearchVisible?.(true);
  }, [setSearchVisible]);

  // Fetch saved searches on mount
  useEffect(() => {
    fetchSavedSearches();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Fetch saved searches when view becomes active
  const wasActiveRef = useRef(isActive);
  useEffect(() => {
    if (isActive && !wasActiveRef.current && savedSearchesEnabled) {
      fetchSavedSearches();
    }
    wasActiveRef.current = isActive;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]);

  // Auto-match current search params to saved searches
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

  // Create subtitle with saved search badge
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

  return {
    fetchSavedSearches,
    handleClearSavedSearch,
    handleOpenSidebar,
    subtitle,
    savedSearchesEnabled,
  };
};
