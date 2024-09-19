import { ColumnState } from "@gisce/react-formiga-table";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTreeColumnStorage } from "./useTreeColumnStorage";

export const useTreeColumnStorageFetch = (key: string) => {
  const [loading, setLoading] = useState(true);
  const columnState = useRef<ColumnState[] | undefined>(undefined);

  const { getColumnState: getColumnStateInternal, updateColumnState } =
    useTreeColumnStorage(key);

  useEffect(() => {
    const fetchColumnState = async () => {
      setLoading(true);
      try {
        columnState.current = await getColumnStateInternal();
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchColumnState();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getColumnState = useCallback(() => {
    return columnState.current;
  }, []);

  return { getColumnState, loading, updateColumnState };
};
