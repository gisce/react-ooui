import React from "react";
import { ViewModes } from "@/widgets/base/one2many/One2many";
export declare type One2manyContextType = {
    currentView: ViewModes;
    setCurrentView: (view: ViewModes) => void;
    itemIndex: number;
    setItemIndex: (value: number) => void;
    manualTriggerChange: boolean;
    setManualTriggerChange: (value: boolean) => void;
};
export declare const One2manyContext: React.Context<One2manyContextType | null>;
declare const One2manyProvider: ({ children, initialView, }: {
    children: React.ReactNode;
    initialView: ViewModes;
}) => any;
export default One2manyProvider;
//# sourceMappingURL=One2manyContext.d.ts.map