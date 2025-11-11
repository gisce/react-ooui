import { useState, useCallback, useMemo } from "react";
import { useDeepCompareCallback, useDeepCompareEffect } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { mergeParams } from "@/helpers/searchHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { ColumnDefinition } from "./types";

type UseKanbanColumnsParams = {
  model: string;
  domain: any[];
  context: any;
  columnField: string;
  columnFieldDefinition: any;
  searchParams?: any[];
  enabled?: boolean;
};

export const useKanbanColumns = (params: UseKanbanColumnsParams) => {
  const {
    model,
    domain,
    context,
    columnField,
    columnFieldDefinition,
    searchParams = [],
    enabled = true,
  } = params;

  const { t } = useLocale();
  const [columns, setColumns] = useState<ColumnDefinition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [searchRequest, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  const getStaticColumnDefinitions = useCallback(():
    | ColumnDefinition[]
    | null => {
    if (!columnFieldDefinition) {
      return null;
    }

    const fieldType = columnFieldDefinition.type;

    if (fieldType === "boolean") {
      return [
        { id: "false", label: t("no"), originalValue: false },
        { id: "true", label: t("yes"), originalValue: true },
      ];
    }

    if (fieldType === "selection") {
      const selectionValues =
        columnFieldDefinition.selection ||
        columnFieldDefinition.selectionValues;
      if (selectionValues) {
        return selectionValues.map(([id, label]: [any, string]) => ({
          id: String(id),
          label: String(label),
          originalValue: id,
        }));
      }
    }

    return null;
  }, [columnFieldDefinition, t]);

  const normalizeColumnValue = useCallback(
    (
      value: any,
      fieldDefinition: any,
    ): { id: string; label: string; originalValue: any } | null => {
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
              id: String(value[0]),
              label: value[1],
              originalValue: value,
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
            id: String(selectionKey),
            label: selectionLabel,
            originalValue: selectionKey,
          };
        }

        case "boolean": {
          const boolValue =
            value === true || value === 1 || value === "true" || value === "1";
          return {
            id: String(boolValue),
            label: boolValue ? t("yes") : t("no"),
            originalValue: boolValue,
          };
        }

        case "reference": {
          if (typeof value === "string" && value.includes(",")) {
            const [, idPart] = value.split(",");
            return {
              id: idPart,
              label: value,
              originalValue: value,
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
            id: stringValue,
            label: stringValue,
            originalValue: value,
          };
        }
      }
    },
    [t],
  );

  const fetchDynamicColumns = useDeepCompareCallback(async () => {
    if (!enabled || !model || !columnField) {
      return;
    }

    // First check if we have static column definitions
    // These are fields where we know all possible values beforehand
    const staticColumns = getStaticColumnDefinitions();
    if (staticColumns) {
      setColumns(staticColumns);
      return;
    }

    // For dynamic columns (many2one, etc.), extract unique values from records
    setIsLoading(true);
    setError(null);

    try {
      const finalDomain = mergeParams(domain, searchParams);

      // Fetch only the column field to minimize data transfer
      const fetchedRecords = await searchRequest({
        model,
        params: finalDomain,
        context,
        fieldsToRetrieve: [columnField],
        limit: 0,
      });

      // Extract unique column values
      const dynamicColumnMap = new Map<
        string,
        { label: string; originalValue: any }
      >();

      fetchedRecords.forEach((record: any) => {
        const columnValue = record[columnField];
        const columnInfo = normalizeColumnValue(
          columnValue,
          columnFieldDefinition,
        );

        if (columnInfo && !dynamicColumnMap.has(columnInfo.id)) {
          dynamicColumnMap.set(columnInfo.id, {
            label: columnInfo.label,
            originalValue: columnInfo.originalValue,
          });
        }
      });

      const dynamicColumns = Array.from(dynamicColumnMap.entries()).map(
        ([id, { label, originalValue }]) => ({
          id,
          label,
          originalValue,
        }),
      );

      setColumns(dynamicColumns);
    } catch (err: any) {
      if (err.name !== "AbortError") {
        console.error("Error fetching kanban columns:", err);
        setError(err);
      }
    } finally {
      setIsLoading(false);
    }
  }, [
    enabled,
    model,
    columnField,
    domain,
    searchParams,
    context,
    getStaticColumnDefinitions,
    normalizeColumnValue,
    columnFieldDefinition,
    searchRequest,
  ]);

  useDeepCompareEffect(() => {
    fetchDynamicColumns();

    return () => {
      cancelSearchRequest();
    };
  }, [enabled, model, columnField, domain, searchParams, context]);

  const refresh = useCallback(() => {
    fetchDynamicColumns();
  }, [fetchDynamicColumns]);

  return {
    columns,
    isLoading,
    error,
    refresh,
  };
};
