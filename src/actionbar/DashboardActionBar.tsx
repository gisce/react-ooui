import { useContext } from "react";
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
import { useLocale } from "@gisce/react-formiga-components";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { ShareUrlButton } from "./ShareUrlButton";
import { ActionBarSeparator } from "./FormActionBar";

function DashboardActionBar() {
  const { isLoading, dashboardRef, moveItemsEnabled, setMoveItemsEnabled } =
    useContext(DashboardActionContext) as DashboardActionContextType;
  const { t } = useLocale();

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
      <ActionBarSeparator />
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
      <ActionBarSeparator />
      <ShareUrlButton />
    </Space>
  );
}

export default DashboardActionBar;
