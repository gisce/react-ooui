import React from "react";

export type FormContextType = {
  parentId?: number;
};

export const FormContext = React.createContext<FormContextType | null>(null);

const FormProvider = ({
  children,
  parentId,
}: {
  children: React.ReactNode;
  parentId?: number;
}): any => {
  return (
    <FormContext.Provider
      value={{
        parentId,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
