import React from "react";

import { Label } from "..";
import { Label as LabelOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Label",
};

export const Default = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "<b>Lorem ipsum</b>",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};

export const LabelSecondary = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
    widget_props: "{'label_type': 'secondary'}",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};

export const LabelWaning = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
    widget_props: "{'label_type': 'warning'}",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};

export const LabelDanger = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
    widget_props: "{'label_type': 'danger'}",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};

export const LabelSuccess = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
    widget_props: "{'label_type': 'success'}",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};

export const LabelH1 = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
    widget_props: "{'label_size': 1}",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};

export const LabelH2Warning = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
    widget_props: "{'label_size': 2, 'label_type': 'warning'}",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};
