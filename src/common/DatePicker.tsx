import { memo } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { DateTime } from "@gisce/ooui";
import { DateMaskedInput, DateInput } from "@gisce/react-formiga-components";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";

type DatePickerProps = WidgetProps & {
  showTime?: boolean;
};

const DatePicker = (props: DatePickerProps) => {
  const { ooui, showTime = false } = props;
  const { required, readOnly = false, timezone } = ooui as DateTime;
  const useMaskedInput = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_DATE_USE_MASKED_INPUT,
  );

  if (useMaskedInput) {
    return (
      <Field required={required} {...props}>
        <DateMaskedInput
          type={showTime ? "datetime" : "date"}
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
