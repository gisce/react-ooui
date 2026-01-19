import { TreeAggregates } from "./useTreeAggregates";
import { LoadingOutlined } from "@ant-design/icons";
import { useNumberFormatter } from "@/hooks/useNumberFormatter";
import { memo, useMemo } from "react";
import { theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

const { useToken } = theme;

const AggregateValue = memo(({ amount }: { amount: number | string }) => {
  const formatNumber = useNumberFormatter({
    format: "decimal",
    localized: true,
  });

  if (typeof amount === "string") {
    return <>{amount}</>;
  }

  return <>{formatNumber(amount)}</>;
});
AggregateValue.displayName = "AggregateValue";

export const AggregatesFooter = memo(
  ({
    aggregates,
    isLoading,
  }: {
    aggregates: TreeAggregates;
    isLoading: boolean;
  }) => {
    const { token } = useToken();

    const summary = useMemo(() => {
      if (!aggregates) {
        return null;
      }

      return Object.keys(aggregates)
        .sort()
        .map((fieldKey) => {
          const fieldAggregates = aggregates[fieldKey];
          const fieldSummary = fieldAggregates.map((aggregate, index) => {
            return (
              <span key={`${fieldKey}-${index}`}>
                {aggregate.label}: <AggregateValue amount={aggregate.amount} />
              </span>
            );
          });
          return fieldSummary;
        })
        .flat()
        .map((element, index, array) => (
          <span key={index}>
            {element}
            {index < array.length - 1 ? (
              <span style={{ margin: "0 8px", color: token.colorBorder }}>
                |
              </span>
            ) : (
              ""
            )}
          </span>
        ));
    }, [aggregates, token.colorBorder]);

    return (
      <ErrorBoundary>
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            alignItems: "end",
            paddingLeft: 2,
          }}
        >
          {isLoading && <LoadingOutlined />}
          {!isLoading && summary}
        </div>
      </ErrorBoundary>
    );
  },
);
AggregatesFooter.displayName = "AggregatesFooter";
