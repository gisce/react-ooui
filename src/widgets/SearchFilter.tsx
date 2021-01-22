import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import "antd/dist/antd.css";
import "../tailwind.generated.css";
import { Char } from "./Char";

import {
  SearchFilter as SearchFilterOoui,
  Container,
  Field,
  Char as CharOoui,
} from "ooui";

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

            const char = item as CharOoui;
            const widget = (
              <Char id={char._id} label={char.label || char._id} />
            );
            return (
              <Col className="p-2" span={6} key={j}>
                {widget}
              </Col>
            );

            // if (field.constructor.name === "Char") {
            //   const char = item as CharOoui;
            //   const widget = <Char id={char._id} label={char.label} />;
            //   return (
            //     <Col className="p-2" span={6} key={j}>
            //       {widget}
            //     </Col>
            //   );
            // } else {
            //   console.log();
            // }
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
