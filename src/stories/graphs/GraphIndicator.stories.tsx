import { Graph } from "@gisce/ooui";
import React from "react";
import { GraphIndicator } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Graphs/GraphIndicator",
};

export const Default = (): React.ReactElement => {
  const ooui = new Graph(`<?xml version="1.0"?>
  <graph string="My indicator" type="indicator" />
  `);

  return (
    <LocaleProvider lang="en_US">
      <GraphIndicator ooui={ooui} model="partner" domain={{}} context={{}} />
    </LocaleProvider>
  );
};
