import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Switching",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"giscedata.switching.mod.con.wizard"}
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
