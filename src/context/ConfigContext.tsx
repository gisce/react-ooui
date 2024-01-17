import React, { memo, useContext, useMemo } from "react";
import { ErpFeatureKeys, ErpFeaturesMap } from "@/models/erpFeature";
import { Locale } from "@gisce/react-formiga-components";
import LocaleContextProvider from "./LocaleContext";

const DEFAULT_LOCALE = "en_US";
interface ConfigContextProps {
  erpFeatures: ErpFeaturesMap;
  locale: Locale;
}

const defaultConfigContext: ConfigContextProps = {
  erpFeatures: {},
  locale: DEFAULT_LOCALE,
};

export const ConfigContext =
  React.createContext<ConfigContextProps>(defaultConfigContext);

export const useConfigContext = () => {
  const context = useContext(ConfigContext);

  if (!context) {
    throw new Error(
      "useConfigContext must be used within a ConfigContextProvider",
    );
  }

  return context;
};

export const useFeatureIsEnabled = (featureKey: ErpFeatureKeys): boolean => {
  const { erpFeatures } = useConfigContext();
  return !!erpFeatures[featureKey];
};

interface ConfigContextProviderProps {
  erpFeatures: ErpFeaturesMap;
  locale?: Locale;
}

export const ConfigContextProvider = memo(
  ({
    erpFeatures,
    locale = DEFAULT_LOCALE,
    children,
  }: ConfigContextProviderProps & { children?: React.ReactNode }) => {
    const providerValue = useMemo(
      () => ({ erpFeatures, locale }),
      [erpFeatures, locale],
    );

    return (
      <LocaleContextProvider lang={locale}>
        {
          // We add LocaleContextProvider here in order to mantain compatibility
          // with the older locale management system in react-ooui
          // We should remove it once we migrate all the widgets to react-formiga-components locale handling.
        }
        <ConfigContext.Provider value={providerValue}>
          {children}
        </ConfigContext.Provider>
      </LocaleContextProvider>
    );
  },
);
ConfigContextProvider.displayName = "ConfigContextProvider";
