import { memo } from "react";
import {
  useNumberFormatter,
  NumberFormatType,
} from "@/hooks/useNumberFormatter";

export type SummaryItem = {
  label: string;
  value: number;
  type?: string;
  decimalDigits?: number;
  currency?: string;
  format?: NumberFormatType;
};

export const SummaryValue = memo(({ summary }: { summary: SummaryItem }) => {
  const decimalDigits =
    summary.type === "integer"
      ? 0
      : summary.decimalDigits !== undefined
      ? summary.decimalDigits
      : 2;

  const formatNumber = useNumberFormatter({
    decimalDigits,
    currency: summary.currency,
    format: summary.format ?? "decimal",
  });

  const formattedValue = formatNumber(summary.value);

  return <>{formattedValue}</>;
});
SummaryValue.displayName = "SummaryValue";

export const SummaryRow = memo(
  ({ summaries }: { summaries: SummaryItem[] }) => {
    return (
      <div className="p-1 pb-0 pl-2 mt-2">
        {summaries.map((summary, index) => (
          <span key={summary.label}>
            {summary.label}: <SummaryValue summary={summary} />
            {index < summaries.length - 1 ? ", " : ""}
          </span>
        ))}
      </div>
    );
  },
);
SummaryRow.displayName = "SummaryRow";
