import React from "react";

import { ActionBar } from "..";

import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/UI/ActionBar",
};

export const Default = (): React.ReactElement => {
  return (
    <ActionBar
      saveButtonHidden={false}
      saveButtonCallback={() => {}}
      saveButtonLoading={false}
      saveButtonDisabled={false}
    />
  );
};
