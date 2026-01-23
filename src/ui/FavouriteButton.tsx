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
import showConfirmDialog from "@/ui/ConfirmDialog";
import ConnectionProvider from "@/ConnectionProvider";
import { FavouriteNameModal } from "@/ui/FavouriteNameModal";
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
import { ACTION_TYPE_WIZARD } from "@/models/constants";
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
  values?: any;
  domain?: any;
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
  const [showNameModal, setShowNameModal] = useState(false);
  const [initialFavouriteName, setInitialFavouriteName] = useState("");
  const { t } = useLocale();

  const { token } = useToken();
  const favouriteButtonRef = useRef<FavouriteButtonRef>(null);

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
    if (!currentView || !currentView.view_id || !(currentView as any).extra) {
      return;
    }

    const { action_id, action_type } = (currentView as any).extra || {};

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
  }, [currentId, currentView]);

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
    if (shortcut?.action_type === ACTION_TYPE_WIZARD) {
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
          label: t("no_favorites"),
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

  const toggleFavourite = useCallback(() => {
    if (isFavourite && currentShortcutId !== undefined) {
      // Show confirmation dialog when removing
      showConfirmDialog({
        onOk: async () => {
          try {
            await onRemoveFavourite(currentShortcutId);
            await getShortcuts();
            setIsFavourite(false);
          } catch (error) {
            console.error("Error removing favourite:", error);
          }
        },
        confirmMessage: t("confirmRemoveFavourite"),
        t,
      });
    } else {
      // Show name input modal when adding
      if (!currentView) {
        return;
      }

      const currentTab = tabs.find((t) => t.key === activeKey);
      const tabTitle = currentTab?.title || "";

      setInitialFavouriteName(tabTitle);
      setShowNameModal(true);
    }
  }, [
    activeKey,
    currentShortcutId,
    currentView,
    getShortcuts,
    isFavourite,
    onRemoveFavourite,
    tabs,
    t,
  ]);

  const handleSaveFavourite = useCallback(
    async (nameToUse: string) => {
      if (!currentView) {
        return;
      }

      try {
        const currentTab = tabs.find((t) => t.key === activeKey);
        const { action_id, action_type } = currentTab?.action || {};
        const view_id = currentView.view_id!;
        let res_id: boolean | number = false;

        if (!action_id || !action_type) {
          setIsFavourite(false);
          return;
        }

        if (currentView.type === "form") {
          res_id = currentId ? (currentId as number) : false;
        }

        // Add favourite
        await onAddFavourite({
          action_id,
          action_type,
          view_id,
          res_id,
        });

        // Check to get the shortcut ID
        const shortcutId = await onCheckIsFavourite({
          action_id,
          action_type,
          view_id,
          res_id,
        });

        // Update the shortcut name if user provided a custom name
        if (
          shortcutId &&
          typeof shortcutId === "number" &&
          nameToUse &&
          nameToUse !== currentTab?.title
        ) {
          await ConnectionProvider.getHandler().update({
            model: "ir.ui.view_sc",
            id: shortcutId,
            values: { name: nameToUse },
            fields: ["name"],
          });
        }

        await getShortcuts();
        setIsFavourite(true);
        setShowNameModal(false);
      } catch (error) {
        console.error("Error saving favourite:", error);
      }
    },
    [
      activeKey,
      currentId,
      currentView,
      getShortcuts,
      onAddFavourite,
      onCheckIsFavourite,
      tabs,
    ],
  );

  const handleCancelNameModal = useCallback(() => {
    setShowNameModal(false);
  }, []);

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        onDropdownClosed?.();
      }
    },
    [onDropdownClosed],
  );

  return (
    <>
      <FavouriteButtonUi
        ref={favouriteButtonRef}
        isFavourite={isFavourite}
        onToggleFavourite={toggleFavourite}
        onItemClick={handleMenuClick}
        placement={"bottomRight"}
        header={
          <div style={{ width: 300, padding: 5, display: "flex" }}>
            <div style={{ paddingLeft: 15, color: "#ccc" }}>
              {t("favorites").toUpperCase()}
            </div>
            <div style={{ flexGrow: 1, paddingLeft: 10 }}>
              <Tooltip title={t("edit_favorites")}>
                <EditOutlined
                  style={{ color: token.colorPrimary, cursor: "pointer" }}
                  onClick={editFavourites}
                />
              </Tooltip>
            </div>
          </div>
        }
        onOpenChange={handleOpenChange}
        onRetrieveData={getShortcuts}
      />

      <FavouriteNameModal
        visible={showNameModal}
        initialName={initialFavouriteName}
        onSave={handleSaveFavourite}
        onCancel={handleCancelNameModal}
      />
    </>
  );
};

export default FavouriteButton;
