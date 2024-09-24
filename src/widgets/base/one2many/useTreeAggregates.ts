import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { Tree as TreeOoui } from "@gisce/ooui";
import { useState } from "react";
import {
  useDeepCompareEffect,
  useDeepCompareCallback,
  useDeepCompareMemo,
} from "use-deep-compare";

const OPERATION_KEYS = ["sum", "count", "max", "min"];

export type TreeAggregates =
  | Record<
      string,
      Array<{
        operation: string;
        label: string;
        amount: number | string;
      }>
    >
  | undefined;

export const useTreeAggregates = ({
  ooui,
  model,
  domain,
  showEmptyValues,
}: {
  ooui?: TreeOoui;
  domain?: any[];
  model: string;
  showEmptyValues?: boolean;
}): [boolean, TreeAggregates, boolean] => {
  const [aggregates, setAggregates] = useState<TreeAggregates>();
  const [loading, setLoading] = useState(false);

  const [readAggregates, cancelReadAggregates] = useNetworkRequest(
    ConnectionProvider.getHandler().readAggregates,
  );

  const fieldsAndOpToRetrieve = useDeepCompareMemo(() => {
    if (!ooui) return undefined;
    return ooui.columns
      .filter((it) => {
        return Object.keys(it).some((key) => {
          // Since the ooui keys have underscore, we have to remove the first character to match
          return (
            it[key] !== undefined &&
            it[key]?.length > 0 &&
            OPERATION_KEYS.includes(key.slice(1))
          );
        });
      })
      .map((it) => {
        // Since the ooui keys have underscore, we have to remove the first character to match
        const operationsForField = Object.keys(it)
          .filter((key) => OPERATION_KEYS.includes(key.slice(1)))
          .map((key) => key.slice(1));
        return {
          [it.id]: operationsForField,
        };
      })
      .flat()
      .reduce<{ [key: string]: string[] }>((acc, obj) => {
        const key: string = Object.keys(obj)[0];
        acc[key] = obj[key as any];
        return acc;
      }, {});
  }, [ooui?.columns]);

  const fetchData = useDeepCompareCallback(async () => {
    if (!ooui) {
      return;
    }
    try {
      setLoading(true);

      if (!domain && showEmptyValues && fieldsAndOpToRetrieve) {
        const emptyAggregates: TreeAggregates = {};
        Object.entries({ ...fieldsAndOpToRetrieve }).forEach(
          ([field, operations]) => {
            emptyAggregates[field] = operations.map((operation) => {
              const fieldDefinition = ooui.columns.find(
                (it) => it.id === field,
              );
              return {
                operation,
                label:
                  (fieldDefinition?.[
                    `_${operation}` as keyof typeof fieldDefinition
                  ] as string) || "",
                amount: "-",
              };
            });
          },
        );
        setAggregates(emptyAggregates);
        return;
      } else if (!domain) {
        setAggregates(undefined);
        return;
      }

      const retrievedData = await readAggregates({
        model,
        domain,
        aggregateFields: fieldsAndOpToRetrieve,
      });

      let result: TreeAggregates;
      Object.entries(retrievedData).forEach((key) => {
        const field: string = key[0];
        const values: any = key[1];
        if (!result) result = {};
        result[field] = Object.keys(values).map((operation) => {
          const fieldDefinition = ooui.columns.find((it) => it.id === field);
          return {
            operation,
            label: fieldDefinition[operation],
            amount: values[operation],
          };
        });
      });
      setAggregates(result);
    } catch (err) {
      setAggregates(undefined);
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [domain, fieldsAndOpToRetrieve, model, ooui?.columns, readAggregates]);

  useDeepCompareEffect(() => {
    if (
      !fieldsAndOpToRetrieve ||
      Object.keys(fieldsAndOpToRetrieve).length === 0
    ) {
      return;
    }
    fetchData();
    return () => {
      cancelReadAggregates();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldsAndOpToRetrieve, domain]);

  const hasAggregates =
    fieldsAndOpToRetrieve !== undefined &&
    Object.keys(fieldsAndOpToRetrieve).length > 0;

  return [loading, aggregates, hasAggregates];
};
