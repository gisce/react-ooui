import React from "react";

import { Radio } from "../../widgets/custom/Radio";
import { Radio as RadioOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/Radio",
};

export const Default = (): React.ReactElement => {
  const ooui = new RadioOoui({
    name: "level",
    string: "Level",
    required: true,
    selection: [
      ['easy', 'Easy'],
      ['medium', 'Medium'],
      ['hard', 'Hard']
    ]
  });

  return (
    <LocaleProvider lang="en_US">
      <Radio ooui={ooui} />
    </LocaleProvider>
  );
};

export const Readonly = (): React.ReactElement => {
  const ooui = new RadioOoui({
    name: "level",
    string: "Level",
    readonly: true,
    selection: [
      ['easy', 'Easy'],
      ['medium', 'Medium'],
      ['hard', 'Hard']
    ]
  });

  return (
    <LocaleProvider lang="en_US">
      <Radio ooui={ooui} />
    </LocaleProvider>
  );
};

export const RadioVertical = (): React.ReactElement => {
  const ooui = new RadioOoui({
    name: "level",
    string: "Level",
    readonly: true,
    selection: [
      ['easy', 'Easy'],
      ['medium', 'Medium'],
      ['hard', 'Hard']
    ],
    widget_props: "{'direction': 'vertical'}"
  });

  return (
    <LocaleProvider lang="en_US">
      <Radio ooui={ooui} />
    </LocaleProvider>
  );
};