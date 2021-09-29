import React from "react";

import { Form } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Forms/Attachments",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_GB">
      <Form
        model={"ir.attachment"}
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
