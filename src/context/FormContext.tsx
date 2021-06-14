import React from "react";

export type FormContextType = {
  parentId?: number;
  parentModel: string;
  setFieldValue: (field: string, value?: string) => void;
  getFieldValue: (field: string) => string;
};

export const FormContext = React.createContext<FormContextType | null>(null);

const FormProvider = ({
  children,
  parentId,
  parentModel,
  setFieldValue,
  getFieldValue,
}: {
  children: React.ReactNode;
  parentId?: number;
  parentModel: string;
  setFieldValue: (field: string, value?: string) => void;
  getFieldValue: (field: string) => string;
}): any => {
  return (
    <FormContext.Provider
      value={{
        parentId,
        parentModel,
        setFieldValue,
        getFieldValue,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
