import React from "react";

import { Integer } from "..";
import { Integer as IntegerOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Integer",
};

export const Default = (): React.ReactElement => {
  const ooui = new IntegerOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Integer ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
