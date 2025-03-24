import {
  TimePicker as AntTimePicker,
  TimePickerProps as AntTimePickerProps,
} from "antd";
import { useRef, useCallback, useMemo } from "react";
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
}

export const TimePicker = ({
  value,
  onChange,
  numberOfSelectsToHide = 2,
  ...rest
}: TimePickerProps) => {
  // Use proper typing for the ref
  const pickerRef = useRef<{ blur: () => void } | null>(null);
  const selectionCountRef = useRef(0);

  // Memoize the default open value
  const defaultOpenValue = useMemo(
    () => dayjs().hour(0).minute(0).second(0),
    [], // Empty dependency array as this value never needs to change
  );

  // Memoize the onSelect callback
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

  // Memoize the onChange callback
  const handleChange = useCallback(
    (newValue: Dayjs | null, timeString?: string) => {
      onChange(newValue, timeString);
    },
    [onChange],
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (!e.relatedTarget) return;

      if (!e.target.value) {
        if (value) {
          onChange?.(null);
        } else {
          const today = dayjs();
          onChange?.(today, today.format("HH:mm:ss"));
        }
      }
    },
    [value, onChange],
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
    />
  );
};
