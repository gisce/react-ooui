import { TimePicker as AntTimePicker } from "antd";
import { useRef } from "react";
import { Dayjs } from "dayjs";

interface TimePickerProps {
  value?: Dayjs | null;
  onChange: (newValue: Dayjs | null, timestring?: string) => void;
  numberOfSelectsToHide?: number;
  [key: string]: any; // Accept any additional props
}

export const TimePicker = ({
  value,
  onChange,
  numberOfSelectsToHide = 2,
  ...rest
}: TimePickerProps) => {
  const picker = useRef<any>();
  const pickerSelectedTimes = useRef(0);
  return (
    <AntTimePicker
      {...rest}
      ref={picker}
      value={value}
      onChange={onChange}
      showNow={false}
      changeOnBlur={true}
      onSelect={(newValue) => {
        onChange?.(newValue);
        pickerSelectedTimes.current += 1;
        if (pickerSelectedTimes.current === numberOfSelectsToHide) {
          picker.current?.blur();
          pickerSelectedTimes.current = 0;
        }
      }}
    />
  );
};
