import { memo, useState, useMemo, useCallback } from "react";
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

const DropdownButton: React.FC<Props> = memo(
  ({
    icon,
    tooltip,
    items = [],
    onItemClick,
    label,
    disabled = false,
    searchable = "auto",
  }: Props) => {
    const [searchValue, setSearchValue] = useState<string>();

    const mustShowSearch =
      searchable === true || (searchable === "auto" && items.length > 3);

    const onSearch = useCallback((value?: string) => {
      const sanitizedValue = value?.trim();
      if (sanitizedValue && sanitizedValue.length > 0) {
        setSearchValue(sanitizedValue);
        return;
      }
      setSearchValue(undefined);
    }, []);

    const filteredItems = useMemo(() => {
      if (searchValue) {
        return items
          .map((item) => {
            if (item.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return { ...item };
            }
            return { ...item, name: "no_match" };
          })
          .sort((a, b) => {
            // all the items with name "no_match" have to be in the end of the array
            if (a.name === "no_match") return 1;
            if (b.name === "no_match") return -1;
            return 0;
          });
      }
      return items;
    }, [items, searchValue]);

    const handleMenuClick = useCallback(
      (event: any) => {
        const itemClicked = filteredItems.find(
          (item: any) => item.id.toString() === event.key,
        );
        if (itemClicked && itemClicked.name !== "no_match")
          onItemClick(itemClicked);
      },
      [onItemClick, filteredItems],
    );

    const getMenu = useMemo(() => {
      const menuItems = filteredItems.map((item, idx) => {
        if (item.name === "divider")
          return <Menu.Divider key={"divider" + idx} />;
        if (item.name === "no_match")
          return (
            <Menu.Item
              key={"no_match" + idx}
              style={{ cursor: "auto", pointerEvents: "none", opacity: 0 }}
            >
              {item.name}
            </Menu.Item>
          );
        return <Menu.Item key={item.id}>{item.name}</Menu.Item>;
      });

      return (
        <Menu onClick={handleMenuClick}>
          {mustShowSearch && (
            <div style={{ padding: 5 }}>
              <Search
                onChange={(e) => onSearch(e.target.value)}
                onSearch={onSearch}
                allowClear
              />
            </div>
          )}
          <div
            style={{
              width: 300,
              maxHeight: 300,
              overflowY: "auto",
            }}
          >
            <Menu.ItemGroup title={tooltip}>{menuItems}</Menu.ItemGroup>
          </div>
        </Menu>
      );
    }, [filteredItems, handleMenuClick, mustShowSearch, onSearch, tooltip]);

    return (
      <>
        <Dropdown overlay={getMenu} disabled={disabled || items.length === 0}>
          <Button>
            {icon} {label} <DownOutlined />
          </Button>
        </Dropdown>
      </>
    );
  },
);
DropdownButton.displayName = "DropdownButton";

export default DropdownButton;
