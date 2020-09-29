import React from "react";

import { Checkbox } from "../atoms";

export default {
    component: Checkbox,
    title: "Components/Atoms/Checkbox",
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
    placeholder: "Example...",
    value: false,
    onChange: (value) => {
        console.log("Changed, new value: " + value);
    },
};