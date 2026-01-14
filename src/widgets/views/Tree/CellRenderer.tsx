import { memo } from "react";
import { SkeletonPill } from "@gisce/react-formiga-components";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

export const CellRenderer = memo(
  ({
    value,
    record,
    column,
    isFieldLoading,
  }: {
    value: any;
    record: any;
    column: any;
    isFieldLoading?: (record: any, key: string) => boolean;
  }) => {
    if (isFieldLoading?.(record, column.key)) {
      return <SkeletonPill />;
    }
    return (
      <ErrorBoundary>
        {column.render(value, column.key, column?.ooui, column?.context)}
      </ErrorBoundary>
    );
  },
);

CellRenderer.displayName = "CellRenderer";
