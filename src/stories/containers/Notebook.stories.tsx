import React from "react";
import "antd/dist/antd.css";
import "@/tailwind.generated.css";

import { withKnobs } from "@storybook/addon-knobs";
import LocaleProvider from "../../context/LocaleContext";

import { Form } from "antd";
import { Form as FormOoui, Notebook as NotebookOoui } from "ooui";
import { Notebook } from "../..";

export default {
  title: "Components/Widgets/Containers/Notebook",
  decorators: [withKnobs],
};

const arch = `<form><notebook name="notebook">
<page string="General">
  <field name="name" />
</page>
<page string="Secondary">
  <field name="surname" />
</page>
</notebook>
</form>`;

const fields = {
  name: {
    string: "Field of page 1",
    type: "char",
  },
  surname: {
    string: "Field of page 2",
    type: "char",
  },
};

export const Default = (): React.ReactElement => {
  const formOoui = new FormOoui(fields);
  formOoui.parse(arch);
  const notebookOoui = formOoui.findById("notebook") as NotebookOoui;

  return (
    <LocaleProvider lang="en_US">
      <Form>
        <Notebook ooui={notebookOoui} />
      </Form>
    </LocaleProvider>
  );
};
