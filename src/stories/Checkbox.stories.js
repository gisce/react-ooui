import React from "react";

import { Checkbox } from "..";
import "antd/dist/antd.css";

export default {
    component: Checkbox,
    title: "Components/Widgets/Form/Checkbox",
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Checkbox example",
    description: "Checkbox 1",
    checked: false,
    onChange: (value) => {
        console.log("Changed, new value: " + value);
    },
};