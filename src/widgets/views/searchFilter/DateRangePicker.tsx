import { DatePicker } from "antd";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { useDatePickerLocale } from "@gisce/react-formiga-components";
import { useCallback } from "react";
import type { Dayjs } from "dayjs";

interface DateRangePickerProps extends WidgetProps {
  className?: string;
  layout?: "vertical" | "horizontal";
}

interface RangePickerChildProps {
  value?: [Dayjs | null, Dayjs | null];
  onChange?: (value: [Dayjs | null, Dayjs | null] | null) => void;
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const { className = "w-full", layout = "vertical" } = props;
  const datePickerLocale = useDatePickerLocale();

  return (
    <Field {...props} layout={layout}>
      <DateRangePickerInput
        className={className}
        datePickerLocale={datePickerLocale}
      />
    </Field>
  );
};

const DateRangePickerInput = ({
  value,
  onChange,
  className,
  datePickerLocale,
}: RangePickerChildProps & { className?: string; datePickerLocale: any }) => {
  // onCalendarChange fires when user selects any date (partial selection)
  // This ensures the form value updates even when only one date is selected
  const handleCalendarChange = useCallback(
    (dates: [Dayjs | null, Dayjs | null] | null) => {
      onChange?.(dates);
    },
    [onChange],
  );

  return (
    <DatePicker.RangePicker
      allowEmpty={[true, true]}
      format={"DD/MM/YYYY"}
      locale={datePickerLocale}
      style={{ width: "100%" }}
      className={className}
      value={value}
      onCalendarChange={handleCalendarChange}
    />
  );
};
