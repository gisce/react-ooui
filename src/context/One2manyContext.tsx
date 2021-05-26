import React, { useState } from "react";

export type One2manyContextType = {
  currentView: "tree" | "form";
  setCurrentView: (view: "tree" | "form") => void;
  itemIndex: number;
  setItemIndex: (value: number) => void;
};

export const One2manyContext = React.createContext<One2manyContextType | null>(
  null
);

const One2manyProvider = ({
  children,
  initialView,
}: {
  children: React.ReactNode;
  initialView: "tree" | "form";
}): any => {
  const [currentView, setCurrentView] = useState<"tree" | "form">(initialView);
  const [itemIndex, setItemIndex] = useState<number>(0);

  return (
    <One2manyContext.Provider
      value={{
        currentView,
        setCurrentView,
        itemIndex,
        setItemIndex,
      }}
    >
      {children}
    </One2manyContext.Provider>
  );
};

export default One2manyProvider;
