import React from "react";

import { SearchTree } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Trees/Factures",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_GB">
      <SearchTree action={"factures"} />
    </LocaleProvider>
  );
};
