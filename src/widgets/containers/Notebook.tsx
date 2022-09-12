import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

import { Notebook as NotebookOoui, Group as GroupOoui } from "@gisce/ooui";
import { Group } from "@/index";

type Props = {
  ooui: NotebookOoui;
  responsiveBehaviour: boolean;
};

function Notebook(props: Props): React.ReactElement {
  const { ooui, responsiveBehaviour } = props;
  const tabs = ooui.pages;
  return (
    <Tabs defaultActiveKey="1" tabPosition={ooui.tabPosition}>
      {tabs
        .filter((page: any) => !page.invisible)
        .map((page: any) => {
          return (
            <TabPane tab={page.label} key={page.label}>
              <Group
                ooui={page as GroupOoui}
                showLabel={false}
                responsiveBehaviour={responsiveBehaviour}
              />
            </TabPane>
          );
        })}
    </Tabs>
  );
}

export default Notebook;
