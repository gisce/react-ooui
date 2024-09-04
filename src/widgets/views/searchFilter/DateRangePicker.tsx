import { DatePicker } from "antd";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { useDatePickerLocale } from "@/helpers/useDatePickerLocale";

export const DateRangePicker = (props: WidgetProps) => {
  const datePickerLocale = useDatePickerLocale();

  return (
    <Field {...props} layout={"vertical"}>
      <DatePicker.RangePicker
        allowEmpty={[true, true]}
        format={"DD/MM/YYYY"}
        locale={datePickerLocale}
      ></DatePicker.RangePicker>
    </Field>
  );
};
