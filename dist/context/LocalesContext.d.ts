import React from "react";
import { Strings } from "../types";
export declare type LocalesContextType = {
    getString: (key: string) => string;
};
export declare const LocalesContext: React.Context<LocalesContextType | null>;
declare const LocalesProvider: ({ children, strings: stringsProp, }: {
    children: React.ReactNode;
    strings: Strings;
}) => any;
export default LocalesProvider;
export declare const getLocalizedString: (key: string, strings: Strings) => string;
//# sourceMappingURL=LocalesContext.d.ts.map