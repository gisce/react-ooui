import { Fragment, useEffect, useRef, useState } from "react";
import { Form, Row, Alert, theme, Button, Col, Space } from "antd";
import useDeepCompareEffect from "use-deep-compare-effect";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";

import {
  SearchFilter as SearchFilterOoui,
  Container,
  Field,
} from "@gisce/ooui";

import { SearchField } from "./SearchField";
import { SearchFields } from "@/types";

import { getParamsForFields } from "@/helpers/searchHelper";
import { useLocale } from "@gisce/react-formiga-components";

type Props = {
  fields: any;
  searchFields: SearchFields;
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
  searchError?: string;
  searchValues?: any;
};

export const SideSearchFilter = (props: Props) => {
  const {
    fields,
    searchFields = { primary: [], secondary: [] },
    onClear,
    onSubmit,
    isSearching,
    searchError,
    searchValues,
  } = props;

  const [simpleSearchFields, setSimpleSearchFields] = useState<Container>();
  const [advancedSearchFields, setAdvancedSearchFields] = useState<Container>();
  const sfo = useRef<SearchFilterOoui>();
  const { t } = useLocale();

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(searchValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValues]);

  const getRowsAndCols = () => {
    if (!advancedSearchFields) {
      return;
    }

    // const fields = advancedFilter ? advancedSearchFields : simpleSearchFields;
    const fields = advancedSearchFields; // TODO: This is going to be always the default since we have a full side panel for showing lots of search filters

    const rows = fields?.rows;

    return rows?.map((row, i) => {
      return (
        <div key={i} style={{ display: "block" }}>
          {row.map((item, j) => {
            return <SearchField key={j} field={item as Field} />;
          })}
        </div>
      );
    });
  };

  useDeepCompareEffect(() => {
    sfo.current = new SearchFilterOoui(searchFields, fields);
    sfo.current.parse();
    setSimpleSearchFields(sfo.current._simpleSearchContainer);
    setAdvancedSearchFields(sfo.current._advancedSearchContainer);
  }, [fields, searchFields]);

  const rows = getRowsAndCols();

  const onFinish = (values: any) => {
    const { limit, offset } = values;
    delete values.offset;
    delete values.limit;
    const newParams = getParamsForFields(
      values,
      sfo.current?._advancedSearchContainer,
    );

    onSubmit({ params: newParams, offset, limit, searchValues: values });
  };

  return (
    <Fragment>
      <Space
        direction="horizontal"
        align="center"
        className="pt-5"
        style={{
          width: "100%",
          justifyContent: "center",
        }}
      >
        <Button
          icon={<SearchOutlined />}
          loading={isSearching}
          type="primary"
          htmlType="submit"
          block
        >
          {t("applyFilters")}
        </Button>
        <Button icon={<ClearOutlined />} onClick={onClear} block>
          {t("clearFilters")}
        </Button>
      </Space>
      {searchError && (
        <Alert className="mt-10" message={searchError} type="error" banner />
      )}
      <Form className="p-3" form={form} onFinish={onFinish}>
        {rows}
      </Form>
      <div className="pb-5" />
    </Fragment>
  );
};
