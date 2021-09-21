import React from "react";
import { FormView } from "@/index";
export declare type FormProps = {
    model: string;
    readOnly?: boolean;
    id?: number;
    formView?: FormView;
    values?: any;
    showFooter?: boolean;
    getDataFromAction?: boolean;
    mustClearAfterSave?: boolean;
    submitMode?: "api" | "values";
    onSubmitSucceed?: (id?: number) => void;
    onSubmitError?: (error: any) => void;
    onCancel?: () => void;
    onFieldsChange?: (values: any) => void;
    postSaveAction?: (event: any) => Promise<void>;
    insideButtonModal?: boolean;
    parentContext?: any;
    actionDomain?: any;
    visible?: boolean;
    rootForm?: boolean;
    defaultValues?: any;
    forcedValues?: any;
};
declare const _default: React.ForwardRefExoticComponent<FormProps & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Form.d.ts.map