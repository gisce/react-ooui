import React from "react";

import { Float } from "..";
import { Float as FloatOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Float",
};

export const Default = (): React.ReactElement => {
  const ooui = new FloatOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Float ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
