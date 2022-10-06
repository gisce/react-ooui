import React, { useState } from "react";
import { ViewModes } from "@/widgets/base/one2many/One2many";

export type One2manyContextType = {
  currentView: ViewModes;
  setCurrentView: (view: ViewModes) => void;
  itemIndex: number;
  setItemIndex: (value: number) => void;
  manualTriggerChange: boolean;
  setManualTriggerChange: (value: boolean) => void;
};

export const One2manyContext = React.createContext<One2manyContextType | null>(
  null
);

const One2manyProvider = ({
  children,
  initialView,
}: {
  children: React.ReactNode;
  initialView: ViewModes;
}): any => {
  const [currentView, setCurrentView] = useState<ViewModes>(initialView);
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [manualTriggerChange, setManualTriggerChange] = useState<boolean>(
    false
  );

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
