import { Fragment, useCallback, useEffect, useRef, useState } from "react";
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
import { FloatingDrawer } from "@/ui/FloatingDrawer";

type SideSearchFilterBaseProps = {
  onSubmit: (values: any) => void;
  isSearching: boolean;
  searchError?: string;
  searchValues?: any;
};

type SideSearchFilterContainerProps = SideSearchFilterBaseProps & {
  onClear: () => void;
  fields: any;
  searchFields: SearchFields;
  isOpen: boolean;
  onClose: () => void;
};

export type SideSearchFilterProps = SideSearchFilterBaseProps & {
  searchFields?: Container;
};

export const SideSearchFilterComponent = (props: SideSearchFilterProps) => {
  const { onSubmit, isSearching, searchError, searchValues, searchFields } =
    props;

  const [form] = Form.useForm();

  useEffect(() => {
    form.setFieldsValue(searchValues);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValues]);

  const getRowsAndCols = () => {
    if (!searchFields) {
      return;
    }

    const rows = searchFields?.rows;

    return rows?.map((row, i) => {
      return (
        <div
          key={i}
          style={{ display: "block", paddingTop: 5, paddingBottom: 5 }}
        >
          {row.map((item, j) => {
            return <SearchField key={j} field={item as Field} />;
          })}
        </div>
      );
    });
  };

  const rows = getRowsAndCols();

  return (
    <Fragment>
      {searchError && (
        <Alert className="mt-10" message={searchError} type="error" banner />
      )}
      <Form className="p-3" form={form} onFinish={onSubmit}>
        {rows}
      </Form>
      <div className="pb-2" />
    </Fragment>
  );
};

export const SideSearchFilter = (props: SideSearchFilterContainerProps) => {
  const {
    onSubmit,
    isOpen,
    onClose,
    searchFields,
    fields,
    isSearching,
    onClear,
    searchError,
    searchValues,
  } = props;
  const sfo = useRef<SearchFilterOoui>();
  const { t } = useLocale();
  const [parsedSearchFields, setParsedSearchFields] = useState<Container>();

  useDeepCompareEffect(() => {
    if (!isOpen) {
      return;
    }
    sfo.current = new SearchFilterOoui(searchFields, fields);
    sfo.current.parse();
    setParsedSearchFields(sfo.current._advancedSearchContainer);
  }, [fields, searchFields, isOpen]);

  const onFinish = useCallback(
    (values: any) => {
      const newParams = getParamsForFields(
        values,
        sfo.current?._advancedSearchContainer,
      );

      onSubmit({ params: newParams, searchValues: values });
    },
    [onSubmit],
  );

  return (
    <FloatingDrawer
      title={t("filter")}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <SideSearchFooter
          onClear={onClear}
          onSubmit={onFinish}
          isSearching={isSearching}
          searchValues={searchValues}
        />
      }
    >
      <SideSearchFilterComponent
        searchFields={parsedSearchFields}
        isSearching={isSearching}
        onSubmit={onFinish}
        searchError={searchError}
        searchValues={searchValues}
      />
    </FloatingDrawer>
  );
};

export const SideSearchFooter = ({
  onClear,
  onSubmit,
  searchValues,
  isSearching,
}: {
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
  searchValues?: any;
}) => {
  const { t } = useLocale();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "8px", // Adds space between buttons
      }}
    >
      <Button
        icon={<SearchOutlined />}
        loading={isSearching}
        type="primary"
        block
        onClick={() => onSubmit(searchValues)}
        style={{ flex: 1 }} // This makes the button take up all available space
      >
        {t("applyFilters")}
      </Button>
      <Button
        icon={<ClearOutlined />}
        onClick={onClear}
        style={{ width: "80px" }} // Fixed width for the Clear button
      >
        {t("clear")}
      </Button>
    </div>
  );
};

export const SideSearchFooterx = ({
  onClear,
  onSubmit,
  searchValues,
  isSearching,
}: {
  onClear: () => void;
  onSubmit: (values: any) => void;
  isSearching: boolean;
  searchValues?: any;
}) => {
  const { t } = useLocale();

  return (
    <Space
      direction="horizontal"
      align="center"
      style={{
        width: "100%",
        justifyContent: "center",
      }}
    >
      <Button
        icon={<SearchOutlined />}
        loading={isSearching}
        type="primary"
        onClick={onSubmit}
        block
      >
        {t("applyFilters")}
      </Button>
      <Button icon={<ClearOutlined />} onClick={onClear} block>
        {t("clear")}
      </Button>
    </Space>
  );
};
