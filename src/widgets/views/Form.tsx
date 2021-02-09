import React, { useState, useEffect } from "react";
import { Form as FormOoui } from "ooui";
import { createReactWidget } from "@/widgets/WidgetFactory";
import { Form as AntForm } from "antd";

type Props = {
  arch: string;
  fields: any;
  initialValues?: any;
};

function Form(props: Props): React.ReactElement {
  const { arch, fields, initialValues } = props;

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

  return <AntForm initialValues={initialValues}>{form && getForm()}</AntForm>;
}

export default Form;
