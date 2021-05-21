import React from "react";

import { SearchTree } from "../..";

export default {
  title: "Components/Widgets/Trees/Factures",
};

export const Default = (): React.ReactElement => {
  return (
    <SearchTree
      key={Math.random() * 10000} // This forces the component to be unique each time
      action={"factures"}
    />
  );
};
