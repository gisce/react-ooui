import React from "react";

import { Boolean } from "..";
import { Boolean as BooleanOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Boolean",
};

export const Default = (): React.ReactElement => {
  const ooui = new BooleanOoui({
    name: "checkbox_field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Boolean ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
