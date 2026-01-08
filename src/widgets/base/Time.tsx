import Field from "@/common/Field";
import { Time as TimeOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import { MaskedTimeInput } from "@gisce/react-formiga-components";

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

  const handleChange = (value: string | null | undefined) => {
    if (props.onChange) {
      props.onChange(value ?? undefined);
    }
  };

  return (
    <MaskedTimeInput
      value={props.value}
      onChange={handleChange}
      readOnly={readOnly}
      required={required}
    />
  );
};

export default Time;
