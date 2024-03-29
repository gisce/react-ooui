import React from "react";

import { ActionBar } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/UI/ActionBar",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <ActionBar
        saveButtonHidden={false}
        saveButtonCallback={() => {}}
        saveButtonLoading={false}
        saveButtonDisabled={false}
      />
    </LocaleProvider>
  );
};
