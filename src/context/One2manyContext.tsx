import { ViewType } from "@/types";
import { TreeType } from "@/views/actionViews/TreeActionView";
import React, { useContext, useState } from "react";

export type One2manyContextType = {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
  itemIndex: number;
  setItemIndex: (value: number) => void;
  manualTriggerChange: boolean;
  setManualTriggerChange: (value: boolean) => void;
  treeType: TreeType | undefined;
  setTreeType: (type: TreeType | undefined) => void;
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
  const [treeType, setTreeType] = useState<TreeType | undefined>(undefined);

  return (
    <One2manyContext.Provider
      value={{
        currentView,
        setCurrentView,
        itemIndex,
        setItemIndex,
        manualTriggerChange,
        setManualTriggerChange,
        treeType,
        setTreeType,
      }}
    >
      {children}
    </One2manyContext.Provider>
  );
};

export const useOne2manyContext = () => {
  return useContext(One2manyContext) as One2manyContextType;
};

export default One2manyProvider;
