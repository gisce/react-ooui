import { useCallback } from "react";
import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";
import {
  TimePickerConfig,
  shouldHandleTimeTab,
  updateTimeValue,
} from "./TimePicker.helpers";

type UseTimePickerHandlersParams = {
  value?: Dayjs | null;
  onChange: (newValue: Dayjs | null, timeString?: string) => void;
  /** Whether to autocomplete time values with zeros when tabbing. Defaults to false */
  autocompleteWithZeros?: boolean;
};

export const useTimePickerHandlers = ({
  value,
  onChange,
  autocompleteWithZeros = false,
}: UseTimePickerHandlersParams) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") {
        const input = e.target as HTMLInputElement;
        const currentValue = input.value;

        // Mark the event as tab pressed for blur handler
        (e.target as any)._tabPressed = true;

        if (!shouldHandleTimeTab(currentValue)) {
          return;
        }

        e.preventDefault();

        const result = updateTimeValue(
          currentValue,
          dayjs(),
          autocompleteWithZeros,
        );
        if (result) {
          if (result.shouldMoveFocus) {
            // Let the default tab behavior happen
            return;
          }

          input.value = result.newValue;
          input.setSelectionRange(result.cursorPos, result.cursorPos + 2);

          // Create a dayjs object from the new time value
          const newTime = dayjs(`2000-01-01 ${result.newValue}`);
          onChange?.(newTime, result.newValue);
        }
      }
    },
    [onChange, autocompleteWithZeros],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const hadValueBefore = value !== undefined;
      const isEmpty = !e.target.value || e.target.value === "";
      const wasTabPressed = (e.target as any)._tabPressed;

      if (isEmpty) {
        if (hadValueBefore) {
          // If we had a value and manually cleared it, keep it empty
          onChange?.(null);
        } else if (wasTabPressed && !autocompleteWithZeros) {
          // Only set current time when tabbing with autocompleteWithZeros disabled
          const defaultTime = dayjs();
          onChange?.(defaultTime, defaultTime.format(TimePickerConfig.format));
        }
      }

      // Clean up the flag
      (e.target as any)._tabPressed = false;
    },
    [value, onChange, autocompleteWithZeros],
  );

  return {
    handleKeyDown,
    handleBlur,
  };
};
