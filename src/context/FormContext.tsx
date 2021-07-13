import React from "react";

export type FormContextType = {
  activeId?: number;
  parentModel: string;
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
  domain?: string;
};

export const FormContext = React.createContext<FormContextType | null>(null);

type FormProviderProps = FormContextType & {
  children: React.ReactNode;
};

const FormProvider = (props: FormProviderProps): any => {
  const {
    children,
    activeId,
    parentModel,
    setFieldValue,
    getFieldValue,
    executeButtonAction,
  } = props;
  return (
    <FormContext.Provider
      value={{
        activeId,
        parentModel,
        setFieldValue,
        getFieldValue,
        executeButtonAction,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
