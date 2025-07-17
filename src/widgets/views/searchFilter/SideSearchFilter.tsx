import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Form, Button, Input, Space } from "antd";
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
  onClear?: (field?: string, formValues?: any) => void;
};

export const SideSearchFilterComponent = forwardRef<any, SideSearchFilterProps>(
  (props, ref) => {
    const { onSubmit, searchValues, searchFields, onChange, onClear } = props;
    const [form] = Form.useForm();
    const [confirmedValues, setConfirmedValues] = useState<any>({});
    const [initialConfirmedValues, setInitialConfirmedValues] = useState<any>(
      {},
    );
    const [searchText, setSearchText] = useState("");
    const { t } = useLocale();

    useEffect(() => {
      form.setFieldsValue(searchValues);
      const normalized = normalizeValues(searchValues || {});
      setConfirmedValues(normalized);
      setInitialConfirmedValues(normalized);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValues]);

    useImperativeHandle(ref, () => ({
      submit: form.submit,
      resetFields: form.resetFields,
      setFieldsValue: form.setFieldsValue,
      resetInitialValues: () => {
        setInitialConfirmedValues({});
        setConfirmedValues({});
      },
    }));

    const getFieldsInputs = ({
      searchText,
      onlyInputsWithValue = false,
    }: {
      searchText?: string;
      onlyInputsWithValue?: boolean;
    }) => {
      if (!searchFields) return;

      const rows = searchFields?.rows;

      const fields = rows?.flatMap((row) => row) as Field[];

      const currentValues = Object.keys(confirmedValues).reduce<
        Record<string, boolean>
      >((acc, key) => {
        const keyWithoutHash = key.replace(/#.*$/, "");
        if (acc[keyWithoutHash] === undefined) {
          acc[keyWithoutHash] = confirmedValues[key] !== undefined;
        }
        return acc;
      }, {});

      const initialValues = Object.keys(initialConfirmedValues).reduce<
        Record<string, boolean>
      >((acc, key) => {
        const keyWithoutHash = key.replace(/#.*$/, "");
        if (acc[keyWithoutHash] === undefined) {
          acc[keyWithoutHash] = initialConfirmedValues[key] !== undefined;
        }
        return acc;
      }, {});

      const confirmedValuesKeyExist = onlyInputsWithValue
        ? fields.reduce<Record<string, boolean>>((acc, field) => {
            acc[field.id] = currentValues[field.id] && initialValues[field.id];
            return acc;
          }, {})
        : currentValues;

      return fields
        .filter((field) => {
          if (onlyInputsWithValue) {
            return confirmedValuesKeyExist[field.id] === true;
          }
          return true;
        })
        .sort((a, b) => {
          const fieldA = a as Field;
          const fieldB = b as Field;

          return normalizeString(fieldA.label).localeCompare(
            normalizeString(fieldB.label),
          );
        })
        .map((item, i) => {
          const field = item as Field;
          const hasValue = confirmedValuesKeyExist[field.id] === true;

          const hasInitialValue = Object.keys(initialConfirmedValues).some(
            (key) =>
              key.replace(/#.*$/, "") === field.id &&
              initialConfirmedValues[key] !== undefined,
          );
          const hasToHide = onlyInputsWithValue
            ? false
            : (searchText && !matchSearch(searchText, field)) ||
              hasInitialValue;

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
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    gap: "8px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <SearchField key={`sf-${i}`} field={field} />
                  </div>
                  {hasValue && (
                    <Button
                      icon={<ClearOutlined />}
                      tabIndex={-1}
                      type="default"
                      style={{
                        height: 28,
                      }}
                      onClick={() => {
                        onClear?.(field.id, form.getFieldsValue());
                        handleFormBlur();
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          );
        });
    };

    const handleFormBlur = useCallback(() => {
      const touchedValues = form.getFieldsValue();
      const normalizedTouchedValues = normalizeValues(touchedValues);
      setConfirmedValues(normalizedTouchedValues);
      onChange?.(touchedValues);
    }, [form, onChange]);

    const handleKeyPress = useCallback(
      (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
          form.submit();
        }
      },
      [form],
    );

    return (
      <Fragment>
        <Form
          form={form}
          onFinish={onSubmit}
          onBlurCapture={handleFormBlur}
          onKeyPress={handleKeyPress}
          className="pb-3"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              borderBottom: "1px solid #f0f0f0",
              flexShrink: 0,
            }}
          >
            <Space direction="vertical" style={{ rowGap: 0, width: "100%" }}>
              {getFieldsInputs({
                onlyInputsWithValue: true,
              })}
            </Space>
            <div style={{ padding: "12px 12px 12px 12px" }}>
              <Input
                placeholder={t("enterFieldToFilter")}
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                allowClear
                prefix={<SearchOutlined />}
                name={undefined}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                  }
                }}
              />
            </div>
          </div>
          <div
            style={{
              flex: 1,
              overflowY: "auto",
              marginTop: 8,
              paddingBottom: 16,
            }}
          >
            {getFieldsInputs({
              searchText,
            })}
          </div>
        </Form>
      </Fragment>
    );
  },
);
SideSearchFilterComponent.displayName = "SideSearchFilterComponent";

type SideSearchFilterRef = {
  resetInitialValues: () => void;
  submit: () => void;
  resetFields: () => void;
  setFieldsValue: (values: any) => void;
};

export const SideSearchFilter = (props: SideSearchFilterContainerProps) => {
  const { onSubmit, isOpen, onClose, searchFields, fields, searchValues } =
    props;
  const sfo = useRef<SearchFilterOoui>();
  const { t } = useLocale();
  const [parsedSearchFields, setParsedSearchFields] = useState<Container>();
  const sideSearchFilterRef = useRef<SideSearchFilterRef>(null);
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
    sideSearchFilterRef.current?.submit();
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

  const handleClear = useCallback(
    (field?: string, formValues: any = {}) => {
      if (field) {
        const filteredValues = { ...formValues };

        Object.entries(formValues).forEach(([key]) => {
          if (key.replace(/#.*$/, "") === field.replace(/#.*$/, "")) {
            filteredValues[key] = undefined;
          }
        });

        sideSearchFilterRef.current?.setFieldsValue(filteredValues);
        const newSearchParams = searchParams?.filter(
          (entry: [string]) =>
            entry[0].replace(/#.*$/, "") !== field.replace(/#.*$/, ""),
        );
        setSearchParams(newSearchParams);
        return;
      }

      sideSearchFilterRef.current?.resetFields();
      sideSearchFilterRef.current?.setFieldsValue({});
      sideSearchFilterRef.current?.resetInitialValues?.();
      setSearchParams([]);
    },
    [searchParams],
  );

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
          ref={sideSearchFilterRef}
          searchFields={parsedSearchFields}
          onSubmit={onFinish}
          searchValues={searchValues}
          onChange={handleOnChange}
          onClear={handleClear}
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
        onClick={() => {
          onClear();
        }}
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
