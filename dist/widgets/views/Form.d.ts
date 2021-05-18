import React from "react";
declare type Props = {
    model: string;
    id?: number;
    onSubmitSucceed?: (updatedObject: any) => void;
    onSubmitError?: (error: any) => void;
    onCancel?: (succeedSavedObjects: number) => void;
    showFooter?: boolean;
    getDataFromAction?: boolean;
    onFieldsChange?: () => void;
    readOnly?: boolean;
};
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=Form.d.ts.map