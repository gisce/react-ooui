import { Tab as TabData } from "@/redux/slices/tabSlice";
import { useSelector } from "react-redux";
import Tab from "./Tab";
import { RootState } from "@/redux/state";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { useLocale } from "@gisce/react-formiga-components";
import { useTabs } from "@/hooks/useTabs";

function TabSelector() {
  const { tabs, activeTabKey } = useSelector((state: RootState) => state.tabs);
  const { t } = useLocale();
  const { closeTab, changeActiveTab } = useTabs();

  return (
    <>
      {tabs.map((tab: TabData) => (
        <Tab
          key={tab.id}
          tabKey={tab.id}
          label={tab.action.title}
          onClose={() => {
            const close = () => {
              closeTab(tab.id);
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
            changeActiveTab(tab.id);
          }}
        />
      ))}
    </>
  );
}

export default TabSelector;
