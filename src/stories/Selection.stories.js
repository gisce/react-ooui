import React from "react";

import { Selection } from "..";
import "antd/dist/antd.css";

export default {
  component: Selection,
  title: "Components/Widgets/Form/Selection",
};

const Template = (args) => <Selection {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Lorem ipsum sit",
  value: "",
  values: [{
    id: '1', name: "Option 1"
  }, {
    id: '2', name: "Option 2"
  }, {
    id: '3', name: "Option 3"
  }],
  onChange: (value) => {
    console.log("Changed, new value: " + value);
  },
};
