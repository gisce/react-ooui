import React from "react";

import { Selection } from "../atoms";

export default {
  component: Selection,
  title: "Components/Atoms/Selection",
};

const Template = (args) => <Selection {...args} />;

export const Default = Template.bind({});
Default.args = {
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
