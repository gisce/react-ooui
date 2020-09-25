import React from "react";

import { FormItem } from "../molecules/FormItem/FormItem";
import { Char } from "../atoms";

import { Default as SelectionStory } from "./Selection.stories";
import { Default as ButtonStory } from "./Button.stories";

export default {
  component: FormItem,
  title: "Components/Molecules/Form item",
  argTypes: { onChange: { action: "changed" } },
};

const Template = (args) => <FormItem {...args}>{args.children}</FormItem>;

export const CharTemplate = Template.bind({});
CharTemplate.storyName = "Char";
CharTemplate.args = {
  label: "Name",
  children: <Char placeholder="Example" />,
};

export const SelectionTemplate = Template.bind({});
SelectionTemplate.storyName = "Selection";
SelectionTemplate.args = {
  label: "Multiple options",
  children: <SelectionStory {...Selection.args} />,
};

export const ButtonTemplate = Template.bind({});
ButtonTemplate.storyName = "Button";
ButtonTemplate.args = {
  children: (
    <ButtonStory {...ButtonStory.args}>{ButtonStory.args.children}</ButtonStory>
  ),
};
