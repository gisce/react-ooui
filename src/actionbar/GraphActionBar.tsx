import React, { useContext } from "react";
import { Space } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import ActionButton from "./ActionButton";
import { useLocale } from "@gisce/react-formiga-components";
import ButtonWithBadge from "./ButtonWithBadge";
import { ReloadOutlined, FilterOutlined } from "@ant-design/icons";
import { View } from "@/types";

function GraphActionBar({ refreshGraph }: { refreshGraph: () => void }) {
  const { t } = useLocale();
  const {
    availableViews,
    currentView,
    setCurrentView,
    searchParams,
    searchVisible,
    setSearchVisible,
    graphIsLoading,
    previousView,
    setPreviousView,
  } = useContext(ActionViewContext) as ActionViewContextType;

  return (
    <Space wrap={true}>
      <ButtonWithBadge
        icon={
          <FilterOutlined
            style={{ color: searchVisible ? "white" : undefined }}
          />
        }
        tooltip={t("advanced_search")}
        type={searchVisible ? "primary" : "default"}
        onClick={() => {
          setSearchVisible?.(!searchVisible);
        }}
        disabled={graphIsLoading}
        badgeNumber={searchParams?.length}
      />
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={graphIsLoading}
        loading={false}
        onClick={() => {
          refreshGraph();
        }}
      />
      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={(newView: View) => {
          setPreviousView?.(currentView);
          setCurrentView?.(newView);
        }}
        disabled={false}
        previousView={previousView}
      />
    </Space>
  );
}

export default GraphActionBar;
