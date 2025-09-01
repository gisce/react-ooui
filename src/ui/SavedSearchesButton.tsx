import { useCallback, useContext, useEffect, useRef, useMemo } from "react";
import {
  FilterOutlined,
  EditOutlined,
  CheckOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import { Tooltip, theme, Badge } from "antd";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import {
  useLocale,
  ToggleDropdownButton,
  ToggleDropdownButtonRef,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@gisce/react-formiga-components";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useFeatureData } from "@/context/ConfigContext";
import deepEqual from "deep-equal";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { convertParamsToValues } from "@/helpers/searchHelper";
import { useDeepCompareEffect } from "use-deep-compare";
const { useToken } = theme;

export type SavedSearchApi = {
  id: number;
  model: string;
  domain: any;
  name: string;
  last_run?: string;
};

type Props = {
  searchVisible: boolean;
  onToggleSearch: () => void;
  searchParams?: any[];
  disabled?: boolean;
  context: any;
  onApplySearch?: () => void;
  onCurrentSavedSearchChange?: (savedSearch: SavedSearchApi | null) => void;
};

const SavedSearchesButton = (props: Props) => {
  const {
    searchVisible,
    onToggleSearch,
    searchParams,
    disabled,
    context,
    onApplySearch,
    onCurrentSavedSearchChange,
  } = props;

  const { t } = useLocale();
  const { token } = useToken();
  const savedSearchesButtonRef = useRef<ToggleDropdownButtonRef>(null);

  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const { openDefaultActionForModel } = tabManagerContext || {};

  const actionViewContext = useContext(
    ActionViewContext,
  ) as ActionViewContextType;
  const {
    currentModel,
    setSearchParams,
    setSearchValues,
    currentView,
    availableViews,
  } = actionViewContext || {};

  const loggableFeature = useFeatureData(
    ErpFeatureKeys.FEATURE_LOGGABLE_ACTIONS,
  );

  // Network request hooks
  const [searchAllIdsRequest, cancelSearchAllIdsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );
  const [readObjectsRequest, cancelReadObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readEvalUiObjects,
  );
  const [logAction, cancelLogActionRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().logAction,
  );

  useEffect(() => {
    return () => {
      cancelSearchAllIdsRequest();
      cancelReadObjectsRequest();
      cancelLogActionRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Check for matching saved search when component mounts or searchParams change
  useDeepCompareEffect(() => {
    const checkCurrentSavedSearch = async () => {
      // Always clear if no search params
      if (!currentModel || !searchParams?.length) {
        onCurrentSavedSearchChange?.(null);
        return;
      }

      try {
        const searchIds = await searchAllIdsRequest({
          params: [["model", "=", currentModel]],
          model: "ir.search",
          context,
        });

        if (searchIds.length === 0) {
          onCurrentSavedSearchChange?.(null);
          return;
        }

        const [searches] = await readObjectsRequest({
          model: "ir.search",
          ids: searchIds,
          fieldsToRetrieve: ["id", "model", "domain", "name"],
          context,
        });

        // Find if any saved search matches current searchParams
        const matchingSearch = searches.find((search: SavedSearchApi) =>
          deepEqual(search.domain, searchParams),
        );

        onCurrentSavedSearchChange?.(matchingSearch || null);
      } catch (error) {
        console.error("Error checking current saved search:", error);
        onCurrentSavedSearchChange?.(null);
      }
    };

    checkCurrentSavedSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentModel, searchParams]);

  const getSavedSearches = useCallback(async (): Promise<
    DropdownMenuGroup[]
  > => {
    if (!currentModel) {
      onCurrentSavedSearchChange?.(null);
      return [];
    }

    try {
      const searchIds = await searchAllIdsRequest({
        params: [["model", "=", currentModel]],
        model: "ir.search",
        order: "last_run desc",
        context,
      });

      if (searchIds.length === 0) {
        onCurrentSavedSearchChange?.(null);
        return [
          {
            items: [],
          },
        ];
      }

      const [searches] = await readObjectsRequest({
        model: "ir.search",
        ids: searchIds,
        fieldsToRetrieve: ["id", "model", "domain", "name", "last_run"],
        context,
      });

      let currentSavedSearch: SavedSearchApi | null = null;
      const items: DropdownMenuItem[] = searches.map(
        (search: SavedSearchApi) => {
          const isCurrentlyActive = deepEqual(search.domain, searchParams);
          if (isCurrentlyActive) {
            currentSavedSearch = search;
          }
          return {
            icon: <FilterOutlined />,
            ...search,
            name: isCurrentlyActive ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <strong>{search.name}</strong>
                <CheckOutlined style={{ color: token.colorPrimary }} />
              </div>
            ) : (
              search.name
            ),
          } as DropdownMenuItem;
        },
      );

      // Notify about current saved search
      onCurrentSavedSearchChange?.(currentSavedSearch);

      return [
        {
          items,
        },
      ];
    } catch (error) {
      console.error("Error fetching saved searches:", error);
      return [
        {
          items: [],
        },
      ];
    }
  }, [
    currentModel,
    context,
    searchParams,
    token.colorPrimary,
    searchAllIdsRequest,
    readObjectsRequest,
    onCurrentSavedSearchChange,
  ]);

  const allViewFields = useMemo(() => {
    if (!availableViews || availableViews.length === 0) {
      return (currentView as any)?.fields || {};
    }

    // Merge fields from all available views
    return availableViews.reduce((mergedFields: any, view: any) => {
      return { ...mergedFields, ...(view.fields || {}) };
    }, {});
  }, [availableViews, currentView]);

  const logSearchAction = useCallback(
    async (searchId: number) => {
      if (
        loggableFeature?.isEnabled &&
        (loggableFeature?.params?.types || []).includes("ir.search")
      ) {
        try {
          await logAction({
            action_type: "ir.search",
            action_id: searchId,
            context,
          });
        } catch (error) {
          console.error("Error logging search action:", error);
        }
      }
    },
    [context, logAction, loggableFeature],
  );

  const handleMenuClick = useCallback(
    (item: DropdownMenuItem) => {
      const savedSearch = item as SavedSearchApi;
      if (savedSearch?.domain) {
        onCurrentSavedSearchChange?.(savedSearch);

        setSearchParams?.(savedSearch.domain);

        const searchValues = convertParamsToValues(
          savedSearch.domain,
          allViewFields,
        );
        setSearchValues?.(searchValues);

        if (onApplySearch) {
          setTimeout(() => {
            onApplySearch();
          }, 100);
        }

        // Log action if supported
        logSearchAction(savedSearch.id);
      }
    },
    [
      setSearchParams,
      setSearchValues,
      onApplySearch,
      logSearchAction,
      allViewFields,
      onCurrentSavedSearchChange,
    ],
  );

  const editSavedSearches = useCallback(async () => {
    savedSearchesButtonRef?.current?.close();
    openDefaultActionForModel?.({
      model: "ir.search",
      context: {
        model: currentModel,
      },
    });
  }, [currentModel, openDefaultActionForModel]);

  const clearSearch = useCallback(() => {
    savedSearchesButtonRef?.current?.close();
    onCurrentSavedSearchChange?.(null);
    setSearchParams?.([]);
    setSearchValues?.({});

    if (onApplySearch) {
      setTimeout(() => {
        onApplySearch();
      }, 100);
    }
  }, [
    setSearchParams,
    setSearchValues,
    onApplySearch,
    onCurrentSavedSearchChange,
  ]);

  return (
    <Badge
      count={searchParams?.length || 0}
      color={token.colorPrimary}
      offset={[-70, 2]}
    >
      <Tooltip title={t?.("advanced_search")}>
        <ToggleDropdownButton
          ref={savedSearchesButtonRef}
          isActive={searchVisible}
          onToggle={onToggleSearch}
          activeIcon={<FilterOutlined />}
          inactiveIcon={<FilterOutlined />}
          onItemClick={handleMenuClick}
          placement={"bottomRight"}
          disabled={disabled}
          header={
            <div style={{ width: 300, padding: 5 }}>
              {searchParams && searchParams.length > 0 && (
                <>
                  <div
                    style={{ paddingLeft: 15, color: "#ccc", paddingBottom: 2 }}
                  >
                    {t?.("actions")?.toUpperCase()}
                  </div>
                  <div style={{ paddingBottom: 5 }}>
                    <Tooltip title={t?.("clear_search")}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          cursor: "pointer",
                          color: token.colorPrimary,
                          fontWeight: "400",
                          padding: "4px 8px",
                          borderRadius: "4px",
                        }}
                        onClick={clearSearch}
                      >
                        <ClearOutlined style={{ marginRight: 8 }} />
                        {t?.("clear_search") || "Clear search"}
                      </div>
                    </Tooltip>
                  </div>
                  <div
                    style={{
                      borderBottom: "1px solid #f0f0f0",
                      marginBottom: 5,
                    }}
                  />
                </>
              )}
              <div style={{ display: "flex" }}>
                <div style={{ paddingLeft: 15, color: "#ccc" }}>
                  {t?.("saved_searches")?.toUpperCase()}
                </div>
                <div style={{ flexGrow: 1, paddingLeft: 10 }}>
                  <Tooltip title={t?.("edit_saved_searches")}>
                    <EditOutlined
                      style={{ color: token.colorPrimary, cursor: "pointer" }}
                      onClick={editSavedSearches}
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
          }
          onRetrieveData={getSavedSearches}
        />
      </Tooltip>
    </Badge>
  );
};

export default SavedSearchesButton;
