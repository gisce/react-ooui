import React from "react";
export declare type LocaleContextType = {
    lang: string;
    t: (key: string) => string;
};
export declare const LocaleContext: React.Context<LocaleContextType | null>;
declare type LocaleContextProps = {
    children: React.ReactNode;
    lang: string;
};
declare const LocaleContextProvider: (props: LocaleContextProps) => any;
export declare const tForLang: (key: string, lang: string) => any;
export default LocaleContextProvider;
//# sourceMappingURL=LocaleContext.d.ts.map