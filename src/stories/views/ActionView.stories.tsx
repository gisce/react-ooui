import React from "react";

import ActionView from "../../views/ActionView";
import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Views/ActionView",
};

export const Default = (): React.ReactElement => {
  return (
    <LocaleProvider lang="en_US">
      <ActionView
        domain={[]}
        model="giscedata.polissa.modcontractual"
        context={{ lang: "en_US" }}
        views={[
          [96, "tree"],
          [97, "form"],
        ]}
        title="Test"
        tabKey={"0"}
        initialViewType={"tree"}
      />
    </LocaleProvider>
  );
};
