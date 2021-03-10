/// <reference types="react" />
declare type DetailModeProps = {
    visible: boolean;
    model: string;
    id?: number;
    onSelectValue: (value: any) => void;
    onCloseModal: () => void;
    title?: string;
};
export declare const DetailModal: (props: DetailModeProps) => JSX.Element;
export {};
//# sourceMappingURL=DetailModal.d.ts.map