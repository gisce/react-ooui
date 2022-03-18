import React from "react";
import { DashboardGridItem, DashboardGrid, GraphIndicator } from "../..";

import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Dashboard/DashboardGrid",
};

export function Default(): React.ReactElement {
  return (
    <LocaleProvider lang="en_US">
      <DashboardGrid>
        <DashboardGridItem title="hoooasdfasdfasdfasdfasdfoola">
          <GraphIndicator model="res.partner" context={{}} domain={{}} />
        </DashboardGridItem>
      </DashboardGrid>
    </LocaleProvider>
  );
}
