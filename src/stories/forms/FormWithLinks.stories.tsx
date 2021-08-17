import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/FormWithLinks",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"test"}
      id={6}
      formView={{
        arch:
          '<form string="test"><field name="url" /><field name="email" /></form>',
        fields: { url: { type: "url" }, email: { type: "email" } },
      }}
      values={{ url: "http://www.google.com", email: "test@test.net" }}
      onCancel={() => {
        console.log();
      }}
      onSubmitSucceed={(value: any) => {
        console.log();
      }}
    />
  );
};
