import { DatePicker as AntDatePicker, theme } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Date as DateOoui } from "@gisce/ooui";
import dayjs from "@/helpers/dayjs";
import { useDatePickerLocale } from "@/helpers/useDatePickerLocale";
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
  const datePickerLocale = useDatePickerLocale();

  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;

  const mode = showTime ? "time" : "date";

  const getDateFormatRegex = (format: string) => {
    // Replace date format tokens with regex patterns
    return new RegExp(
      "^" +
        format
          .replace(/DD/g, "\\d{2}")
          .replace(/MM/g, "\\d{2}")
          .replace(/YYYY/g, "\\d{4}")
          .replace(/\//g, "\\/") +
        "$",
    );
  };

  const triggerChange = (changedValue: undefined | string) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (momentDate: any) => {
    if (momentDate === null || momentDate === undefined) {
      triggerChange(undefined);
      return;
    }

    triggerChange(momentDate.format(DatePickerConfig[mode].dateInternalFormat));
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // Only apply special behaviors when tabbing (relatedTarget will exist)
    // If clicking outside, relatedTarget will be null
    if (!e.relatedTarget) return;

    if (!e.target.value) {
      if (value) {
        // If we had a value and cleared it, keep it cleared
        triggerChange(undefined);
      } else {
        // If we never had a value, set to today
        const today = dayjs().format(DatePickerConfig[mode].dateInternalFormat);
        triggerChange(today);
      }
    } else if (showTime) {
      // Check if the input exactly matches the date format
      const dateRegex = getDateFormatRegex(
        DatePickerConfig.date.dateDisplayFormat,
      );
      if (dateRegex.test(e.target.value)) {
        const inputDate = dayjs(
          e.target.value,
          DatePickerConfig.date.dateDisplayFormat,
        );
        if (inputDate.isValid()) {
          const now = dayjs();
          const newValue = inputDate
            .hour(now.hour())
            .minute(now.minute())
            .second(now.second());
          triggerChange(
            newValue.format(DatePickerConfig[mode].dateInternalFormat),
          );
        }
      }
    }
  };

  const dateValue = value
    ? dayjs(value, DatePickerConfig[mode].dateInternalFormat)
    : undefined;
  const defaultValue = dayjs().hour(0).minute(0).second(0);

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
      defaultValue={defaultValue}
      format={DatePickerConfig[mode].dateDisplayFormat}
      value={dateValue}
      onChange={onValueStringChange}
      onBlur={onBlur}
      showNow={false}
      showToday={false}
      changeOnBlur={true}
      locale={datePickerLocale}
    />
  );
};

export default DatePicker;
