import { useCallback } from "react";
import dayjs from "@/helpers/dayjs";
import {
  DateMode,
  shouldHandleTab,
  updateDateTime,
  DatePickerConfig,
} from "./DatePicker.helpers";

type UseDatePickerHandlersParams = {
  mode: DateMode;
  showTime?: boolean;
  onChange?: (value: string | undefined) => void;
  value?: string;
};

export const useDatePickerHandlers = ({
  mode,
  showTime = false,
  onChange,
  value,
}: UseDatePickerHandlersParams) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Tab") {
        const input = e.target as HTMLInputElement;
        const currentValue = input.value;

        // Mark the event as tab pressed for blur handler
        (e.target as any)._tabPressed = true;

        if (!shouldHandleTab(currentValue, showTime)) {
          return;
        }

        e.preventDefault();

        const result = updateDateTime({
          currentValue,
          now: dayjs(),
          mode,
          showTime,
          onChange: (value) => onChange?.(value),
        });

        if (result) {
          input.value = result.newValue;
          input.setSelectionRange(result.cursorPos, result.cursorPos + 2);
        }
      }
    },
    [onChange, mode, showTime],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const hadValueBefore = value !== undefined;
      const isEmpty = !e.target.value;
      const wasTabPressed = (e.target as any)._tabPressed;

      if (isEmpty) {
        if (hadValueBefore) {
          // If we had a value and manually cleared it, keep it empty
          onChange?.(undefined);
        } else if (wasTabPressed) {
          // If we pressed tab and had no value before, set current date/time
          const now = dayjs();
          onChange?.(now.format(DatePickerConfig[mode].dateInternalFormat));
        }
      }

      // Clean up the flag
      (e.target as any)._tabPressed = false;
    },
    [onChange, value, mode],
  );

  return {
    handleKeyDown,
    handleBlur,
  };
};
