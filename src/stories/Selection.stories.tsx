import React from "react";

import { Selection } from "..";
import { Selection as SelectionOoui } from "ooui";
import "antd/dist/antd.css";

export default {
  title: "Components/Widgets/Base/Selection",
};

const selectionValues = [
  ["en_US", "English"],
  ["ca_ES", "Catalan / Català"],
  ["es_ES", "Spanish / Español"],
];

export const Default = (): React.ReactElement => {
  const ooui = new SelectionOoui({
    name: "selcontext_langection",
    string: "Lorem ipsum sit",
    selection: selectionValues,
  });

  return <Selection ooui={ooui} />;
};
