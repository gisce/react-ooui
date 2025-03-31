import DatePicker from "@/common/DatePicker";

import { WidgetProps } from "@/types";

const DateTime = (props: WidgetProps) => {
  const { ooui } = props;

  return <DatePicker ooui={ooui} showTime />;
};

export default DateTime;
