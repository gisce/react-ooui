import { FC, useMemo } from "react";
import SearchFilter from "../../../searchFilter/SearchFilter";
import { SideSearchFilter } from "../../../searchFilter/SideSearchFilter";
import { mergeSearchFields } from "@/helpers/formHelper";
import { PaginatedSearchControlsProps } from "../SearchTreePaginated.types";

export const PaginatedSearchControls: FC<PaginatedSearchControlsProps> = ({
  filterType,
  formView,
  treeView,
  searchVisible,
  searchValues,
  onSearchFilterClear,
  onSearchFilterSubmit,
  onSideSearchFilterClose,
  onSideSearchFilterSubmit,
}) => {
  const searchFilterProps = useMemo(
    () => ({
      fields: { ...formView?.fields, ...treeView?.fields },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
      ]),
      showLimitOptions: false,
      limit: 0,
      offset: 0,
      isSearching: false,
      searchValues,
      searchVisible: true,
    }),
    [
      formView?.fields,
      formView?.search_fields,
      treeView?.fields,
      treeView?.search_fields,
      searchValues,
    ],
  );

  const sideSearchFilterProps = useMemo(
    () => ({
      isOpen: searchVisible,
      fields: { ...formView?.fields, ...treeView?.fields },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
      ]),
      searchValues,
    }),
    [
      formView?.fields,
      formView?.search_fields,
      treeView?.fields,
      treeView?.search_fields,
      searchValues,
      searchVisible,
    ],
  );

  if (filterType === "top") {
    return (
      <SearchFilter
        {...searchFilterProps}
        onClear={onSearchFilterClear}
        onSubmit={onSearchFilterSubmit}
      />
    );
  }

  return (
    <SideSearchFilter
      {...sideSearchFilterProps}
      onClose={onSideSearchFilterClose}
      onSubmit={onSideSearchFilterSubmit}
    />
  );
};
