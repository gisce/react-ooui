import React, { useContext, useEffect, useState } from "react";
import { Menu, Dropdown, Row, Col, Button } from "antd";
import {
  DownOutlined,
  TableOutlined,
  FormOutlined,
  CheckOutlined,
  AreaChartOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { GraphView, View } from "@/types";

type Props = {
  onChangeView: (view: View) => void;
  currentView: View;
  availableViews: View[];
  disabled?: boolean;
  formHasChanges?: boolean;
};

const iconsForViewTypes = {
  tree: <TableOutlined />,
  form: <FormOutlined />,
  graph: <AreaChartOutlined />,
  calendar: <CalendarOutlined />,
};

function getIconForView(view?: View) {
  if (!view) {
    return <FormOutlined />;
  }

  return (iconsForViewTypes as any)?.[view.type] || <FormOutlined />;
}

function ChangeViewButton(props: Props) {
  const {
    currentView,
    availableViews,
    onChangeView,
    disabled = false,
    formHasChanges = false,
  } = props;
  const { t, lang } = useContext(LocaleContext) as LocaleContextType;

  const [previousView, setPreviousView] = useState<View>();

  useEffect(() => {
    if (availableViews.length === 1) {
      setPreviousView(availableViews[0]);
    } else if (availableViews.length > 1) {
      setPreviousView(
        availableViews.filter((view) => view.view_id !== currentView.view_id)[0]
      );
    }
  }, [availableViews]);

  function getMenu() {
    const menuItems = availableViews.map((view, idx) => {
      return (
        <Menu.Item key={view.view_id || idx}>
          <Row wrap={false}>
            <Col flex="none" style={{ paddingRight: 20 }}>
              {getIconForView(view)}
            </Col>
            <Col flex="auto" style={{ paddingRight: 20 }}>
              {view.type === "graph"
                ? (view as GraphView).name
                : view.type.charAt(0).toUpperCase() + view.type.slice(1)}
            </Col>
            <Col flex="none">
              <CheckOutlined
                style={{
                  opacity: currentView.view_id === view.view_id ? 1 : 0,
                }}
              />
            </Col>
          </Row>
        </Menu.Item>
      );
    });

    return (
      <Menu onClick={handleMenuClick}>
        <Menu.ItemGroup title={t("viewAs")}>{menuItems}</Menu.ItemGroup>
      </Menu>
    );
  }

  function tryNavigate(callback: any) {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        lang,
        onOk: () => {
          callback();
        },
      });
      return;
    }

    callback();
  }

  function handleMenuClick(event: any) {
    tryNavigate(() => {
      setPreviousView(currentView);
      const selectedView = availableViews.find(
        (view) => view.view_id === parseInt(event.key)
      );
      onChangeView(selectedView!);
    });
  }

  return (
    <>
      <ButtonWithTooltip
        tooltip={previousView ? t("viewAs") + " " + t(previousView!.type) : ""}
        icon={getIconForView(previousView)}
        style={{ width: 50 }}
        onClick={() => {
          handleMenuClick({ key: previousView?.view_id });
        }}
        disabled={disabled || availableViews.length === 1}
      />
      <Dropdown
        overlay={getMenu()}
        disabled={disabled || availableViews.length === 1}
      >
        <Button
          style={{ width: 25 }}
          icon={<DownOutlined style={{ fontSize: "0.5em" }} />}
          onClick={(e) => e.preventDefault()}
        ></Button>
      </Dropdown>
    </>
  );
}

export default ChangeViewButton;
