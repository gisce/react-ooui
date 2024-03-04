import {
  Tab as TabData,
  changeActiveTab,
  closeTab,
} from "@/redux/slices/tabSlice";
import { useDispatch, useSelector } from "react-redux";
import Tab from "./Tab";
import { RootState } from "@/redux/state";

function TabSelector() {
  const { tabs, activeTabKey } = useSelector((state: RootState) => state.tabs);
  const dispatch = useDispatch();

  return (
    <>
      {tabs.map((tab: TabData) => (
        <Tab
          key={tab.id}
          tabKey={tab.id}
          label={tab.action.title}
          onClose={() => {
            dispatch(closeTab(tab.id));
          }}
          isActive={tab.id === activeTabKey}
          onSelected={() => {
            dispatch(changeActiveTab(tab.id));
          }}
        />
      ))}
    </>
  );
}

export default TabSelector;
