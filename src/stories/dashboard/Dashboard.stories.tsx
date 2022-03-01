import React from "react";

import { Dashboard } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Dashboard/Sample",
};

const xml = `<?xml version="1.0"?>
    <dashboard string="Partner dashboard">
        <dashboard_item action_id="71" position="{'x':0,'y':0,'w':6,'h':24}" />
        <dashboard_item action_id="75" position="{'x':7,'y':0,'w':6,'h':24}" />
    </dashboard>
    `;

export function Default(): React.ReactElement {
  return (
    <LocaleProvider lang="en_US">
      <Dashboard arch={xml} />
    </LocaleProvider>
  );
}
