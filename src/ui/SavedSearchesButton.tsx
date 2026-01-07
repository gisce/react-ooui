import { useCallback, useContext, useRef, useMemo } from "react";
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
import { useFeatureData } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { convertParamsToValues } from "@/helpers/searchHelper";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import ConnectionProvider from "@/ConnectionProvider";
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
  onRefetchSavedSearches?: () => Promise<any[]>;
  onClearSavedSearch?: () => void;
};

const SavedSearchesButton = (props: Props) => {
  const {
    searchVisible,
    onToggleSearch,
    searchParams,
    disabled,
    context,
    onApplySearch,
    onRefetchSavedSearches,
    onClearSavedSearch,
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
    currentSavedSearch,
    setCurrentSavedSearch,
  } = actionViewContext || {};

  const loggableFeature = useFeatureData(
    ErpFeatureKeys.FEATURE_LOGGABLE_ACTIONS,
  );

  const [logAction] = useNetworkRequest(
    ConnectionProvider.getHandler().logAction,
  );

  const getSavedSearches = useCallback(async (): Promise<
    DropdownMenuGroup[]
  > => {
    const freshSavedSearches = (await onRefetchSavedSearches?.()) || [];

    const items: DropdownMenuItem[] = freshSavedSearches.map(
      (search: SavedSearchApi) => {
        const isCurrentlyActive = currentSavedSearch?.id === search.id;
        return {
          icon: <FilterOutlined />,
          ...search,
          originalData: search,
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

    return [
      {
        items,
      },
    ];
  }, [onRefetchSavedSearches, currentSavedSearch, token.colorPrimary]);

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
      const savedSearch = (item as any).originalData || item;
      if (savedSearch?.domain) {
        // Update context state
        setCurrentSavedSearch?.(savedSearch);

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
      setCurrentSavedSearch,
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
    onClearSavedSearch?.();
  }, [onClearSavedSearch]);

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
