import { GenerateReportOptions, ViewType } from "@/types";
import React, { useEffect, useState } from "react";

export type ActionViewContextType = {
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
};

export const ActionViewContext = React.createContext<ActionViewContextType | null>(
  null
);

type ActionViewProviderProps = ActionViewContextType & {
  children: React.ReactNode;
};

const ActionViewProvider = (props: ActionViewProviderProps): any => {
  const [formIsSaving, setFormIsSaving] = useState<boolean>(false);
  const [formHasChanges, setFormHasChanges] = useState<boolean>(false);
  const [removingItem, setRemovingItem] = useState<boolean>(false);
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);
  const [attachments, setAttachments] = useState<any>([]);

  const {
    children,
    currentView,
    title,
    setCurrentView,
    availableViews,
    formRef,
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
  } = props;

  useEffect(() => {
    if (results && results.length > 0 && !currentItemIndex) {
      setCurrentItemIndex?.(0);
      setCurrentId?.(results[0]);
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
        toolbar,
        setToolbar,
        attachments,
        setAttachments,
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export default ActionViewProvider;
