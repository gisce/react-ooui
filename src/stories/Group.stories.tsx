import React from "react";
import "antd/dist/antd.css";
import "../tailwind.generated.css";

import { withKnobs, number } from "@storybook/addon-knobs";

import { Form } from "antd";
import { Form as FormOoui, Group as GroupOoui } from "ooui";
import { Group } from "..";

export default {
  title: "Components/Widgets/Group",
  decorators: [withKnobs],
};

const archTemplate = [
  `<form><group name="group" colspan="{colspan}" col="{col}">`,
  `</group></form>`,
];

const field = '<field name="name"/>';

const fields = {
  name: {
    string: "Field",
    type: "char",
  },
};

export const Default = (): React.ReactElement => {
  const col = number("Columns", 4) || 4;
  const colspan = number("Colspan", 4) || 4;
  const num_fields = number("Number of widgets", 2) || 2;

  const arch = [
    archTemplate[0]
      .replace("{colspan}", colspan.toString())
      .replace("{col}", col.toString()),
  ];

  let fieldsXml = "";
  for (let i = 0; i < num_fields; i += 1) {
    fieldsXml += field;
  }
  arch.push(fieldsXml);
  arch.push(archTemplate[1]);

  const formOoui = new FormOoui(fields);
  formOoui.parse(arch.join(""));
  const groupOoui = formOoui.findById("group") as GroupOoui;

  return (
    <Form>
      <Group ooui={groupOoui} />
    </Form>
  );
};