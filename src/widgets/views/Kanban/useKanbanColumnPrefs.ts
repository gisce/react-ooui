import { useCallback, useEffect } from "react";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import ConnectionProvider from "@/ConnectionProvider";

export type KanbanColumnPref = {
  colId: string;
  order: number;
  maxCards: number;
};

export const useKanbanColumnPrefs = (viewId: number, model: string) => {
  const [getPrefs, cancelGetPrefs] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );
  const [setPrefs, cancelSetPrefs] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  useEffect(() => {
    return () => {
      cancelGetPrefs();
      cancelSetPrefs();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const key = `columnState-${viewId}-${model}`;

  const getColumnPrefs = useCallback(async (): Promise<
    KanbanColumnPref[] | null
  > => {
    const result = await getPrefs({
      model: "ir.ui.view",
      action: "get_view_global_prefs",
      payload: [key],
    });
    return result || null;
  }, [key, getPrefs]);

  const saveColumnPrefs = useCallback(
    async (prefs: KanbanColumnPref[]) => {
      await setPrefs({
        model: "ir.ui.view",
        action: "set_view_global_prefs",
        payload: [key, prefs],
      });
    },
    [key, setPrefs],
  );

  return { getColumnPrefs, saveColumnPrefs };
};
