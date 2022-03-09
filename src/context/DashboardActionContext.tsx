import React, { useRef, useState } from "react";

export type DashboardActionContextType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  dashboardRef: any;
};

export const DashboardActionContext = React.createContext<DashboardActionContextType | null>(
  null
);

type DashboardActionProviderProps = {
  children: React.ReactNode;
  dashboardRef: any;
};

const DashboardActionProvider = (props: DashboardActionProviderProps): any => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { children, dashboardRef } = props;

  return (
    <DashboardActionContext.Provider
      value={{
        isLoading,
        setIsLoading,
        dashboardRef,
      }}
    >
      {children}
    </DashboardActionContext.Provider>
  );
};

export default DashboardActionProvider;
