import React, { useCallback, useContext, useMemo, useRef } from "react";
import { One2manyInputProps } from "./One2many.types";
import {
  One2manyContext,
  One2manyContextType,
} from "@/context/One2manyContext";
import { One2manyTree } from "./One2manyTree";
import { One2many as One2manyOoui } from "@gisce/ooui";
import { FormContext, FormContextType } from "@/context/FormContext";
import { useOne2ManyDomain } from "./useOne2manyDomain";
import { useOne2manyTree } from "./useOne2manyTree";
import { One2manyTopBar } from "./One2manyTopBar";
import { ViewType } from "@/types";
import { useOne2manyForm } from "./useOne2manyForm";
import { useOne2manyItems } from "./useOne2manyItems";
import { One2manyForm } from "./One2manyForm";
import { One2manyItem } from "./One2manyInput";
import { useOne2manyRemove } from "./useOne2manyRemove";
import { InfiniteTableRef } from "@gisce/react-formiga-table";

const SUPPORTED_VIEWS = ["form", "tree", "graph"];

export const One2manyInput: React.FC<One2manyInputProps> = (
  props: One2manyInputProps,
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
  const { getContext } = formContext || {};

  const showToggleButton = views.size > 1;
  const showCreateButton = views.get("form")?.fields !== undefined;

  const context = useMemo(() => {
    return { ...getContext?.(), ...widgetContext };
  }, [getContext, widgetContext]);

  const domain = useOne2ManyDomain({
    widgetDomain,
    fieldName,
  });

  const { treeOoui, onTreeFetchRows, selectedRowKeys, setSelectedRowKeys } =
    useOne2manyTree({
      treeView: views.get("tree"),
      relation,
      context,
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

  const onRowClicked = useCallback(
    (item: any) => {
      const index = items.findIndex((i) => i.id === item.id);
      setItemIndex(index);
      setCurrentView("form");
    },
    [items, setCurrentView, setItemIndex],
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
        onCreateItem={() => {}}
        onToggleViewMode={toggleViewMode}
        onPreviousItem={onPreviousItem}
        onNextItem={onNextItem}
        onSearchItem={() => {}}
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
          onRowClicked={onRowClicked}
          onRowSelectionChange={setSelectedRowKeys}
          relation={relation}
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
      {/* TODO: Graph view */}
      {!SUPPORTED_VIEWS.includes(currentView) && (
        <span>Unsupported view {currentView}</span>
      )}
    </>
  );
};
