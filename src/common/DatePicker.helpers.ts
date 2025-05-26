import { Dayjs } from "dayjs";

export type DateMode = "date" | "time";

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
    dateInternalFormatWithTimezone: "YYYY-MM-DD HH:mm:ssZ",
  },
} as const;

export type DateTimePatterns = {
  day: RegExp;
  dayMonth: RegExp;
  fullDate: RegExp;
  withHours: RegExp;
  withMinutes: RegExp;
  withSeconds: RegExp;
};

export const createFormatRegex = (format: string): RegExp => {
  return new RegExp(
    "^" +
      format
        .replace(/DD/g, "\\d{2}")
        .replace(/MM/g, "\\d{2}")
        .replace(/YYYY/g, "\\d{4}")
        .replace(/HH/g, "\\d{2}")
        .replace(/mm/g, "\\d{2}")
        .replace(/ss/g, "\\d{2}")
        .replace(/\//g, "\\/")
        .replace(/\s/g, "\\s") +
      "$",
  );
};

export const createDateTimePatterns = (): DateTimePatterns => ({
  day: createFormatRegex("DD"),
  dayMonth: createFormatRegex("DD/MM"),
  fullDate: createFormatRegex("DD/MM/YYYY"),
  withHours: createFormatRegex("DD/MM/YYYY HH"),
  withMinutes: createFormatRegex("DD/MM/YYYY HH:mm"),
  withSeconds: createFormatRegex("DD/MM/YYYY HH:mm:ss"),
});

type UpdateDateTimeParams = {
  currentValue: string | undefined;
  now: Dayjs;
  mode: DateMode;
  showTime: boolean;
  onChange: (value: string) => void;
};

export const updateDateTime = (params: UpdateDateTimeParams) => {
  const { currentValue, now, mode, showTime, onChange } = params;
  const patterns = createDateTimePatterns();

  // Handle undefined or empty value
  if (!currentValue || currentValue.trim() === "") {
    onChange(now.format(DatePickerConfig[mode].dateInternalFormat));
    return;
  }

  // Handle day only
  if (patterns.day.test(currentValue)) {
    const newDate = now.date(parseInt(currentValue));
    onChange(newDate.format(DatePickerConfig[mode].dateInternalFormat));
  }

  // Handle day and month
  if (patterns.dayMonth.test(currentValue)) {
    const [day, month] = currentValue.split("/").map((n) => parseInt(n));
    const newDate = now.date(day).month(month - 1);
    onChange(newDate.format(DatePickerConfig[mode].dateInternalFormat));
  }

  // Handle full date
  if (patterns.fullDate.test(currentValue)) {
    const [day, month, year] = currentValue.split("/").map((n) => parseInt(n));
    const newDate = now
      .date(day)
      .month(month - 1)
      .year(year);

    if (!showTime) {
      onChange(newDate.format(DatePickerConfig.date.dateInternalFormat));
    }

    onChange(newDate.format(DatePickerConfig.time.dateInternalFormat));
  }

  // Handle time components
  if (showTime) {
    const [datePart, timePart] = currentValue.split(" ");
    const [day, month, year] = datePart.split("/").map((n) => parseInt(n));
    let newDate = now
      .date(day)
      .month(month - 1)
      .year(year);

    if (patterns.withHours.test(currentValue)) {
      const [hours] = timePart.split(":").map((n) => parseInt(n));
      newDate = newDate.hour(hours);
      onChange(newDate.format(DatePickerConfig.time.dateInternalFormat));
    }

    if (patterns.withMinutes.test(currentValue)) {
      const [hours, minutes] = timePart.split(":").map((n) => parseInt(n));
      newDate = newDate.hour(hours).minute(minutes);
      onChange(newDate.format(DatePickerConfig.time.dateInternalFormat));
    }
  }
};

export const shouldHandleEnter = (
  currentValue: string,
  showTime: boolean,
): boolean => {
  if (!currentValue) return true;

  const patterns = createDateTimePatterns();
  return (
    patterns.day.test(currentValue) ||
    patterns.dayMonth.test(currentValue) ||
    patterns.fullDate.test(currentValue) ||
    (showTime &&
      (patterns.fullDate.test(currentValue) ||
        patterns.withHours.test(currentValue) ||
        patterns.withMinutes.test(currentValue)))
  );
};
