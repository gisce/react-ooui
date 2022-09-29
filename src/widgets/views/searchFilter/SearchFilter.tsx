import React, { useState } from "react";
import { Form, Row, Col } from "antd";
import useDeepCompareEffect from "use-deep-compare-effect";

import {
  SearchFilter as SearchFilterOoui,
  Container,
  Field,
} from "@gisce/ooui";

import { SearchField } from "./SearchField";
import { SearchBottomBar } from "./SearchBottomBar";
import { SearchFields } from "@/types";
import { SearchParams } from "./SearchParams";

import { getParamsForFields } from "@/helpers/searchHelper";

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
  limit: number;
  offset: number;
  onLimitChange?: (limit: number) => void;
};

function SearchFilter(props: Props) {
  const {
    fields,
    searchFields = { primary: [], secondary: [] },
    onClear,
    onSubmit,
    isSearching,
    offset,
    limit,
    onLimitChange,
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

  useDeepCompareEffect(() => {
    setAdvancedFilter(false);
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
    const newParams = getParamsForFields(values, fields);

    onSubmit({ params: newParams, offset, limit });
  };

  return (
    <Form
      className="bg-gray-50 rounded p-3 shadow-md"
      form={form}
      onFinish={onFinish}
      initialValues={{ offset, limit }}
    >
      {rows}
      {advancedFilter && <SearchParams onLimitChange={onLimitChange}/>}
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
  );
}

export default SearchFilter;
