import React, { useState } from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

function TabManagerView() {
  const [activeKey, setActiveKey] = useState<string>();

  return (
    <Tabs
      hideAdd
      type="editable-card"
      onChange={(activeKey) => {
        console.log("onChange " + activeKey);
      }}
      activeKey={activeKey}
      onEdit={(targetKey, action) => {}}
    >
      <TabPane tab={"Test 1"} key={"1"} closable={true}>
        Test 1 content
      </TabPane>
      <TabPane tab={"Test 2"} key={"2"} closable={true}>
        Test 2 content
      </TabPane>
      <TabPane tab={"Test 3"} key={"3"} closable={true}>
        Test 3 content
      </TabPane>
    </Tabs>
  );
}

export default TabManagerView;
