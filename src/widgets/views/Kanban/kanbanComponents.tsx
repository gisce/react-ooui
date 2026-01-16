import { ReactElement, useMemo } from "react";
import { COLUMN_COMPONENTS } from "@/widgets/views/Tree/treeComponents";
import { useNumberFormatter } from "@/hooks/useNumberFormatter";

const LocalizedFloat = ({
  value,
  decimalDigits,
}: {
  value: number | false | null | undefined;
  decimalDigits?: number;
}): ReactElement => {
  const formatNumber = useNumberFormatter({
    format: "decimal",
    localized: true,
    decimalDigits,
  });
  return <>{formatNumber(value)}</>;
};

const LocalizedInteger = ({
  value,
}: {
  value: number | false | null | undefined;
}): ReactElement => {
  const formatNumber = useNumberFormatter({
    decimalDigits: 0,
    format: "decimal",
    localized: true,
  });
  return <>{formatNumber(value)}</>;
};

export const FloatComponent = ({
  value,
  ooui,
}: {
  value: number | false | null | undefined;
  ooui?: any;
}): ReactElement => {
  const localized = ooui?.parsedWidgetProps?.localized ?? false;

  return useMemo(
    () => (
      <div style={{ display: "inline-block" }}>
        {localized ? (
          <LocalizedFloat value={value} decimalDigits={ooui?.decimalDigits} />
        ) : (
          value
        )}
      </div>
    ),
    [localized, value, ooui?.decimalDigits],
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

  return useMemo(
    () => (
      <div style={{ display: "inline-block" }}>
        {localized ? <LocalizedInteger value={value} /> : value}
      </div>
    ),
    [localized, value],
  );
};

export const KANBAN_COMPONENTS = {
  ...COLUMN_COMPONENTS,
  integer: IntegerComponent,
  float: FloatComponent,
};
