import React, { useEffect } from "react";
import { Form as AntForm, Input } from "antd";
import { Char as CharOoui } from "@gisce/ooui";
import { Char } from "@/index";

export default function FormTest(props: { email: string }) {
  const { email } = props;
  const [antForm] = AntForm.useForm();
  const ooui = new CharOoui({
    name: "email",
    string: "Email",
    nolabel: false,
  });

  useEffect(() => {
    antForm.setFields([
      {
        name: "email",
        touched: false,
        value: email,
      },
    ]);
  }, [email]);

  return (
    <AntForm form={antForm} component={false} preserve={false}>
      {/* <AntForm.Item label="Email" name="email">
        <Input />
      </AntForm.Item> */}
      <Char ooui={ooui} />
    </AntForm>
  );
}
