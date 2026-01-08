import { memo } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { DateTime } from "@gisce/ooui";
import {
  MaskedDateInput,
  MaskedDateTimeInput,
} from "@gisce/react-formiga-components";

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

const DatePicker = (props: DatePickerProps) => {
  const { ooui, showTime = false } = props;
  const { required, readOnly = false, timezone } = ooui as DateTime;

  if (showTime) {
    return (
      <Field required={required} {...props}>
        <MaskedDateTimeInput
          id={ooui._id}
          required={required}
          readOnly={readOnly}
          timezone={timezone}
        />
      </Field>
    );
  }

  return (
    <Field required={required} {...props}>
      <MaskedDateInput
        id={ooui._id}
        required={required}
        readOnly={readOnly}
        timezone={timezone}
      />
    </Field>
  );
};

export default memo(DatePicker);
