import React, { useContext } from "react";
import { Steps as AntdSteps } from "antd";
import { FormContext, FormContextType } from "@/context/FormContext";
import Field from "@/common/Field";
import { Steps as StepsOoui } from "@gisce/ooui";

type StepsProps = {
  ooui: StepsOoui;
  value: any,
}

type StatusType = 'wait' | 'process' | 'finish' | 'error';


export const Steps = (props: StepsProps) => {
  const { ooui } = props;
  const { required } = ooui;

  return (
    <Field required={required} type={"any"} {...props}>
      <StepsInput {...props} />
    </Field>
  );
};

type StepsInputProps = StepsProps & {
  value?: any;
};

export const StepsInput = (props: StepsInputProps) => {
  const { ooui, value } = props;
  const { selectionValues, errorField } = ooui as StepsOoui;
  const formContext = useContext(FormContext) as FormContextType;

  const values = Array.from(selectionValues.entries());
  const current = values.map(val => val[0]).indexOf(value);
  let status: StatusType = "process";
  let error = "";
  
  if (errorField) {
    error = formContext.getFieldValue(errorField);
    if (error) {
      status = "error";
    }
  }


  return (
    <AntdSteps current={current} status={status}>
      {values.map((val, idx) => (
        <AntdSteps.Step title={val[1]} description={idx === current && status === "error" ? error : null}/>
      ))}
    </AntdSteps>
  );
};