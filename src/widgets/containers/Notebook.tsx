import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

import { Notebook as NotebookOoui, Group as GroupOoui } from "ooui";
import { Group } from "@/index";

type Props = {
  ooui: NotebookOoui;
  responsiveBehaviour: boolean;
};

function Notebook(props: Props): React.ReactElement {
  const { ooui, responsiveBehaviour } = props;
  const tabs = [].concat.apply([], ooui!.container.rows);
  return (
    <Tabs defaultActiveKey="1">
      {tabs.filter((page: any) => !page.invisible).map((page: any, key: number) => {
        const tabKey = (key + 1).toString();

        return (
          <TabPane tab={page.label} key={tabKey}>
            <Group ooui={page as GroupOoui} showLabel={false} responsiveBehaviour={responsiveBehaviour} />
          </TabPane>
        );
      })}
    </Tabs>
  );
}

export default Notebook;
