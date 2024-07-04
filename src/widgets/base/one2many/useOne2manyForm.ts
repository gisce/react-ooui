import { useCallback, useContext, useEffect, useState } from "react";
import { One2manyItem } from "./One2manyInput";
import { TreeView, FormView } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { useLocale } from "@gisce/react-formiga-components";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";

export const useOne2manyForm = ({
  items,
  relation,
  context,
  treeView,
  formView,
  triggerChange,
}: {
  items: One2manyItem[];
  context: any[];
  relation: string;
  treeView: TreeView;
  formView: FormView;
  triggerChange: (items: One2manyItem[]) => void;
}) => {
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const { itemIndex } = useContext(One2manyContext) as One2manyContextType;
  const { t } = useLocale();

  // Whenever we save the form, we must reset the formHasChanges state
  useEffect(() => {
    const currentItem = items[itemIndex];
    if (!currentItem || currentItem?.operation === "original") {
      setFormHasChanges(false);
    }
  }, [itemIndex, items]);

  const getOriginalItemsWithRestoredItemId = useCallback(
    async ({ id }: { id: number }) => {
      const updatedFormObject = (
        await ConnectionProvider.getHandler().readObjects({
          model: relation,
          ids: [id],
          fields: formView.fields,
          context,
        })
      )[0];

      const updatedTreeObject = (
        await ConnectionProvider.getHandler().readObjects({
          model: relation,
          ids: [id],
          fields: treeView.fields,
          context,
        })
      )[0];

      const updatedItems: One2manyItem[] = items.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            operation: "original",
            values: updatedFormObject,
            treeValues: updatedTreeObject,
          };
        }
        return item;
      });

      return updatedItems;
    },
    [context, formView.fields, items, relation, treeView.fields],
  );

  const onFormChanges = useCallback(
    (newUpdatedItems: One2manyItem[]) => {
      setFormHasChanges(true);
      triggerChange(newUpdatedItems);
    },
    [setFormHasChanges, triggerChange],
  );

  const reloadOriginalValuesForCurrentItem = useCallback(async () => {
    const { id } = items[itemIndex];
    if (!id) return;
    const originalItems = await getOriginalItemsWithRestoredItemId({ id });
    triggerChange(originalItems);
  }, [getOriginalItemsWithRestoredItemId, itemIndex, items, triggerChange]);

  const showFormChangesDialogIfNeeded = useCallback(
    (callback: () => void) => {
      if (formHasChanges) {
        showUnsavedChangesDialog({
          t,
          onOk: () => {
            reloadOriginalValuesForCurrentItem();
            callback();
            setFormHasChanges(false);
          },
        });
      } else {
        callback();
      }
    },
    [formHasChanges, reloadOriginalValuesForCurrentItem, setFormHasChanges, t],
  );

  return {
    showFormChangesDialogIfNeeded,
    formHasChanges,
    setFormHasChanges,
    getOriginalItemsWithRestoredItemId,
    onFormChanges,
  };
};
