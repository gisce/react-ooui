import { ConnectionProvider, TreeView } from "..";
import { useNetworkRequest } from "./useNetworkRequest";
import { useDeepCompareEffect } from "use-deep-compare";
import { useRef, useState, useCallback, useEffect, useMemo } from "react";
import { InfiniteTableRef } from "@gisce/react-formiga-table";
import { useBrowserVisibility } from "./useBrowserVisibility";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getTableItems } from "@/helpers/treeHelper";
import { getAttributesConditionsFromOoui } from "./useTreeAttributesState";

const AUTOREFRESH_INTERVAL_SECONDS = 3 * 1000;

export type UseAutorefreshableTreeFieldsOpts = {
  tableRef: React.RefObject<InfiniteTableRef>;
  model: string;
  context: any;
  autorefreshableFields?: string[];
  treeView?: TreeView;
  isActive?: boolean;
  treeOoui?: TreeOoui;
  updateAttributes?: (attrsEvaluated: any, treeOoui: TreeOoui) => void;
};

export const useAutorefreshableTreeFields = (
  opts: UseAutorefreshableTreeFieldsOpts,
) => {
  const {
    tableRef,
    model,
    context,
    autorefreshableFields,
    isActive,
    treeOoui,
    updateAttributes,
    treeView,
  } = opts;

  const fieldDefs = useMemo(() => {
    return treeView?.field_parent
      ? { ...treeView?.fields, [treeView?.field_parent]: {} }
      : treeView?.fields;
  }, [treeView]);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [internalIsActive, setInternalIsActive] = useState(true);

  const [fetchRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().readObjects,
  );

  const [parseConditions, cancelParseConditions] = useNetworkRequest(
    ConnectionProvider.getHandler().parseConditions,
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

  const onHasAutorefreshableFieldsToParseConditions = useCallback(() => {
    if (!treeView) {
      return false;
    }
    const colorsFields = treeView.fields_in_conditions?.colors || [];
    const statusFields = treeView.fields_in_conditions?.status || [];
    return (
      colorsFields.some((field) => autorefreshableFields?.includes(field)) ||
      statusFields.some((field) => autorefreshableFields?.includes(field))
    );
  }, [treeView, autorefreshableFields]);

  const refresh = useCallback(async () => {
    if (!autorefreshableFields?.length || !internalIsActive) return;

    const ids = tableRef.current
      ?.getVisibleRowIds()
      .filter((id: any) => id !== undefined && id !== null);

    if (!ids || ids.length === 0) return;

    if (!treeOoui) {
      return;
    }

    try {
      const results = await fetchRequest({
        model,
        ids,
        fields: fieldDefs,
        fieldsToRetrieve: autorefreshableFields,
        context,
      });
      const preparedResults = getTableItems(treeOoui, results);

      // Parse conditions and update attributes if needed
      if (
        updateAttributes &&
        treeOoui &&
        onHasAutorefreshableFieldsToParseConditions()
      ) {
        const conditions = getAttributesConditionsFromOoui({
          treeOoui,
        });

        try {
          const attrsEvaluated = await parseConditions({
            conditions,
            values: preparedResults,
            context,
          });

          updateAttributes(attrsEvaluated, treeOoui);
        } catch (error) {
          if (error.name !== "AbortError") {
            console.error("Error parsing conditions:", error);
          }
        }
      }

      tableRef.current?.updateRows(preparedResults);
    } catch (err) {
      console.error(err);
    }
  }, [
    autorefreshableFields,
    internalIsActive,
    tableRef,
    treeOoui,
    fetchRequest,
    model,
    fieldDefs,
    context,
    updateAttributes,
    onHasAutorefreshableFieldsToParseConditions,
    parseConditions,
  ]);

  useDeepCompareEffect(() => {
    const shouldStart = autorefreshableFields?.length && internalIsActive;

    if (shouldStart) {
      refresh();
      intervalRef.current = setInterval(refresh, AUTOREFRESH_INTERVAL_SECONDS);
    }

    return () => {
      cancelRequest();
      cancelParseConditions();
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
    cancelParseConditions();
  }, [cancelRequest, cancelParseConditions]);

  const resume = useCallback(() => {
    setInternalIsActive(true);
  }, []);

  return { pause, resume };
};
