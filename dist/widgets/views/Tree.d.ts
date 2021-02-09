import React from "react";
import { Strings, TreeView } from "@/types";
declare type Props = {
    total: number;
    limit: number;
    page: number;
    loading: boolean;
    treeView: TreeView;
    results: Array<any>;
    onRequestPageChange: (page: number, pageSize?: number) => void;
    strings: Strings;
};
declare function Tree(props: Props): React.ReactElement;
export default Tree;
//# sourceMappingURL=Tree.d.ts.map