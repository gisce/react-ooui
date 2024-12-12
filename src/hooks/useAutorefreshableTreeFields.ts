import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";
import { useDeepCompareEffect } from "use-deep-compare";
import { useRef, useState, useCallback, useEffect } from "react";
import { InfiniteTableRef } from "@gisce/react-formiga-table";
import { useBrowserVisibility } from "./useBrowserVisibility";

const AUTOREFRESH_INTERVAL_SECONDS = 3 * 1000;

export type UseAutorefreshableTreeFieldsOpts = {
  tableRef: React.RefObject<InfiniteTableRef>;
  model: string;
  context: any;
  autorefreshableFields?: string[];
  fieldDefs: any;
  isActive?: boolean;
};

export const useAutorefreshableTreeFields = (
  opts: UseAutorefreshableTreeFieldsOpts,
) => {
  const {
    tableRef,
    model,
    context,
    autorefreshableFields,
    fieldDefs,
    isActive,
  } = opts;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [internalIsActive, setInternalIsActive] = useState(true);

  const [fetchRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );

  const tabOrWindowIsVisible = useBrowserVisibility();

  useEffect(() => {
    if (isActive === false) {
      pause();
    }
    if (
      (isActive === undefined || isActive === true) &&
      !tabOrWindowIsVisible
    ) {
      pause();
    }
    if ((isActive === undefined || isActive === true) && tabOrWindowIsVisible) {
      resume();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, tabOrWindowIsVisible]);

  const refresh = useCallback(async () => {
    if (!autorefreshableFields?.length || !internalIsActive) return;

    const ids = tableRef.current?.getVisibleRowIds();

    if (!ids) return;

    try {
      const results = await fetchRequest({
        model,
        ids,
        fields: fieldDefs,
        fieldsToRetrieve: autorefreshableFields,
        context,
      });
      tableRef.current?.updateRows(results);
    } catch (err) {
      console.error(err);
    }
  }, [
    autorefreshableFields,
    internalIsActive,
    tableRef,
    fetchRequest,
    model,
    fieldDefs,
    context,
  ]);

  useDeepCompareEffect(() => {
    const shouldStart = autorefreshableFields?.length && internalIsActive;

    if (shouldStart) {
      refresh();
      intervalRef.current = setInterval(refresh, AUTOREFRESH_INTERVAL_SECONDS);
    }

    return () => {
      cancelRequest();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [
    autorefreshableFields,
    fetchRequest,
    fieldDefs,
    model,
    context,
    internalIsActive,
  ]);

  const pause = useCallback(() => {
    setInternalIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    cancelRequest();
  }, [cancelRequest]);

  const resume = useCallback(() => {
    setInternalIsActive(true);
  }, []);

  return { pause, resume };
};
