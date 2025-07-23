import { memo } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { DateTime } from "@gisce/ooui";
import { DateInput } from "@gisce/react-formiga-components";

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

const DatePicker = (props: DatePickerProps) => {
  const { ooui, showTime = false } = props;
  const { required, readOnly = false, timezone } = ooui as DateTime;

  return (
    <Field required={required} {...props}>
      <DateInput
        id={ooui._id}
        required={required}
        readOnly={readOnly}
        showTime={showTime}
        timezone={timezone}
      />
    </Field>
  );
};

export default memo(DatePicker);
