import React, { useEffect, useState, useContext } from "react";
import { Form, Row, Col } from "antd";

import "antd/dist/antd.css";
import "../../tailwind.generated.css";

import { SearchFilter as SearchFilterOoui, Container, Field } from "ooui";

import { SearchField } from "./SearchField";
import { SearchBottomBar } from "./SearchBottomBar";
import LocalesProvider from "../../context/LocalesContext";
import { Strings, SearchFields } from "../../types";
import { SearchParams } from "./SearchParams";

import {
  removeUndefinedFields,
  groupRangeValues,
  getParamsForFields,
} from "../../helpers/searchFilterHelper";

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
  strings: Strings;
  limit: number;
  offset: number;
};

function SearchFilter(props: Props): React.ReactElement {
  const {
    fields,
    searchFields,
    onClear,
    onSubmit,
    isSearching,
    offset,
    limit,
    strings,
  } = props;

  const [simpleSearchFields, setSimpleSearchFields] = useState<Container>();
  const [advancedSearchFields, setAdvancedSearchFields] = useState<Container>();
  const [advancedFilter, setAdvancedFilter] = useState(false);

  const [form] = Form.useForm();

  const getRowsAndCols = () => {
    if (!advancedSearchFields) {
      return;
    }

    const fields = advancedFilter ? advancedSearchFields : simpleSearchFields;
    const rows = fields?.rows;

    return rows?.map((row, i) => {
      return (
        <Row key={i}>
          {row.map((item, j) => {
            return (
              <Col xs={24} className="p-2" xl={6} key={j}>
                <SearchField field={item as Field} />
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

  const onFinish = (values: any) => {
    const { limit, offset } = values;
    delete values.offset;
    delete values.limit;
    const filteredValues = removeUndefinedFields(values);
    const groupedValues = groupRangeValues(filteredValues);
    const newParams = getParamsForFields(groupedValues, fields);

    onSubmit({ params: newParams, offset, limit });
  };

  return (
    <LocalesProvider strings={strings}>
      <Form
        className="bg-gray-100 rounded p-3"
        form={form}
        onFinish={onFinish}
        initialValues={{ offset, limit }}
      >
        {rows}
        {advancedFilter && <SearchParams />}
        <SearchBottomBar
          advancedFilter={advancedFilter}
          onAdvancedFilterToggle={() => {
            setAdvancedFilter(!advancedFilter);
          }}
          onClear={() => {
            form.resetFields();
            onClear();
          }}
          isSearching={isSearching}
        />
      </Form>
    </LocalesProvider>
  );
}

export default SearchFilter;
