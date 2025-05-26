import { DatePicker as AntDatePicker, theme, Tooltip } from "antd";
import React, { useCallback, useMemo, memo, useState } from "react";
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
  onChange?: (value: string | null | undefined) => void;
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
      <DatePickerInput ooui={ooui as DateOoui} showTime={showTime} />
    </Field>
  );
};

const parseDateSafely = (
  value: string,
  format: string,
  timezone?: string,
): Dayjs | null => {
  try {
    // First try parsing as UTC if timezone is UTC
    if (timezone === "UTC") {
      const utcDate = dayjs.utc(value, format);
      if (utcDate.isValid()) {
        return utcDate;
      }
    }

    // If not UTC or UTC parsing failed, try parsing as local
    const localDate = dayjs(value, format);
    if (!localDate.isValid()) {
      return null;
    }

    // If timezone is specified and not UTC, convert from local to that timezone
    if (timezone && timezone !== "UTC") {
      return localDate.tz(timezone, true);
    }

    return localDate;
  } catch (e) {
    console.error("Parse error:", e);
    return null;
  }
};

const DatePickerInput: React.FC<DatePickerInputProps> = memo(
  (props: DatePickerInputProps) => {
    const { value, onChange, ooui, showTime } = props;
    const { id, readOnly, required, timezone } = ooui;
    const datePickerLocale = useDatePickerLocale();
    const requiredStyle = useRequiredStyle(required, !!readOnly);
    const mode: DateMode = showTime ? "time" : "date";
    const [parseError, setParseError] = useState<string | null>(null);

    const internalFormat = DatePickerConfig[mode].dateInternalFormat;

    // Parse date value using the timezone from ooui
    const dateValue = useMemo(() => {
      if (!value) return undefined;

      try {
        const parsed = parseDateSafely(value, internalFormat, timezone);

        if (!parsed || !parsed.isValid()) {
          throw new Error("Invalid date format");
        }

        setParseError(null);
        return parsed;
      } catch (error) {
        console.error({ error, value, timezone, mode });
        const errorMessage =
          error instanceof Error ? error.message : "Invalid date";
        setParseError(errorMessage);
        return undefined;
      }
    }, [value, internalFormat, timezone, mode]);

    const handleChange = useCallback(
      (momentDate: Dayjs | null) => {
        if (!momentDate) {
          onChange?.(null);
          return;
        }
        try {
          let formattedDate: string;

          if (timezone === "UTC") {
            // For UTC, ensure we're in UTC before formatting
            formattedDate = momentDate.utc().format(internalFormat);
          } else if (timezone) {
            // For other timezones, convert and format
            formattedDate = momentDate.tz(timezone).format(internalFormat);
          } else {
            // No timezone, use local
            formattedDate = momentDate.format(internalFormat);
          }

          setParseError(null);
          onChange?.(formattedDate);
        } catch (error) {
          console.error({ error, timezone, mode });
          const errorMessage =
            error instanceof Error ? error.message : "Invalid date";
          setParseError(errorMessage);
        }
      },
      [onChange, timezone, internalFormat, mode],
    );

    const { handleKeyDown, handleBlur } = useDatePickerHandlers({
      mode,
      showTime,
      onChange,
    });

    const pickerConfig = useMemo(
      () => ({
        style: {
          width: "100%",
          ...requiredStyle,
          ...(parseError && { borderColor: "#ff4d4f" }),
        },
        placeholder: DatePickerConfig[mode].placeholder,
        format: DatePickerConfig[mode].dateDisplayFormat,
      }),
      [mode, requiredStyle, parseError],
    );

    return (
      <Tooltip
        title={parseError}
        open={!!parseError}
        color="#ff4d4f"
        placement="topLeft"
      >
        <AntDatePicker
          {...pickerConfig}
          id={id}
          disabled={readOnly}
          picker="date"
          showTime={showTime}
          value={dateValue}
          defaultPickerValue={dateValue}
          onChange={handleChange}
          onBlur={(e) => handleBlur(e as any)}
          onKeyDown={(e) => handleKeyDown(e as any)}
          showNow={false}
          showToday={false}
          locale={datePickerLocale}
          status={parseError ? "error" : undefined}
        />
      </Tooltip>
    );
  },
);

DatePickerInput.displayName = "DatePickerInput";

export { DatePickerInput };
export default memo(DatePicker);
