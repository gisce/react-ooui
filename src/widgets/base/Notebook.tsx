import React from "react";
import { Tabs, Form } from "antd";
const { TabPane } = Tabs;

type Tab = {
  title: string;
  children: React.ReactNode;
};

type Props = {
  tabs: Tab[];
};

function Notebook(props: Props): React.ReactElement {
  const { tabs } = props;

  return (
    <Form>
      <Tabs defaultActiveKey="1">
        {tabs!.map((tab: Tab, index: number) => {
          return (
            <TabPane tab={tab.title} key={index}>
              {tab.children}
            </TabPane>
          );
        })}
      </Tabs>
    </Form>
  );
}

export default Notebook;
