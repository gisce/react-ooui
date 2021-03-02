import React from "react";
import { SearchFields } from "@/types/index";
declare type SearchTreeRequest = {
    params: Array<any>;
    limit: number;
    offset: number;
};
declare type SearchTreeResponse = {
    totalItems: number;
    results: any;
};
declare type Props = {
    arch: string;
    fields: any;
    searchFields: SearchFields;
    limit?: number;
    onRowClicked: (value: any) => void;
    onRequestFetch: (options: SearchTreeRequest) => Promise<SearchTreeResponse>;
};
declare function SearchTree(props: Props): React.ReactElement;
export default SearchTree;
//# sourceMappingURL=SearchTree.d.ts.map