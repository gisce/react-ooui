import { ViewType } from "@/types";
import React from "react";
export declare type ActionViewContextType = {
    title: string;
    availableViews: ViewType[];
    currentView: ViewType;
    setCurrentView: (view: ViewType) => void;
    formIsSaving?: boolean;
    setFormIsSaving?: (value: boolean) => void;
    formHasChanges?: boolean;
    setFormHasChanges?: (value: boolean) => void;
    onFormSave?: () => void;
    formRef?: any;
    onNewClicked: () => void;
    currentId?: number;
    setCurrentId?: (id: number) => void;
    currentItemIndex?: number;
    setCurrentItemIndex?: (value?: number) => void;
    results?: any[];
    setResults?: (value: any[]) => void;
    currentModel?: string;
    removingItem?: boolean;
    setRemovingItem?: (value: boolean) => void;
    formIsLoading?: boolean;
    setFormIsLoading?: (value: boolean) => void;
};
export declare const ActionViewContext: React.Context<ActionViewContextType | null>;
declare type ActionViewProviderProps = ActionViewContextType & {
    children: React.ReactNode;
};
declare const ActionViewProvider: (props: ActionViewProviderProps) => any;
export default ActionViewProvider;
//# sourceMappingURL=ActionViewContext.d.ts.map