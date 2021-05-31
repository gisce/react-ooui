import React from "react";
export declare type FormContextType = {
    parentId?: number;
};
export declare const FormContext: React.Context<FormContextType | null>;
declare const FormProvider: ({ children, parentId, }: {
    children: React.ReactNode;
    parentId?: number | undefined;
}) => any;
export default FormProvider;
//# sourceMappingURL=FormContext.d.ts.map