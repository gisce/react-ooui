import React from "react";
export declare type FormContextType = {
    activeId?: number;
    activeModel: string;
    parentId?: number;
    parentModel?: string;
    setFieldValue: (field: string, value?: string) => void;
    getFieldValue: (field: string) => string;
    executeButtonAction: ({ type, action, context, }: {
        type: string;
        action: string;
        context?: any;
    }) => Promise<void>;
    domain?: string;
};
export declare const FormContext: React.Context<FormContextType | null>;
declare type FormProviderProps = FormContextType & {
    children: React.ReactNode;
};
declare const FormProvider: (props: FormProviderProps) => any;
export default FormProvider;
//# sourceMappingURL=FormContext.d.ts.map