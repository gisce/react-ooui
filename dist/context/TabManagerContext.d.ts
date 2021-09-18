import { ViewType } from "@/types";
import React from "react";
export declare type TabManagerContextType = {
    openAction: ({ domain, context, model, views, title, target, initialViewType, }: {
        domain: any;
        context: any;
        model: string;
        views: Array<any>;
        title: string;
        target: string;
        initialViewType?: ViewType;
    }) => void;
    openRelate: ({ relateData, fields, values, }: {
        relateData: any;
        fields: any;
        values: any;
    }) => void;
};
export declare const TabManagerContext: React.Context<TabManagerContextType | null>;
declare type TabManagerProviderProps = TabManagerContextType & {
    children: React.ReactNode;
};
declare const TabManagerProvider: (props: TabManagerProviderProps) => any;
export default TabManagerProvider;
//# sourceMappingURL=TabManagerContext.d.ts.map