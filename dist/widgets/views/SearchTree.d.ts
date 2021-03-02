import React from "react";
import { SearchFields, SearchRequest, SearchResponse } from "@/types/index";
declare type Props = {
    arch: string;
    fields: any;
    searchFields: SearchFields;
    limit?: number;
    onRowClicked: (value: any) => void;
    onRequestFetch: (options: SearchRequest) => Promise<SearchResponse>;
};
declare function SearchTree(props: Props): React.ReactElement;
export default SearchTree;
//# sourceMappingURL=SearchTree.d.ts.map