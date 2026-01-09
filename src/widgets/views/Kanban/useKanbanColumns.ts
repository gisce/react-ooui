import { useState, useCallback } from "react";
import { useDeepCompareCallback, useDeepCompareEffect } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { mergeParams } from "@/helpers/searchHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { normalizeColumnValue } from "@/helpers/kanbanHelper";
import { ColumnDefinition } from "./types";

type UseKanbanColumnsParams = {
  model: string;
  domain: any[];
  context: any;
  columnField: string;
  columnFieldDefinition: any;
  searchParams?: any[];
  enabled?: boolean;
  columnDomain?: string | null;
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
    columnDomain = null,
  } = params;

  const { t } = useLocale();
  const [columns, setColumns] = useState<ColumnDefinition[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const [searchRequest, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );

  const [getFieldsRequest, cancelGetFieldsRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().getFields,
  );

  const [evalDomainRequest, cancelEvalDomainRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().evalDomain,
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

    // For many2one fields, query the related model directly
    if (
      columnFieldDefinition?.type === "many2one" &&
      columnFieldDefinition?.relation
    ) {
      setIsLoading(true);
      setError(null);

      try {
        let parsedColumnDomain: any[] = [];

        if (columnDomain) {
          const relatedModelFields = await getFieldsRequest({
            model: columnFieldDefinition.relation,
            context,
          });

          parsedColumnDomain = await evalDomainRequest({
            domain: columnDomain,
            values: {},
            fields: relatedModelFields,
            context,
          });
        }

        const fetchedRecords = await searchRequest({
          model: columnFieldDefinition.relation,
          params: parsedColumnDomain,
          context,
          fieldsToRetrieve: ["id", "name"],
          limit: 0,
        });

        const dynamicColumns = fetchedRecords.map((record: any) => ({
          id: String(record.id),
          label: record.name || String(record.id),
          originalValue: [record.id, record.name || String(record.id)],
        }));

        setColumns(dynamicColumns);
      } catch (err: any) {
        if (err.name !== "AbortError") {
          console.error(
            "Error fetching kanban columns from related model:",
            err,
          );
          setError(err);
        }
      } finally {
        setIsLoading(false);
      }
      return;
    }

    // For other dynamic columns (reference, etc.), extract unique values from main model records
    setIsLoading(true);
    setError(null);

    try {
      const finalDomain = mergeParams(domain, searchParams);

      // Fetch only the column field to minimize data transfer
      // Limit to 1000 records for column discovery to avoid killing the server
      // This means columns with values only in records beyond 1000 won't appear
      const fetchedRecords = await searchRequest({
        model,
        params: finalDomain,
        context,
        fieldsToRetrieve: [columnField],
        limit: 1000,
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
          t,
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
    getFieldsRequest,
    evalDomainRequest,
    columnDomain,
  ]);

  useDeepCompareEffect(() => {
    fetchDynamicColumns();

    return () => {
      cancelSearchRequest();
      cancelGetFieldsRequest();
      cancelEvalDomainRequest();
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
