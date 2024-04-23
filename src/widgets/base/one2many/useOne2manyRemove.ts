import showRemoveItemDialog from "@/ui/RemoveItemDialog";
import showUnlinkItemDialog from "@/ui/UnlinkItemDialog";
import { useLocale } from "@gisce/react-formiga-components";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { useCallback, useContext } from "react";

export const useOne2manyRemove = ({
  isMany2many,
}: {
  isMany2many: boolean;
}) => {
  const { t } = useLocale();
  const { currentView, setCurrentView, itemIndex, setItemIndex } = useContext(
    One2manyContext,
  ) as One2manyContextType;

  const removeCurrentItem = useCallback(() => {
    return new Promise<void>((resolve, reject) => {
      // Simulate async operation like API call
      setTimeout(() => {
        resolve();
      }, 3000);
    }).catch(() => console.log("Oops errors!"));
  }, []);

  const removeSelectedItems = useCallback(() => {}, []);

  const onOk = useCallback(async () => {
    return currentView === "form"
      ? await removeCurrentItem()
      : await removeSelectedItems();
  }, [currentView, removeCurrentItem, removeSelectedItems]);

  const showRemoveConfirm = useCallback(() => {
    // if (isMany2many) {
    //   showUnlinkItemDialog({
    //     t,
    //     onOk,
    //   });
    //   return;
    // }

    showRemoveItemDialog({
      t,
      onOk,
    });
  }, [onOk, t]);

  return { showRemoveConfirm };
};
