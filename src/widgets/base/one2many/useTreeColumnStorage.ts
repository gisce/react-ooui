import { ColumnState } from "@gisce/react-formiga-table";
import { useDeepCompareCallback } from "use-deep-compare";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { useTreeColumnLocalStorage } from "./useTreeColumnLocalStorage";
import { useTreeColumnRemoteStorage } from "./useTreeColumnRemoteStorage";

export const useTreeColumnStorage = (key: string) => {
  const remoteUserViewPrefsEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_USERVIEWPREFS,
  );

  const {
    getColumnState: getLocalColumnState,
    updateColumnState: updateLocalColumnState,
  } = useTreeColumnLocalStorage(key);

  const {
    getColumnState: getRemoteColumnState,
    updateColumnState: updateRemoteColumnState,
  } = useTreeColumnRemoteStorage(key);

  const getColumnState = useDeepCompareCallback(async (): Promise<
    ColumnState[] | undefined
  > => {
    if (!remoteUserViewPrefsEnabled) {
      return getLocalColumnState();
    }
    try {
      return getRemoteColumnState();
    } catch (err) {
      console.error(err);
      return getLocalColumnState();
    }
  }, [key]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      // sort status for columns should not be stored
      const columnStatesWithoutSort = state.map((columnState) => {
        const { sort, ...columnStateWithoutSort } = columnState;
        return columnStateWithoutSort;
      });

      if (!remoteUserViewPrefsEnabled) {
        return updateLocalColumnState(columnStatesWithoutSort);
      }
      try {
        return updateRemoteColumnState(columnStatesWithoutSort);
      } catch (err) {
        console.error(err);
        return updateLocalColumnState(columnStatesWithoutSort);
      }
    },
    [key],
  );

  return { getColumnState, updateColumnState };
};
