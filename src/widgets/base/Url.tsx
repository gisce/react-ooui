import React from "react";
import isURL from "validator/lib/isURL";
import Field from "@/common/Field";

import { WidgetProps } from "@/types";
import { LinkInput } from "./LinkInput";
import { Char as CharOoui } from "@gisce/ooui";

export const Url = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui as CharOoui;

  return (
    <Field required={required} {...props}>
      <LinkInput
        ooui={ooui as CharOoui}
        valueValidator={(value) => {
          if (!value) {
            return false;
          }
          return isURL(value);
        }}
      />
    </Field>
  );
};
