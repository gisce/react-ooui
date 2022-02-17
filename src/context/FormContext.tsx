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
  submitForm?: (options?: { callOnSubmitSucceed?: boolean }) => Promise<boolean>;
  fetchValues?: () => void;
  formHasChanges?: () => boolean;
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
    submitForm,
    fetchValues,
    formHasChanges,
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
        submitForm,
        fetchValues,
        formHasChanges,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
