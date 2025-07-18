import { useContext } from "react";
import { Steps as AntdSteps } from "antd";
import { FormContext, FormContextType } from "@/context/FormContext";
import Field from "@/common/Field";
import { Steps as StepsOoui } from "@gisce/ooui";
import { ArrowStepsValue } from "@/widgets/custom/ArrowSteps";

type StepsProps = {
  ooui: StepsOoui;
  value: any;
};

type StatusType = "wait" | "process" | "finish" | "error";

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
  value?: Map<string, string> | ArrowStepsValue;
};

export const StepsInput = (props: StepsInputProps) => {
  const { ooui, value } = props;
  const { selectionValues, errorField, lastStep } = ooui as StepsOoui;
  const formContext = useContext(FormContext) as FormContextType;

  let values: Array<[string, string]> = [];
  let current: number | undefined;
  if (ooui.fieldType === "json" && value) {
    values = (value as ArrowStepsValue).map((val) => [val.title, val.title]);
    current = (value as ArrowStepsValue).findIndex((val) => val.active);
  } else {
    values = Array.from(selectionValues.entries());
    current = values.map((val) => val[0]).indexOf(value);
  }
  let status: StatusType = "process";
  let error = "";

  if (errorField) {
    error = formContext.getFieldValue(errorField);
    if (error) {
      status = "error";
    }
  }
  if (lastStep && current + 1 === values.length) {
    status = "finish";
  }

  return (
    <AntdSteps current={current} status={status}>
      {values.map((val, idx) => (
        <AntdSteps.Step
          title={val[1]}
          description={idx === current && status === "error" ? error : null}
          key={val[1]}
        />
      ))}
    </AntdSteps>
  );
};
