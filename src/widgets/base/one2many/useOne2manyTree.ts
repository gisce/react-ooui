import ConnectionProvider from "@/ConnectionProvider";
import { getColorMap, getTree } from "@/helpers/treeHelper";
import { TreeView } from "@/types";
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
    async (idsToFetch: number[]) => {
      const fetchedData =
        await ConnectionProvider.getHandler().readEvalUiObjects({
          model: relation,
          ids: idsToFetch,
          arch: treeView.arch,
          fields: treeView.fields,
          context,
          attrs: treeOoui.colors && {
            colors: treeOoui.colors,
          },
        });
      const results = fetchedData[0];
      const colors = getColorMap(fetchedData[1]);
      return { results, colors };
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
