import React from "react";
export declare type FormContextType = {
    parentId?: number;
    parentModel: string;
};
export declare const FormContext: React.Context<FormContextType | null>;
declare const FormProvider: ({ children, parentId, parentModel, }: {
    children: React.ReactNode;
    parentId?: number | undefined;
    parentModel: string;
}) => any;
export default FormProvider;
//# sourceMappingURL=FormContext.d.ts.map