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
import { Button } from "antd";
import { useOne2manyTree } from "./useOne2manyTree";
import { One2manyTopBar } from "./One2manyTopBar";
import { ViewType } from "@/types";
import { useOne2manyForm } from "./useOne2manyForm";

export const One2manyInput: React.FC<One2manyInputProps> = (
  props: One2manyInputProps,
) => {
  const { value, onChange, ooui, views } = props;
  const { items = [] } = value || {};
  const { currentView, setCurrentView } = useContext(
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

  const title = useMemo(() => {
    const { title } = views.get(currentView) || {};
    return title || ooui.label;
  }, [currentView, ooui.label, views]);

  const isMany2many = ooui.type === "many2many";

  const { formHasChanges } = useOne2manyForm();

  const toggleViewMode = useCallback(() => {
    const keys = Array.from(views.keys());
    const nextView = keys[
      (keys.indexOf(currentView) + 1) % keys.length
    ] as ViewType;
    setCurrentView(nextView);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentView, views]);
  const showToggleButton = views.size > 1;
  const showCreateButton = views.get("form")?.fields !== undefined;

  return (
    <>
      <One2manyTopBar
        mode={currentView}
        title={title}
        readOnly={readOnly || false}
        isMany2Many={isMany2many}
        formHasChanges={formHasChanges}
        totalItems={items.length}
        currentItemIndex={0}
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
          onRowClicked={() => {}}
        />
      )}
      {currentView !== "tree" && (
        <>
          <span style={{ fontWeight: "bold" }}> {currentView}</span>
          <Button
            onClick={() => {
              setCurrentView("tree");
            }}
          >
            Change to tree
          </Button>
          <br />
          {items.map((item) => {
            return JSON.stringify(item);
          })}
        </>
      )}
    </>
  );
};
