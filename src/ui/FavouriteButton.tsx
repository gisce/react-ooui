import React, { useState } from "react";
import {
  StarOutlined,
  StarFilled,
  DownOutlined,
  TableOutlined,
  FormOutlined,
} from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import { Menu, Dropdown } from "antd";

type Props = {
  isFavourite: boolean;
};

const FavouriteButton = (props: Props) => {
  // const { isFavourite } = props;

  const [isFavourite, setIsFavourite] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  function handleMenuClick() {}

  function handleVisibleChange(flag: boolean) {
    setDropdownVisible(flag);
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1">
        <FavouriteItem title="Empreses" type="tree" />
      </Menu.Item>
      <Menu.Item key="2">
        <FavouriteItem title="Nova empresa" type="form" />
      </Menu.Item>
      <Menu.Item key="3">
        <FavouriteItem title="AGRI ENERGIA, SL" type="form" />
      </Menu.Item>
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
        icon={isFavourite ? <StarFilled /> : <StarOutlined />}
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
