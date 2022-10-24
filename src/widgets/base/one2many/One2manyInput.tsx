import React, { useState, useRef, useContext, useEffect } from "react";
import { One2many as One2manyOoui } from "@gisce/ooui";
import { Alert, Spin } from "antd";
import { Form } from "@/index";
import { Tree } from "@/index";
import { Graph } from "@/widgets/views/Graph/Graph";
import {
  Form as FormOoui,
  Tree as TreeOoui,
  parseGraph,
  transformDomainForChildWidget,
} from "@gisce/ooui";
import { Views, ViewType } from "@/types";
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
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { sortResults } from "@/helpers/treeHelper";
import { transformPlainMany2Ones } from "@/helpers/formHelper";

type One2manyValue = {
  fields?: any;
  items: Array<One2manyItem>;
};

const ViewObjects = {
  form: FormOoui,
  tree: TreeOoui,
  graph: Graph,
};

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
  value?: One2manyValue;
  onChange?: (value: One2manyValue) => void;
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
  const { value, onChange, ooui, views } = props;
  const { items = [] } = value || {};

  const { currentView, setCurrentView, itemIndex, setItemIndex } = useContext(
    One2manyContext
  ) as One2manyContextType;

  const formContext = useContext(FormContext) as FormContextType;
  const { activeId, getFields, getValues, getContext, domain } =
    formContext || {};
  const { lang, t } = useContext(LocaleContext) as LocaleContextType;

  const formRef = useRef();
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [modalItem, setModalItem] = useState<One2manyItem>();
  const [selectedRowKeys, setSelectedRowKeys] = useState<any[]>([]);
  const [continuousEntryMode, setContinuousEntryMode] =
    useState<boolean>(false);
  const transformedDomain = useRef<any[]>([]);
  const [sorter, setSorter] = useState<any>();
  const originalSortItemIds = useRef<number[]>();

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

  useEffect(() => {
    if (items.some((item) => !item.values)) {
      fetchData();
    }
  }, [items]);

  useEffect(() => {
    parseDomain();
  }, [domain]);

  const triggerChange = (changedValue: Array<One2manyItem>) => {
    onChange?.({
      fields: views.get("form")?.fields || views.get("tree")?.fields,
      items: filterDuplicateItems(changedValue),
    });
  };

  const fetchData = async () => {
    await fetchOriginalItemsFromApi();
    if (itemIndex > itemsToShow.length - 1 && itemIndex !== 0) {
      setItemIndex(0);
    }
  };

  const fetchOriginalItemsFromApi = async () => {
    setIsLoading(true);
    setFormHasChanges(false);
    setError(undefined);

    try {
      const itemsWithValues = await readObjectValues({
        treeFields: views.get("tree").fields,
        formFields: views.get("form")?.fields || {},
        model: relation,
        items,
        context: { ...getContext?.(), ...context },
      });

      if (!originalSortItemIds.current) {
        originalSortItemIds.current = itemsWithValues.map((item) => item.id!);
      }

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
          values: transformPlainMany2Ones({
            fields: getFields(),
            values: getValues(),
          }),
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
    const keys = Array.from(views.keys());
    const nextView = keys[
      (keys.indexOf(currentView) + 1) % keys.length
    ] as ViewType;
    if (currentView === "form") {
      showFormChangesDialogIfNeeded(() => {
        setCurrentView(nextView);
      });
    } else {
      setCurrentView(nextView);
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
        model: relation,
        ids: [currentId],
        fields: views.get("form").fields,
        context: { ...getContext?.(), ...context },
      })
    )[0];
    const updatedTreeObject = (
      await ConnectionProvider.getHandler().readObjects({
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

  const onTreeRowClicked = (record: any) => {
    const { id: itemId } = record;
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
            model: relation,
            ids: [id],
            fields: views.get("form").fields,
            context: { ...getContext?.(), ...context },
          })
        )[0];
        const updatedTreeObject = (
          await ConnectionProvider.getHandler().readObjects({
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

      triggerChange(updatedItems);
    } catch (e) {
      setError(e as any);
    } finally {
      setIsLoading(false);
    }
  };

  // TODO: improve this. Do we really have to parse the entire object just to get the title?
  function getTitle() {
    const ViewType: any = (ViewObjects as any)[currentView];
    if (currentView === "graph") {
      const parsedGraph = parseGraph(views.get("graph").arch);
      return parsedGraph.string!;
    } else {
      const ooui = new ViewType(views.get(currentView).fields);
      ooui.parse(views.get(currentView).arch);
      return ooui.string!;
    }
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

    const resultsToShow = sorter
      ? sortResults({
          resultsToSort: itemsToShow.map((item) => item.treeValues),
          sorter,
          fields: {
            ...views.get("tree").fields,
            ...(views.get("form")?.fields || {}),
          },
        })
      : itemsToShow.map((item) => item.treeValues);

    if (currentView === "tree") {
      return (
        <Tree
          total={itemsToShow.length}
          limit={itemsToShow.length}
          treeView={views.get("tree")}
          results={resultsToShow}
          loading={isLoading}
          onRowClicked={
            views.get("form")?.fields !== undefined
              ? onTreeRowClicked
              : undefined
          }
          showPagination={false}
          rowSelection={{
            selectedRowKeys,
            onChange: setSelectedRowKeys,
          }}
          sorter={sorter}
          onChangeSort={setSorter}
        />
      );
    }
    if (currentView === "graph") {
      const domain = [[`${ooui.inv_field}`, "=", activeId]];
      return (
        <Graph
          view_id={views.get("graph").view_id}
          model={ooui.relation}
          domain={domain}
          context={{ ...getContext?.(), ...context }}
          limit={0}
        />
      );
    }
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
        showCreateButton={views.get("form")?.fields !== undefined}
        showToggleButton={views.size > 1}
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

export { One2manyInput, One2manyItem, One2manyValue };
