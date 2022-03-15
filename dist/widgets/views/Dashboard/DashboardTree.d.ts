import { TreeView } from "@/types/index";
declare type OnRowClickedData = {
    id: number;
    model: string;
    treeView: TreeView;
};
declare type Props = {
    action?: string;
    model?: string;
    view_id?: number;
    onRowClicked: (data: OnRowClickedData) => void;
    domain?: any;
    visible?: boolean;
    parentContext?: any;
};
declare function DashboardTree(props: Props): JSX.Element | null;
export default DashboardTree;
//# sourceMappingURL=DashboardTree.d.ts.map