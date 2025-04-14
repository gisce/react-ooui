import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Form, Button, FormInstance } from "antd";
import { useDeepCompareEffect } from "use-deep-compare";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";

import {
  SearchFilter as SearchFilterOoui,
  Container,
  Field,
} from "@gisce/ooui";

import { SearchField } from "./SearchField";
import { SearchFields } from "@/types";

import { getParamsForFields, normalizeValues } from "@/helpers/searchHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { FloatingDrawer } from "@/ui/FloatingDrawer";
import debounce from "lodash.debounce";
import deepEqual from "deep-equal";

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

export const SideSearchFilterComponent = forwardRef<any, SideSearchFilterProps>(
  (props, ref) => {
    const { onSubmit, searchValues, searchFields, onChange } = props;
    const [form] = Form.useForm();
    const [internalValues, setInternalValues] = useState<any>({});
    const [searchText, setSearchText] = useState("");
    const { t } = useLocale();

    useEffect(() => {
      form.setFieldsValue(searchValues);
      setInternalValues(normalizeValues(searchValues || {}));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValues]);

    useImperativeHandle(ref, () => ({
      submit: form.submit,
      resetFields: form.resetFields,
      setFieldsValue: form.setFieldsValue,
    }));

    const getFieldsInputs = ({ searchText }: { searchText?: string }) => {
      if (!searchFields) return;

      const rows = searchFields?.rows;

      const fields = rows?.flatMap((row) => row) as Field[];

      const internalValuesKeyExist = Object.keys(internalValues).reduce<
        Record<string, boolean>
      >((acc, key) => {
        const keyWithoutHash = key.replace(/#.*$/, "");
        if (acc[keyWithoutHash] === undefined) {
          acc[keyWithoutHash] = internalValues[key] !== undefined;
        }
        return acc;
      }, {});

      const formValues = normalizeValues(form.getFieldsValue());
      const formValuesKeyExist = Object.keys(formValues).reduce<
        Record<string, boolean>
      >((acc, key) => {
        const keyWithoutHash = key.replace(/#.*$/, "");
        if (acc[keyWithoutHash] === undefined) {
          acc[keyWithoutHash] = formValues[key] !== undefined;
        }
        return acc;
      }, {});

      return fields
        .sort((a, b) => {
          const fieldA = a as Field;
          const fieldB = b as Field;

          const fieldAHasValue = internalValuesKeyExist[fieldA.id] === true;
          const fieldBHasValue = internalValuesKeyExist[fieldB.id] === true;

          // First sort by whether they have values (fields with values come first)
          if (fieldAHasValue !== fieldBHasValue) {
            return fieldAHasValue ? -1 : 1;
          }
          // Then sort alphabetically within each group
          return normalizeString(fieldA.label).localeCompare(
            normalizeString(fieldB.label),
          );
        })
        .map((item, i) => {
          const field = item as Field;
          const hasValue = formValuesKeyExist[field.id] === true;
          const hasToHide = searchText && !matchSearch(searchText, field);

          return (
            <div
              key={i}
              style={{
                display: hasToHide ? "none" : "block",
                paddingTop: 5,
                paddingBottom: 15,
                backgroundColor: hasValue ? "#f0f0f0" : undefined,
                fontWeight: hasValue ? "bold" : undefined,
              }}
            >
              <div style={{ paddingLeft: 18, paddingRight: 18 }}>
                <SearchField key={`sf-${i}`} field={field} />
              </div>
            </div>
          );
        });
    };

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
        <div
          style={{
            marginTop: 12,
            padding: "0 12px 12px 12px",
            borderBottom: "1px solid #f0f0f0",
          }}
        >
          <Input
            placeholder={t("enterFieldToFilter")}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            allowClear
            prefix={<SearchOutlined />}
          />
        </div>
        <div
          style={{
            height: "calc(100vh - 200px)",
            overflowY: "auto",
            marginTop: 8,
          }}
        >
          <Form
            form={form}
            onFinish={onSubmit}
            onFieldsChange={debouncedCheckFieldsChanges as any}
            onKeyPress={handleKeyPress}
            className="pt-3 pb-3"
          >
            {getFieldsInputs({
              searchText,
            })}
          </Form>
          <div className="pb-2" />
        </div>
      </Fragment>
    );
  },
);
SideSearchFilterComponent.displayName = "SideSearchFilterComponent";

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
    // Focus the first input after the drawer animation completes
    setTimeout(() => {
      const firstInput = document.querySelector(
        "#floating-drawer-overlay input",
      );
      if (firstInput instanceof HTMLElement) {
        firstInput.focus();
      }
    }, 300);
  }, [isOpen]);

  useDeepCompareEffect(() => {
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

  const paramsToShow = isOpen
    ? searchParams ||
      getParamsForFields(searchValues, sfo.current?._advancedSearchContainer)
    : [];

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
      {isOpen && (
        <SideSearchFilterComponent
          ref={formRef}
          searchFields={parsedSearchFields}
          onSubmit={onFinish}
          searchValues={searchValues}
          onChange={handleOnChange}
        />
      )}
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
        style={{ width: "100px" }}
      >
        {t("clear")}
      </Button>
    </div>
  );
};

const normalizeString = (str: string) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove diacritics
    .replace(/[^a-zA-Z0-9\s]/g, "") // Remove special characters
    .toLowerCase();
};

const matchSearch = (searchText: string, field: Field) => {
  if (!searchText) return true;

  const normalizedLabel = normalizeString(field.label);
  const normalizedSearch = normalizeString(searchText);
  return normalizedLabel.includes(normalizedSearch);
};
