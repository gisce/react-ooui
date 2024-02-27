import { RootState } from "@/redux/state";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const TabContent: React.FC = () => {
  const { tabs, activeTab } = useSelector((state: RootState) => state.tabs);
  const [tabComponents, setTabComponents] = useState<React.ReactElement[]>([]);

  useEffect(() => {
    // remove closed tab from tabComponents
    setTabComponents((prevTabComponents) =>
      prevTabComponents.filter((tabComponent) =>
        tabs.some((tab) => tab.id === tabComponent.key),
      ),
    );

    // add new tab to tabComponents
    const newTabs = tabs.slice(tabComponents.length);
    if (newTabs.length > 0) {
      setTabComponents((prevTabComponents) => [
        ...prevTabComponents,
        ...newTabs.map((tab) => (
          <div
            key={tab.id}
            style={{ display: tab.id === activeTab ? "block" : "none" }}
          >
            {tab.content}
          </div>
        )),
      ]);
    }
  }, [tabs, activeTab, tabComponents.length]);

  return (
    <div>
      {tabComponents.map((tabComponent, i) =>
        React.cloneElement(tabComponent, {
          style: { display: tabs[i]?.id === activeTab ? "block" : "none" },
        }),
      )}
    </div>
  );
};
export default React.memo(TabContent, () => true);
