import { ColumnState } from "@gisce/react-formiga-table";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTreeColumnStorage } from "./useTreeColumnStorage";

export const useTreeColumnStorageFetch = (key?: string) => {
  const [loading, setLoading] = useState(true);
  const columnState = useRef<ColumnState[] | undefined>(undefined);
  const fetchInProgress = useRef(false);

  const {
    getColumnState: getColumnStateInternal,
    updateColumnState: updateColumnStateInternal,
  } = useTreeColumnStorage(key);

  useEffect(() => {
    if (!key) {
      setLoading(false);
      return;
    }
    const fetchColumnState = async () => {
      if (fetchInProgress.current) {
        return;
      }

      fetchInProgress.current = true;
      setLoading(true);
      try {
        columnState.current = await getColumnStateInternal();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
        fetchInProgress.current = false;
      }
    };

    fetchColumnState();
  }, [getColumnStateInternal, key]);

  const getColumnState = useCallback(() => {
    return columnState.current;
  }, []);

  const updateColumnState = useCallback(
    (state: ColumnState[]) => {
      const columnStatesWithoutSort = state.map((columnState) => {
        const { sort, ...columnStateWithoutSort } = columnState;
        return columnStateWithoutSort;
      });
      columnState.current = columnStatesWithoutSort;

      updateColumnStateInternal(state);
    },
    [updateColumnStateInternal],
  );

  return { getColumnState, loading, updateColumnState };
};
