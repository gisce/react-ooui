import { ViewType } from "@/types";
import { Shortcut } from "@/ui/FavouriteButton";
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
    openSpecificModelTab: ({ model, values, forcedValues, title, initialViewType, }: {
        model: string;
        values?: any;
        title: string;
        forcedValues?: any;
        initialViewType?: ViewType;
    }) => void;
    activeKey: string;
    onChangeTab: (key: string) => void;
    onRemoveTab: (key: string) => void;
    openShortcut: (shortcut: Shortcut) => void;
    tabs: any[];
};
export declare const TabManagerContext: React.Context<TabManagerContextType | null>;
declare type TabManagerProviderProps = TabManagerContextType & {
    children: React.ReactNode;
};
declare const TabManagerProvider: (props: TabManagerProviderProps) => any;
export default TabManagerProvider;
//# sourceMappingURL=TabManagerContext.d.ts.map