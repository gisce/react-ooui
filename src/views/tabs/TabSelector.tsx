import {
  Tab as TabData,
  changeActiveTab,
  closeTab,
} from "@/redux/slices/tabSlice";
import { useDispatch, useSelector } from "react-redux";
import Tab from "./Tab";
import { RootState } from "@/redux/state";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { useLocale } from "@gisce/react-formiga-components";

function TabSelector() {
  const { tabs, activeTabKey } = useSelector((state: RootState) => state.tabs);
  const dispatch = useDispatch();
  const { t } = useLocale();

  return (
    <>
      {tabs.map((tab: TabData) => (
        <Tab
          key={tab.id}
          tabKey={tab.id}
          label={tab.action.title}
          onClose={() => {
            const close = () => {
              dispatch(closeTab(tab.id));
            };
            if (!tab.isClosable) {
              showUnsavedChangesDialog({
                t,
                onOk: () => {
                  close();
                },
              });
              return;
            }
            close();
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
