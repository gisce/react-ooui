import React from "react";
import "antd/dist/antd.css";
import "@/tailwind.generated.css";

import { withKnobs } from "@storybook/addon-knobs";
import LocaleProvider from "../../context/LocaleContext";

import { Form } from "antd";
import { Form as FormOoui, Notebook as NotebookOoui } from "@gisce/ooui";
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

const testArch = `<form><notebook name="notebook"><page string="Corbes">
<group colspan="4">
    <group string="Validada" colspan="2">
        <field name="name" string="Última corba"/>
        <field name="surname" string="Format"/>
    </group>
    <group string="Facturada" colspan="2">
        <field name="name" string="Última corba"/>
        <field name="surname" string="Format"/>
    </group>
    <group string="Autoconsumida" colspan="2">
        <field name="name" string="Última corba"/>
        <field name="surname" string="Format"/>
    </group>
    <group string="Generada Neta" colspan="2">
        <field name="name" string="Última corba"/>
        <field name="surname" string="Format"/>
    </group>
    <group string="Quart-Horària" colspan="2">
        <field name="name" string="Última corba"/>
        <field name="surname" string="Format"/>
    </group>
</group>
</page></notebook>
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

export const Test = (): React.ReactElement => {
  const formOoui = new FormOoui(fields);
  formOoui.parse(testArch);
  const notebookOoui = formOoui.findById("notebook") as NotebookOoui;

  return (
    <LocaleProvider lang="en_US">
      <Form>
        <Notebook ooui={notebookOoui} />
      </Form>
    </LocaleProvider>
  );
};
