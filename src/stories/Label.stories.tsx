import React from "react";

import { Label } from "..";
import { Label as LabelOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Label",
};

export const Default = (): React.ReactElement => {
  const ooui = new LabelOoui({
    name: "field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Label ooui={ooui} />
    </LocaleProvider>
  );
};
