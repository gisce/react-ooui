import React from "react";

import { Button } from "..";
import "antd/dist/antd.css";

export default {
  component: Button,
  title: "Components/Widgets/Base/Button",
  argTypes: { onClick: { action: "clicked" } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
  label: "Lorem ipsum sit",
  children: "Button",
};

export const Primary = Template.bind({});
Primary.storyName = "Primary";
Primary.args = {
  ...Default.args,
  type: "primary",
};

export const Deactivated = Template.bind({});
Deactivated.storyName = "Deactivated";
Deactivated.args = {
  ...Default.args,
  activated: false,
  children: "Deactivated",
};
