import { getOrderFromSortFields, getTree } from "@/helpers/treeHelper";
import { TreeView } from "@/types";
import { InfiniteTableRef, SortDirection } from "@gisce/react-formiga-table";
import { useCallback, useMemo, useRef, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import { One2manyItem } from "./One2manyInput";
import {
  buildAttributes,
  fetchAndPrepareData,
  fetchSortedIds,
  getIdsToFetch,
  mergeWithOtherItems,
} from "@/helpers/one2manyHelper";

export const useOne2manyTree = ({
  treeView,
  relation,
  context,
  allRowsIds,
  gridRef,
}: {
  treeView: TreeView;
  relation: string;
  context: any;
  allRowsIds: number[];
  gridRef: React.RefObject<InfiniteTableRef>;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const firstVisibleRowIndex = useRef(0);

  const onSelectionCheckboxClicked = useCallback(() => {
    let mustSelectAll = false;
    if (selectedRowKeys.length === 0) {
      mustSelectAll = true;
    } else {
      mustSelectAll = false;
    }

    if (mustSelectAll) {
      setSelectedRowKeys(allRowsIds);
      gridRef.current?.setSelectedRows(allRowsIds);
    } else {
      setSelectedRowKeys([]);
      gridRef.current?.setSelectedRows([]);
    }
  }, [allRowsIds, gridRef, selectedRowKeys.length]);

  const onChangeFirstVisibleRowIndex = useCallback((index: number) => {
    firstVisibleRowIndex.current = index;
  }, []);

  const onGetFirstVisibileRowIndex = useCallback(() => {
    return firstVisibleRowIndex.current;
  }, []);

  const treeOoui = useMemo(() => {
    return getTree(treeView);
  }, [treeView]);

  const onTreeFetchRows = useDeepCompareCallback(
    async ({
      allItems,
      startRow,
      endRow,
      sortFields,
    }: {
      allItems: One2manyItem[];
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      const order = getOrderFromSortFields(sortFields);
      const { realItemsIds, otherItems } = getIdsToFetch({
        allItems,
        ...(order ? {} : { range: { startRow, endRow } }),
      });

      if (realItemsIds.length === 0 && otherItems.length === 0) {
        return { results: [], colors: {}, status: {} };
      }

      const realIdsToFetch = order
        ? (await fetchSortedIds(realItemsIds, relation, context, order)).slice(
            startRow,
            endRow,
          )
        : realItemsIds;

      const attrs = buildAttributes(treeOoui);

      const {
        items: preparedResults,
        colors,
        status,
      } = await fetchAndPrepareData({
        relation,
        ids: realIdsToFetch,
        treeView,
        context,
        attrs,
        treeOoui,
      });

      const weCanAddOtherItems = realIdsToFetch.length < endRow - startRow;
      const finalResultIds =
        weCanAddOtherItems && otherItems.length > 0
          ? [...realIdsToFetch, ...otherItems.map((item) => item.id!)]
          : realIdsToFetch;

      const results = await mergeWithOtherItems({
        finalResultIds,
        fetchedItems: preparedResults,
        otherItems,
        treeOoui,
        context,
      });

      return { results, colors, status };
    },
    [context, relation, treeOoui, treeView],
  );

  return {
    onTreeFetchRows,
    treeOoui,
    setSelectedRowKeys,
    selectedRowKeys,
    onChangeFirstVisibleRowIndex,
    onGetFirstVisibileRowIndex,
    onSelectionCheckboxClicked,
  };
};
