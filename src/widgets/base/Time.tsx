import Field from "@/common/Field";
import { Time as TimeOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import dayjs from "@/helpers/dayjs";
import { Dayjs } from "dayjs";
import { TimePicker } from "../../common/TimePicker";

const Time = (props: WidgetProps) => {
  const { ooui } = props;

  return (
    <Field {...props}>
      <TimeInput ooui={ooui as TimeOoui} />
    </Field>
  );
};

type TimeInputProps = {
  ooui: TimeOoui;
  value?: string;
  onChange?: (value?: string) => void;
};

export const TimeInput = (props: TimeInputProps) => {
  const onChange = (time: Dayjs | null, timestring?: string) => {
    if (props.onChange) {
      props.onChange(timestring);
    }
  };

  return (
    <TimePicker
      onChange={onChange}
      numberOfSelectsToHide={3} // Since it has hours, minutes, and seconds
      value={props.value ? dayjs(props.value, "HH:mm:ss") : undefined}
    />
  );
};

export default Time;
