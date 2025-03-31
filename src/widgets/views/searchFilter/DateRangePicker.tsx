import { DatePicker } from "antd";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { useDatePickerLocale } from "@/helpers/useDatePickerLocale";

interface DateRangePickerProps extends WidgetProps {
  className?: string;
  layout?: "vertical" | "horizontal";
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const { className = "w-full", layout = "vertical" } = props;
  const datePickerLocale = useDatePickerLocale();

  return (
    <Field {...props} layout={layout}>
      <DatePicker.RangePicker
        allowEmpty={[true, true]}
        format={"DD/MM/YYYY"}
        locale={datePickerLocale}
        style={{ width: "100%" }}
        className={className}
      ></DatePicker.RangePicker>
    </Field>
  );
};
