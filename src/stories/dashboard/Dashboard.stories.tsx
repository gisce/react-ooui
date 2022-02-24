import React from "react";

import { Dashboard } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Dashboard/Sample",
};

const xml = `<?xml version="1.0"?>
    <dashboard string="Partner dashboard">
        <action name="71" parms="{'x':0,'y':0,'w':6,'h':24}" />
        <action name="75" parms="{'x':7,'y':0,'w':6,'h':24}" />
    </dashboard>
    `;

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <Dashboard arch={xml} />
    </LocaleProvider>
  );
};
