import { InfiniteTable, InfiniteTableRef } from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInput";
import { Tree as TreeOoui } from "@gisce/ooui";
import { RefObject, useCallback, useRef } from "react";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useOne2manyColumnStorage } from "./useOne2manyColumnStorage";
import { useDeepCompareMemo } from "use-deep-compare";

export type One2manyTreeProps = {
  items: One2manyItem[];
  onRowDoubleClick: (record: any) => void;
  readOnly: boolean;
  height?: number;
  ooui: TreeOoui;
  context: any;
  onFetchRecords: (idsToFetch: number[]) => Promise<{
    results: any[];
    colors: { [key: number]: string };
  }>;
  onRowSelectionChange: (selectedIds: number[]) => void;
  gridRef?: React.RefObject<InfiniteTableRef>;
  relation: string;
  onChangeFirstVisibleRowIndex?: (index: number) => void;
  onGetFirstVisibleRowIndex?: () => number | undefined;
  onGetSelectedRowKeys?: () => any[];
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
  onGetSelectedRowKeys,
}: One2manyTreeProps) => {
  const internalGridRef = useRef<InfiniteTableRef>();
  const tableRef: RefObject<InfiniteTableRef> = gridRef! || internalGridRef!;

  const colorsForResults = useRef<{ [key: number]: string }>({});

  const prevItemsValue = useRef<One2manyItem[]>();
  const itemsRef = useRef<One2manyItem[]>(items);

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

  const columns = useDeepCompareMemo(() => {
    return getTableColumns(
      ooui,
      {
        ...COLUMN_COMPONENTS,
      },
      context,
    );
  }, [context, ooui]);

  const onRequestData = useCallback(
    async (startRow: number, endRow: number) => {
      // get all the items that don't have treevalues
      const itemsToFetch = itemsRef.current?.filter((item) => !item.treeValues);
      const idsToFetch = itemsToFetch.map((item) => item.id) as number[];
      // now slice the records with startRow and endRow
      const idsToFetchSliced = idsToFetch.slice(startRow, endRow);
      const { results, colors } = await onFetchRecords(idsToFetchSliced);
      colorsForResults.current = { ...colorsForResults.current, ...colors };
      return results;
    },
    [onFetchRecords],
  );

  const onRowStyle = useCallback((record: any) => {
    if (colorsForResults.current[record.id]) {
      return { color: colorsForResults.current[record.id] };
    }
    return undefined;
  }, []);

  const { getColumnState, updateColumnState } = useOne2manyColumnStorage({
    model: relation,
  });

  return (
    <InfiniteTable
      ref={tableRef}
      height={height || DEFAULT_HEIGHT}
      columns={columns}
      onRequestData={onRequestData}
      onRowDoubleClick={onRowDoubleClick}
      readonly={readOnly}
      onRowStyle={onRowStyle}
      onRowSelectionChange={onRowSelectionChange}
      onColumnChanged={updateColumnState}
      onGetColumnsState={getColumnState}
      onChangeFirstVisibleRowIndex={onChangeFirstVisibleRowIndex}
      onGetFirstVisibleRowIndex={onGetFirstVisibleRowIndex}
      onGetSelectedRowKeys={onGetSelectedRowKeys}
      totalRows={totalRows}
    />
  );
};
