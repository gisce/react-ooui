import ConnectionProvider from "@/ConnectionProvider";
import { getColorMap, getTree } from "@/helpers/treeHelper";
import { TreeView } from "@/types";
import { useCallback, useMemo } from "react";

export const useOne2manyTree = ({
  treeView,
  relation,
  context,
}: {
  treeView: TreeView;
  relation: string;
  context: any;
}) => {
  const treeOoui = useMemo(() => {
    return getTree(treeView);
  }, [treeView]);

  const onTreeFetchRows = useCallback(
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
  };
};
