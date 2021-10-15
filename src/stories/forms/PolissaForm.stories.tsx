import React from "react";

import { Form } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Forms/Polissa",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
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
    </LocaleProvider>
  );
};
