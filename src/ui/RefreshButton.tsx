import React, { useContext, useEffect, useState } from "react";
import {
  StarOutlined,
  ClockCircleOutlined,
  DownOutlined,
  TableOutlined,
  FormOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Spin, Tooltip } from "antd";
import { Menu, Dropdown } from "antd";
import showErrorDialog from "@/ui/ActionErrorDialog";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { ViewType } from "@/types";

type Props = {
  onRefresh: () => Promise<void>;
};

const RefreshButton = (props: Props) => {
  const {
    onRefresh,
  } = props;

  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const {
    openShortcut,
    tabs,
    activeKey,
    currentView,
    currentId,
    openDefaultActionForModel,
  } = tabManagerContext || {};

  useEffect(() => {
    
  }, []);


  function handleMenuClick(event: any) {
    const { key } = event;
    // const shortcut = shortcuts.find((s) => s.id === Number(key));
    // if (shortcut?.action_type === "ir.actions.wizard") {
    //   return;
    // }
    // if (shortcut) {
    //   openShortcut(shortcut);
    // }
    setDropdownVisible(false);
  }

  function handleVisibleChange(flag: boolean) {
    setDropdownVisible(flag);
  }


  const timings = [
    { value: 2, text: "2s"},
    { value: 5, text: "5s"},
    { value: 10, text: "10s"},
    { value: 30, text: "30s"},
    { value: 60, text: "1m"},
    { value: 120, text: "2m"},
    { value: 300, text: "5m"},
  ]

  const menu = (
    <Menu onClick={handleMenuClick}>
      <div style={{ width: 100, padding: 5, display: "flex" }}>
        <div style={{ paddingLeft: 15, color: "#ccc" }}>
          {"Refresh interval"}
        </div>
      </div>
      <Menu.Divider />
      <>
        {timings.map(timing => (
          <Menu.Item key={timing.value}>
            {timing.text}
          </Menu.Item>
        ))
        }
      </>
    </Menu>
  );

  async function manualRefresh() {
    await onRefresh();
  }

  return (
    <>
      <Button
        type={"default"}
        icon={ <ClockCircleOutlined /> }
        style={{ width: 80, fontSize: 12 }}
        onClick={manualRefresh} //refresh
        // variable with current refresh interval
      >10s</Button>
      <Dropdown
        overlay={menu}
        onVisibleChange={handleVisibleChange}
        visible={dropdownVisible}
      >
        <Button
          style={{ width: 25 }}
          icon={<DownOutlined style={{ fontSize: "0.5em" }} />}
          onClick={(e) => e.preventDefault()}
        ></Button>
      </Dropdown>
    </>
  );
};

export default RefreshButton;
