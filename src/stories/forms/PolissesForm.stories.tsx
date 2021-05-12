import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Polisses",
};

export const Default = (): React.ReactElement => {

  return (
    <Form
      model={"giscedata.polissa.modcontractual"}
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
