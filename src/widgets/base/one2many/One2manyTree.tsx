import {
  ColumnState,
  InfiniteTable,
  InfiniteTableRef,
  SortDirection,
} from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInput";
import { Tree as TreeOoui } from "@gisce/ooui";
import { RefObject, useCallback, useRef } from "react";
import { getSortedFieldsFromState } from "@/helpers/treeHelper";
import { useDeepCompareEffect, useDeepCompareMemo } from "use-deep-compare";
import { TreeAggregates , useSharedAggregates } from "./useTreeAggregates";
import { AggregatesFooter } from "./AggregatesFooter";
import { Spin } from "antd";
import {
  One2manyTreeDataForHash,
  getKey,
} from "@/helpers/o2m-columnStorageHelper";
import { useInfiniteTable } from "@/hooks/useInfiniteTable";

export type One2manyTreeProps = {
  items: One2manyItem[];
  onRowDoubleClick?: (record: any) => void;
  readOnly: boolean;
  height?: number;
  ooui: TreeOoui;
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
};

const DEFAULT_HEIGHT = 400;

export const One2manyTree = ({
  items,
  height,
  onRowDoubleClick,
  readOnly,
  ooui,
  context,
  onFetchRecords,
  onRowSelectionChange,
  gridRef,
  relation,
  onChangeFirstVisibleRowIndex,
  onGetFirstVisibleRowIndex,
  onSelectionCheckboxClicked,
  dataForHash,
  aggregates,
  selectedRowKeys = [],
  showPointerCursorInRows = true,
}: One2manyTreeProps) => {
  const internalGridRef = useRef<InfiniteTableRef>();
  const tableRef: RefObject<InfiniteTableRef> = gridRef! || internalGridRef!;

  const prevItemsValue = useRef<One2manyItem[]>();
  const itemsRef = useRef<One2manyItem[]>(items);

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
  } = useInfiniteTable({
    treeOoui: ooui,
    parentContext: context,
    columnStateKey: getKey({
      ...dataForHash,
      model: relation,
    }),
    selectedRowKeys,
    hasStatusColumn: ooui.status !== null,
  });

  // Use shared aggregates functionality
  const { footerComponent } = useSharedAggregates({
    treeOoui: ooui,
    model: relation,
    selectedRowKeys,
    showEmptyValues: false,
  });

  useDeepCompareEffect(() => {
    itemsRef.current = items;
    if (prevItemsValue.current === undefined) {
      prevItemsValue.current = items;
      return;
    }

    prevItemsValue.current = items;
    tableRef?.current?.refresh();
    tableRef?.current?.unselectAll();
  }, [items]);

  const totalRows = useDeepCompareMemo(() => items.length, [items]);

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
      const sortFields = getSortedFieldsFromState({
        state,
      });
      const { results, colors, status } = await onFetchRecords({
        allItems: itemsRef.current,
        startRow,
        endRow,
        sortFields,
      });

      // Update shared colors and status refs
      if (colors) {
        colorsForResults.current = { ...colorsForResults.current, ...colors };
      }
      if (status) {
        if (!statusForResults.current) {
          statusForResults.current = {};
        }
        statusForResults.current = { ...statusForResults.current, ...status };
      }
      return results;
    },
    [onFetchRecords],
  );

  if (isColumnStateLoading) {
    return <Spin />;
  }

  return (
    <InfiniteTable
      ref={tableRef}
      height={height || DEFAULT_HEIGHT}
      columns={columns}
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
        aggregates ? (
          <AggregatesFooter aggregates={aggregates} isLoading={false} />
        ) : (
          footerComponent
        )
      }
      hasStatusColumn={ooui.status !== null}
      statusComponent={statusComponent}
      onRowStatus={onRowStatus}
      strings={strings}
    />
  );
};
