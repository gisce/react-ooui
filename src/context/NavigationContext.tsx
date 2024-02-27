import { useNavigationActions } from "@/hooks/useNavigationActions";
import { createContext, useContext } from "react";
import { useTabs } from "..";

export type NavigationContextType = {};

export const NavigationContext = createContext<
  NavigationContextType | undefined
>(undefined);

type NavigationProviderProps = NavigationContextType & {
  children: React.ReactNode;
};

export const NavigationProvider = (props: NavigationProviderProps) => {
  const { children } = props;
  const { updateTab, addTab } = useTabs();

  const { openRelate } = useNavigationActions({
    openActionModal: () => {},
    addTab,
  });

  return (
    <NavigationContext.Provider value={{ updateTab, openRelate }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext<NavigationContextType | undefined>(
    NavigationContext,
  );

  if (!context) {
    throw new Error(
      "NavigationProvider context is undefined, please verify you are calling useNavigation() as child of a <NavigationProvider> component.",
    );
  }

  return context;
};
