import React from "react";
import { Tabs } from "antd";

import {
  Notebook as NotebookOoui,
  Page as PageOoui,
  Widget as WidgetOoui,
} from "ooui";
import { createReactWidget } from "../WidgetFactory";

const { TabPane } = Tabs;

type Tab = {
  title: string;
  children: React.ReactNode;
};

type Props = {
  tabs?: Tab[];
  ooui?: NotebookOoui;
};

function Notebook(props: Props): React.ReactElement {
  const { ooui } = props;
  let _props: Props;

  if (ooui) {
    const tabs: Tab[] = [].concat
      .apply([], ooui.container.rows)
      .map((page: PageOoui) => {
        const tabChildren = [].concat
          .apply([], page.container.rows)
          .map((item: WidgetOoui) => {
            return createReactWidget(item);
          });

        return {
          title: page.label,
          children: tabChildren,
        };
      });
    _props = { ...props, tabs };
  } else {
    _props = { ...props };
  }
  const { tabs } = _props;

  return (
    <Tabs defaultActiveKey="1">
      {tabs!.map((tab: Tab, index: number) => {
        return (
          <TabPane tab={tab.title} key={index}>
            {tab.children}
          </TabPane>
        );
      })}
    </Tabs>
  );
}

export default Notebook;
