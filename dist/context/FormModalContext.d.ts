import React from "react";
export declare type FormModalContextType = {
    setTitle?: (title: string) => void;
};
export declare const FormModalContext: React.Context<FormModalContextType | null>;
declare type FormModalProviderProps = FormModalContextType & {
    children: React.ReactNode;
};
declare const FormModalProvider: (props: FormModalProviderProps) => any;
export default FormModalProvider;
//# sourceMappingURL=FormModalContext.d.ts.map