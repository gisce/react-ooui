import { memo, useContext } from "react";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { Space, Spin } from "antd";
import ChangeViewButton from "./ChangeViewButton";
import ActionButton from "./ActionButton";
import { ShareUrlButton } from "./ShareUrlButton";
import { ActionBarSeparator } from "./ActionBarSeparator";
import { ReloadOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { View } from "@/types";

type KanbanActionBarProps = {
  onRefresh?: () => void;
  isLoading?: boolean;
};

const KanbanActionBarComponent = (props: KanbanActionBarProps) => {
  const { onRefresh, isLoading = false } = props;
  const { t } = useLocale();

  const {
    availableViews,
    currentView,
    setCurrentView,
    searchParams,
    previousView,
    setPreviousView,
  } = useContext(ActionViewContext) as ActionViewContextType;

  return (
    <Space wrap={true}>
      {isLoading && (
        <>
          <Spin />
          <ActionBarSeparator />
          <ActionBarSeparator />
        </>
      )}
      <ActionButton
        icon={<ReloadOutlined />}
        tooltip={t("refresh")}
        disabled={isLoading}
        onClick={onRefresh}
      />

      <ChangeViewButton
        currentView={currentView}
        availableViews={availableViews}
        onChangeView={(newView: View) => {
          setPreviousView?.(currentView);
          setCurrentView?.(newView);
        }}
        previousView={previousView}
        disabled={isLoading}
      />

      <ActionBarSeparator />

      <ShareUrlButton searchParams={searchParams} />
    </Space>
  );
};

const KanbanActionBar = memo(KanbanActionBarComponent);
export default KanbanActionBar;
