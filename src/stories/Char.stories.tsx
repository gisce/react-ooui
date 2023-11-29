import React from "react";

import { Char } from "..";
import { Char as CharOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Char",
};

export const Default = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Char ooui={ooui} showLabel />
    </LocaleProvider>
  );
};

export const Password = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Password",
    nolabel: false,
  });
  ooui.isPassword = true;
  return (
    <LocaleProvider lang="en_US">
      <Char ooui={ooui} showLabel />
    </LocaleProvider>
  );
};

export const Translatable = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum",
    translate: true,
  });
  return (
    <LocaleProvider lang="en_US">
      <Char ooui={ooui} showLabel />
    </LocaleProvider>
  );
};

export const Tooltip = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum",
    help: "This is a simple help",
  });
  return (
    <LocaleProvider lang="en_US">
      <Char ooui={ooui} showLabel />
    </LocaleProvider>
  );
};

export const TooltipInline = (): React.ReactElement => {
  const ooui = new CharOoui({
    name: "field",
    string: "Lorem ipsum",
    help: "This is a simple help",
    help_inline: "true",
  });
  return (
    <LocaleProvider lang="en_US">
      <Char ooui={ooui} showLabel />
    </LocaleProvider>
  );
};
