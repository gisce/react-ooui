import {
  InfiniteTable,
  InfiniteTableRef,
  SortDirection,
} from "@gisce/react-formiga-table";
import { One2manyItem } from "./One2manyInput";
import { Tree as TreeOoui } from "@gisce/ooui";
import { RefObject, useCallback, useRef } from "react";
import { getTableColumns, getTableItems } from "@/helpers/treeHelper";
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
  onRowDoubleClick: (record: any) => void;
  readOnly: boolean;
  height?: number;
  ooui: TreeOoui;
  context: any;
  onFetchRecords: ({
    idsToFetch,
    sortFields,
  }: {
    idsToFetch: number[];
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
      sortFields,
    }: {
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      const itemsToFetch = itemsRef.current;
      const idsToFetch = itemsToFetch.map((item) => item.id) as number[];
      // now slice the records with startRow and endRow
      const idsToFetchSliced = idsToFetch.slice(startRow, endRow);

      // in this idsToFetchSliced we have the ids of the records that theoretically we have to fetch
      // however, it's possible that these items have operation different than original,
      // and we have to skip these items to being fetched, and passed later on to the callback as they were originally
      const realIdsToFetch = idsToFetchSliced.filter((id) => {
        const item = itemsToFetch.find((item) => item.id === id);
        return (
          item &&
          (item.operation === "original" || item.operation === "pendingLink")
        );
      });
      const otherItems = itemsToFetch.filter((item) => {
        return (
          item &&
          item.operation !== "original" &&
          item.operation !== "pendingLink"
        );
      });

      if (realIdsToFetch.length === 0 && otherItems.length === 0) {
        return [];
      }

      const { results, colors, status } = await onFetchRecords({
        idsToFetch: realIdsToFetch,
        sortFields,
      });

      const preparedResults = getTableItems(ooui, results);

      // now we have to map the results to the original ids
      const resultsMapped = idsToFetchSliced.map((id) => {
        const result = preparedResults.find((result) => result.id === id);
        if (result) {
          return result;
        }
        return itemsToFetch.find((item) => item.id === id)?.treeValues;
      });

      // Now we have to maintain the same order for resultsMapped that the one we have in preparedResults
      resultsMapped.sort((a, b) => {
        const indexA = preparedResults.findIndex(
          (result) => result.id === a.id,
        );
        const indexB = preparedResults.findIndex(
          (result) => result.id === b.id,
        );
        return indexA - indexB;
      });

      colorsForResults.current = { ...colorsForResults.current, ...colors };
      if (!statusForResults.current && status) {
        statusForResults.current = {};
      }
      if (status) {
        statusForResults.current = { ...statusForResults.current, ...status };
      }
      return resultsMapped;
    },
    [onFetchRecords, ooui],
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
