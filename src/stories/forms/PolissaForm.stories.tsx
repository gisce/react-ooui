import React from "react";

import { Form } from "../..";

export default {
  title: "Components/Widgets/Forms/Polissa",
};

export const Default = (): React.ReactElement => {
  
  return (
    <div>
      <Form
        model={"giscedata.polissa"}
        id={6}
        onCancel={() => {
          console.log();
        }}
        onSubmitSucceed={(value: any) => {
          console.log();
        }}
      />
    </div>
  );
};
