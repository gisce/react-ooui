import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Partners",
};

export const Default = (): React.ReactElement => {

  return (
    <Form
      model={"res.partner"}
      id={6}
      onCancel={() => {
        console.log();
      }}
      onSubmitSucceed={(value: any) => {
        console.log();
      }}
    />
  );
};
