import React from "react";
import { TreeView } from "@/types";
declare type Props = {
    total: number;
    limit: number;
    page?: number;
    loading: boolean;
    treeView: TreeView;
    results: Array<any>;
    showPagination?: boolean;
    onRequestPageChange?: (page: number, pageSize?: number) => void;
    onRowClicked?: (id: number) => void;
    rowSelection?: any;
    scrollY?: number;
    colorsForResults?: {
        [key: number]: string;
    };
};
declare function Tree(props: Props): React.ReactElement;
export default Tree;
//# sourceMappingURL=Tree.d.ts.map