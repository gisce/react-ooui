import React, { useEffect, useState } from "react";
import { Alert } from "antd";

import SearchFilter from "@/widgets/views/searchFilter/SearchFilter";
import Tree from "@/widgets/views/Tree";
import { SearchFields } from "@/types/index";

type SearchTreeRequest = {
  params: Array<any>;
  limit: number;
  offset: number;
};

type SearchTreeResponse = {
  totalItems: number;
  results: any;
};

type Props = {
  arch: string;
  fields: any;
  searchFields: SearchFields;
  limit?: number;
  onRowClicked: (value: any) => void;
  onRequestFetch: (options: SearchTreeRequest) => Promise<SearchTreeResponse>;
};

function SearchTree(props: Props): React.ReactElement {
  const {
    arch,
    fields,
    searchFields,
    limit: originalLimit = 80,
    onRowClicked,
    onRequestFetch,
  } = props;

  const [page, setPage] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(80);
  const [params, setParams] = useState<Array<any>>([]);

  const [totalItems, setTotalItems] = useState<number>(0);
  const [results, setResults] = useState<any>();

  const [searchFilterLoading, setSearchFilterLoading] = useState<boolean>(
    false
  );
  const [error, setError] = useState<string>();
  const [tableRefreshing, setTableRefreshing] = useState<boolean>(false);

  const onRequestPageChange = (page: number) => {
    setTableRefreshing(true);
    setPage(page);
    setOffset((page - 1) * limit!);
  };

  const fetchResults = async () => {
    try {
      setTableRefreshing(true);
      const { totalItems, results } = await onRequestFetch({
        params,
        limit,
        offset,
      });
      setTotalItems(totalItems);
      setResults(results);
    } catch (error) {
      setError(error);
    } finally {
      setTableRefreshing(false);
      setSearchFilterLoading(false);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [page, limit, offset, params]);

  return (
    <>
      <SearchFilter
        fields={fields}
        searchFields={searchFields}
        onClear={() => {
          if (tableRefreshing) return;
          setError(undefined);
          setParams([]);
          setOffset(0);
          setPage(1);
          setLimit(originalLimit);
        }}
        limit={limit!}
        offset={offset!}
        isSearching={searchFilterLoading}
        onSubmit={({
          params: newParams,
          limit,
          offset,
        }: {
          params: any;
          limit: number;
          offset: number;
        }) => {
          if (tableRefreshing) return;
          setSearchFilterLoading(true);
          setError(undefined);
          setPage(1);
          if (limit) setLimit(limit);
          if (offset) setOffset(offset);
          setParams(newParams);
        }}
        strings={{
          true: "Yes",
          false: "No",
          simple_search: "Simple search",
          advanced_search: "Advanced search",
          search: "Search",
          parameters: "Parameters",
          limit: "Limit",
          first: "First",
        }}
      />
      {error && <Alert className="mt-10" message={error} type="error" banner />}
      <div className="pb-10" />
      <Tree
        total={totalItems}
        limit={limit!}
        page={page!}
        treeView={{ arch, fields }}
        results={results || []}
        onRequestPageChange={onRequestPageChange}
        loading={tableRefreshing}
        strings={{
          no_results: "No results",
          summary: "Showing registers from {from} to {to} of {total} registers",
        }}
        onRowClicked={onRowClicked}
      />
    </>
  );
}

export default SearchTree;
