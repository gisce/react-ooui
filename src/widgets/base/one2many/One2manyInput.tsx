import React, { useState, useRef, useContext } from "react";
import { One2many as One2manyOoui } from "ooui";
import { Alert, Spin } from "antd";
import { Form } from "@/index";
import { Tree } from "@/index";
import { Form as FormOoui, Tree as TreeOoui } from "ooui";
import { Views } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { FormModal } from "@/widgets/modals/FormModal";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import showRemoveItemDialog from "@/ui/RemoveItemDialog";
import showUnlinkItemDialog from "@/ui/UnlinkItemDialog";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { FormContext, FormContextType } from "@/context/FormContext";
import { One2manyTopBar } from "@/widgets/base/one2many/One2manyTopBar";
import {
  readObjectValues,
  removeItems,
  linkItem,
} from "@/helpers/one2manyHelper";
import { SearchModal } from "@/widgets/modals/SearchModal";
import useModalWidthDimensions from "@/hooks/useModalWidthDimensions";
import useDeepCompareEffect from "use-deep-compare-effect";
import showErrorDialog from "@/ui/ActionErrorDialog";

type One2manyItem = {
  operation?: "original" | "pendingLink" | "pendingUpdate";
  id?: number;
  values?: any;
  treeValues?: any;
  defaultValues?: any;
};

interface One2manyInputProps {
  ooui: One2manyOoui;
  value?: Array<One2manyItem>;
  onChange?: (value: any[]) => void;
  views: Views;
}

