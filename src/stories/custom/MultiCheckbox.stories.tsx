import React from "react";

import { MultiCheckboxInput } from "../../widgets/custom/MultiCheckbox";
import { Checkbox, Space, Row, Col } from "antd";
import { MultiCheckbox as MultiCheckboxOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/MultiCheckbox",
};

export const Default = (): React.ReactElement => {
  const ooui = new MultiCheckboxOoui({
    name: "button_field",
    string: "Lorem ipsum",
    field: "name",
    relation: "res.partner.category"
  });

  return (
    <LocaleProvider lang="en_US">
      <MultiCheckboxInput ooui={ooui} value={{items: [
          {id: 1, operation: "original"},
          {id: 2, operation: "original"},
          {id: 3, operation: "pendingRemove"}
        ]}}
      />
    </LocaleProvider>
  );
};

export const Readonly = (): React.ReactElement => {
  const ooui = new MultiCheckboxOoui({
    name: "button_field",
    string: "Lorem ipsum",
    field: "name",
    readonly: true,
    relation: "res.partner.category",
  });

  return (
    <LocaleProvider lang="en_US">
      <MultiCheckboxInput ooui={ooui} value={{items: [
          {id: 1, operation: "original"},
          {id: 2, operation: "original"},
          {id: 3, operation: "pendingRemove"}
        ]}}
      />
    </LocaleProvider>
  );
};