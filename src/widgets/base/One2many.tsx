import React, { useState, useEffect, useRef } from "react";
import { One2many as One2manyOoui } from "ooui";
import Field from "@/common/Field";
import { Button, Spin, Alert } from "antd";
import { Form } from "@/index";
import { Tree } from "@/index";
import { Form as FormOoui, Tree as TreeOoui } from "ooui";
import { TreeView, Views } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { FormModal } from "@/widgets/modals/FormModal";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import showRemoveItemDialog from "@/ui/RemoveItemDialog";
import {
  addOrUpdateItem,
  getTemporalIdNumber,
  getItemToUpdate,
} from "@/helpers/2manyHelper";

import {
  FileAddOutlined,
  SaveOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  LoadingOutlined,
} from "@ant-design/icons";

type Props = {
  ooui: One2manyOoui;
};

export const One2many = (props: Props) => {
  const { ooui } = props;
  return (
    <Field {...props}>
      <One2manyInput ooui={ooui} />
    </Field>
  );
};

export type Item = {
  operation: "original" | "create" | "modify" | "remove";
  id?: number;
  values?: any;
  touchedValues?: any;
};

interface One2ManyInputProps {
  ooui: One2manyOoui;
  value?: Array<Item>;
  onChange?: (value: any[]) => void;
}

