import React from "react";
import isEmail from "validator/lib/isEmail";
import Field from "@/common/Field";

import { WidgetProps } from "@/types";
import { LinkInput } from "./LinkInput";
import { Char as CharOoui } from "ooui";

export const Email = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui as CharOoui;

  return (
    <Field required={required} {...props}>
      <LinkInput
        ooui={ooui as CharOoui}
        linkPrefix={"mailto:"}
        valueValidator={(value) => {
          if (!value) {
            return false;
          }
          return isEmail(value);
        }}
      />
    </Field>
  );
};
