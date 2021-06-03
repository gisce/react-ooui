/// <reference types="react" />
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
    onRowClicked: (data: OnRowClickedData) => void;
    nameSearch?: string;
    treeScrollY?: number;
};
declare function SearchTree(props: Props): JSX.Element | null;
export default SearchTree;
//# sourceMappingURL=SearchTree.d.ts.map