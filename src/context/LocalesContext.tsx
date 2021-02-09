import React, { useState, useEffect } from "react";

import { Strings } from "@/types";

export type LocalesContextType = {
  getString: (key: string) => string;
};

export const LocalesContext = React.createContext<LocalesContextType | null>(
  null
);

const LocalesProvider = ({
  children,
  strings: stringsProp,
}: {
  children: React.ReactNode;
  strings: Strings;
}): any => {
  const [strings, setStrings] = useState<Strings>({});

  useEffect(() => {
    setStrings(stringsProp);
  }, [stringsProp]);

  const getString = (key: string) => {
    return getLocalizedString(key, strings);
  };

  return (
    <LocalesContext.Provider
      value={{
        getString,
      }}
    >
      {children}
    </LocalesContext.Provider>
  );
};

export default LocalesProvider;

export const getLocalizedString = (key: string, strings: Strings) => {
  const localized = strings[key];
  if (localized) return localized;
  else return key;
};
