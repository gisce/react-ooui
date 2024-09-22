import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import {
  Form,
  Row,
  Alert,
  theme,
  Button,
  Col,
  Space,
  FormInstance,
} from "antd";
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

// eslint-disable-next-line react/display-name
export const SideSearchFilterComponent = forwardRef<any, SideSearchFilterProps>(
  (props, ref) => {
    const { onSubmit, isSearching, searchError, searchValues, searchFields } =
      props;
    const [form] = Form.useForm();

    useEffect(() => {
      form.setFieldsValue(searchValues);
    }, [searchValues, form]);

    useImperativeHandle(ref, () => ({
      submit: form.submit,
      getFieldsValue: form.getFieldsValue,
    }));

    const getRowsAndCols = () => {
      if (!searchFields) return;

      const rows = searchFields?.rows;
      return rows?.map((row, i) => (
        <div
          key={i}
          style={{ display: "block", paddingTop: 5, paddingBottom: 5 }}
        >
          {row.map((item, j) => (
            <SearchField key={j} field={item as Field} />
          ))}
        </div>
      ));
    };

    const rows = getRowsAndCols();

    return (
      <Fragment>
        {searchError && (
          <Alert className="mt-10" message={searchError} type="error" banner />
        )}
        <Form form={form} onFinish={onSubmit} className="p-3">
          {rows}
        </Form>
        <div className="pb-2" />
      </Fragment>
    );
  },
);

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
  const formRef = useRef<FormInstance>(null);

  useDeepCompareEffect(() => {
    if (!isOpen) return;
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

  const handleSubmit = useCallback(() => {
    formRef.current?.submit();
  }, []);

  const handleClear = useCallback(() => {
    formRef.current?.setFieldsValue({});
    onClear();
  }, [onClear]);

  return (
    <FloatingDrawer
      title={t("filter")}
      isOpen={isOpen}
      onClose={onClose}
      footer={
        <SideSearchFooter
          onClear={handleClear}
          onSubmit={handleSubmit}
          isSearching={isSearching}
        />
      }
    >
      <SideSearchFilterComponent
        ref={formRef}
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
  isSearching,
}: {
  onClear: () => void;
  onSubmit: () => void;
  isSearching: boolean;
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
        loading={isSearching}
        type="primary"
        size={"large"}
        onClick={onSubmit}
        style={{ flex: 1 }}
      >
        {t("applyFilters")}
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
