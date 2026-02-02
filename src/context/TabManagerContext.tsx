import { ActionInfo, Tab, View, ViewType } from "@/types";
import { ShortcutApi } from "@/ui/FavouriteButton";
import React, { useState, useContext, useMemo, useEffect } from "react";
import { useConfigContext } from "./ConfigContext";

export type TabManagerContextType = {
  openAction: (action: ActionInfo) => void;
  openRelate: ({
    relateData,
    fields,
    values,
    action_id,
    action_type,
  }: {
    relateData: any;
    fields: any;
    values: any;
    action_id: number;
    action_type: string;
  }) => void;
  openDefaultActionForModel: ({
    model,
    values,
    forced_values,
    initialViewType,
    res_id,
    domain,
    context,
  }: {
    model: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
    domain?: any;
    context?: any;
  }) => void;
  activeKey: string;
  onChangeTab: (key: string) => void;
  onRemoveTab: (key: string) => void;
  onReorderTabs: (oldIndex: number, newIndex: number) => void;
  onUpdateTabTitle?: (key: string, newTitle: string) => void;
  openShortcut: (shortcut: ShortcutApi) => void;
  tabs: Tab[];
  currentView?: View;
  setCurrentView?: (view?: View) => void;
  currentId?: number | string;
  setCurrentId?: (id?: number | string) => void;
  currentTab?: Tab;
};

export const TabManagerContext =
  React.createContext<TabManagerContextType | null>(null);

type TabManagerProviderProps = TabManagerContextType & {
  children: React.ReactNode;
};

const TabManagerProvider = (props: TabManagerProviderProps): any => {
  const {
    children,
    openAction,
    openRelate,
    openDefaultActionForModel,
    openShortcut,
    activeKey,
    onChangeTab,
    onRemoveTab,
    onReorderTabs,
    onUpdateTabTitle,
    tabs,
  } = props;

  const [currentView, setCurrentView] = useState<View>();
  const [currentId, setCurrentId] = useState<number | string>();
  const currentTab = useMemo(() => {
    return tabs.find((t) => t.key === activeKey);
  }, [tabs, activeKey]);
  const { title } = useConfigContext();

  const noTabs = useMemo(() => {
    return !(tabs?.length > 0);
  }, [tabs]);

  useEffect(() => {
    if (noTabs) {
      document.title = title;
      window.history.replaceState({}, "", "/");
    }
  }, [noTabs, title]);

  return (
    <TabManagerContext.Provider
      value={{
        openAction,
        openRelate,
        openDefaultActionForModel,
        activeKey,
        openShortcut,
        onChangeTab,
        onRemoveTab,
        onReorderTabs,
        onUpdateTabTitle,
        tabs,
        currentId,
        currentView,
        setCurrentId,
        setCurrentView,
        currentTab,
      }}
    >
      {children}
    </TabManagerContext.Provider>
  );
};

export function useTabs(): TabManagerContextType {
  const context = useContext(TabManagerContext);
  return context || ({} as TabManagerContextType);
}

export default TabManagerProvider;
