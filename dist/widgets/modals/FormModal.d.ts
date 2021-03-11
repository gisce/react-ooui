/// <reference types="react" />
declare type FormModalProps = {
    visible: boolean;
    model: string;
    id?: number;
    getDataFromAction?: boolean;
    onCancel?: () => void;
    onSubmitSucceed?: (updatedObject: any) => void;
    title?: string;
};
export declare const FormModal: (props: FormModalProps) => JSX.Element;
export {};
//# sourceMappingURL=FormModal.d.ts.map