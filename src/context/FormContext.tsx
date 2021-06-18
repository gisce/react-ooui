import React from "react";

export type FormContextType = {
  parentId?: number;
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
};

export const FormContext = React.createContext<FormContextType | null>(null);

type FormProviderProps = FormContextType & {
  children: React.ReactNode;
};

const FormProvider = (props: FormProviderProps): any => {
  const {
    children,
    parentId,
    parentModel,
    setFieldValue,
    getFieldValue,
    executeButtonAction,
  } = props;
  return (
    <FormContext.Provider
      value={{
        parentId,
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
