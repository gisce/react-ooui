import React from "react";
import { Checkbox as AntCheckbox } from "antd";
import styled from "styled-components";

import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import Config from "@/Config";

export const Boolean = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui;

  const CustomCheckbox: any =
    required && !readOnly ? RequiredCheckbox : AntCheckbox;

  return (
    <Field {...props} valuePropName="checked">
      <div className="flex flex-row">
        <CustomCheckbox disabled={readOnly} id={id} />
      </div>
    </Field>
  );
};

const RequiredCheckbox = styled(AntCheckbox)`
  .ant-checkbox-inner {
    background-color: ${Config.requiredColor};
  }

  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: #089cff;
  }
`;
