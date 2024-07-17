import React, { useCallback, useContext, useMemo, useRef } from "react";
import { One2manyInputProps } from "./One2many.types";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { One2many as One2manyOoui } from "@gisce/ooui";
import { FormContext, FormContextType } from "@/context/FormContext";
import { useOne2ManyDomain } from "./useOne2manyDomain";
import { useOne2manyTree } from "./useOne2manyTree";
import { One2manyTopBar } from "./One2manyTopBar";
import { ViewType } from "@/types";
import { useOne2manyForm } from "./useOne2manyForm";
import { useOne2manyItems } from "./useOne2manyItems";
import { One2manyForm } from "./One2manyForm";
import { useOne2manyRemove } from "./useOne2manyRemove";
import { InfiniteTableRef } from "@gisce/react-formiga-table";
import { useDeepCompareCallback } from "use-deep-compare";
import { FormModal, SearchModal } from "@/index";
import { useOne2manyFormModal } from "./useOne2manyFormModal";
import { useOne2manySearchModal } from "./useOne2manySearchModal";
import { One2manyTree } from "./One2manyTree";
import "@gisce/react-formiga-table/style.css";
import { Graph } from "@/widgets/views/Graph/Graph";
import { useTreeAggregates } from "./useTreeAggregates";
import { useOne2manyTreeAggregates } from "./useOne2manyTreeAggregates";

const SUPPORTED_VIEWS = ["form", "tree", "graph"];

export type One2manyValue = {
  fields?: any;
  items: One2manyItem[];
};

