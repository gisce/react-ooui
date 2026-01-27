import { ConnectionProvider } from "..";
import { useNetworkRequest } from "./useNetworkRequest";
import { useDeepCompareEffect } from "use-deep-compare";
import { useRef, useState, useCallback, useEffect } from "react";
import { useBrowserVisibility } from "./useBrowserVisibility";
import { isExistingId } from "@/helpers/idUtils";

const AUTOREFRESH_INTERVAL_SECONDS = 3 * 1000;

export type UseAutorefreshableFormFieldsOpts = {
  model: string;
  id?: number | string;
  context: any;
  autorefreshableFields?: string[];
  fieldDefs: any;
  onAutorefreshableFieldsChange: (newValues: any) => void;
  isActive?: boolean;
};

export const useAutorefreshableFormFields = (
  opts: UseAutorefreshableFormFieldsOpts,
) => {
  const {
    model,
    id,
    context,
    autorefreshableFields,
    fieldDefs,
    onAutorefreshableFieldsChange,
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
    if (
      !isExistingId(id) ||
      !autorefreshableFields?.length ||
      !internalIsActive
    )
      return; // Skip negative/temporal IDs

    try {
      const [result] = await fetchRequest({
        model,
        ids: [id] as number[],
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
    internalIsActive,
    fetchRequest,
    model,
    fieldDefs,
    context,
    onAutorefreshableFieldsChange,
  ]);

  useDeepCompareEffect(() => {
    const shouldStart =
      isExistingId(id) && autorefreshableFields?.length && internalIsActive; // Skip negative/temporal IDs

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
    id,
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
