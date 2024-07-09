import { getValuesForFields } from "@/helpers/one2manyHelper";
import { ConnectionProvider, One2manyItem, Views } from "@/index";
import { showErrorExceptionDialog } from "@/ui/GenericErrorDialog";
import { useCallback, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";

export const useOne2manySearchModal = ({
  currentView,
  showFormChangesDialogIfNeeded,
  items,
  triggerChange,
  context,
  views,
  relation,
}: {
  currentView: string;
  showFormChangesDialogIfNeeded: (callback: () => void) => void;
  items: One2manyItem[];
  triggerChange: (items: One2manyItem[]) => void;
  context: any[];
  views: Views;
  relation: string;
}) => {
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);

  const searchItem = async () => {
    if (currentView === "form") {
      showFormChangesDialogIfNeeded(() => {
        setShowSearchModal(true);
      });
    } else {
      setShowSearchModal(true);
    }
  };

  const onCloseSearchModal = useCallback(() => {
    setShowSearchModal(false);
  }, []);

  const onSearchModalSelectValue = useDeepCompareCallback(
    async (ids: number[]) => {
      const updatedItems = [...items];
      const filteredIds = ids.filter((id) => {
        return !items.find((item) => item.id === id);
      });

      try {
        const updatedObjects =
          await ConnectionProvider.getHandler().readObjects({
            model: relation,
            ids: filteredIds,
            fields: {
              ...views.get("form").fields,
              ...views.get("tree").fields,
            },
            context,
          });

        updatedObjects.forEach((item: any) => {
          updatedItems.push({
            id: item.id,
            operation: "pendingLink",
            values: getValuesForFields({
              values: item,
              fields: ["id", ...Object.keys(views.get("form").fields)],
            }),
            treeValues: getValuesForFields({
              values: item,
              fields: ["id", ...Object.keys(views.get("tree").fields)],
            }),
          });
        });

        triggerChange(updatedItems);
      } catch (e) {
        showErrorExceptionDialog(e);
      }
    },
    [context, items, relation, triggerChange, views],
  );

  const onSelectSearchValues = useCallback(
    async (ids: number[]) => {
      await onSearchModalSelectValue(ids);
      setShowSearchModal(false);
    },
    [onSearchModalSelectValue],
  );

  return {
    searchItem,
    showSearchModal,
    onCloseSearchModal,
    onSelectSearchValues,
  };
};
