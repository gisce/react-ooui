import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../tailwind.generated.css";

import { SearchFilter as SearchFilterOoui, Container, Field } from "ooui";

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

  const [simpleSearchFields, setSimpleSearchFields] = useState<Container>();
  const [advancedSearchFields, setAdvancedSearchFields] = useState<Container>();

  const getRowsAndCols = () => {
    if (!advancedSearchFields) {
      return;
    }

    return advancedSearchFields?.rows.map((row, i) => {
      return (
        <Row key={i}>
          {row.map((item, j) => {
            const field = item as Field;
            return (
              <Col span={6} key={j}>
                {field._id}
              </Col>
            );
          })}
        </Row>
      );
    });
  };

  useEffect(() => {
    const sfo = new SearchFilterOoui(searchFields, fields);
    sfo.parse();
    setSimpleSearchFields(sfo._simpleSearchContainer);
    setAdvancedSearchFields(sfo._advancedSearchContainer);
  }, [fields, searchFields]);

  const rows = getRowsAndCols();

  return <>{rows}</>;
}

export default SearchFilter;
