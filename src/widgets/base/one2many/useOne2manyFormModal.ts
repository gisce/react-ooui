import { getNextPendingId } from "@/helpers/one2manyHelper";
import { ConnectionProvider, One2manyItem } from "@/index";
import { FormView, ViewType } from "@/types";
import { useCallback, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";

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
}: {
  currentView: string;
  inv_field?: string;
  activeId?: number;
  showFormChangesDialogIfNeeded: (callback: () => void) => void;
  items: One2manyItem[];
  triggerChange: (items: One2manyItem[]) => void;
  setCurrentView: (view: ViewType) => void;
  setItemIndex: (index: number) => void;
  relation: string;
  formView: FormView;
  context: any;
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

  const onCancelFormModal = useCallback(() => {
    setShowFormModal(false);
    setContinuousEntryMode(false);
  }, []);

  const onFormModalSubmitSucceed = useDeepCompareCallback(
    (
      id: number | undefined,
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
              operation: id > 0 ? "pendingUpdate" : "pendingCreate",
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

      if (!continuousEntryMode) {
        setShowFormModal(false);
      }
    },
    [continuousEntryMode, items, triggerChange],
  );

  const openItemInFormModal = useDeepCompareCallback(
    async (item: One2manyItem) => {
      const { id: itemId } = item;

      let itemsToLoadFrom: One2manyItem[] | undefined = items;

      // We should fetch the form data if needed in order to get the form values
      const modalItem = items.find((item) => item.id === itemId);
      if (modalItem?.values === undefined) {
        itemsToLoadFrom = await ConnectionProvider.getHandler().readObjects({
          model: relation,
          ids: [item.id!],
          fields: formView.fields,
          context,
        });
      }

      // We show the detail for the clicked item in a Form modal
      setModalItem(itemsToLoadFrom!.find((item) => item.id === itemId));
      setContinuousEntryMode(false);
      setShowFormModal(true);
    },
    [context, formView.fields, items, relation, setCurrentView, setItemIndex],
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
