import React from "react";

import { Form } from "antd";
import { Notebook, Char } from "..";
import "antd/dist/antd.css";
import "../tailwind.generated.css";

export default {
  component: Notebook,
  title: "Components/Widgets/Notebook",
};

const Template = (args: any) => (
  <Form>
    <Notebook {...args} />
  </Form>
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      title: "Tab 1",
      children: <Char id="field1" label="field 1" />,
    },
    {
      title: "Tab 2",
      children: <Char id="field2" label="field 2" />,
    },
  ],
};
