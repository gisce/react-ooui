import { ColumnState } from "@gisce/react-formiga-table";
import { One2manyTreeDataForHash } from "./One2manyTree";
import { useDeepCompareCallback } from "use-deep-compare";
import { getKey } from "./useOne2manyColumnStorage";

export type DataForHashWithModel = One2manyTreeDataForHash & { model: string };

export const useOne2manyColumnLocalStorage = (
  dataForHash: DataForHashWithModel,
) => {
  const getColumnState = useDeepCompareCallback(async (): Promise<
    ColumnState[] | undefined
  > => {
    // Get the column state values from the localstorage for the curent model
    const columnState = localStorage.getItem(getKey(dataForHash));
    return columnState ? JSON.parse(columnState) : undefined;
  }, [dataForHash]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      localStorage.setItem(getKey(dataForHash), JSON.stringify(state));
    },
    [dataForHash],
  );

  return { getColumnState, updateColumnState };
};
