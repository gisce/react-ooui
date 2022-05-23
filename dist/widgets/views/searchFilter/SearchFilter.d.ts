/// <reference types="react" />
import { SearchFields } from "@/types";
declare type Props = {
    fields: any;
    searchFields: SearchFields;
    onClear: () => void;
    onSubmit: (values: any) => void;
    isSearching: boolean;
    limit: number;
    offset: number;
    onLimitChange?: (limit: number) => void;
};
declare function SearchFilter(props: Props): JSX.Element;
export default SearchFilter;
//# sourceMappingURL=SearchFilter.d.ts.map