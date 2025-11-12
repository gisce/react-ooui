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
  nameSearch?: string;
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
    nameSearch,
    fieldsToRetrieve = [],
    enabled = true,
    kanbanDef,
  } = params;

  const [records, setRecords] = useState<KanbanRecord[]>([]);
  const [aggregates, setAggregates] = useState<KanbanColumnAggregates>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const colorsForRecords = useRef<{ [key: number]: string }>({});
  const statusForRecords = useRef<{ [key: number]: string }>({});

  const PAGE_SIZE = 30;

  const [searchForTree, cancelSearchForTree] = useNetworkRequest(
    ConnectionProvider.getHandler().searchForTree,
  );

  const [readAggregates, cancelReadAggregates] = useNetworkRequest(
    ConnectionProvider.getHandler().readAggregates,
  );

  useEffect(() => {
    return () => {
      cancelSearchForTree();
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

  const fetchData = useDeepCompareCallback(
    async (isLoadingNextPage = false) => {
      if (!enabled || !model || !columnField) {
        return;
      }

      if (isLoadingNextPage) {
        setIsLoadingMore(true);
      } else {
        setIsLoading(true);
        setCurrentOffset(0);
        setHasMore(true);
      }
      setError(null);

      try {
        // When nameSearch is active: use ONLY domain (ignore searchParams)
        // When nameSearch is NOT active: merge domain + searchParams
        const baseDomain = nameSearch
          ? domain
          : mergeParams(domain, searchParams);

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

        // Build fields object for searchForTree
        // searchForTree expects an object of field definitions, not an array of field names
        const fieldsToFetch = [...new Set([...fieldsToRetrieve, columnField])];
        const fieldsObject = kanbanDef?.fields
          ? Object.keys(kanbanDef.fields).reduce(
              (acc: any, fieldName: string) => {
                if (fieldsToFetch.includes(fieldName)) {
                  acc[fieldName] = kanbanDef.fields[fieldName];
                }
                return acc;
              },
              {},
            )
          : {};

        let order: string | undefined;
        if (kanbanDef?.sort && !nameSearch) {
          order = `${kanbanDef.sort} asc`;
        }

        const attrs: any = {};
        if (kanbanDef?.colors) {
          attrs.colors = kanbanDef.colors;
        }
        if (kanbanDef?.status) {
          attrs.status = kanbanDef.status;
        }

        const offsetToUse = isLoadingNextPage ? currentOffset : 0;

        const { results: fetchedRecords, attrsEvaluated } = await searchForTree(
          {
            model,
            params: columnDomain,
            context,
            fields: fieldsObject,
            limit: nameSearch ? 0 : PAGE_SIZE,
            offset: nameSearch ? 0 : offsetToUse,
            order,
            attrs: Object.keys(attrs).length > 0 ? attrs : undefined,
            name_search: nameSearch,
          },
        );

        if (nameSearch) {
          setRecords(fetchedRecords);
          setCurrentOffset(0);
          setHasMore(false);
        } else if (isLoadingNextPage) {
          setRecords((prev) => [...prev, ...fetchedRecords]);
          setCurrentOffset((prev) => prev + PAGE_SIZE);
          setHasMore(fetchedRecords.length === PAGE_SIZE);
        } else {
          setRecords(fetchedRecords);
          setCurrentOffset(PAGE_SIZE);
          setHasMore(fetchedRecords.length === PAGE_SIZE);
        }

        // Fetch aggregates if defined (only on initial load, not pagination)
        if (fieldsToAggregate && !isLoadingNextPage) {
          if (fetchedRecords.length > 0) {
            try {
              // For aggregates, we need to use the full domain (not just the fetched IDs)
              // to get aggregates for ALL records in the column, not just the current page
              const aggregateDomain = columnDomain;

              const retrievedData = await readAggregates({
                model,
                domain: aggregateDomain,
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
          } else {
            // No records, clear aggregates
            setAggregates({});
          }
        }

        // Parse colors and status from attrsEvaluated returned by searchForTree
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

          if (isLoadingNextPage) {
            colorsForRecords.current = {
              ...colorsForRecords.current,
              ...newColors,
            };
            statusForRecords.current = {
              ...statusForRecords.current,
              ...newStatus,
            };
          } else {
            colorsForRecords.current = newColors;
            statusForRecords.current = newStatus;
          }
        }
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error("Error fetching column data:", err);
          setError(err);
        }
      } finally {
        if (isLoadingNextPage) {
          setIsLoadingMore(false);
        } else {
          setIsLoading(false);
        }
      }
    },
    [
      enabled,
      model,
      columnField,
      columnValue,
      domain,
      searchParams,
      nameSearch,
      context,
      fieldsToRetrieve,
      fieldsToAggregate,
      kanbanDef,
      searchForTree,
      readAggregates,
      currentOffset,
      PAGE_SIZE,
    ],
  );

  useDeepCompareEffect(() => {
    fetchData();
  }, [
    enabled,
    model,
    columnField,
    columnValue,
    domain,
    searchParams,
    nameSearch,
    context,
    fieldsToRetrieve,
  ]);

  const refresh = useCallback(() => {
    setRecords([]);
    setCurrentOffset(0);
    setHasMore(true);
    setAggregates({});
    colorsForRecords.current = {};
    statusForRecords.current = {};
    fetchData();
  }, [fetchData]);

  const fetchNextPage = useCallback(() => {
    if (!isLoadingMore && hasMore) {
      fetchData(true);
    }
  }, [fetchData, isLoadingMore, hasMore]);

  return {
    records,
    count: records.length,
    aggregates,
    colorsForRecords,
    statusForRecords,
    isLoading,
    isLoadingMore,
    hasMore,
    error,
    refresh,
    fetchNextPage,
  };
};
