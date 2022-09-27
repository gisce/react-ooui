import React, { useContext } from "react";
import { Space } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import { ReloadOutlined } from "@ant-design/icons";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import ActionButton from "./ActionButton";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

function GraphActionBar() {
  const { availableViews, currentView, setCurrentView } = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  return (
    <Space wrap={true}>
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        // disabled={isLoading}
        loading={false}
        onClick={() => {
          // dashboardRef?.current.refresh();
        }}
      />
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={setCurrentView}
        disabled={false}
      />
    </Space>
  );
}

export default GraphActionBar;
