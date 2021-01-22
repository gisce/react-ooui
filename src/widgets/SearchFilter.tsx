import React, { useEffect, useState } from "react";
import { Layout, Divider, Typography, Spin } from "antd";

import { SearchFilter as SearchFilterOoui } from "ooui";

type SearchFields = {
  primary: string[];
  secondary: string[];
};

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: () => void;
};

function SearchFilter(props: Props): React.ReactElement {
  const { fields, searchFields, onClear, onSubmit } = props;

  const [searchFilterOoui, setSearchFilterOoui] = useState<SearchFilterOoui>();

  useEffect(() => {}, [fields, searchFields]);

  const sf = new SearchFilterOoui(searchFields, fields);
  sf.parse();

  return <div>hi</div>;
}

export default SearchFilter;
