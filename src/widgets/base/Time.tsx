import Field from "@/common/Field";
import { Time as TimeOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import { DateMaskedInput } from "@gisce/react-formiga-components";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";
import dayjs from "@/helpers/dayjs";
import { Dayjs } from "dayjs";
import { TimePicker } from "@/common/TimePicker";

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
  onChange?: (value?: string | null) => void;
};

export const TimeInput = (props: TimeInputProps) => {
  const { readOnly, required } = props.ooui;
  const useMaskedInput = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_DATE_USE_MASKED_INPUT,
  );

  const handleChange = (value: string | null | undefined) => {
    if (props.onChange) {
      props.onChange(value ?? undefined);
    }
  };

  if (useMaskedInput) {
    return (
      <DateMaskedInput
        type="time"
        value={props.value}
        onChange={handleChange}
        readOnly={readOnly}
        required={required}
      />
    );
  }

  const handleTimePickerChange = (_time: Dayjs | null, timestring?: string) => {
    if (props.onChange) {
      props.onChange(timestring);
    }
  };

  return (
    <TimePicker
      onChange={handleTimePickerChange}
      numberOfSelectsToHide={3}
      value={props.value ? dayjs(props.value, "HH:mm:ss") : undefined}
      disabled={readOnly}
    />
  );
};

export default Time;
