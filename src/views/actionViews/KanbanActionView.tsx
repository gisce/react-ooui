import { Fragment, useCallback, useState, memo, useMemo, useRef } from "react";
import { FormView, KanbanView, TreeView, View, ViewType } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import TreeActionBar from "@/actionbar/TreeActionBar";
import { KanbanComponent, KanbanRef } from "@/widgets/views/Kanban/Kanban";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useTabs } from "@/context/TabManagerContext";
import { KanbanRecord, ColumnDefinition } from "@/widgets/views/Kanban/types";
import { Kanban } from "@gisce/ooui";
import { SearchTreeHeader } from "@/widgets/views/SearchTreeHeader";
import { SideSearchFilter } from "@/widgets/views/searchFilter/SideSearchFilter";
import { NameSearchWarning } from "@/widgets/views/Tree/NameSearchWarning";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";
import { useActionViewSavedSearches } from "@/hooks/useActionViewSavedSearches";
import { useMultiSelect } from "@/hooks/useMultiSelect";
import { normalizeColumnValue } from "@/helpers/kanbanHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { ACTION_TYPE_WINDOW } from "@/models/constants";
import { FormSidePanel } from "@/widgets/modals/FormSidePanel";
import { FormModal } from "@/widgets/modals/FormModal";

const HEIGHT_OFFSET = 10;

export type KanbanActionViewProps = {
  kanbanView: KanbanView;
  visible: boolean;
  model: string;
  domain: any;
  context: any;
  availableViews: View[];
  viewRef: any;
};

