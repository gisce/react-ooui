import { ViewType } from "@/types";
import React, { useState } from "react";

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

  const {
    children,
    currentView,
    title,
    setCurrentView,
    availableViews,
    formRef,
    onNewClicked,
    currentId,
    setCurrentId
  } = props;

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
        setCurrentId
      }}
    >
      {children}
    </ActionViewContext.Provider>
  );
};

export default ActionViewProvider;
