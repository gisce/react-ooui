import React from "react";

interface ConfigContextProps {
  previewFeatures: boolean;
}

export const ConfigContext = React.createContext<ConfigContextProps>({
  previewFeatures: false,
});
