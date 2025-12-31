import { showRemoveItemDialog } from "@/ui/RemoveItemDialog";
import { useLocale } from "@gisce/react-formiga-components";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { useCallback, useContext } from "react";
import { One2manyItem } from "./One2manyInputLegacy";
import { showUnlinkItemDialog } from "@/ui/UnlinkItemDialog";
import { useErrorNotification } from "@/hooks/useErrorNotification";

export const useOne2manyRemove = ({
  isMany2many,
  triggerChange,
  items,
  setFormHasChanges,
  selectedRowKeys,
  setSelectedRowKeys,
  onAfterRemove,
}: {
  isMany2many: boolean;
  triggerChange: (items: One2manyItem[]) => void;
  items: One2manyItem[];
  setFormHasChanges: (hasChanges: boolean) => void;
  selectedRowKeys: number[];
  setSelectedRowKeys: (selectedRowKeys: number[]) => void;
  onAfterRemove?: () => void;
}) => {
  const { t } = useLocale();
  const { currentView, itemIndex, setItemIndex } = useContext(
    One2manyContext,
  ) as One2manyContextType;
  const { showErrorNotification } = useErrorNotification();

  const removeSelectedItems = useCallback(async () => {
    const itemsToRemove: One2manyItem[] = getItemsToRemove({
      selectedRowKeys,
      items,
    });

    setFormHasChanges(false);

    try {
      const idsToRemove: number[] = itemsToRemove.map((item) => item.id!);

      const updatedItems = items
        .filter((item) => {
          if (idsToRemove.includes(item.id!) && item.id! < 0) {
            return false;
          }
          return true;
        })
        .map((item) => {
          if (idsToRemove.includes(item.id!)) {
            return {
              ...item,
              operation: "pendingRemove",
            } as One2manyItem;
          } else {
            return item;
          }
        });
      triggerChange(updatedItems);
      setSelectedRowKeys([]);
      // Defer refresh to next tick to ensure state updates are complete
      setTimeout(() => {
        onAfterRemove?.();
      }, 0);
    } catch (err) {
      showErrorNotification(err);
    }

    setItemIndex(0);
  }, [
    items,
    selectedRowKeys,
    setFormHasChanges,
    setItemIndex,
    setSelectedRowKeys,
    triggerChange,
    showErrorNotification,
    onAfterRemove,
  ]);

  const removeCurrentItem = useCallback(async () => {
    setFormHasChanges(false);

    try {
      if (items[itemIndex].id! > 0) {
        const updatedItems = items.map((item) => {
          if (item.id === items[itemIndex].id!) {
            return {
              ...item,
              operation: "pendingRemove",
            } as One2manyItem;
          } else {
            return item;
          }
        });
        triggerChange(updatedItems);
      } else {
        triggerChange(items.filter((item) => item.id !== items[itemIndex].id!));
      }
      // Defer refresh to next tick to ensure state updates are complete
      setTimeout(() => {
        onAfterRemove?.();
      }, 0);
    } catch (err) {
      showErrorNotification(err);
    }

    setItemIndex(0);
  }, [
    items,
    itemIndex,
    setFormHasChanges,
    setItemIndex,
    triggerChange,
    showErrorNotification,
    onAfterRemove,
  ]);

  const onOk = useCallback(async () => {
    return currentView === "form"
      ? await removeCurrentItem()
      : await removeSelectedItems();
  }, [currentView, removeCurrentItem, removeSelectedItems]);

  const showRemoveConfirm = useCallback(() => {
    if (isMany2many) {
      showUnlinkItemDialog({
        t,
        onOk,
      });
      return;
    }

    showRemoveItemDialog({
      t,
      onOk,
    });
  }, [isMany2many, onOk, t]);

  return { showRemoveConfirm };
};

interface IdCount {
  [key: number]: number;
}

function getItemsToRemove({
  selectedRowKeys,
  items,
}: {
  selectedRowKeys: number[];
  items: One2manyItem[];
}) {
  const itemsToRemove: One2manyItem[] = [];
  // Count the number of times each id appears in selectedRowKeys
  const idCount = selectedRowKeys.reduce<IdCount>((acc: IdCount, id) => {
    acc[id] = (acc[id] || 0) + 1;
    return acc;
  }, {});

  // Loop over items and push items to remove based on the count
  items.forEach((item) => {
    if (item.id && idCount[item.id] > 0) {
      itemsToRemove.push(item);
      idCount[item.id] -= 1; // Decrement the count each time an item is added to itemsToRemove
    }
  });
  return itemsToRemove;
}
