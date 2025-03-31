import DatePicker from "@/common/DatePicker";

import { WidgetProps } from "@/types";

const Date = (props: WidgetProps) => {
  const { ooui } = props;

  return <DatePicker ooui={ooui} />;
};

export default Date;
