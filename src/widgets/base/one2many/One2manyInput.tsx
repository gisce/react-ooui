import React, { useState, useRef, useContext, useEffect } from "react";
import { One2many as One2manyOoui } from "ooui";
import { Alert, Spin } from "antd";
import { Form } from "@/index";
import { Tree } from "@/index";
import {
  Form as FormOoui,
  Tree as TreeOoui,
  transformDomainForChildWidget,
} from "ooui";
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
import { readObjectValues, getNextPendingId } from "@/helpers/one2manyHelper";
import { SearchModal } from "@/widgets/modals/SearchModal";
import useDeepCompareEffect from "use-deep-compare-effect";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type One2manyItem = {
  operation?:
    | "original"
    | "pendingRemove"
    | "pendingUpdate"
    | "pendingCreate"
    | "pendingLink";
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

function filterDuplicateItems(items: any) {
  const ids = items.map((o: any) => o.id);
  const filtered = items.filter((item: any, index: number) => {
    const { id } = item;
    return !ids.includes(id, index + 1);
  });
  return filtered;
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
  const { activeId, getValues, getContext, domain } = formContext || {};
  const { lang, t } = useContext(LocaleContext) as LocaleContextType;

  const formRef = useRef();
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<One2manyItem>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [continuousEntryMode, setContinuousEntryMode] = useState<boolean>(
    false
  );
  const transformedDomain = useRef<any[]>([]);

  const {
    readOnly,
    relation,
    context,
    domain: widgetDomain,
  } = ooui as One2manyOoui;
  const isMany2many = ooui.type === "many2many";
  const { id: fieldName } = ooui;
  const itemsToShow = items.filter(
    (item) => item.values && item.operation !== "pendingRemove"
  );

  useDeepCompareEffect(() => {
    fetchData();
  }, [items]);

  useEffect(() => {
    parseDomain();
  }, [domain]);

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    setManualTriggerChange(true);
    onChange?.(filterDuplicateItems(changedValue));
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
        context: { ...getContext?.(), ...context },
      });

      triggerChange(itemsWithValues);
    } catch (err) {
      setError(err as any);
    } finally {
      setIsLoading(false);
    }
  };

  async function parseDomain() {
    if (widgetDomain) {
      transformedDomain.current = transformDomainForChildWidget({
        domain: await ConnectionProvider.getHandler().evalDomain({
          domain: widgetDomain,
          values: getValues(),
          context: getContext(),
        }),
        widgetFieldName: fieldName,
      });
    }

    if (domain && domain.length > 0) {
      transformedDomain.current = transformedDomain.current.concat(
        transformDomainForChildWidget({
          domain,
          widgetFieldName: fieldName,
        })
      );
    }
  }

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

  const reloadOriginalValuesForFormItem = async () => {
    const currentId = itemsToShow[itemIndex].id!;

    const updatedFormObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("form").arch,
        model: relation,
        ids: [currentId],
        fields: views.get("form").fields,
        context: { ...getContext?.(), ...context },
      })
    )[0];
    const updatedTreeObject = (
      await ConnectionProvider.getHandler().readObjects({
        arch: views.get("tree").arch,
        model: relation,
        ids: [currentId],
        fields: views.get("tree").fields,
        context: { ...getContext?.(), ...context },
      })
    )[0];

    const updatedItems: One2manyItem[] = items.map((item) => {
      if (item.id === currentId) {
        return {
          ...item,
          operation: "original",
          values: updatedFormObject,
          treeValues: updatedTreeObject,
        };
      }
      return item;
    });

    triggerChange(updatedItems);
  };

  const showFormChangesDialogIfNeeded = (callback: () => void) => {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        lang,
        onOk: () => {
          reloadOriginalValuesForFormItem();
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
        lang,
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
      lang,
      onOk: () => {
        if (currentView === "form") {
          removeCurrentItem();
        } else {
          removeSelectedItems();
        }
      },
    });
  };

  const createItem = async () => {
    const { inv_field } = ooui;
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
      if (itemsToShow[itemIndex].id! > 0) {
        const updatedItems = items.map((item) => {
          if (item.id === itemsToShow[itemIndex].id!) {
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
        triggerChange(
          items.filter((item) => item.id !== itemsToShow[itemIndex].id!)
        );
      }
    } catch (err) {
      setError(err as any);
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
    } catch (err) {
      setError(err as any);
    }

    setItemIndex(0);
    setIsLoading(false);
  };

  // This is the callback called when a modal is done creating/updating the object
  const onFormModalSubmitSucceed = (
    id: number | undefined,
    _: any,
    values: any
  ) => {
    let updatedItems: One2manyItem[];

    if (id) {
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
  };

  const onTreeRowClicked = (itemId: number) => {
    // We show the detail for the clicked item in a Form modal
    setModalItem(items.find((item) => item.id === itemId));
    setContinuousEntryMode(false);
    setShowFormModal(true);
  };

  const onSearchModalSelectValue = async (ids: number[]) => {
    setIsLoading(true);

    let updatedItems = items;
    const filteredIds = ids.filter((id) => {
      return !items.find((item) => item.id === id);
    });

    try {
      for (const id of filteredIds) {
        const updatedFormObject = (
          await ConnectionProvider.getHandler().readObjects({
            arch: views.get("form").arch,
            model: relation,
            ids: [id],
            fields: views.get("form").fields,
            context: { ...getContext?.(), ...context },
          })
        )[0];
        const updatedTreeObject = (
          await ConnectionProvider.getHandler().readObjects({
            arch: views.get("tree").arch,
            model: relation,
            ids: [id],
            fields: views.get("tree").fields,
            context: { ...getContext?.(), ...context },
          })
        )[0];
        updatedItems.push({
          id,
          operation: "pendingLink",
          values: updatedFormObject,
          treeValues: updatedTreeObject,
        });
      }

      onChange?.(updatedItems);
    } catch (e) {
      setError(e as any);
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
        return t("noCurrentEntries");
      }

      return (
        <Form
          formView={views.get("form")}
          values={itemsToShow[itemIndex]?.values}
          parentContext={{ ...getContext?.(), ...context }}
          ref={formRef}
          model={relation}
          id={itemsToShow[itemIndex]?.id}
          submitMode={"values"}
          onFieldsChange={(values: any) => {
            const currentItemId = itemsToShow[itemIndex]?.id;

            const updatedItems = items.map((item) => {
              if (item.id === currentItemId) {
                return {
                  ...item,
                  operation:
                    item.operation === "original"
                      ? "pendingUpdate"
                      : item.operation,
                  values: { ...values, id: currentItemId },
                  treeValues: { ...values, id: currentItemId },
                };
              }
              return item;
            });

            triggerChange(updatedItems);

            setFormHasChanges(true);
          }}
          readOnly={readOnly}
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
        totalItems={itemsToShow.length}
        currentItemIndex={itemIndex}
        onDelete={showRemoveConfirm}
        onCreateItem={createItem}
        onToggleViewMode={toggleViewMode}
        onPreviousItem={previousItem}
        onNextItem={nextItem}
        onSearchItem={searchItem}
        selectedRowKeys={selectedRowKeys}
      />
      {content()}
      <FormModal
        formView={views.get("form")}
        model={relation}
        id={modalItem?.id}
        submitMode={"values"}
        values={modalItem?.values}
        defaultValues={modalItem?.defaultValues}
        visible={showFormModal}
        onSubmitSucceed={onFormModalSubmitSucceed}
        parentContext={{ ...getContext?.(), ...context }}
        onCancel={() => {
          setContinuousEntryMode(false);
          setShowFormModal(false);
        }}
        readOnly={readOnly}
        mustClearAfterSave={mustClearAfterSave}
      />
      <SearchModal
        domain={transformedDomain.current}
        model={relation}
        context={{ ...getContext?.(), ...context }}
        visible={showSearchModal}
        onSelectValues={async (ids: number[]) => {
          setShowSearchModal(false);
          onSearchModalSelectValue(ids);
        }}
        onCloseModal={() => {
          setShowSearchModal(false);
        }}
      />
    </>
  );
};

export { One2manyInput, One2manyItem };
