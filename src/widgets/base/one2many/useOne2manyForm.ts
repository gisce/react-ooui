import { useContext, useEffect, useState } from "react";
import { One2manyItem } from "./One2manyInput";
import { TreeView, FormView } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";

export const useOne2manyForm = ({
  items,
  relation,
  context,
  treeView,
  formView,
}: {
  items: One2manyItem[];
  context: any[];
  relation: string;
  treeView: TreeView;
  formView: FormView;
}) => {
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const { itemIndex } = useContext(One2manyContext) as One2manyContextType;

  // Whenever we save the form, we must reset the formHasChanges state
  useEffect(() => {
    const currentItem = items[itemIndex];
    if (currentItem.operation === "original") {
      setFormHasChanges(false);
    }
  }, [itemIndex, items]);

  const getOriginalItemsWithRestoredItemId = async ({ id }: { id: number }) => {
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
  };

  return {
    formHasChanges,
    setFormHasChanges,
    getOriginalItemsWithRestoredItemId,
  };
};
