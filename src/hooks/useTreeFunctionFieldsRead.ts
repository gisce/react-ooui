import { useCallback, useEffect, useRef } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { InfiniteTableRef } from "@gisce/react-formiga-table";
import { useNetworkRequest } from "./useNetworkRequest";

type UseTreeFunctionFieldsReadProps = {
  model: string;
  fields: any;
  tableRef: React.RefObject<InfiniteTableRef>;
  context?: any;
  isActive?: boolean;
  results?: any[];
  onResultsUpdated?: (updatedResults: any[]) => void;
};

export const useTreeFunctionFieldsRead = ({
  model,
  fields,
  tableRef,
  context = {},
  isActive = true,
  results,
  onResultsUpdated,
}: UseTreeFunctionFieldsReadProps) => {
  const hasFunctionFields = useRef<boolean>(false);
  const previousResultIds = useRef<Set<number>>(new Set());
  const functionFields = useRef<string[]>();
  const currentLoadingIds = useRef<Set<number>>(new Set());

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
      hasFunctionFields.current = false;
      return;
    }

    const functionFieldNames = Object.entries(fields)
      .filter(([_, field]: [string, any]) => field.is_function === true)
      .map(([fieldName]) => fieldName);

    hasFunctionFields.current = functionFieldNames.length > 0;
    functionFields.current = functionFieldNames;
  }, [fields]);

  const updateFunctionFields = useCallback(
    async (forceRefresh?: boolean) => {
      if (!hasFunctionFields.current) {
        return;
      }

      if (!results?.length || !isActive || !functionFields.current?.length) {
        return;
      }

      // Get new records by comparing with previous IDs
      const currentIds = new Set(results.map((r) => r.id));
      const recordsToProcess = forceRefresh
        ? results
        : results.filter((r) => !previousResultIds.current.has(r.id));

      // When forcing refresh, treat all records as needing update
      const recordsNeedingUpdate = forceRefresh
        ? recordsToProcess
        : recordsToProcess.filter((record) => {
            return functionFields.current!.some(
              (fieldName) =>
                record[fieldName] === undefined || record[fieldName] === null,
            );
          });

      if (recordsNeedingUpdate.length === 0) {
        // If no records need updates, just update the previous IDs and return
        previousResultIds.current = currentIds;
        return;
      }

      try {
        // Set loading state for records being updated
        const loadingIds = new Set(recordsNeedingUpdate.map((r) => r.id));
        currentLoadingIds.current = loadingIds;

        const { results: functionResults } = await fetchFunctionFields({
          searchIds: recordsNeedingUpdate.map((r) => r.id),
          fieldsToRetrieve: functionFields.current!,
        });

        // Update the table data with function field values
        if (functionResults?.length) {
          tableRef.current?.updateRows(functionResults);

          // Create updated results by merging function field values
          const updatedResults = results.map((row) => {
            const functionResult = functionResults.find(
              (r: any) => r.id === row.id,
            );
            if (functionResult) {
              return {
                ...row,
                ...functionResult,
              };
            }
            return row;
          });

          // Notify parent about updated results
          onResultsUpdated?.(updatedResults);
        }

        // Update previous IDs with current IDs
        previousResultIds.current = currentIds;
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Error updating function fields:", error);
        }
      } finally {
        // Clear loading state
        currentLoadingIds.current = new Set();
      }
    },
    [isActive, results, tableRef, onResultsUpdated, fetchFunctionFields],
  );

  // Update function fields whenever results change
  useEffect(() => {
    updateFunctionFields();
  }, [updateFunctionFields, results]);

  const isFieldLoading = useCallback((record: any, fieldName: string) => {
    // First check if the field is a function field
    if (!functionFields.current?.includes(fieldName)) {
      return false;
    }

    // Then check if this record is currently being loaded
    // Use the ref for immediate access to loading state
    return currentLoadingIds.current.has(record?.id);
  }, []);

  return {
    refresh: () => {
      previousResultIds.current.clear();
      updateFunctionFields(true);
    },
    isFieldLoading,
  };
};
