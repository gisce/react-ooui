import ConnectionProvider from "@/ConnectionProvider";
import {
  getColorMap,
  getOrderFromSortFields,
  getStatusMap,
  getTree,
} from "@/helpers/treeHelper";
import { TreeView } from "@/types";
import { SortDirection } from "@gisce/react-formiga-table";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";

export const useOne2manyTree = ({
  treeView,
  relation,
  context,
}: {
  treeView: TreeView;
  relation: string;
  context: any;
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<any>([]);
  const firstVisibleRowIndex = useRef(0);
  const selectedRowKeysRef = useRef(selectedRowKeys);
  const allRowSelectedMode = useRef(false);

  const onChangeAllRowSelectedMode = useCallback((value: boolean) => {
    allRowSelectedMode.current = value;
  }, []);

  const onChangeFirstVisibleRowIndex = useCallback((index: number) => {
    firstVisibleRowIndex.current = index;
  }, []);

  const onGetFirstVisibileRowIndex = useCallback(() => {
    return firstVisibleRowIndex.current;
  }, []);

  useEffect(() => {
    selectedRowKeysRef.current = selectedRowKeys;
  }, [selectedRowKeys]);

  const onGetSelectedRowKeys = useCallback(() => {
    if (allRowSelectedMode) {
      return [];
    }
    return selectedRowKeysRef.current;
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
        const order = getOrderFromSortFields(sortFields);

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
    onGetSelectedRowKeys,
    onChangeAllRowSelectedMode,
    allRowSelectedMode: allRowSelectedMode.current,
  };
};
