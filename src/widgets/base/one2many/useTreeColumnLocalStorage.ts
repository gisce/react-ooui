import { ColumnState } from "@gisce/react-formiga-table";
import { useDeepCompareCallback } from "use-deep-compare";

export const useTreeColumnLocalStorage = (key?: string) => {
  const getColumnState = useDeepCompareCallback(async (): Promise<
    ColumnState[] | undefined
  > => {
    if (!key) {
      return undefined;
    }
    // Get the column state values from the localstorage for the curent model
    const columnState = localStorage.getItem(key);
    return columnState ? JSON.parse(columnState) : undefined;
  }, [key]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      if (!key) {
        return;
      }
      localStorage.setItem(key, JSON.stringify(state));
    },
    [key],
  );

  return { getColumnState, updateColumnState };
};
