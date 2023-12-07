import { DatePicker as AntDatePicker, theme } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Date as DateOoui } from "@gisce/ooui";
import dayjs from "@/helpers/dayjs";
const { useToken } = theme;

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

export const DatePickerConfig = {
  date: {
    placeholder: "__/__/____",
    dateDisplayFormat: "DD/MM/YYYY",
    dateInternalFormat: "YYYY-MM-DD",
  },
  time: {
    placeholder: "__/__/____ __:__:__",
    dateDisplayFormat: "DD/MM/YYYY HH:mm:ss",
    dateInternalFormat: "YYYY-MM-DD HH:mm:ss",
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
  props: DatePickerInputProps,
) => {
  const { value, onChange, ooui, showTime } = props;
  const { id, readOnly, required } = ooui as DateOoui;
  const { token } = useToken();

  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;

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

  const dateValue = value
    ? dayjs(value, DatePickerConfig[mode].dateInternalFormat)
    : undefined;

  return (
    <AntDatePicker
      style={{ width: "100%", ...requiredStyle }}
      placeholder={
        showTime
          ? DatePickerConfig.time.placeholder
          : DatePickerConfig.date.placeholder
      }
      disabled={readOnly}
      id={id}
      picker={"date"}
      showTime={showTime}
      format={DatePickerConfig[mode].dateDisplayFormat}
      value={dateValue}
      onChange={onValueStringChange}
    />
  );
};

export default DatePicker;
