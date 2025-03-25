import { Dayjs } from "dayjs";

export const TimePickerConfig = {
  format: "HH:mm:ss",
  displayFormat: "HH:mm:ss",
  placeholder: "__:__:__",
} as const;

export const createTimeRegex = (format: string): RegExp => {
  return new RegExp(
    "^" +
      format
        .replace(/HH/g, "\\d{2}")
        .replace(/mm/g, "\\d{2}")
        .replace(/ss/g, "\\d{2}")
        .replace(/:/g, "\\:") +
      "$",
  );
};

export const timePatterns = {
  hours: createTimeRegex("HH"),
  hoursMinutes: createTimeRegex("HH:mm"),
  hoursMinutesSeconds: createTimeRegex("HH:mm:ss"),
} as const;

export const shouldHandleEnter = (
  currentValue: string | undefined,
): boolean => {
  if (!currentValue || currentValue.trim() === "") {
    return true;
  }
  return (
    timePatterns.hours.test(currentValue) ||
    timePatterns.hoursMinutes.test(currentValue)
  );
};

export const updateTimeValue = (
  currentValue: string | undefined,
  now: Dayjs,
  useZeros = false,
) => {
  // Handle undefined or empty value
  if (!currentValue || currentValue.trim() === "") {
    const hours = now.format("HH");
    const minutes = now.format("mm");
    const seconds = now.format("ss");
    return `${hours}:${minutes}:${seconds}`;
  }

  // Handle hours only (12)
  if (timePatterns.hours.test(currentValue)) {
    const minutes = useZeros ? "00" : now.format("mm");
    const seconds = useZeros ? "00" : now.format("ss");
    const newValue = `${currentValue}:${minutes}:${seconds}`;
    return newValue;
  }

  // Handle hours:minutes (12:34)
  if (timePatterns.hoursMinutes.test(currentValue)) {
    const seconds = useZeros ? "00" : now.format("ss");
    const newValue = `${currentValue}:${seconds}`;
    return newValue;
  }

  // If we have hours:minutes:seconds, return as is
  if (timePatterns.hoursMinutesSeconds.test(currentValue)) {
    return currentValue;
  }

  return null;
};
