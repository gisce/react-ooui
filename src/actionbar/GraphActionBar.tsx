import React, { useContext } from "react";
import { Space } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";

function GraphActionBar() {
  const { availableViews, currentView, setCurrentView } = useContext(
    ActionViewContext
  ) as ActionViewContextType;

  return (
    <Space wrap={true}>
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
