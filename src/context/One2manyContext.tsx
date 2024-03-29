import { ViewType } from "@/types";
import React, { useState } from "react";

export type One2manyContextType = {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  itemIndex: number;
  setItemIndex: (value: number) => void;
  manualTriggerChange: boolean;
  setManualTriggerChange: (value: boolean) => void;
};

export const One2manyContext = React.createContext<One2manyContextType | null>(
  null,
);

const One2manyProvider = ({
  children,
  initialView,
}: {
  children: React.ReactNode;
  initialView: ViewType;
}): any => {
  const [currentView, setCurrentView] = useState<ViewType>(initialView);
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [manualTriggerChange, setManualTriggerChange] =
    useState<boolean>(false);

  return (
    <One2manyContext.Provider
      value={{
        currentView,
        setCurrentView,
        itemIndex,
        setItemIndex,
        manualTriggerChange,
        setManualTriggerChange,
      }}
    >
      {children}
    </One2manyContext.Provider>
  );
};

export default One2manyProvider;
