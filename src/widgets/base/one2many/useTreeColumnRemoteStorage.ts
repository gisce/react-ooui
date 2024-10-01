import { ColumnState } from "@gisce/react-formiga-table";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useEffect } from "react";

export const useTreeColumnRemoteStorage = (key?: string) => {
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
    if (!key) {
      throw new Error("Unknown column state key");
    }
    const state = await read({
      key,
    });
    if (state === false) {
      throw new Error("Empty column state");
    }
    return state;
  }, [key]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      if (!key) {
        return;
      }
      // state is an array of objects but we need to remove the properties of each object that are null
      // to avoid sending them to the backend
      const stateWithoutNulls = state.map((column) =>
        Object.fromEntries(
          Object.entries(column).filter(([_, value]) => value !== null),
        ),
      );

      return save({
        key,
        preferences: stateWithoutNulls,
      });
    },
    [key],
  );

  return { getColumnState, updateColumnState };
};
