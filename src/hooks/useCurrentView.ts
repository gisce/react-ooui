import { useNavigation } from "@/context/RootContext";
import { View } from "@/types";
import { useCallback, useState } from "react";

export const useCurrentView = ({
  availableViews,
  tabKey,
}: {
  availableViews: View[];
  tabKey: string;
}) => {
  const { updateTab, currentTab } = useNavigation();
  const [previousView, setPreviousView] = useState<View>();

  const currentView =
    currentTab && currentTab.id === tabKey
      ? availableViews?.find(
          (view) => view.view_id === currentTab.currentView?.view_id,
        )
      : undefined;

  const setCurrentViewCallback = useCallback(
    (view: View) => {
      setCurrentView(view);
      updateTab({
        id: tabKey!,
        tab: {
          currentView: view,
        },
      });
    },
    [setCurrentView, tabKey, updateTab],
  );

  return { currentView, setCurrentViewCallback };
};
