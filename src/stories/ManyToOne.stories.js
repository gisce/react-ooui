import React from "react";

import { ManyToOne } from "..";
import "antd/dist/antd.css";

export default {
  component: ManyToOne,
  title: "Components/Widgets/Form/ManyToOne",
};

const Template = (args) => <ManyToOne {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Lorem ipsum sit",
  placeholder: "Type something...",
  value: "",
  onChange: (value) => {
    console.log("Changed value: ", value);
  },
  onOpenDetailClick: (value) => {
    console.log("Open detail", value);
  },
  onSearchClick: (value) => {
    console.log("Search value", value);
  },
};
