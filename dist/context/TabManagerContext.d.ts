import { ShortcutApi } from "@/ui/FavouriteButton";
import { View } from "@/views/ActionView";
import React from "react";
export declare type TabManagerContextType = {
    openAction: ({ domain, context, model, views, title, target, initialView, action_id, action_type, res_id, values, forced_values, }: {
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
    openRelate: ({ relateData, fields, values, action_id, action_type, }: {
        relateData: any;
        fields: any;
        values: any;
        action_id: number;
        action_type: string;
    }) => void;
    openDefaultActionForModel: ({ model, values, forced_values, initialViewType, }: {
        model: string;
        values?: any;
        forced_values?: any;
        initialViewType?: "form" | "tree";
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
export declare const TabManagerContext: React.Context<TabManagerContextType | null>;
declare type TabManagerProviderProps = TabManagerContextType & {
    children: React.ReactNode;
};
declare const TabManagerProvider: (props: TabManagerProviderProps) => any;
export default TabManagerProvider;
//# sourceMappingURL=TabManagerContext.d.ts.map