import React from "react";

import { Form } from "../..";
import "antd/dist/antd.css";
import "@/tailwind.generated.css";
import LocaleProvider from "../../context/LocaleContext";

export default {
  component: Form,
  title: "Components/Widgets/Containers/NewLineExample",
};

const Template = (args: any) => (
  <LocaleProvider lang="en_US">
    <Form {...args} />
  </LocaleProvider>
);
export const Default = Template.bind({});
Default.args = {
  initialValues: {
    name: "John Appleseed",
    login: "john",
    context_lang: "ca_ES",
    context_tz: "Europe/Madrid",
    password: "MaskedPassword",
    signature: "John Appleseed\n___\nReach me at +34973748312",
  },
  arch: `
  <form string="Users">
    <group colspan="4" col="4">
      <field name="name"/>
      <newline/>
      <field name="login" readonly="1"/>
    </group>
  </form>`,
  fields: {
    login: {
      required: true,
      size: 64,
      string: "Login",
      type: "char",
      views: {},
    },
    name: {
      required: true,
      select: true,
      size: 64,
      string: "Name",
      type: "char",
      views: {},
    },
  },
};
