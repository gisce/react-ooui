import { View } from "@/types";
import React, { useEffect, useState } from "react";

export type ActionViewContextType = {
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
  treeIsLoading?: boolean;
  setTreeIsLoading?: (value: boolean) => void;
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
  totalItems: number;
  setTotalItems: (totalItems: number) => void;
  searchTreeNameSearch?: string;
  setSearchTreeNameSearch?: (searchString?: string) => void;
};

export const ActionViewContext =
  React.createContext<ActionViewContextType | null>(null);

type ActionViewProviderProps = ActionViewContextType & {
  children: React.ReactNode;
};

const ActionViewProvider = (props: ActionViewProviderProps): any => {
  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [removingItem, setRemovingItem] = useState<boolean>(false);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);
  const [treeIsLoading, setTreeIsLoading] = useState<boolean>(true);
  const [attachments, setAttachments] = useState<any>([]);
  const [duplicatingItem, setDuplicatingItem] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useState<any[]>([]);
  const [searchVisible, setSearchVisible] = useState<boolean>(false);

  const {
    children,
    currentView,
    title,
    setCurrentView,
    availableViews,
    formRef,
    searchTreeRef,
    onNewClicked,
    currentId,
    setCurrentId,
    setResults,
    results,
    currentItemIndex,
    setCurrentItemIndex,
    currentModel,
    toolbar,
    setToolbar,
    sorter,
    setSorter,
    totalItems,
    setTotalItems,
    setSelectedRowItems,
    selectedRowItems,
    searchTreeNameSearch,
    setSearchTreeNameSearch,
  } = props;

  useEffect(() => {
    if (results && results.length > 0 && !currentItemIndex) {
      setCurrentItemIndex?.(0);
      setCurrentId?.(results[0].id);
    }
  }, [results]);

  const callOnFormSave = () => {
    (formRef.current as any)?.submitForm();
  };

  return (
    <ActionViewContext.Provider
      value={{
        title,
        currentView,
        setCurrentView,
        availableViews,
        formIsSaving,
        setFormIsSaving,
        formHasChanges,
        setFormHasChanges,
        formRef,
        searchTreeRef,
        onFormSave: callOnFormSave,
        onNewClicked,
        currentId,
        setCurrentId,
        currentItemIndex,
        setCurrentItemIndex,
        results,
        setResults,
        currentModel,
        removingItem,
        setRemovingItem,
        formIsLoading,
        setFormIsLoading,
        treeIsLoading,
        setTreeIsLoading,
        toolbar,
        setToolbar,
        attachments,
        setAttachments,
        selectedRowItems,
        setSelectedRowItems,
        duplicatingItem,
        setDuplicatingItem,
        setSearchParams,
        searchParams,
        searchVisible,
        setSearchVisible,
        sorter,
        setSorter,
        totalItems,
        setTotalItems,
        searchTreeNameSearch,
        setSearchTreeNameSearch,
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export default ActionViewProvider;
