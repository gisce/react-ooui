import React from "react";

import { CodeEditor } from "../../widgets/custom/CodeEditor";
import { CodeEditor as CodeEditorOoui } from "@gisce/ooui";
import "antd/dist/antd.css";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/CodeEditor",
};

export const Default = (): React.ReactElement => {
  const ooui = new CodeEditorOoui({
    name: "code",
    string: "Code",
    height: 400,
    widget_props: "{'lang': 'xml'}"
  });

  return (
    <LocaleProvider lang="en_US">
      <CodeEditor ooui={ooui} />
    </LocaleProvider>
  );
};
