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
import { TreeAggregates } from "./useTreeAggregates";
import { AggregatesFooter } from "./AggregatesFooter";
import { useTreeColumnStorageFetch } from "./useTreeColumnStorageFetch";
import { Spin, Badge } from "antd";
import {
  One2manyTreeDataForHash,
  getKey,
} from "@/helpers/o2m-columnStorageHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { TreeType } from "@/views/actionViews/TreeActionView";
import { PaginatedTableComponent } from "@/widgets/views/Tree/Paginated/components/PaginatedTableComponent";
import { useTableConfiguration } from "@/hooks/useTableConfiguration";
import { OnRowClickedData } from "@/widgets/views/Tree/Paginated/SearchTreePaginated.types";
import { ConnectionProvider } from "@/index";
import { TreeView } from "@/types";

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
}: One2manyTreeProps) => {
  const internalGridRef = useRef<InfiniteTableRef | PaginatedTableRef>(null);
  const tableRef: RefObject<InfiniteTableRef | PaginatedTableRef> =
    gridRef || internalGridRef;

  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();

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

  const { columns, strings } = useTableConfiguration(ooui, context);

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
      colorsForResults.current = { ...colorsForResults.current, ...colors };
      if (!statusForResults.current && status) {
        statusForResults.current = {};
      }
      if (status) {
        statusForResults.current = { ...statusForResults.current, ...status };
      }
      return results;
    },
    [onFetchRecords],
  );

  const onRowStyle = useCallback((record: any) => {
    if (colorsForResults.current[record.node?.data?.id]) {
      return { color: colorsForResults.current[record.node?.data?.id] };
    }
    return undefined;
  }, []);

  const { loading, getColumnState, updateColumnState } =
    useTreeColumnStorageFetch({
      key: getKey({
        ...dataForHash,
        model: relation,
      }),
    });

  // For paginated mode, use onRequestData pattern like usePaginatedSearch
  const onPaginatedRequestData = useCallback(async () => {
    if (treeType !== "paginated" || items.length === 0) return [];

    const sortFields = getSortedFieldsFromState({
      state: sortStateRef.current,
    });
    const { results } = await onFetchRecords({
      allItems: items,
      startRow: 0,
      endRow: items.length,
      sortFields,
    });
    return results;
  }, [treeType, items, onFetchRecords]);

  useDeepCompareEffect(() => {
    itemsRef.current = items;
    if (prevItemsValue.current === undefined) {
      prevItemsValue.current = items;
      return;
    }

    prevItemsValue.current = items;

    // Refresh table for both modes
    tableRef?.current?.refresh();
    tableRef?.current?.unselectAll();

    // // For paginated mode, also refresh data
    // if (treeType === "paginated") {
    //   onPaginatedRequestData().then(setPaginatedResults);
    // }
  }, [items, treeType, onPaginatedRequestData]);

  // Ensure columns is never undefined
  const safeColumns = useMemo(() => columns || [], [columns]);

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

  // Shared callbacks for both modes
  const onGetFirstVisibleRowIndex = useCallback(() => {
    if (onGetFirstVisibleRowIndexProp) {
      const result = onGetFirstVisibleRowIndexProp();
      return result !== undefined ? result : treeFirstVisibleRow;
    }
    return treeFirstVisibleRow;
  }, [onGetFirstVisibleRowIndexProp, treeFirstVisibleRow]);
  const onGetFirstVisibleColumn = useCallback(
    () => treeFirstVisibleColumn,
    [treeFirstVisibleColumn],
  );
  const onHeaderCheckboxClick = useCallback(
    () => onSelectionCheckboxClicked?.(),
    [onSelectionCheckboxClicked],
  );
  const refresh = useCallback(() => tableRef?.current?.refresh(), [tableRef]);

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

  // Reuse sorting pattern from infinite mode and usePaginatedSearch
  const onSortChange = useCallback(
    (state: any) => {
      sortStateRef.current = state;
      updateColumnState(state);
      setTreeFirstVisibleRow(0);
      setTreeFirstVisibleColumn(undefined);
      if (treeType === "paginated" && items.length > 0) {
        onPaginatedRequestData().then(setPaginatedResults);
      }
    },
    [updateColumnState, treeType, items, onPaginatedRequestData],
  );

  useDeepCompareEffect(() => {
    if (treeType === "paginated" && items.length > 0) {
      onPaginatedRequestData().then(setPaginatedResults);
    }
  }, [treeType, onPaginatedRequestData]);

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

  if (loading) {
    return <Spin />;
  }

  if (treeType === "paginated") {
    return (
      <PaginatedTableComponent
        tableRef={tableRef as RefObject<PaginatedTableRef>}
        onRowStyle={onRowStyle}
        availableHeight={height || DEFAULT_HEIGHT}
        columns={safeColumns}
        treeOoui={ooui}
        strings={strings}
        isLoading={false}
        results={results}
        handleRowDoubleClick={(data: OnRowClickedData) => {
          onRowDoubleClick?.(data);
        }}
        onRowHasBeenSelected={onRowHasBeenSelected}
        updateColumnState={updateColumnState}
        getColumnState={getColumnState}
        setTreeFirstVisibleRow={setTreeFirstVisibleRow}
        onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
        onGetFirstVisibleColumn={onGetFirstVisibleColumn}
        setTreeFirstVisibleColumn={setTreeFirstVisibleColumn}
        footerComp={
          aggregates && (
            <AggregatesFooter aggregates={aggregates} isLoading={false} />
          )
        }
        statusComp={(status: any) => (
          <Badge color={status} style={{ marginLeft: 7 }} />
        )}
        onRowStatus={(record: any) => statusForResults.current?.[record.id]}
        headerCheckboxState={headerCheckboxState}
        onHeaderCheckboxClick={onHeaderCheckboxClick}
        refresh={refresh}
        onSortChange={onSortChange}
        isFieldLoading={undefined}
        onChangeTreeType={undefined}
        onFetchChildrenForRecord={
          treeView?.field_parent ? fetchChildrenForRecord : undefined
        }
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
      footer={
        aggregates && (
          <AggregatesFooter aggregates={aggregates} isLoading={false} />
        )
      }
      hasStatusColumn={ooui.status !== null}
      statusComponent={(status: any) => (
        <Badge color={status} style={{ marginLeft: 7 }} />
      )}
      onRowStatus={(record: any) => statusForResults.current?.[record.id]}
      strings={{
        resetTableViewLabel: t("resetTableView"),
      }}
    />
  );
};
