import React from "react";
import { FormView, TreeView } from "@/types/index";
declare type OnRowClickedData = {
    id: number;
    model: string;
    formView: FormView;
    treeView: TreeView;
};
declare type Props = {
    action?: string;
    model?: string;
    formView?: FormView;
    treeView?: TreeView;
    onRowClicked: (data: OnRowClickedData) => void;
    nameSearch?: string;
    treeScrollY?: number;
    domain?: any;
    visible?: boolean;
    rootTree?: boolean;
    parentContext?: any;
};
declare const _default: React.ForwardRefExoticComponent<Props & React.RefAttributes<unknown>>;
export default _default;
//# sourceMappingURL=SearchTree.d.ts.map