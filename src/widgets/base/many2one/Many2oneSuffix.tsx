import React, { useContext } from "react";
import { RightCircleOutlined } from "@ant-design/icons";
import { Menu, Dropdown } from "antd";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { parseContext, parseDomain } from "ooui";
import { FormView } from "@/types";

type Props = {
  id: number;
  formView?: FormView;
  targetValues: any;
};

export const Many2oneSuffix = (props: Props) => {
  const { id, formView, targetValues } = props;

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const { openAction } = tabManagerContext || {};

  if (!id || !formView?.toolbar) {
    return null;
  }

  function menu() {
    const relateItems = formView!.toolbar.relate.map((item: any) => {
      return <Menu.Item key={item.id}>... {item.name}</Menu.Item>;
    });

    return (
      <Menu onClick={handleMenuClick}>
        {[
          <Menu.Item key="action">Acció</Menu.Item>,
          <Menu.Item key="report">Informe</Menu.Item>,
          <Menu.Divider />,
          ...relateItems,
        ]}
      </Menu>
    );
  }

  function handleMenuClick(event: any) {
    if (event.key === "action") {
    } else if (event.key === "report") {
    } else {
      const relateItemClicked = formView!.toolbar.relate.find((item: any) => {
        return item.id === parseInt(event.key);
      });
      if (!relateItemClicked) {
        return;
      }

      const {
        res_model: model,
        context,
        domain,
        views,
        target,
        string: title,
      } = relateItemClicked;

      const parsedDomain = domain
        ? parseDomain({
            domainValue: domain,
            values: targetValues,
            fields: formView!.fields,
          })
        : [];

      const parsedContext = parseContext({
        context: context,
        values: targetValues,
        fields: formView!.fields,
      });

      openAction?.({
        model,
        target,
        views,
        context: parsedContext,
        domain: parsedDomain,
        title,
      });
    }
  }

  return (
    <Dropdown overlay={menu()} trigger={["click"]}>
      <RightCircleOutlined
        style={{ color: "rgba(0,0,0,.45)" }}
        onClick={(e) => e.preventDefault()}
      />
    </Dropdown>
  );
};
