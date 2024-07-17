import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { Tree as TreeOoui } from "@gisce/ooui";
import { useEffect, useState } from "react";
import { useDeepCompareCallback, useDeepCompareMemo } from "use-deep-compare";
import useDeepCompareEffect from "use-deep-compare-effect";

const OPERATION_KEYS = ["sum", "count", "max", "min"];

export type TreeAggregates =
  | Record<
      string,
      Array<{
        operation: string;
        label: string;
        amount: number;
      }>
    >
  | undefined;

export const useTreeAggregates = ({
  ooui,
  model,
  domain,
}: {
  ooui: TreeOoui;
  domain?: any[];
  model: string;
}) => {
  const [aggregates, setAggregates] = useState<TreeAggregates>();

  const [readAggregates, cancelReadAggregates] = useNetworkRequest(
    ConnectionProvider.getHandler().readAggregates,
  );

  const fieldsAndOpToRetrieve = useDeepCompareMemo(() => {
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
  }, [ooui.columns]);

  const fetchData = useDeepCompareCallback(async () => {
    if (!domain) {
      return;
    }
    try {
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
      console.error(err);
    }
  }, [domain, fieldsAndOpToRetrieve, model, ooui.columns, readAggregates]);

  useDeepCompareEffect(() => {
    if (Object.keys(fieldsAndOpToRetrieve).length === 0) {
      return;
    }
    fetchData();
    return () => {
      cancelReadAggregates();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fieldsAndOpToRetrieve, domain]);

  return aggregates;
};
