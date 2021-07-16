import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/AutofillMany2One",
};

export const Default = (): React.ReactElement => {
  const arch = "<form><field name='many2one' /></form>";
  const fields = {
    many2one: {
      required: true,
      string: "Test",
      domain: "[('test', '=', 'foo')]",
      type: "many2one",
      relation: "res.municipi",
    },
  };

  return (
    <Form
      arch={arch}
      fields={fields}
      onCancel={() => {
        console.log();
      }}
      onSubmitSucceed={(value: any) => {
        console.log();
      }}
    />
  );
};