export type One2manyItem = {
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

export type One2manyInputInfiniteProps = One2manyInputProps & {
  parentViewId?: number;
  treeViewId?: number;
};

export const One2manyInput: React.FC<One2manyInputInfiniteProps> = (
  props: One2manyInputInfiniteProps,
) => {
  const gridRef = useRef<InfiniteTableRef>(null);
  const { value, onChange, ooui, views } = props;
  const { items: one2manyItems = [] } = value || {};
  const items = useOne2manyItems({ one2manyItems });
  const { currentView, setCurrentView, itemIndex, setItemIndex } = useContext(
    One2manyContext,
  ) as One2manyContextType;
  const {
    readOnly,
    relation,
    context: widgetContext,
    domain: widgetDomain,
    id: fieldName,
  } = ooui as One2manyOoui;
  const formContext = useContext(FormContext) as FormContextType;
  const {
    activeId,
    getContext,
    fetchValues: fetchParentFormValues,
  } = formContext || {};

  const showToggleButton = views.size > 1;
  const showCreateButton = views.get("form")?.fields !== undefined;

  const context = useMemo(() => {
    return { ...getContext?.(), ...widgetContext };
  }, [getContext, widgetContext]);

  const domain = useOne2ManyDomain({
    widgetDomain,
    fieldName,
  });

  const {
    treeOoui,
    onTreeFetchRows,
    selectedRowKeys,
    setSelectedRowKeys,
    onChangeFirstVisibleRowIndex,
    onGetFirstVisibileRowIndex,
    onGetSelectedRowKeys,
    allRowSelectedMode,
    onChangeAllRowSelectedMode,
  } = useOne2manyTree({
    treeView: views.get("tree"),
    relation,
    context,
  });

  const aggregates = useOne2manyTreeAggregates({
    ooui: treeOoui,
    model: relation,
    items,
    selectedRowKeys,
  });

  const title = useMemo(() => {
    const { title } = views.get(currentView) || {};
    return title || ooui.label;
  }, [currentView, ooui.label, views]);

  const isMany2many = ooui.type === "many2many";

  const triggerChange = useCallback(
    (changedValues: One2manyItem[]) => {
      onChange?.({
        fields: views.get("form")?.fields || views.get("tree")?.fields,
        items: changedValues,
      });
    },
    [onChange, views],
  );

  const {
    formHasChanges,
    onFormChanges,
    showFormChangesDialogIfNeeded,
    setFormHasChanges,
  } = useOne2manyForm({
    items,
    formView: views.get("form"),
    treeView: views.get("tree"),
    relation,
    context,
    triggerChange,
  });

  const {
    showFormModal,
    modalItem,
    continuousEntryMode,
    onCancelFormModal,
    onFormModalSubmitSucceed,
    createItem,
    openItemInFormModal,
  } = useOne2manyFormModal({
    activeId,
    inv_field: ooui.inv_field,
    showFormChangesDialogIfNeeded,
    currentView,
    triggerChange,
    items,
    setCurrentView,
    setItemIndex,
    context,
    relation,
    formView: views.get("form"),
  });

  const {
    showSearchModal,
    onSelectSearchValues,
    onCloseSearchModal,
    searchItem,
  } = useOne2manySearchModal({
    showFormChangesDialogIfNeeded,
    currentView,
    triggerChange,
    items,
    views,
    context,
    relation,
  });

  const { showRemoveConfirm } = useOne2manyRemove({
    isMany2many,
    items,
    triggerChange,
    setFormHasChanges,
    selectedRowKeys,
    setSelectedRowKeys,
  });

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

  const onRowDoubleClick = useDeepCompareCallback(
    (item: any) => {
      if (!views.get("form")?.fields) return;
      openItemInFormModal(item);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items],
  );

  const onPreviousItem = useCallback(() => {
    if (itemIndex > 0) {
      if (currentView === "form") {
        showFormChangesDialogIfNeeded(() => {
          setItemIndex(itemIndex - 1);
        });
      } else {
        setItemIndex(itemIndex - 1);
      }
    }
  }, [currentView, itemIndex, setItemIndex, showFormChangesDialogIfNeeded]);

  const onNextItem = useCallback(() => {
    const totalItems = items.length;
    if (itemIndex < totalItems - 1) {
      if (currentView === "form") {
        showFormChangesDialogIfNeeded(() => {
          setItemIndex(itemIndex + 1);
        });
      } else {
        setItemIndex(itemIndex + 1);
      }
    }
  }, [
    currentView,
    itemIndex,
    items.length,
    setItemIndex,
    showFormChangesDialogIfNeeded,
  ]);

  return (
    <>
      <One2manyTopBar
        mode={currentView}
        title={title}
        readOnly={readOnly || false}
        isMany2Many={isMany2many}
        formHasChanges={formHasChanges}
        totalItems={items.length}
        currentItemIndex={itemIndex}
        onDelete={showRemoveConfirm}
        onCreateItem={createItem}
        onToggleViewMode={toggleViewMode}
        onPreviousItem={onPreviousItem}
        onNextItem={onNextItem}
        onSearchItem={searchItem}
        selectedRowKeys={selectedRowKeys}
        showCreateButton={showCreateButton}
        showToggleButton={showToggleButton}
      />
      {currentView === "tree" && (
        <One2manyTree
          gridRef={gridRef}
          items={items}
          readOnly={readOnly || false}
          onFetchRecords={onTreeFetchRows}
          ooui={treeOoui}
          context={context}
          onRowDoubleClick={onRowDoubleClick}
          onRowSelectionChange={setSelectedRowKeys}
          relation={relation}
          onChangeFirstVisibleRowIndex={onChangeFirstVisibleRowIndex}
          onGetFirstVisibleRowIndex={onGetFirstVisibileRowIndex}
          onGetSelectedRowKeys={onGetSelectedRowKeys}
          allRowSelectedMode={allRowSelectedMode}
          onAllRowSelectedModeChange={onChangeAllRowSelectedMode}
          dataForHash={{
            parentViewId: props.parentViewId,
            treeViewId: props.treeViewId,
            one2ManyFieldName: fieldName,
          }}
          aggregates={aggregates}
        />
      )}
      {currentView === "form" && (
        <One2manyForm
          items={items}
          formView={views.get("form")}
          context={context}
          relation={relation}
          readOnly={readOnly || false}
          onChange={onFormChanges}
        />
      )}
      <FormModal
        formView={views.get("form")}
        model={relation}
        id={modalItem?.id}
        submitMode={"2many"}
        values={modalItem?.values}
        defaultValues={modalItem?.defaultValues}
        visible={showFormModal}
        onSubmitSucceed={onFormModalSubmitSucceed}
        parentContext={context}
        onCancel={onCancelFormModal}
        readOnly={readOnly}
        mustClearAfterSave={continuousEntryMode}
        onMustRefreshParent={() => {
          fetchParentFormValues?.({ forceRefresh: true });
        }}
      />
      <SearchModal
        domain={domain}
        model={relation}
        context={context}
        visible={showSearchModal}
        onSelectValues={onSelectSearchValues}
        onCloseModal={onCloseSearchModal}
      />
      {currentView === "graph" && (
        <Graph
          view_id={views.get("graph").view_id}
          model={relation}
          domain={[[`${ooui.inv_field}`, "=", activeId]]}
          context={context}
          limit={0}
        />
      )}
      {!SUPPORTED_VIEWS.includes(currentView) && (
        <span>Unsupported view {currentView}</span>
      )}
    </>
  );
};
