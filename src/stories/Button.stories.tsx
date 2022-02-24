import React from "react";

import { Button } from "..";
import { Button as ButtonOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Button",
};

export const Default = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};

export const WithStockIcon = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "gtk-ok"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};

export const WithCustomIcon = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "terp-purchase"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};

export const WithAntdIcon = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "ant-design"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};

export const WithUnexistingdIcon = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "foo"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};

export const PrimaryButton = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "send",
    primary: "1"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};

export const DangerButton = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "exclamation-circle",
    danger: "1"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};


export const PrimaryDangerButton = (): React.ReactElement => {
  const ooui = new ButtonOoui({
    name: "button_field",
    string: "Lorem ipsum",
    icon: "exclamation-circle",
    danger: "1",
    primary: "1"
  });
  return (
    <LocaleProvider lang="en_US">
      <Button ooui={ooui} />
    </LocaleProvider>
  );
};


