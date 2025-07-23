import React, { memo, useContext, useMemo } from "react";
import { ErpFeatureKeys, ErpFeaturesMap } from "@/models/erpFeature";
import {
  FormigaConfigProvider,
  Locale,
  Strings,
  mergeStrings,
} from "@gisce/react-formiga-components";
import { strings } from "@/locales";
import {
  UserFeatureKeys,
  UserFeaturesMap,
  UserFeaturesState,
} from "@/models/userFeature";

type ConfigContextProps = Omit<ConfigContextValues, "treeMaxLimit"> & {
  locale: Locale;
  localizedStrings?: Strings;
  treeMaxLimit?: number;
};

type ConfigContextValues = {
  erpFeatures: ErpFeaturesMap;
  userFeatures: UserFeaturesState;
  title: string;
  globalValues?: Record<string, any>;
  rootContext?: Record<string, any>;
  devMode?: boolean;
  treeMaxLimit: number;
};

const DEFAULT_MAX_SEARCH_LIMIT = 100;

const defaultConfigContext: ConfigContextValues = {
  erpFeatures: {},
  userFeatures: {
    features: {},
    canWriteFeatureFlags: false,
  },
  title: "Webclient",
  globalValues: {},
  rootContext: {},
  devMode: false,
  treeMaxLimit: DEFAULT_MAX_SEARCH_LIMIT,
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

export const useUserFeatureIsEnabled = (
  featureKey: UserFeatureKeys,
): boolean => {
  const { userFeatures } = useConfigContext();
  return !!userFeatures.features[featureKey];
};

export const useFeatureIsEnabled = (featureKey: ErpFeatureKeys): boolean => {
  const { erpFeatures } = useConfigContext();
  return !!erpFeatures[featureKey]?.isEnabled || false;
};

export const useFeatureData = (featureKey: ErpFeatureKeys): any => {
  const { erpFeatures } = useConfigContext();
  return erpFeatures[featureKey];
};

export const ConfigContextProvider = memo(
  ({
    erpFeatures,
    locale,
    localizedStrings = {},
    globalValues,
    rootContext,
    devMode,
    title,
    treeMaxLimit = DEFAULT_MAX_SEARCH_LIMIT,
    children,
    userFeatures,
  }: ConfigContextProps & { children?: React.ReactNode }) => {
    const providerValue = useMemo(
      () => ({
        erpFeatures,
        globalValues,
        userFeatures,
        rootContext,
        devMode,
        title,
        treeMaxLimit,
      }),
      [
        erpFeatures,
        globalValues,
        userFeatures,
        rootContext,
        devMode,
        title,
        treeMaxLimit,
      ],
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
