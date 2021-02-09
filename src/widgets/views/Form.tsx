import React, { useState, useEffect } from "react";
import { Form as FormOoui } from "ooui";
import { createReactWidget } from "../WidgetFactory";

type Props = {
  arch: string;
  fields: any;
};

function Form(props: Props): React.ReactElement {
  const { arch, fields } = props;

  const [form, setForm] = useState<FormOoui>();

  const getForm = () => {
    return form!.container.rows.map((item) => {
      return item.map((widget) => {
        return createReactWidget(widget);
      });
    });
  };

  useEffect(() => {
    const newForm = new FormOoui(fields);
    newForm.parse(arch);
    setForm(newForm);
  }, [arch, fields]);

  return <>{form && getForm()}</>;
}

export default Form;
