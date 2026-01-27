import { getNextPendingId } from "@/helpers/one2manyHelper";
import { ConnectionProvider } from "@/index";
import { One2manyItem } from "./One2manyInputLegacy";
import { FormView, ViewType } from "@/types";
import { useCallback, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import { isExistingId } from "@/helpers/idUtils";

export const useOne2manyFormModal = ({
  currentView,
  inv_field,
  activeId,
  showFormChangesDialogIfNeeded,
  items,
  triggerChange,
  setCurrentView,
  setItemIndex,
  relation,
  formView,
  context,
  onAfterSubmit,
}: {
  currentView: string;
  inv_field?: string;
  activeId?: number | string;
  showFormChangesDialogIfNeeded: (callback: () => void) => void;
  items: One2manyItem[];
  triggerChange: (items: One2manyItem[]) => void;
  setCurrentView: (view: ViewType) => void;
  setItemIndex: (index: number) => void;
  relation: string;
  formView?: FormView;
  context: any;
  onAfterSubmit?: () => void;
}) => {
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<One2manyItem>();
  const [continuousEntryMode, setContinuousEntryMode] =
    useState<boolean>(false);

  const createItem = useCallback(async () => {
    let defaultValues: any;

    if (inv_field && activeId) {
      defaultValues = { [inv_field]: activeId };
    }

    if (currentView === "form") {
      showFormChangesDialogIfNeeded(() => {
        setContinuousEntryMode(true);
        setModalItem({ defaultValues });
        setShowFormModal(true);
      });
    } else {
      setContinuousEntryMode(true);
      setModalItem({ defaultValues });
      setShowFormModal(true);
    }
  }, [activeId, currentView, inv_field, showFormChangesDialogIfNeeded]);

  const onCancelFormModal = useCallback(
    (params?: { id?: number | string; values?: any }) => {
      setContinuousEntryMode(false);

      if (params?.id && params?.values) {
        const updatedItems: One2manyItem[] = items.map((item: One2manyItem) => {
          if (item.id === params.id) {
            return {
              ...item,
              values: { ...item.values, ...params.values },
              treeValues: { ...item.treeValues, ...params.values },
            };
          }
          return item;
        });
        triggerChange(updatedItems);
      }

      setShowFormModal(false);
    },
    [items, triggerChange],
  );

  const onFormModalSubmitSucceed = useDeepCompareCallback(
    (
      id: number | string | undefined,
      _: any,
      values: any,
      x2manyPendingLink: boolean = false,
    ) => {
      let updatedItems: One2manyItem[];

      if (x2manyPendingLink) {
        updatedItems = items.concat({
          id,
          operation: "pendingLink",
          values: { ...values, id },
          treeValues: { ...values, id },
        });
      } else if (id) {
        updatedItems = items.map((item: One2manyItem) => {
          if (item.id === id) {
            return {
              id,
              operation: isExistingId(id) ? "pendingUpdate" : "pendingCreate",
              values: { ...values, id },
              treeValues: { ...values, id },
            };
          }
          return item;
        });
      } else {
        const nextId = getNextPendingId(items);
        updatedItems = items.concat({
          id: nextId,
          operation: "pendingCreate",
          values: { ...values, id: nextId },
          treeValues: { ...values, id: nextId },
        });
      }

      triggerChange(updatedItems);

      // Defer refresh to next tick to ensure state updates are complete
      setTimeout(() => {
        onAfterSubmit?.();
      }, 0);

      if (!continuousEntryMode) {
        setShowFormModal(false);
      }
    },
    [continuousEntryMode, items, triggerChange, onAfterSubmit],
  );

  const openItemInFormModal = useDeepCompareCallback(
    async (item: One2manyItem) => {
      if (!formView) return;
      const { id: itemId } = item;

      let itemsToLoadFrom: One2manyItem[] | undefined = items;

      // We should fetch the form data if needed in order to get the form values
      const modalItem = items.find((item) => item.id === itemId);
      if (modalItem?.values === undefined) {
        itemsToLoadFrom = await ConnectionProvider.getHandler().readObjects({
          model: relation,
          ids: [item.id!] as number[],
          fields: formView.fields,
          context,
        });
      }

      // We show the detail for the clicked item in a Form modal
      setModalItem(itemsToLoadFrom!.find((item) => item.id === itemId));
      setContinuousEntryMode(false);
      setShowFormModal(true);
    },
    [context, formView, items, relation, setCurrentView, setItemIndex],
  );

  return {
    showFormModal,
    modalItem,
    continuousEntryMode,
    createItem,
    onCancelFormModal,
    onFormModalSubmitSucceed,
    openItemInFormModal,
  };
};
