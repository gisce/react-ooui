import React from "react";
export declare type FormContextType = {
    parentId?: number;
    parentModel: string;
    setFieldValue: (field: string, value?: string) => void;
    getFieldValue: (field: string) => string;
    executeButtonAction: (type: string, action: string) => Promise<void>;
};
export declare const FormContext: React.Context<FormContextType | null>;
declare type FormProviderProps = FormContextType & {
    children: React.ReactNode;
};
declare const FormProvider: (props: FormProviderProps) => any;
export default FormProvider;
//# sourceMappingURL=FormContext.d.ts.map