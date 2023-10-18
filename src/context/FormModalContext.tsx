import React from "react";

export type FormModalContextType = {
  setTitle?: (title: string) => void;
};

export const FormModalContext =
  React.createContext<FormModalContextType | null>(null);

type FormModalProviderProps = FormModalContextType & {
  children: React.ReactNode;
};

const FormModalProvider = (props: FormModalProviderProps): any => {
  const { children, setTitle } = props;

  return (
    <FormModalContext.Provider
      value={{
        setTitle,
      }}
    >
      {children}
    </FormModalContext.Provider>
  );
};

export default FormModalProvider;
