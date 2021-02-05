import React from "react";

import { Form } from "antd";
import { Group, Char } from "..";
import "antd/dist/antd.css";
import "../tailwind.generated.css";

export default {
  component: Group,
  title: "Components/Widgets/Group",
};

const Template = (args: any) => (
  <Form>
    <Group {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  children: [
    <Char id="field1" label="field 1" />,
    <Char id="field2" label="field 2" />,
  ],
};
