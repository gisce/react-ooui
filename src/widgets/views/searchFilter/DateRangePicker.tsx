import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { DateRangeInput } from "@gisce/react-formiga-components";

interface DateRangePickerProps extends WidgetProps {
  className?: string;
  layout?: "vertical" | "horizontal";
}

export const DateRangePicker = (props: DateRangePickerProps) => {
  const { className, layout = "vertical" } = props;

  return (
    <Field {...props} layout={layout}>
      <DateRangeInput className={className} />
    </Field>
  );
};
