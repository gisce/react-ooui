import { ShortcutApi } from "@/ui/FavouriteButton";
import { View } from "@/views/ActionView";
import React, { useState } from "react";

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
    views: Array<any>;
    title: string;
    target: string;
    initialView: View;
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
  }: {
    model: string;
    values?: any;
    forced_values?: any;
  }) => void;
  activeKey: string;
  onChangeTab: (key: string) => void;
  onRemoveTab: (key: string) => void;
  openShortcut: (shortcut: ShortcutApi) => void;
  tabs: any[];
  currentView?: View;
  setCurrentView?: (view?: View) => void;
  currentId?: number;
  setCurrentId?: (id?: number) => void;
};

export const TabManagerContext = React.createContext<TabManagerContextType | null>(
  null
);

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
    tabs,
  } = props;

  const [currentView, setCurrentView] = useState<View>();
  const [currentId, setCurrentId] = useState<number>();

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