const One2manyInput: React.FC<One2ManyInputProps> = (
  props: One2ManyInputProps
) => {
  const { value: items = [], onChange, ooui } = props;
  const itemsToShow = items.filter((item) => item.operation !== "remove");

  const formRef = useRef();

  const triggerChange = (changedValue: Array<Item>) => {
    onChange?.(changedValue);
  };

  const { readOnly, relation, views: oouiViews, mode } = ooui as One2manyOoui;

  const [views, setViews] = useState<Views>(new Map<string, any>());

  const [currentView, setCurrentView] = useState<string>("tree");
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<Item>();
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [ooui]);

  const fetchOriginalItemsFromApi = async (treeView: TreeView) => {
    const realItems: Item[] = items.filter(
      (item) => item.operation === "original" && item.id
    );
    const idsToFetch = realItems.map((item) => item.id) as number[];

    const values = await ConnectionProvider.getHandler().readObjects({
      arch: treeView.arch,
      model: relation,
      ids: idsToFetch,
    });

    const itemsWithValues = items.map((item) => {
      const fetchedItemValues = values.find((itemValues: any) => {
        console.log();
        return itemValues.id === item.id;
      });
      return { ...item, values: fetchedItemValues };
    });

    triggerChange(itemsWithValues);
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);
    setFormHasChanges(false);
    setFormIsSaving(false);

    try {
      if (mode && mode.length > 0) {
        setCurrentView(mode[0]);
      }

      const formView = await getViewData("form");
      const treeView = await getViewData("tree");
      views.set("form", formView);
      views.set("tree", treeView);
      setViews(views);

      await fetchOriginalItemsFromApi(treeView);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  const getViewData = async (type: "form" | "tree") => {
    if (oouiViews && oouiViews[type]) {
      return oouiViews[type];
    }
    return await ConnectionProvider.getHandler().getView(relation, type);
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
        onConfirmRemove();
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
        const newId = getTemporalIdNumber({
          ids: items.map((item) => item.id) as number[],
        });
        const updatedItems = addOrUpdateItem({
          itemToUpdate: {
            operation: "create",
            id: newId,
            values: { id: newId }, // We will have to remove this id inside values later
          },
          items,
        });

        triggerChange(updatedItems);

        const updatedItemsToShow = updatedItems.filter(
          (item) => item.operation !== "remove"
        );
        setItemIndex(updatedItemsToShow.length - 1);
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
      // If the item isn't a new one, we must add a new Item record with "remove" operation
      // in order to remove it from the API later.
      if (itemsToShow[itemIndex].operation !== "create") {
        const updatedItems = addOrUpdateItem({
          itemToUpdate: {
            operation: "remove",
            id: itemsToShow[itemIndex].id,
          },
          items,
        });

        triggerChange(updatedItems);
      }
      // If the item is a newly created one, we only have to remove it from the internal list
      else {
        triggerChange(
          items.filter((item) => item.id !== itemsToShow[itemIndex].id)
        );
      }
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
      <Button
        icon={icon}
        onClick={saveItem}
        disabled={!formHasChanges || formIsSaving || readOnly}
      />
    );
  };

  const getTitle = () => {
    const type = currentView === "form" ? FormOoui : TreeOoui;
    const ooui = new type(views.get(currentView).fields);
    ooui.parse(views.get(currentView).arch);
    return (ooui as any).string;
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

  const deleteButton = () => {
    if (currentView !== "form") {
      return null;
    }

    return (
      <Button
        icon={
          <DeleteOutlined
            onClick={showRemoveConfirm}
            disabled={itemsToShow.length === 0}
          />
        }
        disabled={readOnly}
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
        {separator()}
      </>
    );
  };

  const topBar = () => {
    return (
      <div className="flex mb-2">
        {title()}
        <div className="h-8 flex-none pl-2">
          <Button
            icon={<FileAddOutlined onClick={createItem} />}
            disabled={readOnly}
          />
          {separator()}
          {saveButton()}
          {deleteButton()}
          {itemBrowser()}
          <Button icon={<AlignLeftOutlined />} onClick={toggleViewMode} />
        </div>
      </div>
    );
  };

  const updateFormEvent = (event: any) => {
    const { id, touchedValues } = event;

    const itemToUpdate = getItemToUpdate({
      id,
      touchedValues,
      items,
    });

    const updatedItems = addOrUpdateItem({
      itemToUpdate,
      items,
    });

    triggerChange(updatedItems);
  };

  const onFormSubmitSucceed = (event: any) => {
    // TODO: must we save it to the API ?
    updateFormEvent(event);
    setFormIsSaving(false);
    setFormHasChanges(false);
  };

  const onFormModalSubmitSucceed = (event: any) => {
    const { id } = event;

    updateFormEvent(event);

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
      // If we have items to show, we return the proper value for the current item
      // Else, we set it to undefined, since it will be a new item
      const idToShow =
        itemsToShow.length > 0 ? itemsToShow[itemIndex].id : undefined;
      const valuesToShow =
        itemsToShow.length > 0 ? itemsToShow[itemIndex].values : undefined;

      return (
        <Form
          ref={formRef}
          model={relation}
          id={idToShow}
          values={valuesToShow}
          onCancel={() => {}}
          onSubmitSucceed={onFormSubmitSucceed}
          onSubmitError={() => {
            setFormIsSaving(false);
          }}
          onFieldsChange={() => {
            setFormHasChanges(true);
          }}
          readOnly={readOnly}
          submitMode={"values"}
        />
      );
    }

    return (
      <Tree
        total={itemsToShow.length}
        limit={itemsToShow.length}
        treeView={views.get("tree")}
        results={itemsToShow.map((item) => item.values)}
        loading={false}
        onRowClicked={onTreeRowClicked}
        showPagination={false}
      />
    );
  };

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  // If we are in create mode we have to show the modal in continuous mode.
  // This means the modal won't close after clicking OK, the modal will add the new item
  // and will reset to defaults to let the user add a new item.
  // If we don't have any id for the modal item, it will mean that we are in create mode.
  const mustClearAfterSave = !modalItem?.id;

  return (
    <>
      {topBar()}
      {content()}
      <FormModal
        model={relation}
        id={modalItem?.id}
        values={modalItem?.values}
        visible={showFormModal}
        onSubmitSucceed={onFormModalSubmitSucceed}
        onCancel={() => {
          setShowFormModal(false);
        }}
        readOnly={readOnly}
        submitMode={"values"} // The form will return the touched values and it won't be making any API calls
        mustClearAfterSave={mustClearAfterSave}
        showFooter={true}
      />
    </>
  );
};
