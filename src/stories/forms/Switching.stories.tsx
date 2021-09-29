import React from "react";

import { Form } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Forms/Switching",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_GB">
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
    </LocaleProvider>
  );
};
