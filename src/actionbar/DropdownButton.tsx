import React from "react";
import { Menu, Dropdown, Button } from "antd";
import { DownOutlined } from "@ant-design/icons";

type Props = {
  onItemClick: (event: any) => void;
  items: any[];
  tooltip: string;
  icon: any;
  label?: string;
  disabled?: boolean;
};

function DropdownButton(props: Props) {
  const {
    icon,
    tooltip,
    items = [],
    onItemClick,
    label,
    disabled = false,
  } = props;

  function getMenu() {
    const menuItems = items?.map((item, idx) => {
      if (item.name === "divider") {
        return <Menu.Divider key={"divider" + idx} />;
      }
      return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
    });

    return (
      <Menu onClick={handleMenuClick}>
        <Menu.ItemGroup title={tooltip}>{menuItems}</Menu.ItemGroup>
      </Menu>
    );
  }

  function handleMenuClick(event: any) {
    const itemClicked = items.find((item: any) => {
      return !isNaN(event.key)
        ? item.id === parseInt(event.key)
        : item.id === event.key;
    });

    onItemClick(itemClicked);
  }

  return (
    <Dropdown
      overlay={getMenu()}
      disabled={disabled || !items || items.length === 0}
    >
      <Button>
        {icon} {label} <DownOutlined />
      </Button>
    </Dropdown>
  );
}

export default DropdownButton;
