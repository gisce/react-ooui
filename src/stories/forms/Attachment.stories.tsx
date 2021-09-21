import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Attachments",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"ir.attachment"}
      onCancel={() => {
        console.log();
      }}
      onSubmitSucceed={(value: any) => {
        console.log();
      }}
    />
  );
};
