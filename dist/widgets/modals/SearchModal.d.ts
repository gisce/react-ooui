/// <reference types="react" />
declare type SearchSelectionProps = {
    visible: boolean;
    model: string;
    nameSearch?: string;
    onSelectValues: (values: number[]) => void;
    onCloseModal: () => void;
    domain?: any;
    context?: any;
};
export declare const SearchModal: (props: SearchSelectionProps) => JSX.Element;
export {};
//# sourceMappingURL=SearchModal.d.ts.map