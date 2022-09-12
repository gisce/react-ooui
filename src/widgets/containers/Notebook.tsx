import React from "react";
import { Tabs } from "antd";
import iconMapper from "@/helpers/iconMapper";
const { TabPane } = Tabs;

import { Notebook as NotebookOoui, Group as GroupOoui } from "@gisce/ooui";
import { Group } from "@/index";

type Props = {
  ooui: NotebookOoui;
  responsiveBehaviour: boolean;
};

function Notebook(props: Props): React.ReactElement {
  const { ooui, responsiveBehaviour } = props;
  const tabs = [].concat.apply([], ooui!.container.rows);

  function getPageIcon(icon: string) {
    if (icon) {
      const Icon: React.ElementType = iconMapper(icon);
      return Icon && <Icon />;
    }
    return undefined;
  }

  return (
    <Tabs defaultActiveKey="1">
      {tabs
        .filter((page: any) => !page.invisible)
        .map((page: any) => {
          return (
            <TabPane tab={<>{getPageIcon(page.icon)}  {page.label}</>} key={page.label}>
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
