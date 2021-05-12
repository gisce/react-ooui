import { DatePicker as AntDatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { Date as DateOoui } from "ooui";
import moment from "moment";

const dateFormatView = "DD/MM/YYYY HH:mm:ss";
const dateFormatInternal = "YYYY-MM-DD HH:mm:ss";

const DateTime = (props: WidgetProps) => {
  const { ooui } = props;

  return (
    <Field {...props}>
      <DateTimePickerInput ooui={ooui} />
    </Field>
  );
};

interface DateTimePickerInputProps {
  ooui: DateOoui;
  value?: undefined | string;
  onChange?: (value: undefined | string) => void;
}

const DateTimePickerInput: React.FC<DateTimePickerInputProps> = (
  props: DateTimePickerInputProps
) => {
  const { value, onChange, ooui } = props;
  const { id, readOnly, required } = ooui as DateOoui;
  const requiredClass = required ? Config.requiredClass : undefined;

  const triggerChange = (changedValue: undefined | string) => {
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
      placeholder="__/__/____ __:__:__"
      showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
      disabled={readOnly}
      id={id}
      className={requiredClass}
      format={dateFormatView}
      value={dateValue}
      onChange={onValueStringChange}
    ></AntDatePicker>
  );
};

export default DateTime;
