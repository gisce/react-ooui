import { DatePicker as AntDatePicker, theme } from "antd";
import React, { useCallback, useMemo, memo, useState } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Date as DateOoui } from "@gisce/ooui";
import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";
import { useDatePickerLocale } from "@/helpers/useDatePickerLocale";

const { useToken } = theme;

type DateMode = "date" | "time";

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

type DatePickerInputProps = {
  ooui: DateOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
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
} as const;

const useDateFormatRegex = (format: string) => {
  return useMemo(
    () =>
      new RegExp(
        "^" +
          format
            .replace(/DD/g, "\\d{2}")
            .replace(/MM/g, "\\d{2}")
            .replace(/YYYY/g, "\\d{4}")
            .replace(/\//g, "\\/") +
          "$",
      ),
    [format],
  );
};

const useRequiredStyle = (required: boolean, readOnly: boolean) => {
  const { token } = useToken();

  return useMemo(
    () =>
      required && !readOnly
        ? { backgroundColor: token.colorPrimaryBg }
        : undefined,
    [required, readOnly, token.colorPrimaryBg],
  );
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

const DatePickerInput: React.FC<DatePickerInputProps> = memo(
  (props: DatePickerInputProps) => {
    const { value, onChange, ooui, showTime } = props;
    const { id, readOnly, required } = ooui;
    const datePickerLocale = useDatePickerLocale();
    const requiredStyle = useRequiredStyle(required, !!readOnly);
    const mode: DateMode = showTime ? "time" : "date";

    const dateRegex = useDateFormatRegex(
      DatePickerConfig.date.dateDisplayFormat,
    );

    const dateValue = useMemo(
      () =>
        value
          ? dayjs(value, DatePickerConfig[mode].dateInternalFormat)
          : undefined,
      [value, mode],
    );

    const handleChange = useCallback(
      (momentDate: Dayjs | null) => {
        if (!momentDate) {
          onChange?.(undefined);
          return;
        }
        onChange?.(
          momentDate.format(DatePickerConfig[mode].dateInternalFormat),
        );
      },
      [onChange, mode],
    );

    const [isTabPressed, setIsTabPressed] = useState(false);

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Tab") {
          setIsTabPressed(true);
        }
      },
      [],
    );

    const handleBlur = useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (!e.target.value) {
          if (value) {
            onChange?.(undefined);
          } else if (isTabPressed) {
            const today = dayjs().format(
              DatePickerConfig[mode].dateInternalFormat,
            );
            onChange?.(today);
          }
          setIsTabPressed(false);
        } else if (showTime && dateRegex.test(e.target.value)) {
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
            onChange?.(
              newValue.format(DatePickerConfig[mode].dateInternalFormat),
            );
          }
        }
      },
      [value, onChange, mode, showTime, dateRegex, isTabPressed],
    );

    const pickerConfig = useMemo(
      () => ({
        style: { width: "100%", ...requiredStyle },
        placeholder: DatePickerConfig[mode].placeholder,
        format: DatePickerConfig[mode].dateDisplayFormat,
      }),
      [mode, requiredStyle],
    );

    return (
      <AntDatePicker
        {...pickerConfig}
        id={id}
        disabled={readOnly}
        picker="date"
        showTime={showTime}
        value={dateValue}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        showNow={false}
        showToday={false}
        changeOnBlur={true}
        locale={datePickerLocale}
      />
    );
  },
);

DatePickerInput.displayName = "DatePickerInput";

export default memo(DatePicker);
