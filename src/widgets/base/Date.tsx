import { DatePicker as AntDatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { Date as DateOoui } from "ooui";
import moment from "moment";

const dateFormatView = "DD/MM/YYYY";
const dateFormatInternal = "YYYY-MM-DD";

const DatePicker = (props: WidgetProps) => {
  const { ooui } = props;

  return (
    <Field {...props}>
      <DatePickerInput ooui={ooui} />
    </Field>
  );
};

interface DatePickerInputProps {
  ooui: DateOoui;
  value?: undefined | string;
  onChange?: (value: undefined | string) => void;
}

const DatePickerInput: React.FC<DatePickerInputProps> = (
  props: DatePickerInputProps
) => {
  const { value, onChange, ooui } = props;
  const { id, readOnly, required } = ooui as DateOoui;
  const requiredClass = required ? Config.requiredClass : undefined;

  const triggerChange = (changedValue: undefined | string) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (momentDate: any) => {
    if (momentDate === null) {
      triggerChange(undefined);
      return;
    }

    triggerChange(momentDate.format(dateFormatInternal));
  };

  const dateValue = value ? moment(value) : undefined;

  return (
    <AntDatePicker
      style={{ width: "100%" }}
      placeholder="__/__/____"
      disabled={readOnly}
      id={id}
      className={requiredClass}
      format={dateFormatView}
      value={dateValue}
      onChange={onValueStringChange}
    ></AntDatePicker>
  );
};

export default DatePicker;
