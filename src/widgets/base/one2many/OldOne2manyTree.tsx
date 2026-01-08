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
  getTableItems,
} from "@/helpers/treeHelper";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";
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
import {
  useFeatureIsEnabled,
  useUserFeatureIsEnabled,
} from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { UserFeatureKeys } from "@/models/userFeature";

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

const findChangedItems = (
  current: One2manyItem[],
  previous: One2manyItem[],
): One2manyItem[] => {
  return current.filter((item) => {
    const prevItem = previous.find((p) => p.id === item.id);
    if (!prevItem) return true;
    return (
      JSON.stringify(item.treeValues) !== JSON.stringify(prevItem.treeValues)
    );
  });
};

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

  const many2oneSortEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_MANY2ONE_SORT,
  );
  const selectionToLazy = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_SELECTION_TO_LAZY,
  );

  useDeepCompareEffect(() => {
    itemsRef.current = items;
    if (prevItemsValue.current === undefined) {
      prevItemsValue.current = items;
      return;
    }

    // Find which item(s) changed
    const changedItems = findChangedItems(items, prevItemsValue.current);
    prevItemsValue.current = items;

    // Clear color and status caches when items change
    colorsForResults.current = {};
    if (statusForResults.current) {
      statusForResults.current = {};
    }

    if (changedItems.length > 0) {
      const transformLocally = async () => {
        const changedItemsWithValues = changedItems
          .filter((item) => item.treeValues)
          .map((item) => item.treeValues);

        if (changedItemsWithValues.length === 0) {
          return;
        }

        const transformed = await getTableItems(
          ooui,
          changedItemsWithValues,
          context,
          selectionToLazy,
        );

        tableRef?.current?.updateRows(transformed);
      };
      transformLocally();
    }

    tableRef?.current?.unselectAll();
  }, [items, ooui, context]);

  const totalRows = useDeepCompareMemo(() => items.length, [items]);

  const columns = useDeepCompareMemo(() => {
    return getTableColumns(
      ooui,
      {
        ...COLUMN_COMPONENTS,
      },
      context,
      many2oneSortEnabled,
      selectionToLazy,
    );
  }, [context, ooui, many2oneSortEnabled, selectionToLazy]);

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
    useTreeColumnStorageFetch({
      key: getKey({
        ...dataForHash,
        model: relation,
      }),
    });

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
