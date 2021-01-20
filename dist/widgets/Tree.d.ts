import React from "react";
declare type Column = {
    title: string;
    dataIndex: string;
    key: string;
    type?: string;
};
declare type Props = {
    total: number;
    limit: number;
    page: number;
    items: Array<any>;
    loading: boolean;
    columns: Array<Column>;
    onRequestPageChange: (page: number, pageSize?: number) => void;
};
declare function Tree(props: Props): React.ReactElement;
export default Tree;
//# sourceMappingURL=Tree.d.ts.map