import { TreeAggregates } from "./useTreeAggregates";
import { LoadingOutlined } from "@ant-design/icons";

export const AggregatesFooter = ({
  aggregates,
  isLoading,
}: {
  aggregates: TreeAggregates;
  isLoading: boolean;
}) => {
  const summary =
    aggregates &&
    Object.keys(aggregates).map((fieldKey) => {
      const fieldAggregates = aggregates[fieldKey];
      const fieldSummary = fieldAggregates.map((aggregate) => {
        return `${aggregate.label}: ${aggregate.amount}`;
      });
      return fieldSummary.join(", ");
    });

  return (
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
      {!isLoading && summary && summary.join(", ")}
    </div>
  );
};
