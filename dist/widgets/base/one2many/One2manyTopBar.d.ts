import { ViewModes } from "@/widgets/base/one2many/One2many";
declare type One2manyTopBarProps = {
    title: string;
    mode: ViewModes;
    isMany2Many: boolean;
    readOnly: boolean;
    formHasChanges: boolean;
    onToggleViewMode: () => void;
    onCreateItem: () => void;
    onDelete: () => void;
    totalItems: number;
    currentItemIndex: number;
    onPreviousItem: () => void;
    onNextItem: () => void;
    onSearchItem: () => void;
    selectedRowKeys: string[];
};
export declare const One2manyTopBar: (props: One2manyTopBarProps) => JSX.Element;
export {};
//# sourceMappingURL=One2manyTopBar.d.ts.map