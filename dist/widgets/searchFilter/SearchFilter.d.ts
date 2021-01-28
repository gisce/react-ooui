import React from "react";
import "antd/dist/antd.css";
import "../../tailwind.generated.css";
import { Strings, SearchFields } from "../../types";
declare type Props = {
    fields: any;
    searchFields: SearchFields;
    onClear: () => void;
    onSubmit: (values: any, firstAndLimit: any) => void;
    isSearching: boolean;
    strings: Strings;
    limit: number;
    offset: number;
};
declare function SearchFilter(props: Props): React.ReactElement;
export default SearchFilter;
//# sourceMappingURL=SearchFilter.d.ts.map