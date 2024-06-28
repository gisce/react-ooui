import { ColumnState } from "@gisce/react-formiga-table";
import { One2manyTreeDataForHash } from "./One2manyTree";
import { useDeepCompareCallback } from "use-deep-compare";

export type DataForHashWithModel = One2manyTreeDataForHash & { model: string };

export const useOne2manyColumnStorage = (dataForHash: DataForHashWithModel) => {
  const getColumnState = useDeepCompareCallback(():
    | ColumnState[]
    | undefined => {
    // Get the column state values from the localstorage for the curent model
    const columnState = localStorage.getItem(getKey(dataForHash));
    return columnState ? JSON.parse(columnState) : undefined;
  }, [dataForHash]);

  const updateColumnState = useDeepCompareCallback(
    (state: ColumnState[]) => {
      localStorage.setItem(getKey(dataForHash), JSON.stringify(state));
    },
    [dataForHash],
  );

  return { getColumnState, updateColumnState };
};

const getKey = (dataForHash: DataForHashWithModel) => {
  return `columnState-${dataForHash.parentViewId}-${dataForHash.treeViewId}-${dataForHash.one2ManyFieldName}-${dataForHash.model}`;
};
