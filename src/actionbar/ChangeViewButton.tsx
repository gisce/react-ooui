import React, { useContext, useEffect, useState } from "react";
import { Menu, Dropdown, Row, Col, Button } from "antd";
import {
  DownOutlined,
  TableOutlined,
  FormOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { ViewType } from "@/types";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { View } from "@/views/ActionView";

type Props = {
  onChangeView: (view: View) => void;
  currentView: View;
  availableViews: View[];
  disabled?: boolean;
  formHasChanges?: boolean;
};

function getIconForView(view?: View) {
  if (!view) {
    return null;
  }

  if (view.type === "tree") {
    return <TableOutlined />;
  } else {
    // if (view === "form") {
    return <FormOutlined />;
  }
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
    } else {
      setPreviousView(
        availableViews.filter((view) => view.id !== currentView.id)[0]
      );
    }
  }, [availableViews]);

  function getMenu() {
    const menuItems = availableViews.map((view) => {
      return (
        <Menu.Item key={view.id}>
          <Row wrap={false}>
            <Col flex="none" style={{ paddingRight: 20 }}>
              <CheckOutlined
                style={{ opacity: currentView === view ? 1 : 0 }}
              />
            </Col>

            <Col flex="auto" style={{ paddingRight: 20 }}>
              {view.type.charAt(0).toUpperCase() + view.type.slice(1)}
            </Col>
            <Col flex="none">{getIconForView(view)}</Col>
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
      const selectedView = event.key;
      onChangeView(selectedView);
    });
  }

  if (!currentView) {
    return null;
  }

  return (
    <>
      <ButtonWithTooltip
        tooltip={previousView ? t("viewAs") + " " + t(previousView!.type) : ""}
        icon={getIconForView(previousView)}
        style={{ width: 50 }}
        onClick={() => {
          handleMenuClick({ key: previousView });
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
