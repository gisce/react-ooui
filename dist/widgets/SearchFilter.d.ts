import React from "react";
declare type SearchFields = {
    primary: string[];
    secondary: string[];
};
declare type Props = {
    fields: any;
    searchFields: SearchFields;
    onClear: () => void;
    onSubmit: () => void;
};
declare function SearchFilter(props: Props): React.ReactElement;
export default SearchFilter;
//# sourceMappingURL=SearchFilter.d.ts.map