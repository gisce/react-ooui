import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Company",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"res.company"}
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
