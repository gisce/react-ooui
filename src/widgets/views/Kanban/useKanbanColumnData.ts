import { useCallback, useEffect, useRef, useState } from "react";
import {
  useDeepCompareCallback,
  useDeepCompareEffect,
  useDeepCompareMemo,
} from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { mergeParams } from "@/helpers/searchHelper";
import { Kanban } from "@gisce/ooui";
import { KanbanRecord } from "./types";

export type KanbanColumnAggregates = {
  [fieldName: string]: {
    label: string;
    amount: number | string;
  };
};

type UseKanbanColumnDataParams = {
  model: string;
  domain: any[];
  context: any;
  columnField: string;
  columnValue: string;
  searchParams?: any[];
  fieldsToRetrieve?: string[];
  enabled?: boolean;
  kanbanDef?: Kanban;
};

export const useKanbanColumnData = (params: UseKanbanColumnDataParams) => {
  const {
    model,
    domain,
    context,
    columnField,
    columnValue,
    searchParams = [],
    fieldsToRetrieve = [],
    enabled = true,
    kanbanDef,
  } = params;

  const [records, setRecords] = useState<KanbanRecord[]>([]);
  const [aggregates, setAggregates] = useState<KanbanColumnAggregates>({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const colorsForRecords = useRef<{ [key: number]: string }>({});
  const statusForRecords = useRef<{ [key: number]: string }>({});

  const [searchRequest, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  const [parseConditions, cancelParseConditions] = useNetworkRequest(
    ConnectionProvider.getHandler().parseConditions,
  );

  const [readAggregates, cancelReadAggregates] = useNetworkRequest(
    ConnectionProvider.getHandler().readAggregates,
  );

  useEffect(() => {
    return () => {
      cancelSearchRequest();
      cancelParseConditions();
      cancelReadAggregates();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fieldsToAggregate = useDeepCompareMemo(() => {
    if (!kanbanDef?.aggregations) return undefined;

    const aggregations = kanbanDef.aggregations;
    if (Object.keys(aggregations).length === 0) return undefined;

    const result: Record<string, string[]> = {};
    Object.keys(aggregations).forEach((fieldName) => {
      result[fieldName] = ["sum"];
    });

    return result;
  }, [kanbanDef?.aggregations]);

  const fetchData = useDeepCompareCallback(async () => {
    if (!enabled || !model || !columnField) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Merge domain with searchParams and add column filter
      const baseDomain = mergeParams(domain, searchParams);

      // Extract the proper value for the search query
      // For many2one fields, columnValue is [id, name], we need just the id
      let searchValue: any = columnValue;
      if (Array.isArray(columnValue) && columnValue.length === 2) {
        // many2one field: use the ID (first element)
        searchValue = columnValue[0];
      } else if (columnValue === "" || columnValue === "false") {
        // Handle empty/false string values
        searchValue = false;
      }

      const columnDomain = [...baseDomain, [columnField, "=", searchValue]];

      const fields = [...new Set([...fieldsToRetrieve, columnField])];

      // Fetch records
      const fetchedRecords = await searchRequest({
        model,
        params: columnDomain,
        context,
        fieldsToRetrieve: fields,
        limit: 0,
      });

      setRecords(fetchedRecords);

      // Fetch aggregates if defined
      if (fieldsToAggregate) {
        try {
          const retrievedData = await readAggregates({
            model,
            domain: columnDomain,
            aggregateFields: fieldsToAggregate,
            context,
          });

          const columnAggregates: KanbanColumnAggregates = {};
          Object.entries(retrievedData).forEach(([fieldName, values]) => {
            const label = kanbanDef?.aggregations[fieldName] || fieldName;
            columnAggregates[fieldName] = {
              label,
              amount: (values as Record<string, number>).sum || 0,
            };
          });

          setAggregates(columnAggregates);
        } catch (err: any) {
          if (err.name !== "AbortError") {
            console.warn("Error fetching column aggregates:", err);
          }
          setAggregates({});
        }
      }

      // Parse colors and status if defined
      if (
        (kanbanDef?.colors || kanbanDef?.status) &&
        fetchedRecords.length > 0
      ) {
        try {
          const conditions: any = {};
          if (kanbanDef.colors) {
            conditions.colors = kanbanDef.colors;
          }
          if (kanbanDef.status) {
            conditions.status = kanbanDef.status;
          }

          const attrsEvaluated = await parseConditions({
            conditions,
            values: fetchedRecords,
            context,
          });

          if (attrsEvaluated && Array.isArray(attrsEvaluated)) {
            const newColors: { [key: number]: string } = {};
            const newStatus: { [key: number]: string } = {};

            attrsEvaluated.forEach((attr: any) => {
              if (attr.id !== undefined) {
                if (attr.colors) {
                  newColors[attr.id] = attr.colors;
                }
                if (attr.status) {
                  newStatus[attr.id] = attr.status;
                }
              }
            });

            colorsForRecords.current = newColors;
            statusForRecords.current = newStatus;
          }
        } catch (err: any) {
          if (err.name !== "AbortError") {
            console.warn("Error evaluating colors/status:", err);
          }
        }
      }
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("Error fetching column data:", err);
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [
    enabled,
    model,
    columnField,
    columnValue,
    domain,
    searchParams,
    context,
    fieldsToRetrieve,
    fieldsToAggregate,
    kanbanDef,
    searchRequest,
    readAggregates,
    parseConditions,
  ]);

  useDeepCompareEffect(() => {
    fetchData();
  }, [
    enabled,
    model,
    columnField,
    columnValue,
    domain,
    searchParams,
    context,
    fieldsToRetrieve,
  ]);

  const refresh = useCallback(() => {
    fetchData();
  }, [fetchData]);

  return {
    records,
    count: records.length,
    aggregates,
    colorsForRecords,
    statusForRecords,
    isLoading,
    error,
    refresh,
  };
};
