import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Documents",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"giscedata.signatura.documents"}
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
