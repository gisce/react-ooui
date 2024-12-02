import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";
import { useDeepCompareEffect } from "use-deep-compare";
import { useRef, useState, useCallback } from "react";

const AUTOREFRESH_INTERVAL_SECONDS = 3 * 1000;

export type UseAutorefreshableFieldsOpts = {
  model: string;
  id?: number;
  context: any;
  autorefreshableFields?: string[];
  fieldDefs: any;
  onAutorefreshableFieldsChange: (newValues: any) => void;
};

export const useAutorefreshableFields = (
  opts: UseAutorefreshableFieldsOpts,
) => {
  const {
    model,
    id,
    context,
    autorefreshableFields,
    fieldDefs,
    onAutorefreshableFieldsChange,
  } = opts;

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isActive, setIsActive] = useState(true);

  const [fetchRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );

  const refresh = useCallback(async () => {
    if (!id || !autorefreshableFields?.length || !isActive) return;

    try {
      const [result] = await fetchRequest({
        model,
        ids: [id],
        fields: fieldDefs,
        fieldsToRetrieve: autorefreshableFields,
        context,
      });
      onAutorefreshableFieldsChange(result);
    } catch (err) {
      console.error(err);
    }
  }, [
    id,
    autorefreshableFields,
    isActive,
    fetchRequest,
    model,
    fieldDefs,
    context,
    onAutorefreshableFieldsChange,
  ]);

  useDeepCompareEffect(() => {
    const shouldStart = id && autorefreshableFields?.length && isActive;

    if (shouldStart) {
      refresh();
      intervalRef.current = setInterval(refresh, AUTOREFRESH_INTERVAL_SECONDS);
    }

    return () => {
      // setIsActive(false);
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
    id,
    context,
    isActive,
  ]);

  const pause = useCallback(() => {
    setIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    cancelRequest();
  }, [cancelRequest]);

  const resume = useCallback(() => {
    setIsActive(true);
  }, []);

  return { pause, resume };
};
