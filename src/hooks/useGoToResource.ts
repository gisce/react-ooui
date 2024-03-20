import { InitialViewData, ViewType } from "@/types";
import { useCallback, useState } from "react";
import { useHotkeys } from "react-hotkeys-hook";
import { ConnectionProvider } from "..";
import showInfo from "@/ui/InfoDialog";
import { useLocale } from "@gisce/react-formiga-components";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { LoadedTab, Tab } from "@/types/tab";

export const useGoToResource = ({
  currentTab,
  openAction,
}: {
  currentTab: LoadedTab;
  openAction: ({
    domain,
    context,
    model,
    views,
    title,
    target,
    initialView,
    action_id,
    action_type,
    res_id,
    values,
    forced_values,
  }: {
    domain: any;
    context: any;
    model: string;
    views: any[];
    title: string;
    target: string;
    initialView: InitialViewData;
    action_id: number;
    action_type: string;
    res_id?: number | boolean;
    values?: any;
    forced_values?: any;
  }) => void;
}) => {
  const [gtResourceModalVisible, setGtResourceModalVisible] =
    useState<boolean>(false);
  const [searchingForResourceId, setSearchingForResourceId] =
    useState<boolean>(false);

  const { t } = useLocale();

  const handleGoToRecordShortcut = useCallback(() => {
    if (!currentTab) {
      return;
    }

    if (currentTab.currentView?.type === "form" && !currentTab.isClosable) {
      showUnsavedChangesDialog({
        t,
        onOk: () => {
          setGtResourceModalVisible(true);
        },
      });
      return;
    }

    setGtResourceModalVisible(true);
  }, [currentTab, t]);

  useHotkeys(
    "ctrl+g,command+g",
    (event) => {
      event.preventDefault();
      handleGoToRecordShortcut();
    },
    [handleGoToRecordShortcut],
  );

  const goToResourceId = useCallback(
    async (ids: number[]) => {
      if (!currentTab) {
        return;
      }

      setSearchingForResourceId(true);

      let mode: ViewType;
      let domain: any[];
      if (ids.length === 1) {
        mode = "form";
        domain = [];
        const id = ids[0];
        let resource;

        try {
          resource = (
            await ConnectionProvider.getHandler().readObjects({
              model: currentTab.model,
              ids: [id],
              context: currentTab.context,
            })
          )?.[0];
        } catch (err) {}

        if (!resource) {
          setSearchingForResourceId(false);
          setGtResourceModalVisible(false);
          showInfo(t("idNotFound"));
          return;
        }
      } else {
        mode = "tree";
        domain = [["id", "in", ids]];
      }

      setSearchingForResourceId(false);
      setGtResourceModalVisible(false);
      const viewForm = currentTab.availableViews.find((v) => v.type === mode)!;
      openAction({
        domain,
        model: currentTab.model,
        context: currentTab.context,
        views: currentTab.availableViews,
        title: currentTab.action.title,
        target: "current",
        initialView: { id: viewForm.view_id!, type: mode },
        action_id: currentTab.action.id,
        action_type: currentTab.action.type,
        res_id: ids[0],
      });
    },
    [currentTab, openAction, t],
  );

  return {
    gtResourceModalVisible,
    setGtResourceModalVisible,
    searchingForResourceId,
    goToResourceId,
  };
};
