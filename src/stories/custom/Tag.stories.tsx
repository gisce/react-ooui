import React from "react";

import { Tag as TagOoui } from "@gisce/ooui";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";
import { TagInput } from "../../widgets/custom/Tag";

export default {
  title: "Components/Widgets/Custom/Tag",
};

export const Default = (): React.ReactElement => {
  const ooui = new TagOoui({
    name: "status",
    string: "Status",
    field: "status",
    selection: [['draft', 'Draft'], ['open', 'Open']],
    widget_props: '{"colors": {"draft": "blue", "open": "green"}}'
  });

  return (
    <LocaleProvider lang="en_US">
     <TagInput value="draft" ooui={ooui}/>
    </LocaleProvider>
  );
};

export const WithoutColor = (): React.ReactElement => {
  const ooui = new TagOoui({
    name: "status",
    string: "Status",
    field: "status",
    selection: [['draft', 'Draft'], ['open', 'Open']],
  });

  return (
    <LocaleProvider lang="en_US">
     <TagInput value="draft" ooui={ooui}/>
    </LocaleProvider>
  );
};

export const WithColorAuto = (): React.ReactElement => {
  const ooui = new TagOoui({
    name: "status",
    string: "Status",
    field: "status",
    selection: [['draft', 'Draft'], ['open', 'Open']],
    widget_props: '{"colors": "auto"}'
  });

  return (
    <LocaleProvider lang="en_US">
     <TagInput value="draft" ooui={ooui}/>
    </LocaleProvider>
  );
};
