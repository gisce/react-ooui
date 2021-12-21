import React, { useRef, useState } from "react";

export type FormContextType = {
  activeId?: number;
  activeModel: string;
  setFieldValue: (field: string, value?: string) => void;
  getFieldValue: (field: string) => string;
  executeButtonAction: ({
    type,
    action,
    context,
  }: {
    type: string;
    action: string;
    context?: any;
  }) => Promise<void>;
  getContext: () => Promise<any>;
  getValues: () => Promise<any>;
  setOriginalValue: (field: string, value: any) => void;
  domain: any[];
  unsavedOne2ManyChilds?: Map<string, any>;
  addOne2ManyChild?: (key: string, child: any) => void;
  removeOne2ManyChild?: (key: string) => void;
  submitForm?: (options?: { callOnSubmitSucceed?: boolean }) => Promise<void>;
  fetchValues?: () => void;
};

export const FormContext = React.createContext<FormContextType | null>(null);

type FormProviderProps = FormContextType & {
  children: React.ReactNode;
};

const FormProvider = (props: FormProviderProps): any => {
  const {
    children,
    activeId,
    activeModel,
    setFieldValue,
    getFieldValue,
    executeButtonAction,
    getContext,
    getValues,
    setOriginalValue,
    domain,
    unsavedOne2ManyChilds,
    addOne2ManyChild,
    removeOne2ManyChild,
    submitForm,
    fetchValues,
  } = props;

  return (
    <FormContext.Provider
      value={{
        domain,
        getValues,
        activeId,
        activeModel,
        setFieldValue,
        getFieldValue,
        executeButtonAction,
        getContext,
        setOriginalValue,
        unsavedOne2ManyChilds,
        addOne2ManyChild,
        removeOne2ManyChild,
        submitForm,
        fetchValues,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
