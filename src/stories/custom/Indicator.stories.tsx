import React, { useState } from "react";

import { Indicator } from "../../widgets/custom/Indicator";
import { Indicator as IndicatorOoui } from "@gisce/ooui";

import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/Indicator",
};

export const Default = (): React.ReactElement => {
  const ooui = new IndicatorOoui({
    name: "button_field",
    string: "Lorem ipsum",
  });
  return (
    <LocaleProvider lang="en_US">
      <Indicator ooui={ooui} />
    </LocaleProvider>
  );
};

export const WithIconAndSuffix = (): React.ReactElement => {
  const ooui = new IndicatorOoui({
    name: "test",
    string: "Pending amount",
    widget_props: "{'icon': 'wallet', 'suffix': '€'}",
  });

  return (
    <LocaleProvider lang="en_US">
      <Indicator ooui={ooui} value={300} />
    </LocaleProvider>
  );
};
