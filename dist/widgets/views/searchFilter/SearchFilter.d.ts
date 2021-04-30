import React from "react";
import "antd/dist/antd.css";
import "@/tailwind.generated.css";
import { SearchFields } from "@/types";
declare type Props = {
    fields: any;
    searchFields: SearchFields;
    onClear: () => void;
    onSubmit: (values: any) => void;
    isSearching: boolean;
    limit: number;
    offset: number;
};
declare function SearchFilter(props: Props): React.ReactElement;
export default SearchFilter;
//# sourceMappingURL=SearchFilter.d.ts.map