import React, { useCallback, useContext, useMemo } from "react";
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
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { useLocale } from "@gisce/react-formiga-components";

export const One2manyInput: React.FC<One2manyInputProps> = (
  props: One2manyInputProps,
) => {
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

  const context = useMemo(() => {
    return { ...getContext?.(), ...widgetContext };
  }, [getContext, widgetContext]);

  const domain = useOne2ManyDomain({
    widgetDomain,
    fieldName,
  });

  const { treeOoui, onTreeFetchRows } = useOne2manyTree({
    treeView: views.get("tree"),
    relation,
    context,
  });

  const { t } = useLocale();

  const title = useMemo(() => {
    const { title } = views.get(currentView) || {};
    return title || ooui.label;
  }, [currentView, ooui.label, views]);

  const isMany2many = ooui.type === "many2many";

  const {
    formHasChanges,
    setFormHasChanges,
    getOriginalItemsWithRestoredItemId,
  } = useOne2manyForm({
    items,
    formView: views.get("form"),
    treeView: views.get("tree"),
    relation,
    context,
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

  const showToggleButton = views.size > 1;
  const showCreateButton = views.get("form")?.fields !== undefined;

  const triggerChange = useCallback(
    (changedValues: One2manyItem[]) => {
      onChange?.({
        fields: views.get("form")?.fields || views.get("tree")?.fields,
        items: changedValues,
      });
    },
    [onChange, views],
  );

  const onFormChanges = useCallback(
    (newUpdatedItems: One2manyItem[]) => {
      setFormHasChanges(true);
      triggerChange(newUpdatedItems);
    },
    [setFormHasChanges, triggerChange],
  );

  const onRowClicked = useCallback(
    (item: any) => {
      // find the index of the item in the items array
      const index = items.findIndex((i) => i.id === item.id);
      setItemIndex(index);
      setCurrentView("form");
    },
    [items, setCurrentView, setItemIndex],
  );

  const reloadOriginalValuesForCurrentItem = useCallback(async () => {
    const { id } = items[itemIndex];
    if (!id) return;
    const originalItems = await getOriginalItemsWithRestoredItemId({ id });
    triggerChange(originalItems);
  }, [getOriginalItemsWithRestoredItemId, itemIndex, items, triggerChange]);

  const showFormChangesDialogIfNeeded = useCallback(
    (callback: () => void) => {
      if (formHasChanges) {
        showUnsavedChangesDialog({
          t,
          onOk: () => {
            reloadOriginalValuesForCurrentItem();
            callback();
            setFormHasChanges(false);
          },
        });
      } else {
        callback();
      }
    },
    [formHasChanges, reloadOriginalValuesForCurrentItem, setFormHasChanges, t],
  );

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
        onDelete={() => {}}
        onCreateItem={() => {}}
        onToggleViewMode={toggleViewMode}
        onPreviousItem={() => {}}
        onNextItem={() => {}}
        onSearchItem={() => {}}
        selectedRowKeys={[]}
        showCreateButton={showCreateButton}
        showToggleButton={showToggleButton}
      />
      {currentView === "tree" && (
        <One2manyTree
          items={items}
          readOnly={readOnly || false}
          onFetchRecords={onTreeFetchRows}
          ooui={treeOoui}
          context={context}
          onRowClicked={onRowClicked}
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
      {/* {currentView !== "tree" && ( */}
      {/*   <> */}
      {/*     <span style={{ fontWeight: "bold" }}> {currentView}</span> */}
      {/*     <Button */}
      {/*       onClick={() => { */}
      {/*         setCurrentView("tree"); */}
      {/*       }} */}
      {/*     > */}
      {/*       Change to tree */}
      {/*     </Button> */}
      {/*     <br /> */}
      {/*     {items.map((item) => { */}
      {/*       return JSON.stringify(item); */}
      {/*     })} */}
      {/*   </> */}
      {/* )} */}
    </>
  );
};
