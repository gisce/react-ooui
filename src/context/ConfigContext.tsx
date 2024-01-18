import React, { memo, useContext, useMemo } from "react";
import { ErpFeatureKeys, ErpFeaturesMap } from "@/models/erpFeature";
import {
  FormigaConfigProvider,
  Locale,
  Strings,
  mergeStrings,
} from "@gisce/react-formiga-components";
import { strings } from "@/locales";

type ConfigContextProps = ConfigContextValues & {
  locale: Locale;
  localizedStrings?: Strings;
};

type ConfigContextValues = {
  erpFeatures: ErpFeaturesMap;
  globalValues?: Record<string, any>;
  rootContext?: Record<string, any>;
};

const defaultConfigContext: ConfigContextValues = {
  erpFeatures: {},
  globalValues: {},
  rootContext: {},
};

export const ConfigContext =
  React.createContext<ConfigContextValues>(defaultConfigContext);

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

export const ConfigContextProvider = memo(
  ({
    erpFeatures,
    locale,
    localizedStrings = {},
    globalValues,
    rootContext,
    children,
  }: ConfigContextProps & { children?: React.ReactNode }) => {
    const providerValue = useMemo(
      () => ({
        erpFeatures,
        globalValues,
        rootContext,
      }),
      [erpFeatures, globalValues, rootContext],
    );

    return (
      <ConfigContext.Provider value={providerValue}>
        <FormigaConfigProvider
          locale={locale}
          localizedStrings={mergeStrings(strings, localizedStrings)}
        >
          {children}
        </FormigaConfigProvider>
      </ConfigContext.Provider>
    );
  },
);
ConfigContextProvider.displayName = "ConfigContextProvider";
