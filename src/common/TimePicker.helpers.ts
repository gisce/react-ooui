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

export const shouldHandleTimeTab = (currentValue: string): boolean => {
  return (
    timePatterns.hours.test(currentValue) ||
    timePatterns.hoursMinutes.test(currentValue)
  );
};

type UpdateTimeResult = {
  newValue: string;
  cursorPos: number;
  shouldMoveFocus: boolean;
};

export const updateTimeValue = (
  currentValue: string,
  now: Dayjs,
  useZeros = false,
): UpdateTimeResult | null => {
  // Handle hours only (12)
  if (timePatterns.hours.test(currentValue)) {
    const hours = parseInt(currentValue);
    const minutes = useZeros ? "00" : now.format("mm");
    const seconds = useZeros ? "00" : now.format("ss");
    const newValue = `${currentValue}:${minutes}:${seconds}`;
    return {
      newValue,
      cursorPos: 3,
      shouldMoveFocus: false,
    }; // Position at minutes
  }

  // Handle hours:minutes (12:34)
  if (timePatterns.hoursMinutes.test(currentValue)) {
    const [hours, minutes] = currentValue.split(":").map((n) => parseInt(n));
    const seconds = useZeros ? "00" : now.format("ss");
    const newValue = `${currentValue}:${seconds}`;
    return {
      newValue,
      cursorPos: 6,
      shouldMoveFocus: false,
    }; // Position at seconds
  }

  // If we have hours:minutes:seconds, move focus to next element
  if (timePatterns.hoursMinutesSeconds.test(currentValue)) {
    return {
      newValue: currentValue,
      cursorPos: currentValue.length,
      shouldMoveFocus: true,
    };
  }

  return null;
};
