import React, { useContext } from "react";
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

type Props = {
  onChangeView: (view: ViewType) => void;
  currentView: ViewType;
  availableViews: ViewType[];
  disabled?: boolean;
  formHasChanges?: boolean;
};

function getIconForView(view: ViewType) {
  if (view === "tree") {
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

  function getMenu() {
    const menuItems = availableViews.map((view) => {
      return (
        <Menu.Item key={view}>
          <Row wrap={false}>
            <Col flex="none" style={{ paddingRight: 20 }}>
              <CheckOutlined
                style={{ opacity: currentView === view ? 1 : 0 }}
              />
            </Col>

            <Col flex="auto" style={{ paddingRight: 20 }}>
              {view.charAt(0).toUpperCase() + view.slice(1)}
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
      const selectedView = event.key;
      onChangeView(selectedView);
    });
  }

  return (
    <Dropdown overlay={getMenu()} disabled={disabled}>
      <Button>
        {getIconForView(currentView)} <DownOutlined />
      </Button>
    </Dropdown>
  );
}

export default ChangeViewButton;
