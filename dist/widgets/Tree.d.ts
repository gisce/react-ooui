import React from "react";
import { TreeView } from "../helpers/TreeHelper";
export { TreeView } from "../helpers/TreeHelper";
declare type Props = {
    total: number;
    limit: number;
    page: number;
    loading: boolean;
    treeView: TreeView;
    results: Array<any>;
    onRequestPageChange: (page: number, pageSize?: number) => void;
};
declare function Tree(props: Props): React.ReactElement;
export default Tree;
//# sourceMappingURL=Tree.d.ts.map