import React, { useState } from "react";
import { Menu, Dropdown, Button, Input } from "antd";
import { DownOutlined } from "@ant-design/icons";

const { Search } = Input;

type Props = {
  onItemClick: (event: any) => void;
  items: any[];
  tooltip: string;
  icon: any;
  label?: string;
  disabled?: boolean;
  searchable?: true | false | 'auto';
};

function DropdownButton(props: Props) {
  const {
    icon,
    tooltip,
    items = [],
    onItemClick,
    label,
    disabled = false,
    searchable = 'auto',
  } = props;
  const [ filteredItems, setFilteredItems ] = useState([...items]);

  const onSearch = (value:string) => {
    if (!value) {
      setFilteredItems([...items]);
    } else {
      setFilteredItems(items.filter((item) => item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1))
    }
  }

  function getMenu() {
    const menuItems = filteredItems?.map((item, idx) => {
      if (item.name === "divider") {
        return <Menu.Divider key={"divider" + idx} />;
      }
      return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
    });

    return (
      <Menu onClick={handleMenuClick}>
        {((searchable === 'auto' && items.length > 3) || searchable === true)
          && <Search onChange={(e) => onSearch(e.target.value)} onSearch={onSearch} allowClear />}
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
