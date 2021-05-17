import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Signatures",
};

export const Default = (): React.ReactElement => {

  return (
    <Form
      model={"giscedata.signatura.process"}
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
