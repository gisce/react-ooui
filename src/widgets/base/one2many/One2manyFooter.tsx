import { TreeAggregates } from "./useTreeAggregates";

export const One2manyFooter = ({
  aggregates,
}: {
  aggregates: TreeAggregates;
}) => {
  if (!aggregates) {
    return null;
  }

  const summary = Object.keys(aggregates).map((fieldKey) => {
    const fieldAggregates = aggregates[fieldKey];
    const fieldSummary = fieldAggregates.map((aggregate) => {
      return `${aggregate.label}: ${aggregate.amount}`;
    });
    return fieldSummary.join(", ");
  });

  return <div className="p-1 pb-0 pl-2 mt-2 ">{summary.join(", ")}</div>;
};
