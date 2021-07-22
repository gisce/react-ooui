import React from "react";

import { ActionView } from "../..";

export default {
  title: "Components/Widgets/Views/ActionView",
};

export const Default = (): React.ReactElement => {
  return <ActionView title={"Action view title"} action={"test"} />;
};
