import { useCallback, useEffect, useRef, useState } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { InfiniteTableRef } from "@gisce/react-formiga-table";
import { useNetworkRequest } from "./useNetworkRequest";
import { useBrowserVisibility } from "./useBrowserVisibility";
import { useDeepCompareEffect } from "use-deep-compare";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getTableItems } from "@/helpers/treeHelper";
import { TreeView } from "@/types/index";
import { getAttributesConditionsFromOoui } from "./useTreeAttributesState";

const AUTOREFRESH_INTERVAL_SECONDS = 0.5 * 1000;

type UseTreeFunctionFieldsReadProps = {
  model: string;
  treeView?: TreeView;
  tableRef: React.RefObject<InfiniteTableRef>;
  context?: any;
  isActive?: boolean;
  onResultsUpdated?: (updatedResults: any[]) => void;
  treeOoui?: TreeOoui;
  updateAttributes?: (attrsEvaluated: any, treeOoui: TreeOoui) => void;
  results?: any[];
};

export const useTreeFunctionFieldsRead = ({
  model,
  treeView,
  tableRef,
  context = {},
  isActive = true,
  onResultsUpdated,
  treeOoui,
  updateAttributes,
  results = [],
}: UseTreeFunctionFieldsReadProps) => {
  const [hasFunctionFields, setHasFunctionFields] = useState(false);
  const functionFields = useRef<string[]>([]);
  const fields = treeView?.fields;

  const [recordIdsToCheck, setRecordIdsToCheck] = useState<Set<number>>(
    new Set(),
  );
  const loadingIds = useRef<Set<number>>(new Set());
  const loadedRecords = useRef<any[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [internalIsActive, setInternalIsActive] = useState(true);

  const [fetchFunctionFields, cancelFunctionFieldsRequest] = useNetworkRequest(
    async (payload: { searchIds: number[]; fieldsToRetrieve: string[] }) => {
      return ConnectionProvider.getHandler().processSearchResults({
        searchIds: payload.searchIds,
        model,
        fieldsToRetrieve: payload.fieldsToRetrieve,
        context,
        fields,
      });
    },
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

  // Cancel any pending requests on unmount or when isActive changes to false
  useEffect(() => {
    if (!isActive) {
      cancelFunctionFieldsRequest();
    }
    return () => {
      cancelFunctionFieldsRequest();
    };
  }, [isActive, cancelFunctionFieldsRequest]);

  // Check if there are any function fields on fields change
  useEffect(() => {
    if (!fields) {
      setHasFunctionFields(false);
      functionFields.current = [];
      return;
    }

    const functionFieldNames = Object.entries(fields)
      .filter(([_, field]: [string, any]) => field.is_function === true)
      .map(([fieldName]) => fieldName);

    setHasFunctionFields(functionFieldNames.length > 0);
    functionFields.current = functionFieldNames;
  }, [fields]);

  const onHasFunctionFieldsToParseConditions = useCallback(() => {
    if (!treeView) {
      return false;
    }
    const colorsFields = treeView.fields_in_conditions?.colors || [];
    const statusFields = treeView.fields_in_conditions?.status || [];
    return (
      colorsFields.some((field) => functionFields.current.includes(field)) ||
      statusFields.some((field) => functionFields.current.includes(field))
    );
  }, [treeView]);

  const requestFunctionFields = useCallback(async () => {
    if (!hasFunctionFields) {
      return;
    }

    if (
      recordIdsToCheck.size === 0 ||
      !isActive ||
      !functionFields.current.length
    ) {
      return;
    }

    if (!treeOoui) {
      return;
    }

    // We need to check which id's aren't loading or loaded
    const recordsToProcess = Array.from(recordIdsToCheck).filter(
      (id) =>
        !loadingIds.current.has(id) &&
        !loadedRecords.current.find((record) => record.id === id),
    );

    if (recordsToProcess.length === 0) {
      return;
    }

    try {
      // Set loading state for records being updated and add them to the loading ids
      recordsToProcess.forEach((id) => loadingIds.current.add(id));

      const { results: functionResults } = await fetchFunctionFields({
        searchIds: recordsToProcess,
        fieldsToRetrieve: functionFields.current,
      });
      const tableItems = getTableItems(treeOoui, functionResults);

      // Add the loaded ids to the loaded ids set, ensuring no duplicates by ID
      const uniqueRecords = [...loadedRecords.current];
      tableItems.forEach((item: any) => {
        const existingIndex = uniqueRecords.findIndex(
          (record) => record.id === item.id,
        );
        if (existingIndex >= 0) {
          uniqueRecords[existingIndex] = item; // Update existing record
        } else {
          uniqueRecords.push(item); // Add new record
        }
      });
      loadedRecords.current = uniqueRecords;
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Error updating function fields:", error);
      }
    }
  }, [
    hasFunctionFields,
    recordIdsToCheck,
    isActive,
    treeOoui,
    fetchFunctionFields,
  ]);

  useDeepCompareEffect(() => {
    if (recordIdsToCheck.size === 0) {
      return;
    }
    requestFunctionFields();
  }, [recordIdsToCheck, requestFunctionFields]);

  const addRecordsToCheckFunctionFields = useCallback(
    (ids: number[]) => {
      if (!ids || ids.length === 0) return;

      // Create a new Set to ensure React detects the state change
      setRecordIdsToCheck((prev) => {
        const newSet = new Set(prev);
        ids.forEach((id) => newSet.add(id));
        return newSet;
      });

      // Immediately request function fields for these IDs
      if (hasFunctionFields && isActive && treeOoui) {
        setTimeout(() => {
          requestFunctionFields();
        }, 100);
      }
    },
    [hasFunctionFields, isActive, treeOoui, requestFunctionFields],
  );

  const processUpdatedResults = useCallback(
    async (updatedResults: any[]) => {
      // First notify parent about updated results
      onResultsUpdated?.(updatedResults);

      // Then check if we need to parse conditions
      if (
        !onHasFunctionFieldsToParseConditions() ||
        !treeOoui ||
        !updateAttributes
      ) {
        return;
      }

      // Merge the updated function fields with the original results
      const mergedResults = updatedResults.map((result: any) => {
        const matchingResult = results?.find((value) => value.id === result.id);
        return { ...matchingResult, ...result };
      });

      const conditions = getAttributesConditionsFromOoui({
        treeOoui,
      });

      try {
        const attrsEvaluated = await parseConditions({
          conditions,
          values: mergedResults,
          context,
        });

        updateAttributes(attrsEvaluated, treeOoui);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error parsing conditions:", error);
        }
      }
    },
    [
      onResultsUpdated,
      onHasFunctionFieldsToParseConditions,
      treeOoui,
      updateAttributes,
      parseConditions,
      context,
      results,
    ],
  );

  const tryUpdateRows = useCallback(() => {
    const currentTableRecords = tableRef?.current?.getVisibleRows() || [];
    if (currentTableRecords.length === 0) {
      return;
    }

    if (loadedRecords.current.length === 0) {
      return;
    }

    // Get the updated records, filtering out any undefined entries
    const recordsToUpdate = loadedRecords.current
      .filter((record) => {
        const currentRecord = currentTableRecords.find(
          (tableRecord: any) => tableRecord?.id === record?.id,
        );

        if (!currentRecord) {
          return false;
        }

        // Check if any function field values have changed
        const hasChanges = functionFields.current.some(
          (fieldName) => record[fieldName] !== currentRecord[fieldName],
        );

        // Only return the record if there are changes
        return hasChanges;
      })
      .filter(Boolean);

    if (recordsToUpdate.length > 0) {
      // remove each record to update from loading id's.
      recordsToUpdate.forEach((record) => loadingIds.current.delete(record.id));

      // Process the updated results (includes both parent notification and condition parsing)
      processUpdatedResults(recordsToUpdate);

      // update the rows
      tableRef?.current?.updateRows(recordsToUpdate);
    }
  }, [tableRef, processUpdatedResults]);

  const isFieldLoading = useCallback((record: any, fieldName: string) => {
    // First check if the field is a function field
    if (!functionFields.current.includes(fieldName)) {
      return false;
    }

    // Then check if this record is not loaded yet
    return !loadedRecords.current.find((r) => r.id === record?.id);
  }, []);

  useDeepCompareEffect(() => {
    const shouldStart = hasFunctionFields && internalIsActive;

    if (shouldStart) {
      tryUpdateRows();
      intervalRef.current = setInterval(
        tryUpdateRows,
        AUTOREFRESH_INTERVAL_SECONDS,
      );
    }

    return () => {
      cancelFunctionFieldsRequest();
      cancelParseConditions();
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [hasFunctionFields, internalIsActive, tryUpdateRows, results]);

  const pause = useCallback(() => {
    setInternalIsActive(false);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    cancelFunctionFieldsRequest();
  }, [cancelFunctionFieldsRequest]);

  const resume = useCallback(() => {
    setInternalIsActive(true);
  }, []);

  return {
    refresh: () => {
      setRecordIdsToCheck(new Set());
      loadedRecords.current = [];
      loadingIds.current.clear();
    },
    addRecordsToCheckFunctionFields,
    isFieldLoading,
    hasFunctionFields,
    pause,
    resume,
    onHasFunctionFieldsToParseConditions,
  };
};
