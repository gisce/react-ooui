import {
  UpdateTabPayload,
  addTab,
  changeActiveTab,
  closeTab,
  updateTab,
} from "@/redux/slices/tabSlice";
import { RootState } from "@/redux/state";
import { Tab } from "@/types/tab";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useTabs = () => {
  const dispatch = useDispatch();
  const tabsState = useSelector((state: RootState) => state.tabs);
  const currentTab = useMemo(
    () => tabsState.tabs.find((tab: Tab) => tab.id === tabsState.activeTabKey),
    [tabsState.activeTabKey, tabsState.tabs],
  );

  return {
    tabs: tabsState.tabs,
    activeTabKey: tabsState.activeTabKey,
    addTab: (tabData: Partial<Tab>) => {
      dispatch(addTab(tabData));
    },
    closeTab: (id: string) => dispatch(closeTab(id)),
    changeActiveTab: (id: string) => dispatch(changeActiveTab(id)),
    updateTab: ({ id, tab }: UpdateTabPayload) => {
      dispatch(updateTab({ id, tab }));
    },
    getTab: (id?: string) => tabsState.tabs.find((tab) => tab.id === id),
    currentTab,
  };
};
