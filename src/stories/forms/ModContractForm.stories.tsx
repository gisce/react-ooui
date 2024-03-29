import React from "react";

import { Form } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Forms/ModContract",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <Form
        model={"giscedata.polissa.modcontractual"}
        id={6}
        readOnly={true}
        onCancel={() => {
          console.log();
        }}
        onSubmitSucceed={(value: any) => {
          console.log();
        }}
      />
    </LocaleProvider>
  );
};
