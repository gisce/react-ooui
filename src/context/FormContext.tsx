import React, { useRef, useState } from "react";
import { FormView } from "..";

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
  domain: any[];
  submitForm?: (options?: {
    callOnSubmitSucceed?: boolean;
  }) => Promise<{ succeed: boolean; id: number }>;
  fetchValues?: () => void;
  formHasChanges?: () => boolean;
  elementHasLostFocus?: () => void;
  formView?: FormView;
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
    domain,
    submitForm,
    fetchValues,
    formHasChanges,
    elementHasLostFocus,
    getFields,
    formView,
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
        submitForm,
        fetchValues,
        formHasChanges,
        elementHasLostFocus,
        formView,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
