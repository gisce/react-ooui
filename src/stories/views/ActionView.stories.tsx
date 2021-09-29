import React from "react";

import { ActionView } from "../..";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Views/ActionView",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_GB">
      <ActionView title={"Action view title"} action={"test"} />
    </LocaleProvider>
  );
};
