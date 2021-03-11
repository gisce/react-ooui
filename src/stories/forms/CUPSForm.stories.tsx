import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/CUPS",
};

export const Default = (): React.ReactElement => {

  return (
    <Form
      model={"giscedata.cups.ps"}
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
