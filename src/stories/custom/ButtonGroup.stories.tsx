import React from "react";

import { Dropdown, Menu } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import { ButtonGroup as ButtonGroupOoui, Button as ButtonOoui } from "@gisce/ooui";
import { ButtonGroup } from "../../widgets/custom/ButtonGroup";

// import "antd/dist/antd.css";


import LocaleProvider from "../../context/LocaleContext";

export default {
  title: "Components/Widgets/Custom/ButtonGroup",
};

export const OnlyAntComponents = (): React.ReactElement => {

  const overlay = (
    <Menu>
      <Menu.Item icon={<UserOutlined/>}>Button 1</Menu.Item>
      <Menu.Item icon={<UserOutlined/>}>Button 2</Menu.Item>
    </Menu>
  )

  return (
    <LocaleProvider lang="en_US">
      <Dropdown.Button overlay={overlay} icon={<DownOutlined/>}>
        Default button
      </Dropdown.Button>
    </LocaleProvider>
  );
};

export const Default = (): React.ReactElement => {

  const btn1 = new ButtonOoui({
    name: "btn1", icon: "gtk-execute", string: "Button 1",
    buttonType: "object"
  });
  const btn2 = new ButtonOoui({name: "btn2", readonly: true, buttonType: "object", icon: "gtk-execute", string: "Button 2"});
  const btn3 = new ButtonOoui({
    name: "btn3", buttonType: "object",
    icon: "gtk-about", string: "Button 3",
    confirm: "Are you sure?"
  });
  const btn4 = new ButtonOoui({
    name: "btn4", buttonType: "object",
    icon: "gtk-dialog-warning", string: "Button 4",
    confirm: "Are you sure?",
    danger: true
  });
  const buttonGroup = new ButtonGroupOoui({name: "btnGroup", default: "btn1"});
  buttonGroup.container.rows[0].push(...[btn1, btn2, btn3, btn4]);

  return (
    <LocaleProvider lang="en_US">
      <ButtonGroup ooui={buttonGroup}/>
    </LocaleProvider>
  );
};
