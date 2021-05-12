import DatePicker from "@/common/DatePicker";

import React from "react";
import { WidgetProps } from "@/types";

const DateTime = (props: WidgetProps) => {
  const { ooui } = props;

  return <DatePicker ooui={ooui} showTime />;
};

export default DateTime;
