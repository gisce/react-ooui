import React from "react";

import { Char } from "..";
import "antd/dist/antd.css";

export default {
  component: Char,
  title: "Components/Widgets/Form/Char",
};

const Template = (args) => <Char {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Lorem ispum sit",
  placeholder: "Type something...",
  value: "",
  onChange: (value) => {
    console.log("Changed, new value: " + value);
  },
};
