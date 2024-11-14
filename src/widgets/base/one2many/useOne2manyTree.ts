import ConnectionProvider from "@/ConnectionProvider";
import {
  getColorMap,
  getOrderFromSortFields,
  getStatusMap,
  getTableItems,
  getTree,
} from "@/helpers/treeHelper";
import { TreeView } from "@/types";
import { InfiniteTableRef, SortDirection } from "@gisce/react-formiga-table";
import { useCallback, useMemo, useRef, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import { One2manyItem } from "./One2manyInput";
import { getIdsToFetch, mergeWithOtherItems } from "@/helpers/one2manyHelper";

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
      let realIdsToFetch;
      let otherItems;

      const order = getOrderFromSortFields(sortFields);
      const maxNumberOfItemsToReturn = endRow - startRow;

      if (order) {
        const { realItemsIds, otherItems: otherItemsToSkipFetching } =
          getIdsToFetch({
            allItems,
          });

        otherItems = otherItemsToSkipFetching;

        if (realItemsIds.length === 0 && otherItems.length === 0) {
          return { results: [], colors: {}, status: {} };
        }

        realIdsToFetch = await ConnectionProvider.getHandler().searchAllIds({
          model: relation,
          params: [["id", "in", realItemsIds]],
          context,
          order,
        });
        realIdsToFetch = realIdsToFetch.slice(startRow, endRow);
      } else {
        const { realItemsIds, otherItems: otherItemsToSkipFetching } =
          getIdsToFetch({
            allItems,
            range: { startRow, endRow },
          });
        otherItems = otherItemsToSkipFetching;
        if (realItemsIds.length === 0 && otherItems.length === 0) {
          return { results: [], colors: {}, status: {} };
        }

        realIdsToFetch = realItemsIds;
      }

      const attrs: any = {};
      if (treeOoui.colors) {
        attrs.colors = treeOoui.colors;
      }
      if (treeOoui.status) {
        attrs.status = treeOoui.status;
      }

      const fetchedData =
        await ConnectionProvider.getHandler().readEvalUiObjects({
          model: relation,
          ids: realIdsToFetch,
          arch: treeView.arch,
          fields: treeView.fields,
          context,
          attrs,
        });

      // we need to know if the preparedResults items are less than the range
      const weCanAddOtherItems = realIdsToFetch.length < endRow - startRow;
      const preparedResults = getTableItems(treeOoui, fetchedData[0]);

      let finalResultIds = realIdsToFetch;
      if (weCanAddOtherItems && otherItems.length > 0) {
        finalResultIds = [
          ...realIdsToFetch,
          ...otherItems.map((item) => item.id!),
        ];
      }

      const results = mergeWithOtherItems({
        finalResultIds,
        fetchedItems: preparedResults,
        otherItems,
      });

      const colors = getColorMap(fetchedData[1]);
      const status = getStatusMap(fetchedData[1]);
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
