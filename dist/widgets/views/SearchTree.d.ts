import React from "react";
import { SearchFields } from "@/types/index";
declare type Props = {
    arch: string;
    fields: any;
    searchFields: SearchFields;
    limit?: number;
    model: string;
    onRowClicked: (value: any) => void;
};
declare function SearchTree(props: Props): React.ReactElement;
export default SearchTree;
//# sourceMappingURL=SearchTree.d.ts.map