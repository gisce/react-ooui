import {
  ColumnState,
  InfiniteTable,
  InfiniteTableRef,
  PaginatedTableRef,
  SortDirection,
  CheckboxState,
} from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInputLegacy";
import { Tree as TreeOoui } from "@gisce/ooui";
import { RefObject, useCallback, useMemo, useRef, useState } from "react";
import { getSortedFieldsFromState, getTableItems } from "@/helpers/treeHelper";
import { useDeepCompareEffect, useDeepCompareMemo } from "use-deep-compare";
import { TreeAggregates, useSharedAggregates } from "./useTreeAggregates";
import { Spin } from "antd";
import {
  One2manyTreeDataForHash,
  getKey,
} from "@/helpers/o2m-columnStorageHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { TreeType } from "@/views/actionViews/TreeActionView";
import { StablePaginatedTableComponent } from "@/widgets/views/Tree/Paginated/components/PaginatedTableComponent";
import { OnRowClickedData } from "@/widgets/views/Tree/Paginated/SearchTreePaginated.types";
import { ConnectionProvider } from "@/index";
import { TreeView } from "@/types";
import { useTableCore } from "@/hooks/useTableCore";
import { useTreeSharedHooks } from "@/hooks/useTreeSharedHooks";
import { CellRenderer } from "@/widgets/views/Tree/CellRenderer";
import { useCallbackRef } from "@/hooks/useCallbackRef";

export type One2manyTreeProps = {
  items: One2manyItem[];
  onRowDoubleClick?: (record: any) => void;
  readOnly: boolean;
  height?: number;
  ooui: TreeOoui;
  treeView?: TreeView;
  context: any;
  onFetchRecords: ({
    allItems,
    startRow,
    endRow,
    sortFields,
  }: {
    allItems: One2manyItem[];
    startRow: number;
    endRow: number;
    sortFields?: Record<string, SortDirection>;
  }) => Promise<{
    results: any[];
    colors: { [key: number]: string };
    status: { [key: number]: string };
  }>;
  onRowSelectionChange: (selectedIds: number[]) => void;
  gridRef?: React.RefObject<InfiniteTableRef>;
  relation: string;
  onChangeFirstVisibleRowIndex?: (index: number) => void;
  onGetFirstVisibleRowIndex?: () => number | undefined;
  onSelectionCheckboxClicked?: () => void;
  dataForHash: One2manyTreeDataForHash;
  aggregates?: TreeAggregates;
  selectedRowKeys?: number[];
  showPointerCursorInRows?: boolean;
  treeType: TreeType;
  onChangeTreeType?: (type: TreeType) => void;
};

const DEFAULT_HEIGHT = 400;

