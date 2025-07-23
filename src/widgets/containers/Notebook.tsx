import React from "react";
import { Tabs, theme } from "antd";
import styled from "styled-components";
import { iconMapper } from "@gisce/react-formiga-components";

import { Notebook as NotebookOoui, Group as GroupOoui } from "@gisce/ooui";
import { Group } from "@/index";
const { TabPane } = Tabs;

const StyledTabs = styled(Tabs)<{ $borderRadius?: string }>`
  .ant-tabs-content-holder {
    border-left: 1px solid rgba(228, 228, 231, var(--tw-border-opacity));
    border-right: 1px solid rgba(228, 228, 231, var(--tw-border-opacity));
    border-bottom: 1px solid rgba(228, 228, 231, var(--tw-border-opacity));
    padding: 15px;
    border-bottom-left-radius: ${(props) => props.$borderRadius || "5px"};
    border-bottom-right-radius: ${(props) => props.$borderRadius || "5px"};
    margin-top: -1px;
  }

  .ant-tabs > .ant-tabs-nav {
    /* So that there is no gap between the content and tabs */
    margin-bottom: 0;
  }

  .ant-tabs-nav {
    margin-bottom: 0 !important;
  }
`;

type Props = {
  ooui: NotebookOoui;
  responsiveBehaviour: boolean;
};

function Notebook(props: Props): React.ReactElement {
  const { ooui, responsiveBehaviour } = props;
  const tabs = ooui.pages;
  const { token } = theme.useToken();

  function getPageIcon(icon: string) {
    if (icon) {
      const Icon: React.ElementType = iconMapper(icon) as any;
      return Icon && <Icon />;
    }
    return undefined;
  }

  return (
    <StyledTabs
      defaultActiveKey="1"
      tabPosition={ooui.tabPosition}
      $borderRadius={`${token.borderRadius}px`}
    >
      {tabs
        .filter((page: any) => !page.invisible)
        .map((page: any) => {
          return (
            <TabPane
              tab={
                <>
                  {getPageIcon(page.icon)} {page.label}
                </>
              }
              key={page.label}
            >
              <Group
                ooui={page as GroupOoui}
                showLabel={false}
                responsiveBehaviour={responsiveBehaviour}
              />
            </TabPane>
          );
        })}
    </StyledTabs>
  );
}

export default Notebook;
