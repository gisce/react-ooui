import {
  SearchTreeInfinite,
  SearchTreeInfiniteProps,
} from "@/widgets/views/SearchTreeInfinite";
import { Fragment } from "react";
import SearchFilter from "../views/searchFilter/SearchFilter";
import { mergeSearchFields } from "@/helpers/formHelper";

export const SearchTreeModalInfinite = (props: SearchTreeInfiniteProps) => {
  const { formView, treeView } = props;

  return (
    <Fragment>
      <SearchFilter
        fields={{ ...formView.fields, ...treeView.fields }}
        searchFields={mergeSearchFields([
          formView.search_fields,
          treeView.search_fields,
        ])}
        showLimitOptions={false}
        onClear={() => {}}
        limit={0}
        offset={0}
        isSearching={false}
        onSubmit={() => {}}
        onLimitChange={() => {}}
        setSearchFilterHeight={() => {}}
        searchError={""}
        searchVisible={true}
        searchValues={{}}
      />
      <SearchTreeInfinite {...props} />
    </Fragment>
  );
};
