import { ColumnState } from "@gisce/react-formiga-table";
import { useCallback } from "react";

export const useOne2manyColumnStorage = ({ model }: { model: string }) => {
  const getColumnState = useCallback((): ColumnState[] | undefined => {
    // Get the column state values from the localstorage for the curent model
    const columnState = localStorage.getItem(`columnState-${model}`);
    return columnState ? JSON.parse(columnState) : undefined;
  }, [model]);

  const updateColumnState = useCallback(
    (state: ColumnState[]) => {
      localStorage.setItem(`columnState-${model}`, JSON.stringify(state));
    },
    [model],
  );

  return { getColumnState, updateColumnState };
};
