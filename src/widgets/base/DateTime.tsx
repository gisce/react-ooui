import { DatePicker as AntDatePicker } from "antd";

import React from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import moment from "moment";

const DateTime = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <AntDatePicker
        format={"DD/MM/YYYY HH:mm:ss"}
        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
      ></AntDatePicker>
    </Field>
  );
};

export default DateTime;
