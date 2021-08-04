import React from "react";

import { SearchTree } from "../..";

export default {
  title: "Components/Widgets/Trees/Factures",
};

export const Default = (): React.ReactElement => {
  return <SearchTree action={"factures"} />;
};
