import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

import { Notebook as NotebookOoui, Group as GroupOoui } from "ooui";
import { Group } from "../../";

type Props = {
  ooui: NotebookOoui;
};

function Notebook(props: Props): React.ReactElement {
  const { ooui } = props;
  const tabs = [].concat.apply([], ooui!.container.rows);
  return (
    <Tabs defaultActiveKey="1">
      {tabs.map((page: any, key: number) => {
        const tabKey = (key + 1).toString();

        return (
          <TabPane tab={page.label} key={tabKey}>
            <Group ooui={page as GroupOoui} />
          </TabPane>
        );
      })}
    </Tabs>
  );
}

export default Notebook;
