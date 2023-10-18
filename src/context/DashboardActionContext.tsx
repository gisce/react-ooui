import { ShortcutApi } from "@/ui/FavouriteButton";
import React, { useState } from "react";

export type DashboardActionContextType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  dashboardRef: any;
  openAction: (action?: ShortcutApi) => void;
  moveItemsEnabled: boolean;
  setMoveItemsEnabled: (value: boolean) => void;
};

export const DashboardActionContext =
  React.createContext<DashboardActionContextType | null>(null);

type DashboardActionProviderProps = {
  children: React.ReactNode;
  dashboardRef: any;
  openAction: (action?: ShortcutApi) => void;
};

const DashboardActionProvider = (props: DashboardActionProviderProps): any => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [moveItemsEnabled, setMoveItemsEnabled] = useState<boolean>(false);

  const { children, dashboardRef, openAction } = props;

  return (
    <DashboardActionContext.Provider
      value={{
        isLoading,
        setIsLoading,
        dashboardRef,
        openAction,
        moveItemsEnabled,
        setMoveItemsEnabled,
      }}
    >
      {children}
    </DashboardActionContext.Provider>
  );
};

export default DashboardActionProvider;
