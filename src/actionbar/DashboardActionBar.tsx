import React, { useContext } from "react";
import {
  DashboardActionContext,
  DashboardActionContextType,
} from "@/context/DashboardActionContext";
import { Space } from "antd";
import ActionButton from "./ActionButton";
import {
  ReloadOutlined,
  SettingOutlined,
  BorderOuterOutlined,
} from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

function DashboardActionBar() {
  const { isLoading, dashboardRef, moveItemsEnabled, setMoveItemsEnabled } =
    useContext(DashboardActionContext) as DashboardActionContextType;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  return (
    <Space wrap={true}>
      <ActionButton
        icon={
          <BorderOuterOutlined
            style={{ color: moveItemsEnabled ? "white" : undefined }}
          />
        }
        type={moveItemsEnabled ? "primary" : "default"}
        tooltip={t("moveDashboard")}
        disabled={isLoading}
        loading={false}
        onClick={() => {
          setMoveItemsEnabled(!moveItemsEnabled);
        }}
      />
      {separator()}
      <ActionButton
        icon={<SettingOutlined />}
        tooltip={t("configDashboard")}
        disabled={isLoading}
        loading={false}
        onClick={() => {
          dashboardRef?.current.configDashboard();
        }}
      />
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={isLoading}
        loading={false}
        onClick={() => {
          dashboardRef?.current.refresh();
        }}
      />
    </Space>
  );
}

function separator() {
  return <div className="inline-block w-2" />;
}

export default DashboardActionBar;
