import React from "react";

import { Many2one } from "..";
import { Many2one as Many2oneOoui } from "@gisce/ooui";

import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Many2One",
};

export const Default = (): React.ReactElement => {
  const ooui = new Many2oneOoui({
    name: "field",
    string: "Lorem ipsum",
    relation: "res.partners",
  });
  return (
    <LocaleProvider lang="en_US">
      <div style={{ width: 200 }}>
        <Many2one ooui={ooui} showLabel />
      </div>
      <div style={{ width: 300 }}>
        <Many2one ooui={ooui} showLabel />
      </div>
      <div style={{ width: 500 }}>
        <Many2one ooui={ooui} showLabel />
      </div>
    </LocaleProvider>
  );
};
