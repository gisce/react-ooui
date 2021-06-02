import React from "react";

export type FormContextType = {
  parentId?: number;
  parentModel: string;
};

export const FormContext = React.createContext<FormContextType | null>(null);

const FormProvider = ({
  children,
  parentId,
  parentModel,
}: {
  children: React.ReactNode;
  parentId?: number;
  parentModel: string;
}): any => {
  return (
    <FormContext.Provider
      value={{
        parentId,
        parentModel,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
