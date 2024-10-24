import React from "react";
import { GraphCard, DashboardGrid, GraphIndicator } from "../..";

import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Dashboard/DashboardGrid",
};

export function Default(): React.ReactElement {
  return (
    <LocaleProvider lang="en_US">
      <DashboardGrid>
        <GraphCard title="test" parms={{ w: 3, h: 9, x: 0, y: 0, id: 10 }}>
          <GraphIndicator
            model="res.partner"
            context={{}}
            domain={{}}
            icon={"wallet"}
            showPercent={true}
            // suffix={"€"}
          />
        </GraphCard>
        <GraphCard title="test" parms={{ w: 3, h: 9, x: 0, y: 0, id: 10 }}>
          <GraphIndicator
            model="res.partner"
            context={{}}
            domain={{}}
            icon={"bolt"}
            showPercent={true}
            // suffix={"€"}
          />
        </GraphCard>
      </DashboardGrid>
    </LocaleProvider>
  );
}
