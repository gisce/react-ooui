import React from "react";
export declare type FormProps = {
    model: string;
    id?: number;
    onSubmitSucceed?: (updatedObject: any) => void;
    onSubmitError?: (error: any) => void;
    onCancel?: () => void;
    showFooter?: boolean;
    getDataFromAction?: boolean;
    onFieldsChange?: () => void;
    readOnly?: boolean;
    mustClearAfterSave?: boolean;
    submitMode?: "api" | "values";
    values?: any;
};
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Form.d.ts.map