import { useEffect } from "react";
import { useTabs } from "@/context/TabManagerContext";
import { useConfigContext } from "@/context/ConfigContext";
import { useUrlFromCurrentTab } from "./useUrlFromCurrentTab";

export const useAutoUpdateUrlAndTitle = () => {
  const { currentTab } = useTabs();
  const { title } = useConfigContext();

  const { shareUrl } = useUrlFromCurrentTab({ currentTab });

  useEffect(() => {
    if (shareUrl) {
      const url = new URL(shareUrl, window.location.origin);
      if (
        window.location.pathname + window.location.search !==
        url.pathname + url.search
      ) {
        window.history.replaceState({}, "", url.pathname + url.search);
      }
    }
  }, [currentTab, shareUrl]);

  useEffect(() => {
    document.title = title;
    if (currentTab?.title && currentTab.title.length > 0) {
      document.title = currentTab?.title + " - " + title;
    }
  }, [currentTab, title]);
};
