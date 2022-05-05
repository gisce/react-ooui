import React from "react";

import RefreshButton from "../../ui/RefreshButton";
import LocaleProvider from "../../context/LocaleContext";

import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/UI/RefreshButton",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <RefreshButton />
    </LocaleProvider>
  );
};
