/// <reference types="react" />
import { FormView, TreeView } from "@/types/index";
declare type OnRowClickedData = {
    id: number;
    model: string;
    formView: FormView;
    treeView: TreeView;
};
declare type Props = {
    ids: Array<number>;
    model: string;
    formView: FormView;
    treeView: TreeView;
    onRowClicked: (data: OnRowClickedData) => void;
};
declare function SimpleTree(props: Props): JSX.Element | null;
export default SimpleTree;
//# sourceMappingURL=SimpleTree.d.ts.map