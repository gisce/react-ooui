import React, { useEffect, useState } from "react";
import { Form, Row, Col, Alert } from "antd";
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
import Measure from "react-measure";

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
  limit: number;
  offset: number;
  onLimitChange?: (limit: number) => void;
  searchVisible?: boolean;
  setSearchFilterHeight?: (height: number) => void;
  searchError?: string;
  searchValues?: any;
  showLimitOptions?: boolean;
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
    searchVisible,
    setSearchFilterHeight,
    searchError,
    searchValues,
    showLimitOptions = true,
  } = props;

  const [simpleSearchFields, setSimpleSearchFields] = useState<Container>();
  const [advancedSearchFields, setAdvancedSearchFields] = useState<Container>();
  const [advancedFilter, setAdvancedFilter] = useState(false);

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(searchValues);
  }, [searchValues]);

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

    onSubmit({ params: newParams, offset, limit, searchValues: values });
  };

  return (
    <Measure
      bounds
      onResize={(contentRect) => {
        setSearchFilterHeight?.(contentRect.bounds?.height!);
      }}
    >
      {({ measureRef }) => (
        <div ref={measureRef}>
          <div style={{ display: searchVisible ? "block" : "none" }}>
            <Form
              className="p-3 rounded shadow-md bg-gray-50"
              form={form}
              onFinish={onFinish}
              initialValues={{ offset, limit }}
            >
              {rows}
              {advancedFilter && showLimitOptions && (
                <SearchParams onLimitChange={onLimitChange} />
              )}
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
            {searchError && (
              <Alert
                className="mt-10"
                message={searchError}
                type="error"
                banner
              />
            )}
            <div className="pb-5" />
          </div>
        </div>
      )}
    </Measure>
  );
}

export default SearchFilter;
