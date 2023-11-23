import React, { useContext } from "react";

interface ConfigContextProps {
  erpFeatures: ErpFeaturesMap;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  erpFeatures: {},
});

// TODO: this should be defined in a third package, because we are duplicating it both in webclient and here
export enum ErpFeatureKeys {
  FEATURE_ADVANCED_EXPORT = "export_data2",
  // ... add more features here
}
// TODO: this should be defined in a third package, because we are duplicating it both in webclient and here
export type ErpFeaturesMap = {
  [key in ErpFeatureKeys]?: boolean;
};

export const useConfigContext = () => {
  return useContext(ConfigContext);
};

export const useFeatureIsEnabled = (featureKey: ErpFeatureKeys): boolean => {
  const { erpFeatures } = useConfigContext();
  return !!erpFeatures[featureKey];
};
