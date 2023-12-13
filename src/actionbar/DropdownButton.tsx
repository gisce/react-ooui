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
  searchable?: true | false | "auto";
};

function DropdownButton(props: Props) {
  const {
    icon,
    tooltip,
    items = [],
    onItemClick,
    label,
    disabled = false,
    searchable = "auto",
  } = props;
  const [searchValue, setSearchValue] = useState<string>();

  const onSearch = (value?: string) => {
    if (!value) {
      setSearchValue(undefined);
      return;
    }

    const sanitizedValue = value.trim();

    if (sanitizedValue.length === 0) {
      setSearchValue(undefined);
      return;
    }

    setSearchValue(sanitizedValue);
  };

  function getMenu() {
    let itemsData = [];
    if (searchValue) {
      itemsData = items.filter((item) => {
        return item.name.toLowerCase().includes(searchValue.toLowerCase());
      });
    } else {
      itemsData = items;
    }

    const menuItems = itemsData.map((item, idx) => {
      if (item.name === "divider") {
        return <Menu.Divider key={"divider" + idx} />;
      }
      return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
    });

    const mustShowSearch =
      searchable === true || (searchable === "auto" && items.length > 3);

    return (
      <Menu onClick={handleMenuClick}>
        <div>
          {mustShowSearch && (
            <Search
              onChange={(e: any) => onSearch(e.target.value)}
              onSearch={onSearch}
              allowClear
              style={{ padding: 5 }}
            />
          )}
        </div>
        <div style={{maxHeight: 300, overflowY: 'auto'}}>
          <Menu.ItemGroup title={tooltip}>{menuItems}</Menu.ItemGroup>
        </div>
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
