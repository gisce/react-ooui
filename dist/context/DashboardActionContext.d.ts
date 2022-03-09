import React from "react";
export declare type DashboardActionContextType = {
    isLoading: boolean;
    setIsLoading: (value: boolean) => void;
    dashboardRef: any;
};
export declare const DashboardActionContext: React.Context<DashboardActionContextType | null>;
declare type DashboardActionProviderProps = {
    children: React.ReactNode;
    dashboardRef: any;
};
declare const DashboardActionProvider: (props: DashboardActionProviderProps) => any;
export default DashboardActionProvider;
//# sourceMappingURL=DashboardActionContext.d.ts.map