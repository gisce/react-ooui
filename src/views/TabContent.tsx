import React, { useContext } from "react";

import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";

type Props = {
  tab: any;
};

function TabContent(props: Props) {
  const { tab } = props;

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { activeKey } = tabManagerContext || {};

  const hiddenStyle: any = {
    display: "none",
  };

  return (
    <div style={tab.key !== activeKey ? hiddenStyle : undefined}>
      {tab.content}
    </div>
  );
}

export default React.memo(TabContent, () => true);
