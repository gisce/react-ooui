import { ColumnState } from "@gisce/react-formiga-table";
import { One2manyTreeDataForHash } from "./One2manyTree";
import { useDeepCompareCallback } from "use-deep-compare";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { useOne2manyColumnLocalStorage } from "./useOne2manyColumnLocalStorage";
import { useOne2manyColumnRemoteStorage } from "./useOne2manyColumnRemoteStorage";

export type DataForHashWithModel = One2manyTreeDataForHash & { model: string };

export const useOne2manyColumnStorage = (dataForHash: DataForHashWithModel) => {
  // const remoteUserViewPrefsEnabled = useFeatureIsEnabled(
  //   ErpFeatureKeys.FEATURE_USERVIEWPREFS,
  // );
  const remoteUserViewPrefsEnabled = false;

  const {
    getColumnState: getLocalColumnState,
    updateColumnState: updateLocalColumnState,
  } = useOne2manyColumnLocalStorage(dataForHash);

  const {
    getColumnState: getRemoteColumnState,
    updateColumnState: updateRemoteColumnState,
  } = useOne2manyColumnRemoteStorage(dataForHash);

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
  }, [dataForHash]);

  const updateColumnState = useDeepCompareCallback(
    async (state: ColumnState[]) => {
      if (!remoteUserViewPrefsEnabled) {
        return updateLocalColumnState(state);
      }
      try {
        return updateRemoteColumnState(state);
      } catch (err) {
        console.error(err);
        return updateLocalColumnState(state);
      }
    },
    [dataForHash],
  );

  return { getColumnState, updateColumnState };
};

export const getKey = (dataForHash: DataForHashWithModel) => {
  return `columnState-${dataForHash.parentViewId}-${dataForHash.treeViewId}-${dataForHash.one2ManyFieldName}-${dataForHash.model}`;
};
