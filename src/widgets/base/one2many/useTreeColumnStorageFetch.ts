import { ColumnState } from "@gisce/react-formiga-table";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTreeColumnStorage } from "./useTreeColumnStorage";

type TreeColumnStorageFetchProps = {
  key?: string;
  treeViewFetching?: boolean;
};

export const useTreeColumnStorageFetch = ({
  key,
  treeViewFetching,
}: TreeColumnStorageFetchProps) => {
  const [loading, setLoading] = useState(true);
  const columnState = useRef<ColumnState[] | undefined>(undefined);
  const fetchInProgress = useRef(false);

  const {
    getColumnState: getColumnStateInternal,
    updateColumnState: updateColumnStateInternal,
  } = useTreeColumnStorage(key);

  const fetchColumnState = useCallback(async () => {
    if (fetchInProgress.current || treeViewFetching) {
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
    return columnState.current;
  }, [getColumnStateInternal, treeViewFetching]);

  useEffect(() => {
    if (!key) {
      setLoading(false);
      return;
    }

    fetchColumnState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, treeViewFetching]);

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

  return { getColumnState, loading, updateColumnState, fetchColumnState };
};
