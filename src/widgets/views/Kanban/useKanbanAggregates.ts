import { useState } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { Kanban } from "@gisce/ooui";
import {
  useDeepCompareEffect,
  useDeepCompareCallback,
  useDeepCompareMemo,
} from "use-deep-compare";

export type KanbanColumnAggregates = {
  [fieldName: string]: {
    label: string;
    amount: number | string;
  };
};

export type KanbanAggregatesByColumn = {
  [columnId: string]: KanbanColumnAggregates;
};

export const useKanbanAggregates = ({
  kanbanDef,
  model,
  domain,
  context,
  columnField,
  columnIds,
  enabled = true,
}: {
  kanbanDef?: Kanban;
  model: string;
  domain: any[];
  context: any;
  columnField: string;
  columnIds: string[];
  enabled?: boolean;
}): {
  aggregatesByColumn: KanbanAggregatesByColumn;
  isLoading: boolean;
  hasAggregates: boolean;
} => {
  const [aggregatesByColumn, setAggregatesByColumn] =
    useState<KanbanAggregatesByColumn>({});
  const [isLoading, setIsLoading] = useState(false);

  const [readAggregates, cancelReadAggregates] = useNetworkRequest(
    ConnectionProvider.getHandler().readAggregates,
  );

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

  const fetchAggregates = useDeepCompareCallback(async () => {
    if (!enabled || !fieldsToAggregate || !columnField) {
      return;
    }

    setIsLoading(true);

    try {
      const aggregatesPromises = columnIds.map(async (columnId) => {
        const columnDomain = [
          ...domain,
          [columnField, "=", columnId === "" ? false : columnId],
        ];

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

        return { columnId, aggregates: columnAggregates };
      });

      const results = await Promise.all(aggregatesPromises);

      const newAggregatesByColumn: KanbanAggregatesByColumn = {};
      results.forEach(({ columnId, aggregates }) => {
        newAggregatesByColumn[columnId] = aggregates;
      });

      setAggregatesByColumn(newAggregatesByColumn);
    } catch (err) {
      console.error("Error fetching kanban aggregates:", err);
      setAggregatesByColumn({});
    } finally {
      setIsLoading(false);
    }
  }, [
    enabled,
    fieldsToAggregate,
    columnField,
    columnIds,
    domain,
    model,
    context,
    kanbanDef?.aggregations,
    readAggregates,
  ]);

  useDeepCompareEffect(() => {
    if (!fieldsToAggregate || columnIds.length === 0) {
      setAggregatesByColumn({});
      return;
    }

    fetchAggregates();

    return () => {
      cancelReadAggregates();
    };
  }, [fieldsToAggregate, columnIds, domain, context]);

  const hasAggregates =
    fieldsToAggregate !== undefined &&
    Object.keys(fieldsToAggregate).length > 0;

  return {
    aggregatesByColumn,
    isLoading,
    hasAggregates,
  };
};
