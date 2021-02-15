import React, { useState, useEffect } from "react";
import { Form as FormOoui } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import { Form as AntForm, FormInstance } from "antd";

type Props = {
  arch: string;
  fields: any;
  initialValues?: any;
  antForm: FormInstance;
};

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

function Form(props: Props): React.ReactElement {
  const { arch, fields, initialValues, antForm } = props;

  const [form, setForm] = useState<FormOoui>();

  const getForm = () => {
    return form!.container.rows.map((item, i) => {
      return item.map((widget, j) => {
        return createReactWidget(widget, `${i}-${j}`);
      });
    });
  };

  useEffect(() => {
    const newForm = new FormOoui(fields);
    newForm.parse(arch);
    setForm(newForm);
  }, [arch, fields]);

  return (
    <AntForm
      form={antForm}
      initialValues={filteredValues(initialValues, fields)}
    >
      {form && getForm()}
    </AntForm>
  );
}

export default Form;