const One2manyInput: React.FC<One2manyInputProps> = (
  props: One2manyInputProps
) => {
  const { value: items = [], onChange, ooui, views } = props;

  const {
    currentView,
    setCurrentView,
    itemIndex,
    setItemIndex,
    manualTriggerChange,
    setManualTriggerChange,
  } = useContext(One2manyContext) as One2manyContextType;

  const formContext = useContext(FormContext) as FormContextType;
  const { activeId, activeModel, getContext } = formContext || {};

  const formRef = useRef();
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<One2manyItem>();
  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [continuousEntryMode, setContinuousEntryMode] = useState<boolean>(
    false
  );

  const { modalHeight } = useModalWidthDimensions();

  const { readOnly, relation, domain } = ooui as One2manyOoui;
  const isMany2many = ooui.type === "many2many";
  const { id: fieldName } = ooui;
  const itemsToShow = items.filter((item) => item.values);

  useDeepCompareEffect(() => {
    fetchData();
  }, [items]);

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    setManualTriggerChange(true);
    onChange?.(changedValue);
  };

  const fetchData = async () => {
    // We need a value (manualTriggerChange) to differ whenever the value is changed manually
    // or the values come from the AntForm (first render or refreshing)
    // This way when we trigger a change when we add/delete an item we avoid fetching again from the API
    // And entering in a infinite loop
    if (manualTriggerChange) {
      setManualTriggerChange(false);
    } else if (items.length > 0) {
      await fetchOriginalItemsFromApi();
      if (itemIndex > itemsToShow.length - 1 && itemIndex !== 0) {
        setItemIndex(0);
      }
    }
  };

  const fetchOriginalItemsFromApi = async () => {
    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      const itemsWithValues = await readObjectValues({
        treeFields: views.get("tree").fields,
        formFields: views.get("form").fields,
        model: relation,
        items,
      });

      triggerChange(itemsWithValues);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const toggleViewMode = () => {
    if (currentView === "form" && views.get("tree")) {
      showFormChangesDialogIfNeeded(() => {
        setCurrentView("tree");
      });
    } else if (currentView === "tree" && views.get("form")) {
      setCurrentView("form");
    }
  };

  const previousItem = () => {
    if (itemIndex > 0) {
      if (currentView === "form") {
        showFormChangesDialogIfNeeded(() => {
          setItemIndex(itemIndex - 1);
        });
      } else {
        setItemIndex(itemIndex - 1);
      }
    }
  };

  const nextItem = () => {
    const totalItems = itemsToShow.length;
    if (itemIndex < totalItems - 1) {
      if (currentView === "form") {
        showFormChangesDialogIfNeeded(() => {
          setItemIndex(itemIndex + 1);
        });
      } else {
        setItemIndex(itemIndex + 1);
      }
    }
  };

  const showFormChangesDialogIfNeeded = (callback: () => void) => {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        onOk: () => {
          callback();
          setFormHasChanges(false);
        },
      });
    } else {
      callback();
    }
  };

  const showRemoveConfirm = () => {
    if (isMany2many) {
      showUnlinkItemDialog({
        onOk: () => {
          if (currentView === "form") {
            removeCurrentItem();
          } else {
            removeSelectedItems();
          }
        },
      });
      return;
    }

    showRemoveItemDialog({
      onOk: () => {
        if (currentView === "form") {
          removeCurrentItem();
        } else {
          removeSelectedItems();
        }
      },
    });
  };

  const saveItem = () => {
    setFormIsSaving(true);
    (formRef.current as any).submitForm();
  };

  const createItem = async () => {
    console.log(ooui);

    const { inv_field } = ooui;
    let defaultValues: any;

    if (inv_field) {
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
  };

  const searchItem = async () => {
    if (currentView === "form") {
      showFormChangesDialogIfNeeded(() => {
        setShowSearchModal(true);
      });
    } else {
      setShowSearchModal(true);
    }
  };

  const removeCurrentItem = async () => {
    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      // If we have a activeId it means we can process the operation to the API
      if (activeId) {
        await removeItems({
          activeId,
          model: activeModel,
          idsToRemove: [itemsToShow[itemIndex].id!],
          fields: views.get("form").fields,
          fieldName,
          isMany2many,
        });
      }

      // We remove the item from the internal list
      triggerChange(
        items.filter((item) => item.id !== itemsToShow[itemIndex].id)
      );
    } catch (err) {
      setError(err);
    }

    setItemIndex(0);
    setIsLoading(false);
  };

  const removeSelectedItems = async () => {
    const itemsToRemove = itemsToShow.filter((item) => {
      return selectedRowKeys.includes(item.id);
    });

    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      // If we have a activeId it means we can process the operation to the API
      if (activeId) {
        const idsToRemove: number[] = itemsToRemove.map((item) => item.id!);

        await removeItems({
          activeId,
          model: activeModel,
          idsToRemove: idsToRemove,
          fields: views.get("form").fields,
          fieldName,
          isMany2many,
        });
      }
      // We remove the items from the internal list
      const updatedItems = items.filter(
        (item) => !selectedRowKeys.includes(item.id)
      );
      triggerChange(updatedItems);
    } catch (err) {
      setError(err);
    }

    setItemIndex(0);
    setIsLoading(false);
  };

  const formPostSaveAction = async (id: number) => {
    // We call the API for reading the updated object
    const updatedFormObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("form").arch,
        model: relation,
        ids: [id],
        fields: views.get("form").fields,
      })
    )[0];
    const updatedTreeObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("tree").arch,
        model: relation,
        ids: [id],
        fields: views.get("tree").fields,
      })
    )[0];

    // Then we update the retrieved object with updated values inside our internal list with triggerChange
    const updatedItems: One2manyItem[] = items.map((item: One2manyItem) => {
      if (item.id === id) {
        return {
          ...item,
          values: updatedFormObject,
          treeValues: updatedTreeObject,
        };
      }
      return item;
    });

    triggerChange(updatedItems);
  };

  const formModalPostSaveAction = async (id: number) => {
    // We check wether the item is already in our internal list
    const itemAlreadyPresent =
      items.find((item) => item.id === id) !== undefined;

    // We call the API for reading the updated object
    const updatedFormObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("form").arch,
        model: relation,
        ids: [id],
        fields: views.get("form").fields,
      })
    )[0];
    const updatedTreeObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("tree").arch,
        model: relation,
        ids: [id],
        fields: views.get("tree").fields,
      })
    )[0];

    if (!itemAlreadyPresent) {
      await processNewItem({
        id,
        values: updatedFormObject,
        treeValues: updatedTreeObject,
      });
    } else {
      await processUpdateItem({
        id,
        values: updatedFormObject,
        treeValues: updatedTreeObject,
      });
    }
  };

  const setItemSaved = async ({
    id,
    saved,
  }: {
    id: number;
    saved: boolean;
  }) => {
    if (!id) {
      return;
    }
    const updatedItems = items.map((item: One2manyItem) => {
      if (item.id === id) {
        return {
          ...item,
          operation: (saved ? "original" : "pendingUpdate") as any,
        };
      }
      return item;
    });

    if (saved) {
      onChange?.(updatedItems);
    } else {
      triggerChange(updatedItems);
    }
  };

  const processNewItem = async ({
    id,
    values,
    treeValues,
  }: {
    id: number;
    values: any;
    treeValues: any;
  }) => {
    if (activeId) {
      await linkItem({
        model: activeModel,
        activeId,
        id,
        fields: views.get("form").fields,
        fieldName,
      });

      // It's a new item and we already have linked it with its parent, so we just only have to add it
      // to our internal list as an original (server and client are synced)
      triggerChange(
        items.concat({
          id,
          operation: "original",
          values,
          treeValues,
        })
      );
      return;
    }

    // Since we don't have a activeId to link with, we add the item as pendingLink
    // The effective link will take place when the parent form is saved
    triggerChange(
      items.concat({
        id,
        operation: "pendingLink",
        values,
        treeValues,
      })
    );
  };

  const processUpdateItem = async ({
    id,
    values,
    treeValues,
  }: {
    id: number;
    values: any;
    treeValues: any;
  }) => {
    // We iterate over our internal list in order to update the object values with the updated ones from the API
    // If we have a activeId, we consider the item as original, because it's already saved and linked
    // If we don't have a activeId, the item will have to be linked when the parent form is saved
    const updatedItems: One2manyItem[] = items.map((item: One2manyItem) => {
      if (item.id === id) {
        return {
          id,
          operation: activeId ? "original" : "pendingLink",
          values,
          treeValues,
        };
      }
      return item;
    });

    triggerChange(updatedItems);
  };

  // This is the callback called when we save the One2manyTopBar in form mode
  const onFormSubmitSucceed = () => {
    setFormIsSaving(false);
    setFormHasChanges(false);
    setItemSaved({ id: itemsToShow[itemIndex]?.id!, saved: true });
  };

  // This is the callback called when a modal is done saving the object
  const onFormModalSubmitSucceed = () => {
    if (!continuousEntryMode) {
      setShowFormModal(false);
    }
  };

  const onTreeRowClicked = (itemId: number) => {
    // We show the detail for the clicked item in a Form modal
    setModalItem(items.find((item) => item.id === itemId));
    setContinuousEntryMode(false);
    setShowFormModal(true);
  };

  const onSearchModalSelectValue = async (id: number) => {
    setIsLoading(true);

    try {
      await formModalPostSaveAction(id);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: improve this. Do we really have to parse the entire object just to get the title?
  function getTitle() {
    const ViewType = currentView === "form" ? FormOoui : TreeOoui;
    const ooui = new ViewType(views.get(currentView).fields);
    ooui.parse(views.get(currentView).arch);
    return ooui.string!;
  }

  const content = () => {
    if (currentView === "form") {
      if (itemsToShow.length === 0) {
        return "No current entries";
      }

      return (
        <Form
          formView={views.get("form")}
          values={itemsToShow[itemIndex]?.values}
          ref={formRef}
          model={relation}
          id={itemsToShow[itemIndex]?.id}
          onSubmitSucceed={onFormSubmitSucceed}
          onSubmitError={() => {
            setFormIsSaving(false);
          }}
          onFieldsChange={() => {
            setItemSaved({ id: itemsToShow[itemIndex]?.id!, saved: false });
            setFormHasChanges(true);
          }}
          readOnly={readOnly}
          postSaveAction={formPostSaveAction}
        />
      );
    }

    return (
      <Tree
        total={itemsToShow.length}
        limit={itemsToShow.length}
        treeView={views.get("tree")}
        results={itemsToShow.map((item) => item.treeValues)}
        loading={isLoading}
        onRowClicked={onTreeRowClicked}
        showPagination={false}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
        scrollY={modalHeight * 0.4}
      />
    );
  };

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  // If we are in create mode we have to show the modal in continuous mode.
  // This means the modal won't close after clicking OK, the modal will add the new item
  // and will reset to defaults to let the user add a new item.
  const mustClearAfterSave = continuousEntryMode;

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      <One2manyTopBar
        mode={currentView}
        title={getTitle()}
        readOnly={readOnly}
        isMany2Many={isMany2many}
        formHasChanges={formHasChanges}
        formIsSaving={formIsSaving}
        totalItems={itemsToShow.length}
        currentItemIndex={itemIndex}
        onSaveItem={saveItem}
        onDelete={showRemoveConfirm}
        onCreateItem={createItem}
        onToggleViewMode={toggleViewMode}
        onPreviousItem={previousItem}
        onNextItem={nextItem}
        onSearchItem={searchItem}
      />
      {content()}
      <FormModal
        formView={views.get("form")}
        model={relation}
        id={modalItem?.id}
        values={modalItem?.values}
        defaultValues={modalItem?.defaultValues}
        visible={showFormModal}
        onSubmitSucceed={onFormModalSubmitSucceed}
        onCancel={() => {
          setContinuousEntryMode(false);
          setShowFormModal(false);
        }}
        readOnly={readOnly}
        mustClearAfterSave={mustClearAfterSave}
        postSaveAction={formModalPostSaveAction}
      />
      <SearchModal
        domain={domain}
        model={relation}
        visible={showSearchModal}
        onSelectValue={(id: number) => {
          setShowSearchModal(false);
          onSearchModalSelectValue(id);
        }}
        onCloseModal={() => {
          setShowSearchModal(false);
        }}
      />
    </>
  );
};

export { One2manyInput, One2manyItem };
