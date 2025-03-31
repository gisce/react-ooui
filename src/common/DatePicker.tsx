import { DatePicker as AntDatePicker, theme } from "antd";
import React, { useCallback, useMemo, memo } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Date as DateOoui } from "@gisce/ooui";
import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";
import { useDatePickerLocale } from "@/helpers/useDatePickerLocale";
import { DateMode, DatePickerConfig } from "./DatePicker.helpers";
import { useDatePickerHandlers } from "./useDatePickerHandlers";

const { useToken } = theme;

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

type DatePickerInputProps = {
  ooui: DateOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
  showTime?: boolean;
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

    const { handleKeyDown, handleBlur } = useDatePickerHandlers({
      mode,
      showTime,
      onChange,
    });

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
        locale={datePickerLocale}
      />
    );
  },
);

DatePickerInput.displayName = "DatePickerInput";

export default memo(DatePicker);
