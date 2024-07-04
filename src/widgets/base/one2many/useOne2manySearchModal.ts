import { ConnectionProvider, One2manyItem, Views } from "@/index";
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
      // setIsLoading(true);
      // TODO: handle loading in the modal, not here.

      const updatedItems = items;
      const filteredIds = ids.filter((id) => {
        return !items.find((item) => item.id === id);
      });

      try {
        for (const id of filteredIds) {
          const updatedFormObject = (
            await ConnectionProvider.getHandler().readObjects({
              model: relation,
              ids: [id],
              fields: views.get("form").fields,
              context,
            })
          )[0];
          const updatedTreeObject = (
            await ConnectionProvider.getHandler().readObjects({
              model: relation,
              ids: [id],
              fields: views.get("tree").fields,
              context,
            })
          )[0];
          updatedItems.push({
            id,
            operation: "pendingLink",
            values: updatedFormObject,
            treeValues: updatedTreeObject,
          });
        }

        triggerChange(updatedItems);
      } catch (e) {
        // TODO: show error as a modal/toas
        // setError(e as any);
      } finally {
        // setIsLoading(false);
      }
    },
    [context, items, relation, triggerChange, views],
  );

  const onSelectSearchValues = useCallback(
    async (ids: number[]) => {
      setShowSearchModal(false);
      onSearchModalSelectValue(ids);
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
