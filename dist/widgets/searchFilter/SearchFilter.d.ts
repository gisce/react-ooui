import React from "react";
import "antd/dist/antd.css";
import "../../tailwind.generated.css";
import { Strings, SearchFields } from "../../types";
declare type Props = {
    fields: any;
    searchFields: SearchFields;
    onClear: () => void;
    onSubmit: (values: any) => void;
    isSearching: boolean;
    strings: Strings;
};
declare function SearchFilter(props: Props): React.ReactElement;
export default SearchFilter;
//# sourceMappingURL=SearchFilter.d.ts.map