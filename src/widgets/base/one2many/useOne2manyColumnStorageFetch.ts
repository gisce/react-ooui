import { ColumnState } from "@gisce/react-formiga-table";
import { One2manyTreeDataForHash } from "./One2manyTree";
import { useOne2manyColumnStorage } from "./useOne2manyColumnStorage";
import { useCallback, useEffect, useRef, useState } from "react";

export type DataForHashWithModel = One2manyTreeDataForHash & { model: string };

export const useOne2manyColumnStorageFetch = (
  dataForHash: DataForHashWithModel,
) => {
  const [loading, setLoading] = useState(true);
  const columnState = useRef<ColumnState[] | undefined>(undefined);

  const { getColumnState: getColumnStateInternal, updateColumnState } =
    useOne2manyColumnStorage(dataForHash);

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
