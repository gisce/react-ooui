import React from "react";

import { SelectionInput } from "../widgets/base/Selection";
import { Selection as SelectionOoui } from "ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

import { withKnobs, text } from "@storybook/addon-knobs";

export default {
  title: "Components/Widgets/Base/Selection",
  decorators: [withKnobs],
};

const selectionValues = [
  ["en_US", "English"],
  ["ca_ES", "Catalan / Català"],
  ["es_ES", "Spanish / Español"],
];

export const Default = (): React.ReactElement => {
  const ooui = new SelectionOoui({
    name: "selcontext_langection",
    string: "Lorem ipsum",
    selection: selectionValues,
  });
  const value = text("value", "en_US") || undefined;

  return (
    <LocaleProvider lang="en_GB">
      <SelectionInput ooui={ooui} value={value} />
    </LocaleProvider>
  );
};
