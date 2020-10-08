import React from "react";

import { ManyToOne } from "../atoms";

export default {
  component: ManyToOne,
  title: "Components/Atoms/ManyToOne",
};

const Template = (args) => <ManyToOne {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Lorem ipsum sit",
  value: "",
  onSearch: (value) => {
    console.log("Search value: " + value);
  },
};
