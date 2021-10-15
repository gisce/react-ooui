import React from "react";

import { Button } from "..";
import { Button as ButtonOoui } from "ooui";
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
