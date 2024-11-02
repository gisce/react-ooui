import { ColumnState } from "@gisce/react-formiga-table";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTreeColumnStorage } from "./useTreeColumnStorage";

export const useTreeColumnStorageFetch = (key?: string) => {
  const [loading, setLoading] = useState(true);
  const columnState = useRef<ColumnState[] | undefined>(undefined);
  const fetchInProgress = useRef(false);

  const { getColumnState: getColumnStateInternal, updateColumnState } =
    useTreeColumnStorage(key);

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

  return { getColumnState, loading, updateColumnState };
};
