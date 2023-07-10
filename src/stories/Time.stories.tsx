// @ts-ignore
import React, { useState } from "react";

import { TimeInput } from "../widgets/base/Time";
import { Time as TimeOoui } from "@gisce/ooui";


import LocaleProvider from "../context/LocaleContext";

export default {
  title: "Components/Widgets/Base/Time",
};

export const Default = (): React.ReactElement => {
  const ooui = new TimeOoui({
    name: "field",
    string: "Lorem ipsum",
  });

  const [value, setValue] = useState<string>('23:12:34');

  const onChange = (value: string) => {
    console.log(value);
    setValue(value);
  }

  return (
    <LocaleProvider lang="en_US">
      <TimeInput ooui={ooui} onChange={onChange} value={value} />
    </LocaleProvider>
  );
};
