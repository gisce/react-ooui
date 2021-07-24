import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

type Props = {
  onItemClick: () => void;
  items: any[];
  tooltip: string;
  icon: any;
  label?: string;
  disabled?: boolean;
};

function DropdownButton(props: Props) {
  const { icon, tooltip, items, onItemClick, label, disabled = false } = props;

  function getMenu() {
    const menuItems = items.map((item) => {
      return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
    });

    return (
      <Menu onClick={handleMenuClick}>
        <Menu.ItemGroup title={tooltip}>{menuItems}</Menu.ItemGroup>
      </Menu>
    );
  }

  function handleMenuClick(event: any) {
    console.log();
    onItemClick();
  }

  return (
    <Dropdown overlay={getMenu()} disabled={disabled || !items}>
      <Button>
        {icon} {label} <DownOutlined />
      </Button>
    </Dropdown>
  );
}

export default DropdownButton;
