import { ReactElement, useMemo } from "react";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";
import { useNumberFormatter } from "@/hooks/useNumberFormatter";

export const FloatComponent = ({
  value,
  ooui,
}: {
  value: number | false | null | undefined;
  ooui?: any;
}): ReactElement => {
  const localized = ooui?.parsedWidgetProps?.localized ?? false;
  const decimalDigits = ooui?.decimalDigits;
  const formatNumber = useNumberFormatter({
    format: "decimal",
    localized,
    decimalDigits,
  });

  return useMemo(
    () => (
      <div style={{ display: "inline-block" }}>
        {localized ? formatNumber(value) : value}
      </div>
    ),
    [localized, formatNumber, value],
  );
};

export const IntegerComponent = ({
  value,
  ooui,
}: {
  value: number | false | null | undefined;
  ooui?: any;
}): ReactElement => {
  const localized = ooui?.parsedWidgetProps?.localized ?? false;
  const formatNumber = useNumberFormatter({
    decimalDigits: 0,
    format: "decimal",
    localized,
  });

  return useMemo(
    () => (
      <div style={{ display: "inline-block" }}>
        {localized ? formatNumber(value) : value}
      </div>
    ),
    [localized, formatNumber, value],
  );
};

export const KANBAN_COMPONENTS = {
  ...COLUMN_COMPONENTS,
  integer: IntegerComponent,
  float: FloatComponent,
};
