import React from "react";
import { Form as FormOoui } from "ooui";
import { FormView } from "@/types/index";
export declare type FormProps = {
    model: string;
    id?: number;
    onSubmitSucceed?: (event: any) => void;
    onSubmitError?: (error: any) => void;
    onCancel?: () => void;
    showFooter?: boolean;
    getDataFromAction?: boolean;
    onFieldsChange?: () => void;
    readOnly?: boolean;
    mustClearAfterSave?: boolean;
    submitMode?: "api" | "values";
    values?: any;
    data?: FormViewAndOoui;
    postSaveAction?: (event: any) => Promise<void>;
};
export declare type FormViewAndOoui = {
    ooui: FormOoui;
    view: FormView;
};
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Form.d.ts.map