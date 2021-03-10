/// <reference types="react" />
declare type FormModalProps = {
    visible: boolean;
    model: string;
    id?: number;
    onSelectValue?: (value: any) => void;
    onCloseModal: () => void;
    title?: string;
};
export declare const FormModal: (props: FormModalProps) => JSX.Element;
export {};
//# sourceMappingURL=FormModal.d.ts.map