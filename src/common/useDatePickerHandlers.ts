import { useCallback } from "react";
import dayjs from "@/helpers/dayjs";
import {
  DateMode,
  shouldHandleEnter,
  updateDateTime,
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
      if (e.key === "Enter") {
        const input = e.target as HTMLInputElement;
        const currentValue = input.value;

        if (!shouldHandleEnter(currentValue, showTime)) {
          return;
        }

        e.preventDefault();

        updateDateTime({
          currentValue,
          now: dayjs(),
          mode,
          showTime,
          onChange: (value) => onChange?.(value),
        });
      } else if (e.key === "Escape") {
        e.preventDefault();
        const input = e.currentTarget;
        input.blur();
        const focusableElements =
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const elements = Array.from(
          document.querySelectorAll(focusableElements),
        ) as HTMLElement[];
        const index = elements.indexOf(input);
        if (index > -1 && index < elements.length - 1) {
          elements[index + 1].focus();
        }
      }
    },
    [onChange, mode, showTime],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const hadValueBefore = value !== undefined;
      const isEmpty = !e.target.value;

      if (isEmpty) {
        if (hadValueBefore) {
          // If we had a value and manually cleared it, keep it empty
          onChange?.(undefined);
        }
      }
    },
    [onChange, value],
  );

  return {
    handleKeyDown,
    handleBlur,
  };
};
