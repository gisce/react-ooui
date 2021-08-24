import React from "react";

export type TabManagerContextType = {
  openAction?: ({
    domain,
    context,
    model,
    views,
    title,
    target,
  }: {
    domain: any;
    context: any;
    model: string;
    views: Array<any>;
    title: string;
    target: string;
  }) => void;
};

export const TabManagerContext = React.createContext<TabManagerContextType | null>(
  null
);

type TabManagerProviderProps = TabManagerContextType & {
  children: React.ReactNode;
};

const TabManagerProvider = (props: TabManagerProviderProps): any => {
  const { children, openAction } = props;

  return (
    <TabManagerContext.Provider
      value={{
        openAction,
      }}
    >
      {children}
    </TabManagerContext.Provider>
  );
};

export default TabManagerProvider;
