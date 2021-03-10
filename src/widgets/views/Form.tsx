import React, { useState, useEffect } from "react";
import { Form as FormOoui } from "ooui";
import { Form as AntForm, FormInstance } from "antd";
import Container from "../containers/Container";
import useDimensions from "react-cool-dimensions";

type Props = {
  arch: string;
  fields: any;
  initialValues?: any;
  antForm: FormInstance;
};

const WIDTH_BREAKPOINT = 1000;

const filteredValues = (values: any, fields: any) => {
  if (!fields) {
    return values;
  }
  const filteredValues: any = {};
  Object.keys(values).forEach((key) => {
    if (
      values[key] !== false ||
      (fields[key] && fields[key].type === "boolean")
    ) {
      filteredValues[key] = values[key];
    }
  });
  return filteredValues;
};

const processInitialValues = (values: any, fields: any) => {
  const filterBooleans = filteredValues(values, fields);
  return filterBooleans;
};

function Form(props: Props): React.ReactElement {
  const { arch, fields, initialValues, antForm } = props;
  const { width, ref } = useDimensions<HTMLDivElement>({
    breakpoints: { XS: 0, SM: 320, MD: 480, LG: 1000 },
    updateOnBreakpointChange: true,
  });
  const responsiveBehaviour = width < WIDTH_BREAKPOINT;
  const [form, setForm] = useState<FormOoui>();

  useEffect(() => {
    antForm.resetFields();
    const newForm = new FormOoui(fields);
    newForm.parse(arch);
    setForm(newForm);
  }, [arch, fields]);

  return (
    <div ref={ref}>
      <AntForm
        form={antForm}
        initialValues={processInitialValues(initialValues, fields)}
      >
        {form && (
          <Container
            container={form!.container}
            formWrapper
            responsiveBehaviour={responsiveBehaviour}
          />
        )}
      </AntForm>
    </div>
  );
}

export default Form;
