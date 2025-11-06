import { useCallback, useEffect, useRef, useState } from "react";
import { useDeepCompareCallback, useDeepCompareEffect } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { mergeParams } from "@/helpers/searchHelper";
import { Kanban } from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";

export type KanbanRecord = {
  id: number;
  [key: string]: any;
};

export type KanbanColumn = {
  id: string;
  label: string;
  records: KanbanRecord[];
  count: number;
};

type ColumnDefinition = {
  id: string;
  label: string;
};

type UseKanbanDataParams = {
  model: string;
  domain: any[];
  context: any;
  columnField: string;
  columnFieldDefinition: any;
  searchParams?: any[];
  fieldsToRetrieve?: string[];
  enabled?: boolean;
  kanbanDef?: Kanban;
  viewId?: number;
};

export const useKanbanData = (params: UseKanbanDataParams) => {
  const {
    model,
    domain,
    context,
    columnField,
    columnFieldDefinition,
    searchParams = [],
    fieldsToRetrieve = [],
    enabled = true,
    kanbanDef,
    viewId,
  } = params;

  const { t } = useLocale();

  const [columns, setColumns] = useState<KanbanColumn[]>([]);
  const [records, setRecords] = useState<KanbanRecord[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const colorsForRecords = useRef<{ [key: number]: string }>({});
  const statusForRecords = useRef<{ [key: number]: string }>({});
  const hasInitialDataRef = useRef(false);
  const previousViewIdRef = useRef<number | undefined>(viewId);

  useEffect(() => {
    if (viewId !== undefined && viewId !== previousViewIdRef.current) {
      hasInitialDataRef.current = false;
      previousViewIdRef.current = viewId;
    }
  }, [viewId]);

  const [searchRequest, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  const [parseConditions, cancelParseConditions] = useNetworkRequest(
    ConnectionProvider.getHandler().parseConditions,
  );

  useEffect(() => {
    return () => {
      cancelSearchRequest();
      cancelParseConditions();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const normalizeColumnValue = useCallback(
    (
      value: any,
      fieldDefinition: any,
    ): { originalValue: any; key: string; displayName: string } | null => {
      if (value === null || value === undefined) {
        if (fieldDefinition?.type !== "boolean") {
          return null;
        }
      }

      const fieldType = fieldDefinition?.type;

      switch (fieldType) {
        case "many2one":
          if (Array.isArray(value) && value.length === 2) {
            return {
              originalValue: value,
              key: String(value[0]),
              displayName: value[1],
            };
          }
          return null;

        case "selection": {
          let selectionKey: any;
          let selectionLabel: string;

          if (Array.isArray(value) && value.length === 2) {
            selectionKey = value[0];
            selectionLabel = value[1];
          } else {
            selectionKey = value;
            const selectionValues =
              fieldDefinition?.selection || fieldDefinition?.selectionValues;
            if (selectionValues) {
              const found = selectionValues.find(
                ([id]: [any, string]) => id === selectionKey,
              );
              selectionLabel = found ? found[1] : String(selectionKey);
            } else {
              selectionLabel = String(selectionKey);
            }
          }

          return {
            originalValue: value,
            key: String(selectionKey),
            displayName: selectionLabel,
          };
        }

        case "boolean": {
          const boolValue =
            value === true || value === 1 || value === "true" || value === "1";
          return {
            originalValue: value,
            key: String(boolValue),
            displayName: boolValue ? t("yes") : t("no"),
          };
        }

        case "reference": {
          if (typeof value === "string" && value.includes(",")) {
            const [, idPart] = value.split(",");
            return {
              originalValue: value,
              key: idPart,
              displayName: value,
            };
          }
          return null;
        }

        default: {
          if (value === null || value === undefined) {
            return null;
          }
          const stringValue = String(value);
          return {
            originalValue: value,
            key: stringValue,
            displayName: stringValue,
          };
        }
      }
    },
    [t],
  );

  const extractColumnId = useCallback(
    (columnValue: any, fieldDefinition?: any): string | null => {
      if (!fieldDefinition) {
        if (!columnValue && columnValue !== false && columnValue !== 0)
          return null;

        if (Array.isArray(columnValue) && columnValue.length === 2) {
          return String(columnValue[0]);
        }

        return String(columnValue);
      }

      const normalized = normalizeColumnValue(columnValue, fieldDefinition);
      return normalized ? normalized.key : null;
    },
    [normalizeColumnValue],
  );

  const extractColumnInfo = useCallback(
    (
      columnValue: any,
      fieldDefinition?: any,
    ): { id: string; label: string } | null => {
      if (!fieldDefinition) {
        if (!columnValue && columnValue !== false && columnValue !== 0)
          return null;

        if (Array.isArray(columnValue) && columnValue.length === 2) {
          return {
            id: String(columnValue[0]),
            label: columnValue[1],
          };
        }

        const value = String(columnValue);
        return {
          id: value,
          label: value,
        };
      }

      const normalized = normalizeColumnValue(columnValue, fieldDefinition);
      return normalized
        ? { id: normalized.key, label: normalized.displayName }
        : null;
    },
    [normalizeColumnValue],
  );

  const getColumnDefinitions = useCallback((): ColumnDefinition[] => {
    if (!columnFieldDefinition) {
      return [];
    }

    const fieldType = columnFieldDefinition.type;

    if (fieldType === "boolean") {
      return [
        { id: "false", label: t("no") },
        { id: "true", label: t("yes") },
      ];
    }

    if (fieldType === "selection") {
      const selectionValues =
        columnFieldDefinition.selection ||
        columnFieldDefinition.selectionValues;
      if (selectionValues) {
        return selectionValues.map(([id, label]: [string, string]) => ({
          id: String(id),
          label: String(label),
        }));
      }
    }

    return [];
  }, [columnFieldDefinition, t]);

  const fetchRecords = useDeepCompareCallback(async () => {
    if (!enabled || !model || !columnField) {
      return;
    }

    // If we already have initial data, this is a refresh
    if (hasInitialDataRef.current) {
      setIsRefreshing(true);
    } else {
      setIsLoading(true);
    }
    setError(null);

    try {
      const finalDomain = mergeParams(domain, searchParams);

      const fields = [...new Set([...fieldsToRetrieve, columnField])];

      const fetchedRecords = await searchRequest({
        model,
        params: finalDomain,
        context,
        fieldsToRetrieve: fields,
        limit: 0,
      });

      setRecords(fetchedRecords);

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
            attrsEvaluated.forEach((attr: any) => {
              if (attr.id !== undefined) {
                if (attr.colors) {
                  colorsForRecords.current[attr.id] = attr.colors;
                }
                if (attr.status) {
                  statusForRecords.current[attr.id] = attr.status;
                }
              }
            });
          }
        } catch (err: any) {
          if (err.name !== "AbortError") {
            console.warn("Error evaluating colors/status:", err);
          }
        }
      }

      const columnDefs = getColumnDefinitions();
      const dynamicColumnDefs = new Map<string, string>();

      if (columnDefs.length === 0 && columnFieldDefinition) {
        fetchedRecords.forEach((record: KanbanRecord) => {
          const columnValue = record[columnField];
          const columnInfo = extractColumnInfo(
            columnValue,
            columnFieldDefinition,
          );

          if (!columnInfo) return;

          if (!dynamicColumnDefs.has(columnInfo.id)) {
            dynamicColumnDefs.set(columnInfo.id, columnInfo.label);
          }
        });

        columnDefs.push(
          ...Array.from(dynamicColumnDefs.entries()).map(([id, label]) => ({
            id,
            label,
          })),
        );
      }

      const groupedRecords: Record<string, KanbanRecord[]> = {};

      if (columnDefs.length > 0) {
        columnDefs.forEach((col) => {
          groupedRecords[col.id] = [];
        });
      }

      fetchedRecords.forEach((record: KanbanRecord) => {
        const columnValue = record[columnField];
        const colId = extractColumnId(columnValue, columnFieldDefinition);

        if (!colId) return;

        if (!groupedRecords[colId]) {
          groupedRecords[colId] = [];
        }

        groupedRecords[colId].push(record);
      });

      const columnsArray: KanbanColumn[] = Object.entries(groupedRecords).map(
        ([colId, colRecords]) => {
          const columnDef = columnDefs.find((c) => c.id === colId);
          return {
            id: colId,
            label: columnDef?.label || colId,
            records: colRecords,
            count: colRecords.length,
          };
        },
      );

      setColumns((prevColumns) => {
        if (
          hasInitialDataRef.current &&
          prevColumns.length > 0 &&
          columnsArray.length === 0
        ) {
          return prevColumns;
        }
        return columnsArray;
      });
      hasInitialDataRef.current = true;
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("Error fetching kanban data:", err);
        setError(err);
      }
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  }, [
    enabled,
    model,
    columnField,
    domain,
    searchParams,
    context,
    fieldsToRetrieve,
    getColumnDefinitions,
    kanbanDef,
    parseConditions,
  ]);

  useDeepCompareEffect(() => {
    fetchRecords();
  }, [
    enabled,
    model,
    columnField,
    domain,
    searchParams,
    context,
    fieldsToRetrieve,
  ]);

  const moveRecord = useCallback(
    async (recordId: number, fromColumnId: string, toColumnId: string) => {},
    [],
  );

  const totalRows = columns.reduce((sum, col) => sum + col.count, 0);

  return {
    columns,
    records,
    isLoading,
    isRefreshing,
    error,
    colorsForRecords,
    statusForRecords,
    fetchRecords,
    moveRecord,
    totalRows,
  };
};
