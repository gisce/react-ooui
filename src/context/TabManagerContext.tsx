import { ViewType } from "@/types";
import React from "react";

export type TabManagerContextType = {
  openAction: ({
    domain,
    context,
    model,
    views,
    title,
    target,
    initialViewType,
  }: {
    domain: any;
    context: any;
    model: string;
    views: Array<any>;
    title: string;
    target: string;
    initialViewType?: ViewType;
  }) => void;
  openRelate: ({
    relateData,
    fields,
    values,
  }: {
    relateData: any;
    fields: any;
    values: any;
  }) => void;
  openSpecificModelTab: ({
    model,
    values,
    forcedValues,
    title,
    initialViewType,
  }: {
    model: string;
    values?: any;
    title: string;
    forcedValues?: any;
    initialViewType?: ViewType;
  }) => void;
};

export const TabManagerContext = React.createContext<TabManagerContextType | null>(
  null
);

type TabManagerProviderProps = TabManagerContextType & {
  children: React.ReactNode;
};

const TabManagerProvider = (props: TabManagerProviderProps): any => {
  const { children, openAction, openRelate, openSpecificModelTab } = props;

  return (
    <TabManagerContext.Provider
      value={{
        openAction,
        openRelate,
        openSpecificModelTab,
      }}
    >
      {children}
    </TabManagerContext.Provider>
  );
};

export default TabManagerProvider;
