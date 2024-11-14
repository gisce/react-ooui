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
      itemsToFetch,
      startRow,
      endRow,
      sortFields,
    }: {
      itemsToFetch: One2manyItem[];
      startRow: number;
      endRow: number;
      sortFields?: Record<string, SortDirection>;
    }) => {
      let finalIds;
      let otherItems;

      const order = getOrderFromSortFields(sortFields);

      if (order) {
        const { realItemsIds, otherItems: otherItemsToSkipFetching } =
          getIdsToFetch({
            itemsToFetch,
          });

        otherItems = otherItemsToSkipFetching;

        if (realItemsIds.length === 0 && otherItems.length === 0) {
          return { results: [], colors: {}, status: {} };
        }

        finalIds = await ConnectionProvider.getHandler().searchAllIds({
          model: relation,
          params: [["id", "in", realItemsIds]],
          context,
          order,
        });
      } else {
        const { realItemsIds, otherItems: otherItemsToSkipFetching } =
          getIdsToFetch({
            itemsToFetch,
            range: { startRow, endRow },
          });
        otherItems = otherItemsToSkipFetching;
        if (realItemsIds.length === 0 && otherItems.length === 0) {
          return { results: [], colors: {}, status: {} };
        }

        finalIds = realItemsIds;
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
          ids: finalIds,
          arch: treeView.arch,
          fields: treeView.fields,
          context,
          attrs,
        });

      const preparedResults = getTableItems(treeOoui, fetchedData[0]);

      const finalResults = mergeWithOtherItems({
        idsToFetch: order
          ? [...finalIds, ...otherItems.map((item) => item.id!)].slice(
              startRow,
              endRow,
            )
          : finalIds,
        results: preparedResults,
        otherItems,
      });

      const results = order
        ? finalResults
        : finalResults.slice(startRow, endRow);
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
