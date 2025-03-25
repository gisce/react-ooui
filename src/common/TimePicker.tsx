import {
  TimePicker as AntTimePicker,
  TimePickerProps as AntTimePickerProps,
} from "antd";
import { useRef, useCallback, useMemo, useState } from "react";
import { Dayjs } from "dayjs";
import dayjs from "@/helpers/dayjs";

/**
 * Extended TimePicker props interface that includes custom functionality
 * on top of Ant Design's TimePicker
 */
export interface TimePickerProps
  extends Omit<AntTimePickerProps, "onChange" | "value"> {
  /** The currently selected time value */
  value?: Dayjs | null;
  /** Callback fired when the time value changes */
  onChange: (newValue: Dayjs | null, timeString?: string) => void;
  /** Number of selections before the picker automatically closes */
  numberOfSelectsToHide?: number;
  /** The default open value for the picker */
  defaultOpenValue?: Dayjs;
}

export const TimePicker = ({
  value,
  onChange,
  numberOfSelectsToHide = 2,
  defaultOpenValue,
  ...rest
}: TimePickerProps) => {
  const pickerRef = useRef<{ blur: () => void } | null>(null);
  const selectionCountRef = useRef(0);
  const [isTabPressed, setIsTabPressed] = useState(false);

  const handleSelect = useCallback(
    (newValue: Dayjs) => {
      onChange?.(newValue);
      selectionCountRef.current += 1;

      if (selectionCountRef.current === numberOfSelectsToHide) {
        pickerRef.current?.blur();
        selectionCountRef.current = 0;
      }
    },
    [onChange, numberOfSelectsToHide],
  );

  const handleChange = useCallback(
    (newValue: Dayjs | null, timeString?: string) => {
      onChange(newValue, timeString);
    },
    [onChange],
  );

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
      if (!e.target.value || e.target.value === "") {
        if (value) {
          onChange?.(null);
        } else if (isTabPressed) {
          const today = dayjs();
          onChange?.(today, today.format("HH:mm:ss"));
        }
        setIsTabPressed(false);
      }
    },
    [value, onChange, isTabPressed],
  );

  return (
    <AntTimePicker
      {...rest}
      ref={pickerRef}
      value={value}
      onChange={handleChange}
      showNow={false}
      defaultOpenValue={defaultOpenValue}
      changeOnBlur={true}
      onSelect={handleSelect}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
    />
  );
};
