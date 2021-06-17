import { DatePicker as AntDatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { Date as DateOoui } from "ooui";
import moment from "moment";

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

const DatePickerConfig = {
  date: {
    placeholder: "__/__/____",
    dateDisplayFormat: "",
    dateInternalFormat: "",
  },
  time: {
    placeholder: "__/__/____ __:__:__",
    dateDisplayFormat: "",
    dateInternalFormat: "",
  },
};
const DatePicker = (props: DatePickerProps) => {
  const { ooui, showTime = false } = props;
  const { required } = ooui;

  return (
    <Field required={required} {...props}>
      <DatePickerInput ooui={ooui} showTime={showTime} />
    </Field>
  );
};

interface DatePickerInputProps {
  ooui: DateOoui;
  value?: undefined | string;
  onChange?: (value: undefined | string) => void;
  showTime?: boolean;
}

const DatePickerInput: React.FC<DatePickerInputProps> = (
  props: DatePickerInputProps
) => {
  const { value, onChange, ooui, showTime } = props;
  const { id, readOnly, required } = ooui as DateOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  const mode = showTime ? "time" : "date";

  const triggerChange = (changedValue: undefined | string) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (momentDate: any) => {
    if (momentDate === null) {
      triggerChange(undefined);
      return;
    }

    triggerChange(momentDate.format(DatePickerConfig[mode].dateInternalFormat));
  };

  const showTimeParms = showTime
    ? { defaultValue: moment("00:00:00", "HH:mm:ss") }
    : undefined;
  const dateValue = value ? moment(value) : undefined;

  return (
    <AntDatePicker
      style={{ width: "100%" }}
      placeholder={
        showTime
          ? DatePickerConfig.time.placeholder
          : DatePickerConfig.date.placeholder
      }
      disabled={readOnly}
      id={id}
      showTime={showTimeParms}
      className={requiredClass}
      format={DatePickerConfig[mode].dateDisplayFormat}
      value={dateValue}
      onChange={onValueStringChange}
    ></AntDatePicker>
  );
};

export default DatePicker;
