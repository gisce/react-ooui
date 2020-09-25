import React from "react";

import { Button } from "../atoms";

export default {
  component: Button,
  title: "Components/Atoms/Button",
  argTypes: { onClick: { action: 'clicked' } },
};

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.storyName = "Default";
Default.args = {
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
