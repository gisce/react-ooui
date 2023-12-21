import React from "react";
import LocaleProvider from "@/context/LocaleContext";
import { FormOouiComponent } from "./FormOouiComponent";
import Container from "../containers/Container";

export default {
  title: "NewFormTest",
};

const formTest = {
  fields: {
    char1: {
      size: 128,
      string: "Name",
      type: "char",
      help: "tooltip string",
    },
  },
  arch: `<?xml version="1.0"?>
  <form string="Form1">
      <group name="group">
          <field colspan="1" name="char1" string="Label override" />
      </group>
  </form>`,
  values: {
    char1: "Initial value",
  },
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <FormOouiComponent
        arch={formTest.arch}
        fields={formTest.fields as any}
        values={formTest.values}
        getChildrenForOoui={(ooui) => {
          return (
            <Container container={ooui.container} responsiveBehaviour={false} />
          );
        }}
      />
    </LocaleProvider>
  );
};
