import {
  ColumnState,
  InfiniteTable,
  InfiniteTableRef,
  SortDirection,
} from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInput";
import { Tree as TreeOoui } from "@gisce/ooui";
import { RefObject, useCallback, useRef } from "react";
import {
  getSortedFieldsFromState,
  getTableColumns,
} from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";
import useDeepCompareEffect from "use-deep-compare-effect";
import { useDeepCompareMemo } from "use-deep-compare";
import { TreeAggregates } from "./useTreeAggregates";
import { AggregatesFooter } from "./AggregatesFooter";
import { useTreeColumnStorageFetch } from "./useTreeColumnStorageFetch";
import { Spin, Badge } from "antd";
import {
  One2manyTreeDataForHash,
  getKey,
} from "@/helpers/o2m-columnStorageHelper";
import { useLocale } from "@gisce/react-formiga-components";

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

  const colorsForResults = useRef<{ [key: number]: string }>({});
  const statusForResults = useRef<{ [key: number]: string }>();

  const prevItemsValue = useRef<One2manyItem[]>();
  const itemsRef = useRef<One2manyItem[]>(items);
  const { t } = useLocale();

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
    useTreeColumnStorageFetch(
      getKey({
        ...dataForHash,
        model: relation,
      }),
    );

  if (loading) {
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
