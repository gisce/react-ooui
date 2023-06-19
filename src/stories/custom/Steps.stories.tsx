import React from "react";

import { Steps, StepsInput } from "../../widgets/custom/Steps";
import { Steps as StepsOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/Steps",
};

export const Default = (): React.ReactElement => {
  const ooui = new StepsOoui({
    name: "enabled",
    string: "Lorem ipsum",
    selection: [['init', 'Start'], ['second', 'Second'], ['third', 'Third'], ['end', 'End']]
  });

  return (
    <LocaleProvider lang="en_US">
      <StepsInput ooui={ooui} value="third" />
    </LocaleProvider>
  );
};

export const Many2One = (): React.ReactElement => {
  const ooui = new StepsOoui({
    name: "enabled",
    string: "Lorem ipsum",
    relation: "crm.case.stage",
  });

  return (
    <LocaleProvider lang="en_US">
      <StepsInput ooui={ooui} value="third" />
    </LocaleProvider>
  );
};