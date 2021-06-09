import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/CRMLead",
};

export const Default = (): React.ReactElement => {
  return (
    <Form
      model={"giscedata.crm.lead"}
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