const KanbanActionViewComponent = (props: KanbanActionViewProps) => {
  const {
    visible,
    kanbanView,
    model,
    context,
    domain,
    availableViews,
    viewRef,
  } = props;

  const { setViewIsLoading, title } = useActionViewContext();
  const { openAction } = useTabs();
  const { t } = useLocale();

  const {
    searchVisible,
    setSearchVisible,
    selectedRowItems,
    setSelectedRowItems,
    searchParams,
    setSearchParams,
    searchValues,
    setSearchValues,
    searchTreeNameSearch,
    setSearchTreeNameSearch,
  } = useSearchTreeState({ useLocalState: false });

  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<
    KanbanRecord | undefined
  >();
  const [creatingInColumn, setCreatingInColumn] =
    useState<ColumnDefinition | null>(null);
  const [totalRows, setTotalRows] = useState<number | null>(null);

  const kanbanRef = viewRef as React.RefObject<KanbanRef>;
  const containerRef = useRef<HTMLDivElement>(null);
  const titleHeaderRef = useRef<HTMLDivElement>(null);
  const searchHeaderRef = useRef<HTMLDivElement>(null);
  const columnRecordIdsRef = useRef<Record<string, number[]>>({});
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
    dependencies: [searchHeaderRef.current],
    observedRefs: [titleHeaderRef, searchHeaderRef],
  });

  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
      minHeight: `${availableHeight}px`,
      maxHeight: `${availableHeight}px`,
    }),
    [availableHeight],
  );

  const kanbanColumnField = useMemo(() => {
    if (!kanbanView.arch || !kanbanView.fields) {
      return null;
    }
    try {
      const kanban = new Kanban(kanbanView.fields);
      kanban.parse(kanbanView.arch);
      return kanban.column_field;
    } catch {
      return null;
    }
  }, [kanbanView.arch, kanbanView.fields]);

  const getColumnIdFromValue = useCallback(
    (value: any, fieldName: string | null): string | null => {
      if (value === null || value === undefined || !fieldName) {
        return null;
      }

      const fieldDef = kanbanView.fields?.[fieldName];
      if (!fieldDef) {
        return null;
      }

      const normalized = normalizeColumnValue(value, fieldDef, t);
      return normalized?.id ?? null;
    },
    [kanbanView.fields, t],
  );

  const handleCardClick = useCallback((record: KanbanRecord) => {
    setSelectedRecord(record);
    setShowFormModal(true);
  }, []);

  const handleColumnRecordIdsChange = useCallback(
    (columnId: string, recordIds: number[]) => {
      columnRecordIdsRef.current[columnId] = recordIds;
    },
    [],
  );

  const getOrderedIds = useCallback((itemId: number): number[] | null => {
    for (const ids of Object.values(columnRecordIdsRef.current)) {
      if (ids.includes(itemId)) {
        return ids;
      }
    }
    return null;
  }, []);

  const { handleSelect, clearSelection } = useMultiSelect({
    selectedItems: selectedRowItems || [],
    setSelectedItems: setSelectedRowItems || (() => {}),
    getOrderedIds,
  });

  const handleCardSelect = useCallback(
    (
      record: KanbanRecord,
      _columnId: string,
      modifiers: { isCtrlCmd: boolean; isShift: boolean },
    ) => {
      handleSelect({ id: record.id }, modifiers);
    },
    [handleSelect],
  );

  const handleContainerClick = useCallback(
    (e: React.MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(".ant-card")) {
        return;
      }
      clearSelection();
    },
    [clearSelection],
  );

  const handleAddCard = useCallback((column: ColumnDefinition) => {
    setCreatingInColumn(column);
    setSelectedRecord(undefined);
    setShowFormModal(true);
  }, []);

  const handleCardValuesChanged = useCallback(
    (id?: number | string, values?: any, oldRecord?: KanbanRecord) => {
      if (!id || !values || !oldRecord) {
        return;
      }

      if (kanbanColumnField) {
        const oldColumnValue = oldRecord[kanbanColumnField];
        const newColumnValue = values[kanbanColumnField];

        if (newColumnValue !== undefined && oldColumnValue !== newColumnValue) {
          const oldColumnId = getColumnIdFromValue(
            oldColumnValue,
            kanbanColumnField,
          );
          const newColumnId = getColumnIdFromValue(
            newColumnValue,
            kanbanColumnField,
          );

          if (oldColumnId && newColumnId) {
            const columnsToRefresh =
              oldColumnId === newColumnId
                ? [oldColumnId]
                : [oldColumnId, newColumnId];
            kanbanRef.current?.refreshColumns(columnsToRefresh);
          } else {
            kanbanRef.current?.refreshResults();
          }
          return;
        }
      }

      kanbanRef.current?.refreshResults();
    },
    [kanbanColumnField, getColumnIdFromValue, kanbanRef],
  );

  const onCancelFormModal = useCallback(
    (params?: { id?: number | string; values?: any }) => {
      setShowFormModal(false);
      const oldRecord = selectedRecord;
      setSelectedRecord(undefined);
      setCreatingInColumn(null);
      handleCardValuesChanged(params?.id, params?.values, oldRecord);
    },
    [selectedRecord, handleCardValuesChanged],
  );

  const onFormModalSubmitSucceed = useCallback(
    (id?: number | string, values?: any) => {
      setShowFormModal(false);

      if (creatingInColumn && kanbanColumnField) {
        kanbanRef.current?.refreshColumns([creatingInColumn.id]);
        setCreatingInColumn(null);
      } else {
        const oldRecord = selectedRecord;
        setSelectedRecord(undefined);
        handleCardValuesChanged(id, values, oldRecord);
      }
    },
    [
      creatingInColumn,
      kanbanColumnField,
      kanbanRef,
      selectedRecord,
      handleCardValuesChanged,
    ],
  );

  const handleTotalRowsChange = useCallback((total: number) => {
    setTotalRows(total);
  }, []);

  const { fetchSavedSearches, handleClearSavedSearch, subtitle } =
    useActionViewSavedSearches({
      model,
      context,
      viewRef: kanbanRef,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
    });

  const onSideSearchFilterClose = useCallback(
    () => setSearchVisible?.(false),
    [setSearchVisible],
  );

  const onSideSearchFilterSubmit = useCallback(
    ({ params, values, closeSidebar = true }: any) => {
      setSelectedRowItems?.([]);
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(values);
      if (closeSidebar) {
        setSearchVisible?.(false);
      }
    },
    [
      setSelectedRowItems,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
    ],
  );

  const onSideSearchFilterClear = useCallback(() => {
    setSearchParams?.([]);
    setSearchValues?.({});
    setSearchVisible?.(false);
  }, [setSearchParams, setSearchValues, setSearchVisible]);

  const handleOpenColumnInNewTab = useCallback(
    (columnDomain: any[]) => {
      const views = availableViews.map(
        (v) => [v.view_id, v.type] as [number, ViewType],
      );
      const treeViewEntry = views.find((v) => v[1] === "tree");

      openAction({
        model,
        domain: columnDomain,
        context,
        views,
        title,
        target: "current",
        initialView: { id: treeViewEntry?.[0] ?? 0, type: "tree" },
        action_id: (kanbanView as any).extra?.action_id ?? -1,
        action_type:
          (kanbanView as any).extra?.action_type ?? ACTION_TYPE_WINDOW,
      });
    },
    [model, context, availableViews, title, kanbanView, openAction],
  );

  const selectedRowItemsRef = useRef(selectedRowItems);
  selectedRowItemsRef.current = selectedRowItems;

  const handleSelectAllInColumn = useCallback(
    (columnId: string) => {
      const columnRecordIds = columnRecordIdsRef.current[columnId] || [];
      const currentSelectedIds = new Set(
        (selectedRowItemsRef.current || []).map(
          (item: { id: number }) => item.id,
        ),
      );
      columnRecordIds.forEach((id) => currentSelectedIds.add(id));
      const mergedItems = Array.from(currentSelectedIds).map((id) => ({ id }));
      setSelectedRowItems?.(mergedItems);
    },
    [setSelectedRowItems],
  );

  const formView = useMemo(
    () => availableViews.find((v) => v.type === "form") as FormView,
    [availableViews],
  );

  const treeView = useMemo(
    () => availableViews.find((v) => v.type === "tree") as TreeView | undefined,
    [availableViews],
  );

  const sideSearchFilterProps = useMemo(
    () => ({
      isOpen: searchVisible || false,
      fields: {
        ...formView?.fields,
        ...treeView?.fields,
        ...kanbanView?.fields,
      },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
        kanbanView?.search_fields,
      ]),
      searchValues,
      currentModel: model,
      context,
    }),
    [
      searchVisible,
      formView,
      treeView,
      kanbanView,
      searchValues,
      model,
      context,
    ],
  );

  const selectedRowKeys = useMemo(() => {
    return selectedRowItems?.map((item: any) => item.id) || [];
  }, [selectedRowItems]);

  const shouldShowNameSearchWarning =
    searchTreeNameSearch && totalRows !== undefined && totalRows !== null;

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <SideSearchFilter
        {...sideSearchFilterProps}
        onClose={onSideSearchFilterClose}
        onSubmit={onSideSearchFilterSubmit}
        onClear={onSideSearchFilterClear}
      />
      <div ref={titleHeaderRef}>
        <TitleHeader showSummary={false} subtitle={subtitle}>
          <TreeActionBar
            domain={domain}
            toolbar={kanbanView.toolbar}
            parentContext={context}
            treeExpandable={false}
            onRefetchSavedSearches={fetchSavedSearches}
            onClearSavedSearch={handleClearSavedSearch}
          />
        </TitleHeader>
      </div>
      <div ref={searchHeaderRef}>
        <SearchTreeHeader
          selectedRowKeys={selectedRowKeys}
          totalRows={totalRows}
          onClearSelection={clearSelection}
          customMiddleComponent={
            shouldShowNameSearchWarning ? (
              <NameSearchWarning
                onFilterSearchClick={() => setSearchVisible?.(true)}
              />
            ) : undefined
          }
        />
      </div>
      <div
        ref={containerRef}
        style={containerStyle}
        onClick={handleContainerClick}
      >
        <KanbanComponent
          ref={kanbanRef}
          kanbanView={kanbanView}
          model={model}
          domain={domain}
          context={context}
          searchParams={searchParams || []}
          nameSearch={searchTreeNameSearch}
          onCardClick={handleCardClick}
          onCardSelect={handleCardSelect}
          onColumnRecordIdsChange={handleColumnRecordIdsChange}
          selectedCardIds={selectedRowKeys}
          onLoadingChange={setViewIsLoading}
          onTotalRowsChange={handleTotalRowsChange}
          onAddCardClick={handleAddCard}
          onDragStart={clearSelection}
          onOpenColumnInNewTab={handleOpenColumnInNewTab}
          onSelectAllInColumn={handleSelectAllInColumn}
        />
      </div>
      {formView && (
        <FormModal
          formView={formView}
          model={model}
          id={creatingInColumn ? undefined : selectedRecord?.id}
          visible={showFormModal}
          onSubmitSucceed={onFormModalSubmitSucceed}
          parentContext={context}
          onCancel={onCancelFormModal}
          defaultValues={
            creatingInColumn && kanbanColumnField
              ? { [kanbanColumnField]: creatingInColumn.originalValue }
              : undefined
          }
        />
      )}
    </Fragment>
  );
};

export const KanbanActionView = memo(KanbanActionViewComponent);
