import { useState, useCallback } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import ConnectionProvider from "@/ConnectionProvider";
import showConfirmDialog from "@/ui/ConfirmDialog";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";

export type FavouriteActionOptions = {
  action_id: number | string;
  action_type: string;
  view_id: number | string;
  res_id: number | string | boolean;
};

type UseFavouriteActionsParams = {
  isFavourite: boolean;
  currentShortcutId?: number;
  defaultName?: string;
  onFavouriteAdded?: (shortcutId: number) => void;
  onFavouriteRemoved?: () => void;
};

export const useFavouriteActions = (params: UseFavouriteActionsParams) => {
  const {
    isFavourite,
    currentShortcutId,
    defaultName = "",
    onFavouriteAdded,
    onFavouriteRemoved,
  } = params;

  const { t } = useLocale();
  const [showNameModal, setShowNameModal] = useState(false);

  const [removeFavouriteRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().removeFavourite,
  );
  const [addFavouriteRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().addFavourite,
  );
  const [isShortcutFavoriteRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().isShortcutFavorite,
  );
  const [updateRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().update,
  );

  const toggleFavourite = useCallback(() => {
    if (isFavourite && currentShortcutId !== undefined) {
      // Show confirmation dialog when removing
      showConfirmDialog({
        onOk: async () => {
          try {
            await removeFavouriteRequest({
              shortcut_id: currentShortcutId,
            });
            onFavouriteRemoved?.();
          } catch (error) {
            console.error("Error removing favourite:", error);
          }
        },
        confirmMessage: t("confirmRemoveFavourite"),
        t,
      });
    } else {
      // Show name input modal when adding
      setShowNameModal(true);
    }
  }, [
    isFavourite,
    currentShortcutId,
    t,
    onFavouriteRemoved,
    removeFavouriteRequest,
  ]);

  const handleSaveFavourite = useCallback(
    async (nameToUse: string, options: FavouriteActionOptions) => {
      try {
        // Add favourite
        await addFavouriteRequest({
          action_id: options.action_id,
          action_type: options.action_type,
          view_id: options.view_id,
          res_id: options.res_id,
        });

        // Check to get the shortcut ID
        const shortcutId = await isShortcutFavoriteRequest({
          action_id: options.action_id,
          action_type: options.action_type,
          view_id: options.view_id,
          res_id: options.res_id,
        });

        // Update the shortcut name if user provided a custom name
        if (
          shortcutId &&
          typeof shortcutId === "number" &&
          nameToUse &&
          nameToUse !== defaultName
        ) {
          await updateRequest({
            model: "ir.ui.view_sc",
            id: shortcutId,
            values: { name: nameToUse },
            fields: ["name"],
          });
        }

        setShowNameModal(false);

        if (typeof shortcutId === "number") {
          onFavouriteAdded?.(shortcutId);
        }
      } catch (error) {
        console.error("Error saving favourite:", error);
      }
    },
    [
      defaultName,
      onFavouriteAdded,
      addFavouriteRequest,
      isShortcutFavoriteRequest,
      updateRequest,
    ],
  );

  const handleCancelNameModal = useCallback(() => {
    setShowNameModal(false);
  }, []);

  return {
    showNameModal,
    toggleFavourite,
    handleSaveFavourite,
    handleCancelNameModal,
    initialName: defaultName,
  };
};
