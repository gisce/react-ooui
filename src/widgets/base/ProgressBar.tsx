import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { ProgressBarValue } from "@gisce/react-formiga-components";

export const ProgressBar = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <ProgressBarInput />
    </Field>
  );
};

export const ProgressBarInput = ({ value }: { value?: number }) => {
  return <ProgressBarValue value={value} />;
};
