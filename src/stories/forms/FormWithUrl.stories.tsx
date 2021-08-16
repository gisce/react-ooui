import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/FormWithUrl",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"test"}
      id={6}
      formView={{
        arch: '<form string="test"><field name="url" /></form>',
        fields: { url: { type: "url" } },
      }}
      values={{ url: "http://www.google.com" }}
      onCancel={() => {
        console.log();
      }}
      onSubmitSucceed={(value: any) => {
        console.log();
      }}
    />
  );
};
