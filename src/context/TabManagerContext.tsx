import { InitialViewData, View, ViewType } from "@/types";
import { ShortcutApi } from "@/ui/FavouriteButton";
import React, { useState } from "react";
import { useTabs } from "..";

export type TabManagerContextType = {
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
  }: {
    model: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
    domain?: any;
  }) => void;
  activeTabKey: string;
  onChangeTab: (key: string) => void;
  onRemoveTab: (key: string) => void;
  openShortcut: (shortcut: ShortcutApi) => void;
  tabs: any[];
  currentView?: View;
  setCurrentView?: (view?: View) => void;
  currentId?: number;
  setCurrentId?: (id?: number) => void;
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
    onChangeTab,
    onRemoveTab,
    // tabs,
  } = props;

  const [currentView, setCurrentView] = useState<View>();
  const [currentId, setCurrentId] = useState<number>();

  const { tabs, activeTabKey, addTab, closeTab, changeActiveTab, updateTab } =
    useTabs();

  return (
    <TabManagerContext.Provider
      value={{
        openAction,
        openRelate,
        openDefaultActionForModel,
        activeTabKey: activeTabKey!,
        openShortcut,
        onChangeTab,
        onRemoveTab,
        tabs,
        currentId,
        currentView,
        setCurrentId,
        setCurrentView,
      }}
    >
      {children}
    </TabManagerContext.Provider>
  );
};

export default TabManagerProvider;
