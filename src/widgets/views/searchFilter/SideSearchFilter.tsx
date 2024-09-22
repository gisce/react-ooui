import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Form, Alert, Button, FormInstance } from "antd";
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
import debounce from "lodash.debounce";
import deepEqual from "deep-equal";
import { set } from "lodash";

type SideSearchFilterBaseProps = {
  onSubmit: (values: any) => void;
  searchValues?: any;
  values?: any;
};

type SideSearchFilterContainerProps = SideSearchFilterBaseProps & {
  fields: any;
  searchFields: SearchFields;
  isOpen: boolean;
  onClose: () => void;
};

export type SideSearchFilterProps = SideSearchFilterBaseProps & {
  searchFields?: Container;
  onChange?: (values: any) => void;
};

// eslint-disable-next-line react/display-name
export const SideSearchFilterComponent = forwardRef<any, SideSearchFilterProps>(
  (props, ref) => {
    const { onSubmit, searchValues, searchFields, onChange } = props;
    const [form] = Form.useForm();

    useEffect(() => {
      form.setFieldsValue(searchValues);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValues]);

    useImperativeHandle(ref, () => ({
      submit: form.submit,
      resetFields: form.resetFields,
      setFieldsValue: form.setFieldsValue,
    }));

    const getRowsAndCols = () => {
      if (!searchFields) return;

      const rows = searchFields?.rows;

      const formValues = normalizeValues(form.getFieldsValue());

      return rows?.map((row, i) => {
        return row.map((item, j) => {
          const hasValue = formValues[(item as Field).id] !== undefined;
          return (
            <div
              key={i}
              style={{
                display: "block",
                paddingTop: 5,
                paddingBottom: 15,
                backgroundColor: hasValue ? "#f0f0f0" : undefined,
                fontWeight: hasValue ? "bold" : undefined,
              }}
            >
              <div style={{ paddingLeft: 18, paddingRight: 18 }}>
                <SearchField key={j} field={item as Field} />
              </div>
            </div>
          );
        });
      });
    };

    const rows = getRowsAndCols();

    const checkFieldsChanges = useCallback(() => {
      const touchedValues = form.getFieldsValue();
      onChange?.(touchedValues);
    }, [form, onChange]);

    const debouncedCheckFieldsChanges = debounce(checkFieldsChanges, 100);

    const handleKeyPress = (event: React.KeyboardEvent) => {
      if (event.key === "Enter") {
        form.submit();
      }
    };
    return (
      <Fragment>
        <Form
          form={form}
          onFinish={onSubmit}
          onFieldsChange={debouncedCheckFieldsChanges as any}
          onKeyPress={handleKeyPress}
          className="pt-3 pb-3"
        >
          {rows}
        </Form>
        <div className="pb-2" />
      </Fragment>
    );
  },
);

export const SideSearchFilter = (props: SideSearchFilterContainerProps) => {
  const { onSubmit, isOpen, onClose, searchFields, fields, searchValues } =
    props;
  const sfo = useRef<SearchFilterOoui>();
  const { t } = useLocale();
  const [parsedSearchFields, setParsedSearchFields] = useState<Container>();
  const formRef = useRef<FormInstance>(null);
  const [searchParams, setSearchParams] = useState<any>();

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    setSearchParams(undefined);
  }, [isOpen]);

  useDeepCompareEffect(() => {
    if (!isOpen) return;
    sfo.current = new SearchFilterOoui(searchFields, fields, 1);
    sfo.current.parse();
    setParsedSearchFields(sfo.current._advancedSearchContainer);
  }, [fields, searchFields, isOpen]);

  const onFinish = useCallback(
    (values: any) => {
      const newParams = getParamsForFields(
        values,
        sfo.current?._advancedSearchContainer,
      );
      onSubmit({ params: newParams, values: normalizeValues(values) });
    },
    [onSubmit],
  );

  const handleSubmit = useCallback(() => {
    formRef.current?.submit();
  }, []);

  const handleOnChange = useCallback(
    (values: any) => {
      const convertedValues = normalizeValues(values);

      if (deepEqual(convertedValues, searchValues)) {
        setSearchParams([]);
        return;
      }
      const newParams = getParamsForFields(
        values,
        sfo.current?._advancedSearchContainer,
      );
      setSearchParams(newParams);
    },
    [searchValues],
  );

  const handleClear = useCallback(() => {
    formRef.current?.resetFields();
    formRef?.current?.setFieldsValue({});
    setSearchParams([]);
  }, []);

  const paramsToShow =
    searchParams ||
    getParamsForFields(searchValues, sfo.current?._advancedSearchContainer);

  return (
    <FloatingDrawer
      title={`${t("filter")} (${paramsToShow?.length || 0})`}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <SideSearchFooter
          onClear={handleClear}
          onSubmit={handleSubmit}
          searchParams={paramsToShow}
        />
      }
    >
      <SideSearchFilterComponent
        ref={formRef}
        searchFields={parsedSearchFields}
        onSubmit={onFinish}
        searchValues={searchValues}
        onChange={handleOnChange}
      />
    </FloatingDrawer>
  );
};

export const SideSearchFooter = ({
  onClear,
  onSubmit,
  searchParams,
}: {
  onClear: () => void;
  onSubmit: () => void;
  searchParams?: any[];
}) => {
  const { t } = useLocale();

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        gap: "8px",
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: "",
      }}
    >
      <Button
        icon={<SearchOutlined />}
        size={"large"}
        type={"primary"}
        onClick={onSubmit}
        style={{ flex: 1 }}
      >
        {`${t("applyFilters")} (${searchParams?.length || 0})`}
      </Button>
      <Button
        icon={<ClearOutlined />}
        size={"large"}
        onClick={onClear}
        style={{ width: "80px" }}
      >
        {t("clear")}
      </Button>
    </div>
  );
};

const normalizeValues = (values: any) => {
  // values object should be converted: fields that are empty strings should be undefined
  return Object.keys(values).reduce((acc: any, key) => {
    const value = values[key];
    if (value !== "" && value !== undefined) {
      acc[key] = value;
    }
    return acc;
  }, {});
};
