import { ViewType } from "@/types";
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
  setCurrentId?: (id: number) => void;
  totalItems?: number;
  setTotalItems?: (value: number) => void;
  currentItemIndex?: number;
  setCurrentItemIndex?: (value: number) => void;
  results?: any[];
  setResults?: (value: any[]) => void;
  currentModel?: string;
  removingItem?: boolean;
  setRemovingItem?: (value: boolean) => void;
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
  const [totalItems, setTotalItems] = useState<number>(0);
  const [removingItem, setRemovingItem] = useState<boolean>(false);

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
        onFormSave: callOnFormSave,
        onNewClicked,
        currentId,
        setCurrentId,
        totalItems,
        setTotalItems,
        currentItemIndex,
        setCurrentItemIndex,
        results,
        setResults,
        currentModel,
        removingItem,
        setRemovingItem,
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export default ActionViewProvider;
