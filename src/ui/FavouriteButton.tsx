import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { TableOutlined, FormOutlined, EditOutlined } from "@ant-design/icons";
import { Tooltip, theme } from "antd";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import {
  useLocale,
  FavouriteButton as FavouriteButtonUi,
  FavouriteButtonRef,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@gisce/react-formiga-components";
const { useToken } = theme;

export type ShortcutApi = {
  action_id: number;
  action_type: string;
  id?: number;
  name: string;
  res_id: number | boolean;
  res_model: string;
  view_id: number;
  view_type: string;
};

export type FavouriteOptions = {
  action_id: number;
  action_type: string;
  res_id: number | boolean;
  view_id: number;
};

type Props = {
  onRetrieveShortcuts: () => Promise<ShortcutApi[]>;
  onCheckIsFavourite: (options: FavouriteOptions) => Promise<number | boolean>;
  onAddFavourite: (options: FavouriteOptions) => Promise<number>;
  onRemoveFavourite: (shortcut_id: number) => Promise<void>;
  onDropdownClosed?: () => void;
};

const FavouriteButton = (props: Props) => {
  const {
    onRetrieveShortcuts,
    onCheckIsFavourite,
    onAddFavourite,
    onRemoveFavourite,
    onDropdownClosed,
  } = props;

  const [isFavourite, setIsFavourite] = useState(false);
  const [currentShortcutId, setCurrentShortcutId] = useState<number>();
  const { t } = useLocale();

  const { token } = useToken();

  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const {
    openShortcut,
    tabs,
    activeKey,
    currentView,
    currentId,
    openDefaultActionForModel,
  } = tabManagerContext || {};

  const favouriteQuery = useMemo(() => {
    if (!currentView) {
      return;
    }

    const currentTab = tabs.find((t) => t.key === activeKey);
    const { id: action_id, type: action_type } = currentTab?.action || {};

    if (!action_id || !action_type) {
      setIsFavourite(false);
      return;
    }

    const view_id = currentView.view_id!;
    let res_id: boolean | number = false;

    if (currentView.type === "form") {
      res_id = currentId ? (currentId as number) : false;
    }

    return {
      action_id,
      action_type,
      view_id,
      res_id,
    };
  }, [activeKey, currentId, currentView, tabs]);

  const favouriteQueryString = useMemo(() => {
    if (!favouriteQuery) {
      return;
    }
    return JSON.stringify(favouriteQuery);
  }, [favouriteQuery]);

  useEffect(() => {
    checkFavourite();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favouriteQueryString]);

  function handleMenuClick(item: DropdownMenuItem) {
    const shortcut = item as ShortcutApi;
    if (shortcut?.action_type === "ir.actions.wizard") {
      return;
    }
    openShortcut(shortcut);
  }

  const checkFavourite = useCallback(async () => {
    if (!favouriteQuery) {
      return;
    }

    const result = await onCheckIsFavourite(favouriteQuery);

    if (result !== false) {
      setCurrentShortcutId(result as number);
    }

    setIsFavourite(result !== false);
  }, [favouriteQuery, onCheckIsFavourite]);

  async function editFavourites() {
    favouriteButtonRef?.current?.close();
    openDefaultActionForModel?.({ model: "ir.ui.view_sc" });
  }

  const getShortcuts = useCallback(async (): Promise<DropdownMenuGroup[]> => {
    const shortcuts = await onRetrieveShortcuts();

    if (shortcuts.length === 0) {
      return [
        {
          label: t?.("no_favorites"),
          items: [],
        },
      ];
    }

    const items: DropdownMenuItem[] = shortcuts.map((shortcut) => {
      return {
        ...shortcut,
        id: shortcut.id,
        name: shortcut.name,
        icon:
          shortcut.view_type === "tree" ? <TableOutlined /> : <FormOutlined />,
      } as DropdownMenuItem;
    });

    return [
      {
        items,
      },
    ];
  }, [onRetrieveShortcuts, t]);

  async function toggleFavourite() {
    if (isFavourite && currentShortcutId) {
      await onRemoveFavourite(currentShortcutId);
    } else {
      if (!currentView) {
        return;
      }

      const currentTab = tabs.find((t) => t.key === activeKey);
      const { id: action_id, type: action_type } = currentTab?.action || {};
      const view_id = currentView.view_id!;
      let res_id: boolean | number = false;

      if (!action_id || !action_type) {
        setIsFavourite(false);
        return;
      }

      if (currentView.type === "form") {
        res_id = currentId ? (currentId as number) : false;
      }

      await onAddFavourite({
        action_id,
        action_type,
        view_id,
        res_id,
      });
    }

    await getShortcuts();
    setIsFavourite(!isFavourite);
  }

  const favouriteButtonRef = useRef<FavouriteButtonRef>(null);

  return (
    <FavouriteButtonUi
      ref={favouriteButtonRef}
      isFavourite={isFavourite}
      toggleFavourite={toggleFavourite}
      onItemClick={handleMenuClick}
      placement={"bottomRight"}
      header={
        <div style={{ width: 300, padding: 5, display: "flex" }}>
          <div style={{ paddingLeft: 15, color: "#ccc" }}>
            {t?.("favorites").toUpperCase()}
          </div>
          <div style={{ flexGrow: 1, paddingLeft: 10 }}>
            <Tooltip title={t?.("edit_favorites")}>
              <EditOutlined
                style={{ color: token.colorPrimary, cursor: "pointer" }}
                onClick={editFavourites}
              />
            </Tooltip>
          </div>
        </div>
      }
      onOpenChange={(open: boolean) => {
        if (!open) {
          onDropdownClosed?.();
        }
      }}
      onRetrieveData={getShortcuts}
    />
  );
};

export default FavouriteButton;
