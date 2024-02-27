import {
  Tab,
  UpdateTabPayload,
  addTab,
  changeActiveTab,
  closeTab,
  updateTab,
} from "@/redux/slices/tabSlice";
import { RootState } from "@/redux/state";
import { useDispatch, useSelector } from "react-redux";

export const useTabs = () => {
  const dispatch = useDispatch();
  const tabsState = useSelector((state: RootState) => state.tabs);
  const currentTab = tabsState.tabs.find(
    (tab: Tab) => tab.id === tabsState.activeTabKey,
  );

  return {
    tabs: tabsState.tabs,
    activeTabKey: tabsState.activeTabKey,
    addTab: (tabData: Omit<Tab, "id">) => {
      dispatch(addTab(tabData));
    },
    closeTab: (id: string) => dispatch(closeTab(id)),
    changeActiveTab: (id: string) => dispatch(changeActiveTab(id)),
    updateTab: ({ id, tabData }: UpdateTabPayload) => {
      dispatch(updateTab({ id, tabData }));
    },
    currentTab,
  };
};
