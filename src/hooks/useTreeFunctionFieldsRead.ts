import { useCallback, useEffect, useRef, useState } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import {
  InfiniteTableRef,
  PaginatedTableRef,
} from "@gisce/react-formiga-table";
import { useNetworkRequest } from "./useNetworkRequest";
import { useBrowserVisibility } from "./useBrowserVisibility";
import { useDeepCompareEffect } from "use-deep-compare";
import { Tree as TreeOoui } from "@gisce/ooui";
import { getTableItems } from "@/helpers/treeHelper";
import { TreeView } from "@/types/index";
import { getAttributesConditionsFromOoui } from "./useTreeAttributesState";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";

const AUTOREFRESH_INTERVAL_SECONDS = 0.5 * 1000;

type UseTreeFunctionFieldsReadProps = {
  model: string;
  treeView?: TreeView;
  tableRef: React.RefObject<InfiniteTableRef | PaginatedTableRef | null>;
  context?: any;
  isActive?: boolean;
  onResultsUpdated?: (updatedResults: any[]) => void;
  treeOoui?: TreeOoui;
  updateAttributes?: (attrsEvaluated: any, treeOoui: TreeOoui) => void;
  results?: any[];
  onExternalRecordsUpdate?: (
    syncFunction: (updatedRecords: any[]) => void,
  ) => void;
  skipFunctionFieldsHandling?: boolean;
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
  onExternalRecordsUpdate,
  skipFunctionFieldsHandling = false,
}: UseTreeFunctionFieldsReadProps) => {
  const selectionToLazy = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_SELECTION_TO_LAZY,
  );
  const [hasFunctionFields, setHasFunctionFields] = useState(false);
  const functionFields = useRef<string[]>([]);
  const fields = treeView?.fields;
  const SHOULD_MAKE_DEFERRED_FUNCTION_READ =
    treeView?.fields_in_conditions !== undefined;

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

  useEffect(() => {
    return () => {
      // Cancel network requests
      cancelFunctionFieldsRequest();
      cancelParseConditions();

      // Clear interval
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }

      // Clear all ref states to prevent stale data on remount
      // eslint-disable-next-line react-hooks/exhaustive-deps
      loadingIds.current.clear();
      loadedRecords.current = [];
      functionFields.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Cancel any pending requests on unmount or when isActive changes to false
  useEffect(() => {
    if (!isActive) {
      cancelFunctionFieldsRequest();
      cancelParseConditions();
      // Clear loading states when component becomes inactive
      loadingIds.current.clear();
    }
    return () => {
      cancelFunctionFieldsRequest();
      cancelParseConditions();
    };
  }, [isActive, cancelFunctionFieldsRequest, cancelParseConditions]);

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

    // We need to check which id's aren't loading or loaded, and filter out negative IDs
    const recordsToProcess = Array.from(recordIdsToCheck).filter(
      (id) =>
        id > 0 && // Skip negative/temporal IDs
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
      const tableItems = await getTableItems(
        treeOoui,
        functionResults,
        context,
        selectionToLazy,
      );

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
        // Clear loading state for successfully loaded records
        loadingIds.current.delete(item.id);
      });
      loadedRecords.current = uniqueRecords;
    } catch (error) {
      // Clear loading state for all records that failed to load
      recordsToProcess.forEach((id) => loadingIds.current.delete(id));

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
    context,
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

      // Filter out negative/temporal IDs to avoid server requests
      const validIds = ids.filter((id) => id > 0);
      if (validIds.length === 0) return;

      // Create a new Set to ensure React detects the state change
      setRecordIdsToCheck((prev) => {
        const newSet = new Set(prev);
        validIds.forEach((id) => newSet.add(id));
        return newSet;
      });

      // Use functionFields.current.length instead of hasFunctionFields state to avoid timing issues
      const hasFunctionFieldsSync = functionFields.current.length > 0;
      if (hasFunctionFieldsSync && isActive && treeOoui) {
        setTimeout(() => {
          requestFunctionFields();
        }, 100);
      }
    },
    [isActive, treeOoui, requestFunctionFields],
  );

  const processUpdatedResults = useCallback(
    async (updatedResults: any[]) => {
      // First notify parent about updated results
      onResultsUpdated?.(updatedResults);

      // Only proceed with conditions parsing if we have actual updated results
      // and they contain function field updates
      if (
        updatedResults.length === 0 ||
        !functionFields.current.some((field) =>
          updatedResults.some((result) => result[field] !== undefined),
        )
      ) {
        return;
      }

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
        tableRef?.current?.refreshRowStyles();
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
      results,
      parseConditions,
      context,
      tableRef,
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
      // Process the updated results (includes both parent notification and condition parsing)
      processUpdatedResults(recordsToUpdate);

      // update the rows
      tableRef?.current?.updateRows(recordsToUpdate);
    }
  }, [tableRef, processUpdatedResults]);

  const isFieldLoading = useCallback(
    (record: any, fieldName: string) => {
      // If function fields handling is skipped (e.g., when autoRefresh is true), never show loading
      if (skipFunctionFieldsHandling) {
        return false;
      }

      // First check if the field is a function field
      if (!functionFields.current.includes(fieldName)) {
        return false;
      }

      // If record is currently being loaded, show loading state
      if (loadingIds.current.has(record?.id)) {
        return true;
      }

      // Then check if this record is not loaded yet
      return !loadedRecords.current.find((r) => r.id === record?.id);
    },
    [skipFunctionFieldsHandling],
  );

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
    cancelParseConditions();
    // Clear loading states when pausing
    loadingIds.current.clear();
  }, [cancelFunctionFieldsRequest, cancelParseConditions]);

  const resume = useCallback(() => {
    if (!SHOULD_MAKE_DEFERRED_FUNCTION_READ) {
      return;
    }
    setInternalIsActive(true);
  }, [SHOULD_MAKE_DEFERRED_FUNCTION_READ]);

  const syncExternalRecordUpdates = useCallback((updatedRecords: any[]) => {
    if (!updatedRecords || updatedRecords.length === 0) {
      return;
    }

    // Update loadedRecords with the external updates
    const uniqueRecords = [...loadedRecords.current];
    updatedRecords.forEach((updatedRecord: any) => {
      const existingIndex = uniqueRecords.findIndex(
        (record) => record.id === updatedRecord.id,
      );
      if (existingIndex >= 0) {
        // Only update fields that are function fields to preserve function field data
        const mergedRecord = { ...uniqueRecords[existingIndex] };
        functionFields.current.forEach((field) => {
          if (updatedRecord[field] !== undefined) {
            mergedRecord[field] = updatedRecord[field];
          }
        });
        uniqueRecords[existingIndex] = mergedRecord;
      } else {
        // Only add if it contains function fields
        const hasFunctionFieldData = functionFields.current.some(
          (field) => updatedRecord[field] !== undefined,
        );
        if (hasFunctionFieldData) {
          uniqueRecords.push(updatedRecord);
        }
      }
    });
    loadedRecords.current = uniqueRecords;
  }, []);

  // Set up the external update callback
  useEffect(() => {
    if (onExternalRecordsUpdate) {
      onExternalRecordsUpdate(syncExternalRecordUpdates);
    }
  }, [onExternalRecordsUpdate, syncExternalRecordUpdates]);

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
    syncExternalRecordUpdates,
  };
};
