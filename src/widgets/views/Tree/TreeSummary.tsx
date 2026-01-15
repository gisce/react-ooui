import { memo } from "react";
import {
  useNumberFormatter,
  NumberFormatType,
} from "@/hooks/useNumberFormatter";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

export type SummaryItem = {
  label: string;
  value: number;
  type?: string;
  decimalDigits?: number;
  currency?: string;
  format?: NumberFormatType;
};

function getDecimalDigits(summary: SummaryItem): number {
  if (summary.type === "integer") {
    return 0;
  }
  return summary.decimalDigits ?? 2;
}

export const SummaryValue = memo(({ summary }: { summary: SummaryItem }) => {
  const decimalDigits = getDecimalDigits(summary);

  const formatNumber = useNumberFormatter({
    decimalDigits,
    currency: summary.currency,
    format: summary.format ?? "decimal",
    localized: true,
  });

  const formattedValue = formatNumber(summary.value);

  return <>{formattedValue}</>;
});
SummaryValue.displayName = "SummaryValue";

export const SummaryRow = memo(
  ({ summaries }: { summaries: SummaryItem[] }) => {
    return (
      <ErrorBoundary>
        <div className="p-1 pb-0 pl-2 mt-2">
          {summaries.map((summary, index) => (
            <span key={summary.label}>
              {summary.label}: <SummaryValue summary={summary} />
              {index < summaries.length - 1 ? ", " : ""}
            </span>
          ))}
        </div>
      </ErrorBoundary>
    );
  },
);
SummaryRow.displayName = "SummaryRow";
