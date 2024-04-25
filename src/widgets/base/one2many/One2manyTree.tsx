import { InfiniteTable } from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInput";
import { Tree as TreeOoui } from "@gisce/ooui";
import { RefObject, useCallback, useMemo, useRef, useState } from "react";
import { getTableColumns } from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";
import { InfiniteTableRef } from "@gisce/react-formiga-table/dist/components/InfiniteTable/InfiniteTable";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useOne2manyColumnStorage } from "./useOne2manyColumnStorage";

export type One2manyTreeProps = {
  items: One2manyItem[];
  onRowClicked: (record: any) => void;
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
};

const DEFAULT_HEIGHT = 400;

export const One2manyTree = ({
  items,
  height,
  onRowClicked,
  readOnly,
  ooui,
  context,
  onFetchRecords,
  onRowSelectionChange,
  gridRef,
  relation,
}: One2manyTreeProps) => {
  const internalGridRef = useRef<InfiniteTableRef>();
  const tableRef: RefObject<InfiniteTableRef> = gridRef! || internalGridRef!;

  const [colorsForResults, setColorsForResults] = useState<{
    [key: number]: string;
  }>({});

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

  const columns = useMemo(() => {
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
      setColorsForResults((prevColors) => ({ ...prevColors, ...colors }));
      return results;
    },
    [onFetchRecords],
  );

  const onRowStyle = useCallback(
    (record: any) => {
      if (colorsForResults![record.id]) {
        return { color: colorsForResults![record.id] };
      }
      return undefined;
    },
    [colorsForResults],
  );

  const onRowSelectionChangeCallback = useCallback(
    (selectedItems: any[]) => {
      onRowSelectionChange(selectedItems.map((item) => item.id));
    },
    [onRowSelectionChange],
  );

  const { getColumnState, updateColumnState } = useOne2manyColumnStorage({
    model: relation,
  });

  return (
    <InfiniteTable
      ref={tableRef}
      height={height || DEFAULT_HEIGHT}
      columns={columns}
      onRequestData={onRequestData}
      onRowDoubleClick={onRowClicked}
      readonly={readOnly}
      onRowStyle={onRowStyle}
      onRowSelectionChange={onRowSelectionChangeCallback}
      onColumnChanged={updateColumnState}
      onGetColumnsState={getColumnState}
    />
  );
};
