import { useCallback, useContext, useRef, useEffect } from "react";
import { FilterOutlined, EditOutlined } from "@ant-design/icons";
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
import { ErpFeatureKeys } from "@/models/erpFeature";
const { useToken } = theme;

export type SavedSearchApi = {
  id: number;
  user_id: number;
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
};

const SavedSearchesButton = (props: Props) => {
  const { searchVisible, onToggleSearch, searchParams, disabled, context } =
    props;

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
  const { currentModel, setSearchParams, setSearchValues } =
    actionViewContext || {};

  const loggableFeature = useFeatureData(
    ErpFeatureKeys.FEATURE_LOGGABLE_ACTIONS,
  );

  // Network request hooks
  const [searchAllIdsRequest, cancelSearchAllIdsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchAllIds,
  );
  const [readObjectsRequest, cancelReadObjectsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
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

  const getSavedSearches = useCallback(async (): Promise<
    DropdownMenuGroup[]
  > => {
    if (!currentModel) {
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
        return [
          {
            items: [],
          },
        ];
      }

      const searches = await readObjectsRequest({
        model: "ir.search",
        ids: searchIds,
        fieldsToRetrieve: [
          "id",
          "user_id",
          "model",
          "domain",
          "name",
          "last_run",
        ],
        context,
      });

      const items: DropdownMenuItem[] = searches.map(
        (search: SavedSearchApi) => {
          return {
            icon: <FilterOutlined />,
            ...search,
          } as DropdownMenuItem;
        },
      );

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
  }, [currentModel, context, searchAllIdsRequest, readObjectsRequest]);

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
        setSearchParams?.(savedSearch.domain);
        setSearchValues?.({});

        // Log action if supported
        logSearchAction(savedSearch.id);
      }
    },
    [setSearchParams, setSearchValues, logSearchAction],
  );

  const editSavedSearches = useCallback(async () => {
    savedSearchesButtonRef?.current?.close();
    openDefaultActionForModel?.({ model: "ir.search" });
  }, [openDefaultActionForModel]);

  return (
    <Badge count={searchParams?.length || 0} size="small" offset={[-10, 10]}>
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
            <div style={{ width: 300, padding: 5, display: "flex" }}>
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
          }
          onRetrieveData={getSavedSearches}
        />
      </Tooltip>
    </Badge>
  );
};

export default SavedSearchesButton;