export const One2manyTree = ({
  items,
  height,
  onRowDoubleClick,
  readOnly,
  ooui,
  treeView,
  context,
  onFetchRecords,
  onRowSelectionChange,
  gridRef,
  relation,
  onChangeFirstVisibleRowIndex,
  onGetFirstVisibleRowIndex: onGetFirstVisibleRowIndexProp,
  onSelectionCheckboxClicked,
  dataForHash,
  aggregates,
  selectedRowKeys = [],
  showPointerCursorInRows = true,
  treeType,
  onChangeTreeType,
}: One2manyTreeProps) => {
  const internalGridRef = useRef<InfiniteTableRef | PaginatedTableRef>(null);
  const tableRef: RefObject<InfiniteTableRef | PaginatedTableRef> =
    gridRef || internalGridRef;

  const prevItemsValue = useRef<One2manyItem[]>();
  const itemsRef = useRef<One2manyItem[]>(items);
  const { t } = useLocale();

  // Shared state for both modes
  const [treeFirstVisibleRow, setTreeFirstVisibleRow] = useState<number>(0);
  const [treeFirstVisibleColumn, setTreeFirstVisibleColumn] = useState<
    string | undefined
  >();

  // Shared sorting state (reuse same pattern as infinite mode)
  const sortStateRef = useRef<any[]>([]);

  // State for paginated results
  const [paginatedResults, setPaginatedResults] = useState<any[]>([]);

  const totalRows = useDeepCompareMemo(() => items.length, [items]);

  // Use shared infinite table functionality
  const {
    columns,
    strings,
    colorsForResults,
    statusForResults,
    onRowStyle,
    statusComponent,
    onRowStatus,
    getColumnState,
    updateColumnState,
    isColumnStateLoading,
    updateAttributes,
    clearAttributes,
  } = useTableCore({
    treeOoui: ooui,
    parentContext: context,
    columnStateKey: getKey({
      ...dataForHash,
      model: relation,
    }),
    tableRef,
  });

  // Use shared aggregates functionality
  const { footerComponent } = useSharedAggregates({
    treeOoui: ooui,
    model: relation,
    selectedRowKeys,
    showEmptyValues: false,
  });

  // This will be moved after onPaginatedRequestData is defined

  // Filter items like legacy One2manyInput does
  const itemsToShow = useMemo(
    () =>
      items.filter(
        (item) =>
          (item.values || item.treeValues) &&
          item.operation !== "pendingRemove",
      ),
    [items],
  );

  // Add enhanced fields support (function fields + auto-refresh)
  const { isFieldLoading, addRecordsToCheckFunctionFields } =
    useTreeSharedHooks({
      model: relation,
      treeView,
      tableRef,
      context,
      isActive: true, // One2many is always active when rendered
      treeOoui: ooui,
      updateAttributes,
      results: itemsToShow,
    });

  // Ensure columns is never undefined and add loading support
  const safeColumns = useMemo(() => {
    if (!columns) return [];
    return columns.map((column: any) => {
      const stableRender = (value: any, record: any) => (
        <CellRenderer
          value={value}
          record={record}
          column={column}
          isFieldLoading={isFieldLoading}
        />
      );
      return {
        ...column,
        render: stableRender,
      };
    });
  }, [columns, isFieldLoading]);

  // Reuse onFetchRecords for infinite mode data fetching
  const onRequestData = useCallback(
    async ({
      startRow,
      endRow,
      state,
    }: {
      startRow: number;
      endRow: number;
      state?: ColumnState[];
    }) => {
      const sortFields = getSortedFieldsFromState({ state });
      const { results, colors, status } = await onFetchRecords({
        allItems: itemsRef.current,
        startRow,
        endRow,
        sortFields,
      });

      // Update color and status refs
      if (colors) {
        colorsForResults.current = { ...colorsForResults.current, ...colors };
      }
      if (status) {
        if (!statusForResults.current) {
          statusForResults.current = {};
        }
        statusForResults.current = { ...statusForResults.current, ...status };
      }

      // Update attributes for dynamic row styling only if there are colors or status
      if (colors || status) {
        const attrsEvaluated = results.map((result) => ({
          id: result.id,
          colors: colors?.[result.id],
          status: status?.[result.id],
        }));
        updateAttributes(attrsEvaluated, ooui);
      }

      // Add records to check for function fields
      const resultIds = results.map((result) => result.id).filter(Boolean);
      if (resultIds.length > 0) {
        addRecordsToCheckFunctionFields(resultIds);
      }

      return results;
    },
    [
      colorsForResults,
      onFetchRecords,
      statusForResults,
      ooui,
      addRecordsToCheckFunctionFields,
      updateAttributes,
    ],
  );

  // For paginated mode, use onRequestData pattern like usePaginatedSearch
  const onPaginatedRequestData = useCallback(async () => {
    if (treeType !== "paginated" || items.length === 0) return [];

    const sortFields = getSortedFieldsFromState({
      state: sortStateRef.current,
    });
    const { results, colors, status } = await onFetchRecords({
      allItems: items,
      startRow: 0,
      endRow: items.length,
      sortFields,
    });

    // Update color and status refs for paginated mode too
    if (colors) {
      colorsForResults.current = { ...colorsForResults.current, ...colors };
    }
    if (status) {
      if (!statusForResults.current) {
        statusForResults.current = {};
      }
      statusForResults.current = { ...statusForResults.current, ...status };
    }

    // Update attributes for dynamic row styling only if there are colors or status
    if (colors || status) {
      const attrsEvaluated = results.map((result) => ({
        id: result.id,
        colors: colors?.[result.id],
        status: status?.[result.id],
      }));
      updateAttributes(attrsEvaluated, ooui);
    }

    // Add records to check for function fields in paginated mode
    const resultIds = results.map((result) => result.id).filter(Boolean);
    if (resultIds.length > 0) {
      addRecordsToCheckFunctionFields(resultIds);
    }

    return results;
  }, [
    treeType,
    items,
    onFetchRecords,
    colorsForResults,
    statusForResults,
    ooui,
    addRecordsToCheckFunctionFields,
    updateAttributes,
  ]);

  useDeepCompareEffect(() => {
    itemsRef.current = items;
    if (prevItemsValue.current === undefined) {
      prevItemsValue.current = items;
      return;
    }

    prevItemsValue.current = items;

    // Refresh table for both modes
    clearAttributes();
    tableRef?.current?.refresh();
    tableRef?.current?.unselectAll();
  }, [items, treeType]);

  // Shared callbacks for both modes - stabilize all callbacks
  const onGetFirstVisibleRowIndex = useCallback(() => {
    if (onGetFirstVisibleRowIndexProp) {
      const result = onGetFirstVisibleRowIndexProp();
      return result !== undefined ? result : treeFirstVisibleRow;
    }
    return treeFirstVisibleRow;
  }, [onGetFirstVisibleRowIndexProp, treeFirstVisibleRow]);

  // Use useCallbackRef to prevent re-renders during horizontal scrolling
  const onGetFirstVisibleColumn = useCallbackRef(() => treeFirstVisibleColumn);

  const onHeaderCheckboxClick = useCallback(
    () => onSelectionCheckboxClicked?.(),
    [onSelectionCheckboxClicked],
  );

  const refresh = useCallback(() => {
    clearAttributes();
    tableRef?.current?.refresh();
  }, [tableRef, clearAttributes]);

  // Use useCallbackRef for better stability
  const setTreeFirstVisibleRowStable = useCallbackRef(setTreeFirstVisibleRow);
  const setTreeFirstVisibleColumnStable = useCallbackRef(
    setTreeFirstVisibleColumn,
  );
  const updateColumnStateStable = useCallbackRef(updateColumnState);
  const getColumnStateStable = useCallbackRef(getColumnState);
  const onRowStatusStable = useCallbackRef(onRowStatus);
  const onRowStyleStable = useCallbackRef(onRowStyle);

  const onRowHasBeenSelected = useCallback(
    (changedRow: { id: number; selected: boolean }) => {
      if (changedRow.selected) {
        onRowSelectionChange([...selectedRowKeys, changedRow.id]);
      } else {
        onRowSelectionChange(
          selectedRowKeys.filter((id) => id !== changedRow.id),
        );
      }
    },
    [selectedRowKeys, onRowSelectionChange],
  );

  const headerCheckboxState: CheckboxState = useMemo(() => {
    if (selectedRowKeys.length === 0) return "unchecked";
    if (selectedRowKeys.length === itemsToShow.length) return "checked";
    return "indeterminate";
  }, [selectedRowKeys, itemsToShow.length]);

  // Stabilize onSortChange using useCallbackRef to prevent re-renders
  const onSortChange = useCallbackRef((state: any) => {
    sortStateRef.current = state;
    setTreeFirstVisibleRow(0);
    setTreeFirstVisibleColumn(undefined);
    if (treeType === "paginated" && items.length > 0) {
      onPaginatedRequestData().then(setPaginatedResults);
    }
  });

  const onPaginatedRequestDataRef = useCallbackRef(onPaginatedRequestData);

  useDeepCompareEffect(() => {
    if (treeType === "paginated" && items.length > 0) {
      onPaginatedRequestDataRef().then(setPaginatedResults);
    }
  }, [treeType]);

  // Results based on tree type
  const results = useMemo(() => {
    return treeType === "paginated" ? paginatedResults : [];
  }, [treeType, paginatedResults]);

  // Reuse fetchChildrenForRecord from usePaginatedSearch pattern
  const fetchChildrenForRecord = useCallback(
    async (record: any) => {
      if (!treeView?.field_parent) return [];

      const childIds = record[treeView.field_parent];
      if (!childIds || childIds.length === 0) return [];

      try {
        const mergedFields = treeView.field_parent
          ? { ...treeView.fields, [treeView.field_parent]: {} }
          : treeView.fields;

        const children = await ConnectionProvider.getHandler().readObjects({
          model: relation,
          ids: childIds,
          fields: mergedFields,
          context,
        });

        return getTableItems(ooui, children);
      } catch (error) {
        console.error("Error fetching children:", error);
        return [];
      }
    },
    [treeView, ooui, relation, context],
  );

  // Stabilize the fetchChildren prop
  const stableFetchChildrenForRecord = useMemo(() => {
    return treeView?.field_parent ? fetchChildrenForRecord : undefined;
  }, [treeView?.field_parent, fetchChildrenForRecord]);

  // Stabilize the handleRowDoubleClick callback
  const handleRowDoubleClickStable = useCallback(
    (data: OnRowClickedData) => {
      onRowDoubleClick?.(data);
    },
    [onRowDoubleClick],
  );

  if (isColumnStateLoading) {
    return <Spin />;
  }

  if (treeType === "paginated") {
    return (
      <StablePaginatedTableComponent
        tableRef={tableRef as RefObject<PaginatedTableRef>}
        onRowStyle={onRowStyleStable}
        availableHeight={height || DEFAULT_HEIGHT}
        columns={safeColumns}
        treeOoui={ooui}
        strings={strings}
        isLoading={false}
        results={results}
        handleRowDoubleClick={handleRowDoubleClickStable}
        onRowHasBeenSelected={onRowHasBeenSelected}
        updateColumnState={updateColumnStateStable}
        getColumnState={getColumnStateStable}
        setTreeFirstVisibleRow={setTreeFirstVisibleRowStable}
        onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
        onGetFirstVisibleColumn={onGetFirstVisibleColumn}
        setTreeFirstVisibleColumn={setTreeFirstVisibleColumnStable}
        footerComp={footerComponent}
        statusComp={statusComponent}
        onRowStatus={onRowStatusStable}
        headerCheckboxState={headerCheckboxState}
        onHeaderCheckboxClick={onHeaderCheckboxClick}
        refresh={refresh}
        onSortChange={onSortChange}
        onChangeTreeType={onChangeTreeType}
        onFetchChildrenForRecord={stableFetchChildrenForRecord}
        childField={treeView?.field_parent}
      />
    );
  }

  return (
    <InfiniteTable
      ref={tableRef}
      height={height || DEFAULT_HEIGHT}
      columns={safeColumns}
      onRequestData={onRequestData}
      onRowDoubleClick={onRowDoubleClick}
      showPointerCursorInRows={showPointerCursorInRows}
      readonly={readOnly}
      onRowStyle={onRowStyle}
      onRowSelectionChange={onRowSelectionChange}
      onColumnChanged={updateColumnState}
      onGetColumnsState={getColumnState}
      onChangeFirstVisibleRowIndex={onChangeFirstVisibleRowIndex}
      onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
      selectedRowKeys={selectedRowKeys}
      onSelectionCheckboxClicked={onSelectionCheckboxClicked}
      totalRows={totalRows}
      footer={footerComponent}
      isLoading={false}
      hasStatusColumn={ooui.status !== null}
      statusComponent={statusComponent}
      onRowStatus={onRowStatus}
      strings={strings}
      onChangeTableType={onChangeTreeType}
    />
  );
};
