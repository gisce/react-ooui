import { useCallback } from "react";
import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";
import { shouldHandleEnter, updateTimeValue } from "./TimePicker.helpers";

type UseTimePickerHandlersParams = {
  value?: Dayjs | null;
  onChange: (newValue: Dayjs | null, timeString?: string) => void;
  /** Whether to autocomplete time values with zeros when pressing enter. Defaults to false */
  autocompleteWithZeros?: boolean;
};

export const useTimePickerHandlers = ({
  value,
  onChange,
  autocompleteWithZeros = false,
}: UseTimePickerHandlersParams) => {
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        const input = e.target as HTMLInputElement;
        const currentValue = input.value;

        if (!shouldHandleEnter(currentValue)) {
          return;
        }

        e.preventDefault();

        const result = updateTimeValue(
          currentValue,
          dayjs(),
          autocompleteWithZeros,
        );
        if (result) {
          // Create a dayjs object from the new time value
          const newTime = dayjs(`2000-01-01 ${result}`);
          onChange?.(newTime, result);
        }
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
    [onChange, autocompleteWithZeros],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      const hadValueBefore = value !== undefined;
      const isEmpty = !e.target.value || e.target.value === "";

      if (isEmpty) {
        if (hadValueBefore) {
          // If we had a value and manually cleared it, keep it empty
          onChange?.(null);
        }
      }
    },
    [value, onChange],
  );

  return {
    handleKeyDown,
    handleBlur,
  };
};
