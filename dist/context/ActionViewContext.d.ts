import { View } from "@/views/ActionView";
import React from "react";
export declare type ActionViewContextType = {
    title: string;
    availableViews: View[];
    currentView: View;
    setCurrentView: (view: View) => void;
    formIsSaving?: boolean;
    setFormIsSaving?: (value: boolean) => void;
    formHasChanges?: boolean;
    setFormHasChanges?: (value: boolean) => void;
    onFormSave?: () => void;
    formRef?: any;
    searchTreeRef?: any;
    onNewClicked: () => void;
    currentId?: number;
    setCurrentId?: (id?: number) => void;
    currentItemIndex?: number;
    setCurrentItemIndex?: (value?: number) => void;
    results?: any[];
    setResults?: (value: any[]) => void;
    currentModel?: string;
    removingItem?: boolean;
    setRemovingItem?: (value: boolean) => void;
    formIsLoading?: boolean;
    setFormIsLoading?: (value: boolean) => void;
    toolbar?: any;
    setToolbar?: (value: any) => void;
    attachments?: any;
    setAttachments?: (value: any) => void;
    selectedRowItems?: any[];
    setSelectedRowItems?: (value: any[]) => void;
    duplicatingItem?: boolean;
    setDuplicatingItem?: (value: boolean) => void;
    searchParams?: any[];
    setSearchParams?: (value: any[]) => void;
    searchVisible?: boolean;
    setSearchVisible?: (value: boolean) => void;
    sorter: any;
    setSorter: (sorter: any) => void;
};
export declare const ActionViewContext: React.Context<ActionViewContextType | null>;
declare type ActionViewProviderProps = ActionViewContextType & {
    children: React.ReactNode;
};
declare const ActionViewProvider: (props: ActionViewProviderProps) => any;
export default ActionViewProvider;
//# sourceMappingURL=ActionViewContext.d.ts.map