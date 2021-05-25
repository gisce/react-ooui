import React from "react";
export declare type One2manyContextType = {
    currentView: "tree" | "form";
    setCurrentView: (view: "tree" | "form") => void;
    manualTrigger: boolean;
    setManualTrigger: (value: boolean) => void;
    itemIndex: number;
    setItemIndex: (value: number) => void;
};
export declare const One2manyContext: React.Context<One2manyContextType | null>;
declare const One2manyProvider: ({ children, initialView, }: {
    children: React.ReactNode;
    initialView: "tree" | "form";
}) => any;
export default One2manyProvider;
//# sourceMappingURL=One2manyContext.d.ts.map