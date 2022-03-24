import { ShortcutApi } from "@/ui/FavouriteButton";
import React from "react";
export declare type DashboardActionContextType = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    dashboardRef: any;
    openAction: (action?: ShortcutApi) => void;
};
export declare const DashboardActionContext: React.Context<DashboardActionContextType | null>;
declare type DashboardActionProviderProps = {
    children: React.ReactNode;
    dashboardRef: any;
    openAction: (action?: ShortcutApi) => void;
};
declare const DashboardActionProvider: (props: DashboardActionProviderProps) => any;
export default DashboardActionProvider;
//# sourceMappingURL=DashboardActionContext.d.ts.map