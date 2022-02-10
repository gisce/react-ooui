import React from "react";
export declare type FormContextType = {
    activeId?: number;
    activeModel: string;
    setFieldValue: (field: string, value?: string) => void;
    getFieldValue: (field: string) => string;
    executeButtonAction: ({ type, action, context, }: {
        type: string;
        action: string;
        context?: any;
    }) => Promise<void>;
    getContext: () => Promise<any>;
    getValues: () => Promise<any>;
    setOriginalValue: (field: string, value: any) => void;
    domain: any[];
    unsavedOne2ManyChilds?: Map<string, any>;
    addOne2ManyChild?: (key: string, child: any) => void;
    removeOne2ManyChild?: (key: string) => void;
    submitForm?: (options?: {
        callOnSubmitSucceed?: boolean;
    }) => Promise<boolean>;
    fetchValues?: () => void;
    formHasChanges?: () => boolean;
};
export declare const FormContext: React.Context<FormContextType | null>;
declare type FormProviderProps = FormContextType & {
    children: React.ReactNode;
};
declare const FormProvider: (props: FormProviderProps) => any;
export default FormProvider;
//# sourceMappingURL=FormContext.d.ts.map