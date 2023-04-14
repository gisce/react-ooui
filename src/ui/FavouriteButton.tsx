import React, { useContext, useEffect, useState } from "react";
import {
  StarOutlined,
  StarFilled,
  DownOutlined,
  TableOutlined,
  FormOutlined,
  EditOutlined,
} from "@ant-design/icons";
import { Button, Col, Row, Spin, Tooltip } from "antd";
import { Menu, Dropdown } from "antd";
import showErrorDialog from "@/ui/ActionErrorDialog";
import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { ViewType } from "@/types";

export type ShortcutApi = {
  action_id: number;
  action_type: string;
  id?: number;
  name: string;
  res_id: number | boolean;
  res_model: string;
  view_id: number;
  view_type: string;
};

export type FavouriteOptions = {
  action_id: number;
  action_type: string;
  res_id: number | boolean;
  view_id: number;
};

type Props = {
  onRetrieveShortcuts: () => Promise<ShortcutApi[]>;
  onCheckIsFavourite: (options: FavouriteOptions) => Promise<number | boolean>;
  onAddFavourite: (options: FavouriteOptions) => Promise<number>;
  onRemoveFavourite: (shortcut_id: number) => Promise<void>;
};

const FavouriteButton = (props: Props) => {
  const {
    onRetrieveShortcuts,
    onCheckIsFavourite,
    onAddFavourite,
    onRemoveFavourite,
  } = props;

  const [isFavourite, setIsFavourite] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [shortcuts, setShortcuts] = useState<ShortcutApi[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentShortcutId, setCurrentShortcutId] = useState<number>();
  const { t } = (useContext(LocaleContext) as LocaleContextType) || {};

  const tabManagerContext = useContext(
    TabManagerContext
  ) as TabManagerContextType;
  const {
    openShortcut,
    tabs,
    activeKey,
    currentView,
    currentId,
    openDefaultActionForModel,
  } = tabManagerContext || {};

  useEffect(() => {
    getShortcuts();
  }, []);

  useEffect(() => {
    checkFavourite();
  }, [tabs, activeKey, currentView, currentId]);

  async function getShortcuts() {
    try {
      setLoading(true);
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
    if (shortcut?.action_type === "ir.actions.wizard") {
      return;
    }
    if (shortcut) {
      openShortcut(shortcut);
    }
    setDropdownVisible(false);
  }

  function handleVisibleChange(flag: boolean) {
    if (flag) {
      getShortcuts();
    }
    setDropdownVisible(flag);
  }

  async function checkFavourite() {
    if (!currentView) {
      return;
    }

    const currentTab = tabs.find((t) => t.key === activeKey);
    const { id: action_id, type: action_type } = currentTab?.action || {};

    if (!action_id || !action_type) {
      setIsFavourite(false);
      return;
    }

    const view_id = currentView.view_id!;
    let res_id: boolean | number = false;

    if (currentView.type === "form") {
      res_id = currentId ? (currentId as number) : false;
    }
    const result = await onCheckIsFavourite({
      action_id,
      action_type,
      view_id,
      res_id,
    });

    if (result !== false) {
      setCurrentShortcutId(result as number);
    }

    setIsFavourite(result !== false);
  }

  async function editFavourites() {
    setDropdownVisible(false);
    openDefaultActionForModel?.({ model: "ir.ui.view_sc" });
  }

  const menu = (
    <Menu onClick={handleMenuClick}>
      <div style={{ width: 300, padding: 5, display: "flex" }}>
        <div style={{ paddingLeft: 15, color: "#ccc" }}>
          {t("favorites").toUpperCase()}
        </div>
        <div style={{ flexGrow: 1, paddingLeft: 10 }}>
          <Tooltip title={t("edit_favorites")}>
            <EditOutlined
              style={{ color: "#1890FF", cursor: "pointer" }}
              onClick={editFavourites}
            />
          </Tooltip>
        </div>
      </div>
      <Menu.Divider />
      {loading ? (
        <Spin style={{ padding: "1rem" }} />
      ) : shortcuts.length > 0 ? (
        <>
          {shortcuts.map((shortcut) => (
            <Menu.Item key={shortcut.id}>
              <FavouriteItem
                title={shortcut.name}
                type={shortcut.view_type as ViewType}
              />
            </Menu.Item>
          ))}
        </>
      ) : (
        <div style={{ width: 300, padding: 5, paddingLeft: 15 }}>
          {t("no_favorites")}
        </div>
      )}
    </Menu>
  );

  function FavouriteItem({ title, type }: { title: string; type: ViewType }) {
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

  async function toggleFavourite() {
    if (isFavourite && currentShortcutId) {
      await onRemoveFavourite(currentShortcutId);
    } else {
      if (!currentView) {
        return;
      }

      const currentTab = tabs.find((t) => t.key === activeKey);
      const { id: action_id, type: action_type } = currentTab?.action || {};
      const view_id = currentView.view_id!;
      let res_id: boolean | number = false;

      if (!action_id || !action_type) {
        setIsFavourite(false);
        return;
      }

      if (currentView.type === "form") {
        res_id = currentId ? (currentId as number) : false;
      }

      await onAddFavourite({
        action_id,
        action_type,
        view_id,
        res_id,
      });
    }

    await getShortcuts();
    setIsFavourite(!isFavourite);
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
        onClick={toggleFavourite}
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
