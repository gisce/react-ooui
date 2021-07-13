import React from "react";

export type FormContextType = {
  activeId?: number;
  activeModel: string;
  parentId?: number;
  parentModel?: string;
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
    activeId,
    activeModel,
    setFieldValue,
    getFieldValue,
    executeButtonAction,
    parentId,
    parentModel,
  } = props;
  return (
    <FormContext.Provider
      value={{
        activeId,
        activeModel,
        setFieldValue,
        getFieldValue,
        executeButtonAction,
        parentId,
        parentModel,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
