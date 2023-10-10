import React from "react";

import { Text } from "..";
import { Text as TextOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Text",
};

export const Default = (): React.ReactElement => {
  const ooui = new TextOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Text ooui={ooui} showLabel />
    </LocaleProvider>
  );
};

export const Translatable = (): React.ReactElement => {
  const ooui = new TextOoui({
    name: "field",
    string: "Lorem ipsum",
    translate: true,
  });
  return (
    <LocaleProvider lang="en_US">
      <Text ooui={ooui} />
    </LocaleProvider>
  );
};
