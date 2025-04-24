import React, { useContext } from "react";
import { FormView } from "..";
import { FieldMessageType, FieldMessages } from "../hooks/useFieldMessages";

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
  fetchValues?: (options?: any) => void;
  formHasChanges?: () => boolean;
  elementHasLostFocus?: () => void;
  formView?: FormView;
  fieldMessages: FieldMessages;
  setFieldMessage: (
    field: string,
    message: string,
    type: FieldMessageType,
  ) => void;
  getFieldMessage: (field: string) => string | undefined;
  getFieldMessageType: (field: string) => FieldMessageType | undefined;
  clearFieldMessage: (field: string) => void;
  clearAllFieldMessages: () => void;
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
    fieldMessages,
    setFieldMessage,
    getFieldMessage,
    getFieldMessageType,
    clearFieldMessage,
    clearAllFieldMessages,
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
        fieldMessages,
        setFieldMessage,
        getFieldMessage,
        getFieldMessageType,
        clearFieldMessage,
        clearAllFieldMessages,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext) as FormContextType;
  if (!context) {
    return {
      activeId: undefined,
      activeModel: "",
      setFieldValue: () => {},
      getFieldValue: () => "",
      executeButtonAction: async () => {},
      getContext: async () => ({}),
      getValues: async () => ({}),
      getPlainValues: () => ({}),
      getFields: async () => ({}),
      domain: [],
      submitForm: async () => ({ succeed: false, id: 0 }),
      fetchValues: () => {},
      formHasChanges: () => false,
      elementHasLostFocus: () => {},
      formView: undefined,
      fieldMessages: {},
      setFieldMessage: () => {},
      getFieldMessage: () => undefined,
      getFieldMessageType: () => undefined,
      clearFieldMessage: () => {},
      clearAllFieldMessages: () => {},
    } as FormContextType;
  }
  return context;
};

export default FormProvider;
