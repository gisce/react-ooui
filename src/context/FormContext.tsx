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
  getPlainValues: () => { [key: string]: any };
  getFields: () => Promise<any>;
  setOriginalValue: (field: string, value: any) => void;
  domain: any[];
  submitForm?: (options?: {
    callOnSubmitSucceed?: boolean;
  }) => Promise<boolean>;
  fetchValues?: () => void;
  formHasChanges?: () => boolean;
  elementHasLostFocus?: () => void;
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
    getPlainValues,
    setOriginalValue,
    domain,
    submitForm,
    fetchValues,
    formHasChanges,
    elementHasLostFocus,
    getFields,
  } = props;

  return (
    <FormContext.Provider
      value={{
        domain,
        getValues,
        getPlainValues,
        getFields,
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
        elementHasLostFocus,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
