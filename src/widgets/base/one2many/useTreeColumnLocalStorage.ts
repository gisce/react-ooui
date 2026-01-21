import { ColumnState } from "@gisce/react-formiga-table";
import { useDeepCompareCallback } from "use-deep-compare";
import { JSONStringify, JSONParse } from "json-with-bigint";

export const useTreeColumnLocalStorage = (key?: string) => {
  const getColumnState = useDeepCompareCallback(async (): Promise<
    ColumnState[] | undefined
  > => {
    if (!key) {
      return undefined;
    }
    // Get the column state values from the localstorage for the curent model
    const columnState = localStorage.getItem(key);
    return columnState ? JSONParse(columnState) : undefined;
  }, [key]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      if (!key) {
        return;
      }
      localStorage.setItem(key, JSONStringify(state));
    },
    [key],
  );

  return { getColumnState, updateColumnState };
};
