import ConnectionProvider from "@/ConnectionProvider";
import { getColorMap, getStatusMap, getTree } from "@/helpers/treeHelper";
import { TreeView } from "@/types";
import { InfiniteTableRef, SortDirection } from "@gisce/react-formiga-table";
import { useCallback, useMemo, useRef, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";

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
      idsToFetch,
      sortFields,
    }: {
      idsToFetch: number[];
      sortFields?: Record<string, SortDirection>;
    }) => {
      const attrs: any = {};
      if (treeOoui.colors) {
        attrs.colors = treeOoui.colors;
      }
      if (treeOoui.status) {
        attrs.status = treeOoui.status;
      }

      let finalIds = idsToFetch;

      if (sortFields) {
        const order: string = Object.keys(sortFields)
          .map((field) => {
            const direction = sortFields[field];
            return `${field} ${direction}`;
          })
          .join(", ");

        finalIds = await ConnectionProvider.getHandler().searchAllIds({
          model: relation,
          params: [["id", "in", idsToFetch]],
          context,
          order,
        });
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

      const results = fetchedData[0];
      const colors = getColorMap(fetchedData[1]);
      const status = getStatusMap(fetchedData[1]);
      return { results, colors, status };
    },
    [context, relation, treeOoui.colors, treeView],
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
