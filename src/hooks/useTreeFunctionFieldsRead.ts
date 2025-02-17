import { useCallback, useEffect, useRef } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { InfiniteTableRef } from "@gisce/react-formiga-table";

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

      // Filter records that need function field fetches
      const recordsNeedingUpdate = recordsToProcess.filter((record) => {
        // Check if any function field is undefined or null in the record
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
        const { results: functionResults } =
          await ConnectionProvider.getHandler().processSearchResults({
            searchIds: recordsNeedingUpdate.map((r) => r.id),
            model,
            fieldsToRetrieve: functionFields.current!,
            context,
            fields,
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
        console.error("Error updating function fields:", error);
      }
    },
    [context, fields, isActive, model, results, tableRef, onResultsUpdated],
  );

  // Update function fields whenever results change
  useEffect(() => {
    updateFunctionFields();
  }, [updateFunctionFields, results]);

  return {
    refresh: () => {
      previousResultIds.current.clear();
      updateFunctionFields(true);
    },
  };
};
