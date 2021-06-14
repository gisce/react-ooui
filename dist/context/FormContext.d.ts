import React from "react";
export declare type FormContextType = {
    parentId?: number;
    parentModel: string;
    setFieldValue: (field: string, value?: string) => void;
    getFieldValue: (field: string) => string;
};
export declare const FormContext: React.Context<FormContextType | null>;
declare const FormProvider: ({ children, parentId, parentModel, setFieldValue, getFieldValue, }: {
    children: React.ReactNode;
    parentId?: number | undefined;
    parentModel: string;
    setFieldValue: (field: string, value?: string | undefined) => void;
    getFieldValue: (field: string) => string;
}) => any;
export default FormProvider;
//# sourceMappingURL=FormContext.d.ts.map