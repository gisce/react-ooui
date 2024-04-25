import { ColumnState } from "@gisce/react-formiga-table";

export const useOne2manyColumnStorage = ({ model }: { model: string }) => {
  const getColumnState = (): ColumnState[] | undefined => {
    // Get the column state values from the localstorage for the curent model
    const columnState = localStorage.getItem(`columnState-${model}`);
    return columnState ? JSON.parse(columnState) : undefined;
  };

  const updateColumnState = (state: ColumnState[]) => {
    localStorage.setItem(`columnState-${model}`, JSON.stringify(state));
  };

  return { getColumnState, updateColumnState };
};
