import React, { useContext, useEffect, useState } from "react";
import {
  StarOutlined,
  StarFilled,
  DownOutlined,
  TableOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Spin } from "antd";
import { Menu, Dropdown } from "antd";
import showErrorDialog from "@/ui/ActionErrorDialog";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";

export type Shortcut = {
  id: number;
  name: string;
  resource: string;
  res_id: number;
  view_id?: number;
  type: "tree" | "form";
};

type Props = {
  // isFavourite: boolean;
  onRetrieveShortcuts: () => Promise<Shortcut[]>;
};

const FavouriteButton = (props: Props) => {
  const { onRetrieveShortcuts } = props;

  const [isFavourite, setIsFavourite] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shortcuts, setShortcuts] = useState<Shortcut[]>([]);
  const [loading, setLoading] = useState(true);
  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openShortcut } = tabManagerContext || {};

  useEffect(() => {
    getShortcuts();
  }, []);

  async function getShortcuts() {
    try {
      const shortcuts = await onRetrieveShortcuts();
      setShortcuts(shortcuts);
    } catch (e) {
      showErrorDialog(e);
    } finally {
      setLoading(false);
    }
  }

  function handleMenuClick(event: any) {
    const { key } = event;
    const shortcut = shortcuts.find((s) => s.id === Number(key));
    if (shortcut) {
      openShortcut(shortcut);
    }
  }

  function handleVisibleChange(flag: boolean) {
    setDropdownVisible(flag);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <div style={{ width: 300, padding: 5, paddingLeft: 15, color: "#ccc" }}>
        {"Els meus favorits".toUpperCase()}
      </div>
      <Menu.Divider />
      {loading ? (
        <Spin />
      ) : (
        <>
          {shortcuts.map((shortcut) => (
            <Menu.Item key={shortcut.id}>
              <FavouriteItem title={shortcut.name} type={shortcut.type} />
            </Menu.Item>
          ))}
        </>
      )}
    </Menu>
  );

  function FavouriteItem({
    title,
    type,
  }: {
    title: string;
    type: "tree" | "form";
  }) {
    const icon = type === "tree" ? <TableOutlined /> : <FormOutlined />;
    return (
      <Row wrap={false}>
        <Col flex="none" style={{ paddingRight: 20 }}>
          {icon}
        </Col>
        <Col flex="auto">{title}</Col>
      </Row>
    );
  }
  return (
    <>
      <Button
        type={isFavourite ? "primary" : "default"}
        icon={
          isFavourite ? (
            <StarFilled style={{ color: "white" }} />
          ) : (
            <StarOutlined />
          )
        }
        style={{ width: 50 }}
        onClick={() => setIsFavourite(!isFavourite)}
      ></Button>
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

export default FavouriteButton;
