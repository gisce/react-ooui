declare type One2manyTopBarProps = {
    title: string;
    mode: "tree" | "form";
    isMany2Many: boolean;
    readOnly: boolean;
    formIsSaving: boolean;
    formHasChanges: boolean;
    creatingInProgress: boolean;
    onToggleViewMode: () => void;
    onCreateItem: () => void;
    onSaveItem: () => void;
    onDelete: () => void;
    totalItems: number;
    currentItemIndex: number;
    onPreviousItem: () => void;
    onNextItem: () => void;
    onSearchItem: () => void;
};
export declare const One2manyTopBar: (props: One2manyTopBarProps) => JSX.Element;
export {};
//# sourceMappingURL=One2manyTopBar.d.ts.map