import React, { useState, useEffect, useRef, useContext } from "react";
import { One2many as One2manyOoui } from "ooui";
import { Button, Alert, Spin } from "antd";
import { Form } from "@/index";
import { Tree } from "@/index";
import { Form as FormOoui, Tree as TreeOoui } from "ooui";
import { Views } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { FormModal } from "@/widgets/modals/FormModal";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import showRemoveItemDialog from "@/ui/RemoveItemDialog";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { FormContext, FormContextType } from "@/context/FormContext";

import {
  FileAddOutlined,
  SaveOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

type One2manyItem = {
  operation: "original" | "pendingLink";
  id?: number;
  values?: any;
};

interface One2manyInputProps {
  ooui: One2manyOoui;
  value?: Array<One2manyItem>;
  onChange?: (value: any[]) => void;
  views: Views;
  formOoui: FormOoui;
  treeOoui: TreeOoui;
}

const One2manyInput: React.FC<One2manyInputProps> = (
  props: One2manyInputProps
) => {
  const {
    value: items = [],
    onChange,
    ooui,
    views,
    formOoui,
    treeOoui,
  } = props;
  const { id: fieldName } = ooui;

  const itemsToShow = items.filter((item) => item.values);

  const {
    currentView,
    setCurrentView,
    itemIndex,
    setItemIndex,
    manualTriggerChange,
    setManualTriggerChange,
  } = useContext(One2manyContext) as One2manyContextType;
  const { parentId, parentModel } = useContext(FormContext) as FormContextType;

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    setManualTriggerChange(true);
    onChange?.(changedValue);
  };

  const { readOnly, relation } = ooui as One2manyOoui;
  const isMany2many = ooui.type === "many2many";

  const formRef = useRef();
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<One2manyItem>();
  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);

  const fetchData = async () => {
    if (manualTriggerChange) {
      setManualTriggerChange(false);
    } else {
      await fetchOriginalItemsFromApi();
      if (itemIndex > itemsToShow.length - 1 && itemIndex !== 0) {
        setItemIndex(0);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, [items]);

  const fetchOriginalItemsFromApi = async () => {
    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      const realItems: One2manyItem[] = items.filter(
        (item) => item.operation === "original" && item.id
      );
      const idsToFetch = realItems.map((item) => item.id) as number[];

      const values = await ConnectionProvider.getHandler().readObjects({
        arch: views.get("tree").arch,
        model: relation,
        ids: idsToFetch,
        fields: views.get("tree").fields,
      });

      const itemsWithValues = items.map((item) => {
        const fetchedItemValues = values.find(
          (itemValues: any) => itemValues.id === item.id
        );
        return { ...item, values: fetchedItemValues };
      });

      triggerChange(itemsWithValues);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const separator = () => {
    return <div className="inline-block w-3" />;
  };

  const index = () => {
    let itemToShow = "_";
    if (itemsToShow.length === 0) {
      itemToShow = "_";
    } else {
      itemToShow = (itemIndex + 1).toString();
    }
    return (
      <span className="pl-1 pr-1">
        ({itemToShow}/{itemsToShow.length})
      </span>
    );
  };

  const showRemoveConfirm = () => {
    showRemoveItemDialog({
      onOk: () => {
        if (currentView === "form") {
          onConfirmRemove();
        } else {
          removeSelectedItems();
        }
      },
    });
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

  const saveItem = () => {
    setFormIsSaving(true);
    (formRef.current as any).submitForm();
  };

  const createItem = async () => {
    if (currentView === "form") {
      showFormChangesDialogIfNeeded(() => {
        setModalItem(undefined);
        setShowFormModal(true);
      });
    } else {
      setModalItem(undefined);
      setShowFormModal(true);
    }
  };

  const onConfirmRemove = async () => {
    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      if (parentId) {
        const values: any = {};
        values[fieldName] = [[2, itemsToShow[itemIndex].id]];

        await ConnectionProvider.getHandler().update({
          model: parentModel,
          id: parentId,
          values,
          fields: views.get("form").fields,
        });
      }

      triggerChange(
        items.filter((item) => item.id !== itemsToShow[itemIndex].id)
      );
    } catch (err) {
      setError(err);
    }

    setItemIndex(0);
    setIsLoading(false);
  };

  const saveButton = () => {
    if (currentView !== "form") {
      return null;
    }

    const icon = formIsSaving ? <LoadingOutlined /> : <SaveOutlined />;
    return (
      <>
        <Button
          icon={icon}
          onClick={saveItem}
          disabled={!formHasChanges || formIsSaving || readOnly}
        />
      </>
    );
  };

  const getTitle = () => {
    return currentView === "form" ? formOoui.string : treeOoui.string;
  };

  const title = () => {
    return (
      <div className="h-8 flex flex-grow bg-gray-700 text-gray-200">
        <div className="h-full flex flex-col justify-center items-center">
          <span className="pl-2 font-bold">{getTitle()}</span>
        </div>
      </div>
    );
  };

  const removeSelectedItems = async () => {
    const itemsToRemove = itemsToShow.filter((item) => {
      return selectedRowKeys.includes(item.id);
    });

    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      let updatedItems = items;

      for (const item of itemsToRemove) {
        if (parentId) {
          const values: any = {};
          values[fieldName] = [[2, item.id]];

          await ConnectionProvider.getHandler().update({
            model: parentModel,
            id: parentId,
            values,
            fields: views.get("form").fields,
          });
        }
      }

      updatedItems = updatedItems.filter(
        (item) => !selectedRowKeys.includes(item.id)
      );
      triggerChange(updatedItems);
    } catch (err) {
      setError(err);
    }

    setItemIndex(0);
    setIsLoading(false);
  };

  const deleteButton = () => {
    return (
      <Button
        icon={<DeleteOutlined />}
        onClick={showRemoveConfirm}
        disabled={itemsToShow.length === 0 || readOnly}
      />
    );
  };

  const itemBrowser = () => {
    if (currentView !== "form") {
      return null;
    }
    return (
      <>
        {separator()}
        <Button icon={<LeftOutlined />} onClick={previousItem} />
        {index()}
        <Button icon={<RightOutlined />} onClick={nextItem} />
      </>
    );
  };

  const topBar = () => {
    return (
      <div className="flex mb-2">
        {title()}
        <div className="h-8 flex-none pl-2">
          <Button
            icon={<FileAddOutlined />}
            disabled={readOnly}
            onClick={createItem}
          />
          {separator()}
          {saveButton()}
          {deleteButton()}
          {itemBrowser()}
          {separator()}
          <Button icon={<AlignLeftOutlined />} onClick={toggleViewMode} />
        </div>
      </div>
    );
  };

  const onFormSubmitSucceed = async (id: number) => {
    setFormIsSaving(false);
    setFormHasChanges(false);
  };

  const formPostSaveAction = async (id: number) => {
    const updatedObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("form").arch,
        model: relation,
        ids: [id],
        fields: views.get("form").fields,
      })
    )[0];
    const updatedItems: One2manyItem[] = items.map((item: One2manyItem) => {
      if (item.id === id) {
        return { ...item, values: updatedObject };
      }
      return item;
    });
    triggerChange(updatedItems);
  };

  const formModalPostSaveAction = async (id: number) => {
    const itemAlreadyPresent =
      items.find((item) => item.id === id) !== undefined;

    const updatedObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("form").arch,
        model: relation,
        ids: [id],
        fields: views.get("form").fields,
      })
    )[0];

    if (!itemAlreadyPresent) {
      // Create
      if (parentId) {
        // Link
        const values: any = {};
        values[fieldName] = [[4, id]];

        await ConnectionProvider.getHandler().update({
          model: parentModel,
          id: parentId,
          values,
          fields: views.get("form").fields,
        });

        // Set item as original in internal list
        triggerChange(
          items.concat({
            id,
            operation: "original",
            values: updatedObject,
          })
        );
      } else {
        // New create item into internal list
        triggerChange(
          items.concat({
            id,
            operation: "pendingLink",
            values: updatedObject,
          })
        );
      }
    } else {
      // Modification
      if (parentId) {
        // Update item values and set item as original in internal list
        const updatedItems: One2manyItem[] = items.map((item: One2manyItem) => {
          if (item.id === id) {
            return {
              id,
              operation: "original",
              values: updatedObject,
            };
          }
          return item;
        });
        triggerChange(updatedItems);
      } else {
        // New modification item into internal list
        const updatedItems: One2manyItem[] = items.map((item: One2manyItem) => {
          if (item.id === id) {
            return {
              id,
              operation: "pendingLink",
              values: updatedObject,
            };
          }
          return item;
        });
        triggerChange(updatedItems);
      }
    }
  };

  const onFormModalSubmitSucceed = (id: number) => {
    // If we already have an id will mean the form modal is in edit mode and we're not in continuous mode
    if (id) {
      setShowFormModal(false);
    }
  };

  const onTreeRowClicked = (itemId: number) => {
    setModalItem(items.find((item) => item.id === itemId));
    setShowFormModal(true);
  };

  const content = () => {
    if (currentView === "form") {
      if (itemsToShow.length === 0) {
        return "No current entries";
      }

      return (
        <Form
          data={{ ooui: formOoui, view: views.get("form") }}
          values={itemsToShow[itemIndex]?.values}
          ref={formRef}
          model={relation}
          id={itemsToShow[itemIndex]?.id}
          onSubmitSucceed={onFormSubmitSucceed}
          onSubmitError={() => {
            setFormIsSaving(false);
          }}
          onFieldsChange={() => {
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
        results={itemsToShow.map((item) => item.values)}
        loading={isLoading}
        onRowClicked={onTreeRowClicked}
        showPagination={false}
        rowSelection={{
          selectedRowKeys,
          onChange: setSelectedRowKeys,
        }}
      />
    );
  };

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  // If we are in create mode we have to show the modal in continuous mode.
  // This means the modal won't close after clicking OK, the modal will add the new item
  // and will reset to defaults to let the user add a new item.
  // If we don't have any id for the modal item, it will mean that we are in create mode.
  const mustClearAfterSave = !modalItem?.id;

  if (isLoading) {
    return <Spin />;
  }

  return (
    <>
      {topBar()}
      {content()}
      <FormModal
        noReuse={true}
        data={{ ooui: formOoui, view: views.get("form") }}
        model={relation}
        id={modalItem?.id}
        values={modalItem?.values}
        visible={showFormModal}
        onSubmitSucceed={onFormModalSubmitSucceed}
        onCancel={() => {
          setShowFormModal(false);
        }}
        readOnly={readOnly}
        mustClearAfterSave={mustClearAfterSave}
        postSaveAction={formModalPostSaveAction}
      />
    </>
  );
};

export { One2manyInput, One2manyItem };
