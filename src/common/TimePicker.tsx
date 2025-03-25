import {
  TimePicker as AntTimePicker,
  TimePickerProps as AntTimePickerProps,
} from "antd";
import { useRef, useCallback } from "react";
import { Dayjs } from "dayjs";
import { TimePickerConfig } from "./TimePicker.helpers";
import { useTimePickerHandlers } from "./useTimePickerHandlers";

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
      onChange?.(newValue, timeString);
    },
    [onChange],
  );

  const { handleKeyDown, handleBlur } = useTimePickerHandlers({
    value,
    onChange,
    autocompleteWithZeros: defaultOpenValue !== undefined,
  });

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
      format={TimePickerConfig.displayFormat}
    />
  );
};
