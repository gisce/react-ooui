import React from "react";

import { ActionBar } from "../..";
import LocaleProvider from "../../context/LocaleContext";

import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/UI/ActionBar",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_GB">
      <ActionBar
        saveButtonHidden={false}
        saveButtonCallback={() => {}}
        saveButtonLoading={false}
        saveButtonDisabled={false}
      />
    </LocaleProvider>
  );
};
