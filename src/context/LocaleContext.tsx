import React from "react";
import ca_ES from "@/locales/ca_ES";
import en_US from "@/locales/en_US";
import es_ES from "@/locales/es_ES";

const localeStrings: any = {
  ca_ES,
  en_US,
  es_ES,
};

export type LocaleContextType = {
  lang: string;
  t: (key: string) => string;
};

export const LocaleContext = React.createContext<LocaleContextType | null>(
  null,
);

type LocaleContextProps = {
  children: React.ReactNode;
  lang: string;
};

const LocaleContextProvider = (props: LocaleContextProps): any => {
  const { children, lang } = props;

  function t(key: string): string {
    return tForLang(key, lang);
  }

  return (
    <LocaleContext.Provider
      value={{
        lang,
        t,
      }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

export const tForLang = (key: string, lang: string) => {
  const translated = localeStrings[lang]?.[key];
  return translated || key;
};

export default LocaleContextProvider;
