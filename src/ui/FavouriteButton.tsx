import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { TableOutlined, FormOutlined, EditOutlined } from "@ant-design/icons";
import { Tooltip, theme } from "antd";
import {
  useLocale,
  FavouriteButton as FavouriteButtonUi,
  FavouriteButtonRef,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@gisce/react-formiga-components";
import { useNavigation } from "@/context/RootContext";
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
  overrideUnsettedLimit?: boolean;
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
  const favouriteButtonRef = useRef<FavouriteButtonRef>(null);

  const { openShortcut, openDefaultActionForModel, currentTab } =
    useNavigation();

  const favouriteQuery = useMemo(() => {
    if (!currentTab || !currentTab.currentView?.view_id) {
      return;
    }

    const { id, type } = currentTab.action || {};

    if (!id || !type) {
      setIsFavourite(false);
      return;
    }

    const view_id = currentTab.currentView.view_id;
    let res_id: boolean | number = false;

    if (currentTab.currentView.type === "form") {
      res_id = currentTab.viewOptions?.form?.resourceId
        ? (currentTab.viewOptions?.form?.resourceId as number)
        : false;
    }

    return {
      action_id: id,
      action_type: type,
      view_id,
      res_id,
    };
  }, [currentTab]);

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

  const toggleFavourite = useCallback(async () => {
    if (isFavourite && currentShortcutId) {
      await onRemoveFavourite(currentShortcutId);
    } else {
      if (!currentTab || !currentTab.currentView?.view_id) {
        return;
      }

      const { id: action_id, type: action_type } = currentTab.action;
      const res_id = currentTab.viewOptions?.form?.resourceId;
      const { view_id } = currentTab.currentView;

      if (!action_id || !action_type) {
        setIsFavourite(false);
        return;
      }

      await onAddFavourite({
        action_id,
        action_type,
        view_id,
        res_id: res_id || false,
      });
    }

    await getShortcuts();
    setIsFavourite(!isFavourite);
  }, [
    currentShortcutId,
    currentTab,
    getShortcuts,
    isFavourite,
    onAddFavourite,
    onRemoveFavourite,
  ]);

  return (
    <FavouriteButtonUi
      ref={favouriteButtonRef}
      isFavourite={isFavourite}
      onToggleFavourite={toggleFavourite}
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
