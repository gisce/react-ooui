import { ColumnState } from "@gisce/react-formiga-table";
import { One2manyTreeDataForHash } from "./One2manyTree";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { getKey } from "./useOne2manyColumnStorage";
import { useEffect } from "react";

export type DataForHashWithModel = One2manyTreeDataForHash & { model: string };

export const useOne2manyColumnRemoteStorage = (
  dataForHash: DataForHashWithModel,
) => {
  useEffect(() => {
    return () => {
      cancelReadRequest();
      cancelSaveRequest();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [read, cancelReadRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readUserViewPrefs,
  );

  const [save, cancelSaveRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().saveUserViewPrefs,
  );

  const getColumnState = useDeepCompareCallback(async (): Promise<
    ColumnState[] | undefined
  > => {
    const state = await read({
      key: getKey(dataForHash),
    });
    if (state === false) {
      throw new Error("Empty column state");
    }
    return state;
  }, [dataForHash]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      // state is an array of objects but we need to remove the properties of each object that are null
      // to avoid sending them to the backend
      const stateWithoutNulls = state.map((column) =>
        Object.fromEntries(
          Object.entries(column).filter(([_, value]) => value !== null),
        ),
      );

      return save({
        key: getKey(dataForHash),
        preferences: stateWithoutNulls,
      });
    },
    [dataForHash],
  );

  return { getColumnState, updateColumnState };
};
