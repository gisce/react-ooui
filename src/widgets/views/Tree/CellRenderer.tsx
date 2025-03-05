import { memo } from "react";
import { SkeletonPill } from "@gisce/react-formiga-components";

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
    // eslint-disable-next-line react/prop-types
    return column.render(value, column.key, column?.ooui, column?.context);
  },
);

CellRenderer.displayName = "CellRenderer";
