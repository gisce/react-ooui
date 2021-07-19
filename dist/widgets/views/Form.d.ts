import React from "react";
export declare type FormProps = {
    model: string;
    readOnly?: boolean;
    id?: number;
    arch?: string;
    fields?: any;
    values?: any;
    showFooter?: boolean;
    getDataFromAction?: boolean;
    mustClearAfterSave?: boolean;
    submitMode?: "api" | "values";
    onSubmitSucceed?: (event: any) => void;
    onSubmitError?: (error: any) => void;
    onCancel?: () => void;
    onFieldsChange?: (values: any) => void;
    postSaveAction?: (event: any) => Promise<void>;
    insideButtonModal?: boolean;
    parentContext?: any;
    actionDomain?: any;
};
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Form.d.ts.map