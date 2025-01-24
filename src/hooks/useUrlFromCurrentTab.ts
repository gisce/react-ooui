import { useTabs } from "@/context/TabManagerContext";
import { useActionViewContext } from "@/context/ActionViewContext";
import { createShareOpenUrl } from "@/helpers/shareUrlHelper";
import { ActionInfo, Tab } from "@/types";

interface UseUrlFromCurrentTabResult {
  shareUrl: string | null;
  canShare: boolean;
}

export function useUrlFromCurrentTab({
  currentTab: currentTabProps,
}: {
  currentTab?: Tab;
}): UseUrlFromCurrentTabResult {
  const { currentView, searchParams, currentId, formRef } =
    useActionViewContext();
  const { currentTab: currentTabContext } = useTabs();

  const currentTab = currentTabProps || currentTabContext;

  if (!currentTab?.action) {
    return { shareUrl: null, canShare: false };
  }

  const initialView = {
    id: currentView.view_id,
    type: currentView.type,
  };

  const { action_id } = currentTab.action;
  const finalActionData: ActionInfo = {
    ...currentTab.action,
    ...(initialView && { initialView }),
    ...(searchParams && { searchParams }),
    ...(currentId && { res_id: currentId }),
    actionRawData: {
      ...currentTab.action.actionRawData,
      values: {
        ...currentTab.action.values,
        ...(formRef.current?.getPlainValues() || {}),
      },
    },
  };

  const shareUrl = createShareOpenUrl(finalActionData);
  const { type } = initialView;

  let canShare = !!action_id;
  if (type === "form") {
    canShare = !!action_id && !!currentId;
  }

  return { shareUrl, canShare };
}
