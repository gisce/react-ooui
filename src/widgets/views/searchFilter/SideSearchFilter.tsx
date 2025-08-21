import {
  Fragment,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Form, Button, Input, Space, Modal, Dropdown } from "antd";
import {
  useDeepCompareEffect,
  useDeepCompareCallback,
  useDeepCompareMemo,
} from "use-deep-compare";
import {
  SearchOutlined,
  ClearOutlined,
  SaveOutlined,
  PlusOutlined,
  DownOutlined,
} from "@ant-design/icons";

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
import { useSavedSearches } from "@/hooks/useSavedSearches";

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
  onClear?: () => void;
  currentModel?: string;
  context?: any;
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
    const [searchText, setSearchText] = useState("");
    const { t } = useLocale();
    const [topSectionHeight, setTopSectionHeight] = useState(0);
    const topSectionRef = useRef<HTMLDivElement>(null);
    const [fieldAdditionOrder, setFieldAdditionOrder] = useState<string[]>([]);

    useEffect(() => {
      form.setFieldsValue(searchValues);
      const normalized = normalizeValues(searchValues || {});
      setConfirmedValues(normalized);

      // Initialize field addition order from existing values
      const existingFields = Object.keys(normalized).filter(
        (key) => normalized[key] !== undefined,
      );
      const existingFieldIds = existingFields.map((key) =>
        key.replace(/#.*$/, ""),
      );
      setFieldAdditionOrder(existingFieldIds);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValues]);

    useEffect(() => {
      const hasValues =
        Object.keys(confirmedValues).filter(
          (key) => confirmedValues[key] !== undefined,
        ).length > 0;

      if (hasValues && topSectionRef.current) {
        const observer = new ResizeObserver(() => {
          setTopSectionHeight(topSectionRef.current?.offsetHeight || 0);
        });
        observer.observe(topSectionRef.current);
        return () => observer.disconnect();
      } else {
        // Reset height when no values
        setTopSectionHeight(0);
      }
    }, [confirmedValues]);

    useImperativeHandle(ref, () => ({
      submit: form.submit,
      resetFields: form.resetFields,
      setFieldsValue: form.setFieldsValue,
      resetInitialValues: () => {
        setConfirmedValues({});
      },
    }));

    const getFieldsInputs = ({
      searchText,
      onlyInputsWithValue = false,
      isTopSection = false,
    }: {
      searchText?: string;
      onlyInputsWithValue?: boolean;
      isTopSection?: boolean;
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

      const confirmedValuesKeyExist = onlyInputsWithValue
        ? fields.reduce<Record<string, boolean>>((acc, field) => {
            acc[field.id] = currentValues[field.id];
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

          // For top section, sort by addition order
          if (onlyInputsWithValue) {
            const indexA = fieldAdditionOrder.indexOf(fieldA.id);
            const indexB = fieldAdditionOrder.indexOf(fieldB.id);
            return indexA - indexB;
          }

          return normalizeString(fieldA.label).localeCompare(
            normalizeString(fieldB.label),
          );
        })
        .map((item) => {
          const field = item as Field;
          const hasValue = confirmedValuesKeyExist[field.id] === true;

          const hasToHide = onlyInputsWithValue
            ? false
            : searchText && !matchSearch(searchText, field);

          const fieldKey = isTopSection
            ? `${field.id}-top`
            : `${field.id}-bottom`;

          return (
            <div
              key={fieldKey}
              id={`field-container-${fieldKey}`}
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
                  data-field-id={fieldKey}
                >
                  <div style={{ flex: 1 }}>
                    <SearchField key={`sf-${fieldKey}`} field={field} />
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

    const handleFormBlur = useDeepCompareCallback(() => {
      const touchedValues = form.getFieldsValue();
      const normalizedTouchedValues = normalizeValues(touchedValues);
      const prevConfirmedValues = confirmedValues;

      setConfirmedValues(normalizedTouchedValues);
      onChange?.(touchedValues);

      // Find the newly added field
      const prevKeys = Object.keys(prevConfirmedValues).filter(
        (key) => prevConfirmedValues[key] !== undefined,
      );
      const newKeys = Object.keys(normalizedTouchedValues).filter(
        (key) => normalizedTouchedValues[key] !== undefined,
      );

      if (newKeys.length > prevKeys.length) {
        // Find which field was newly added
        const newlyAddedKey = newKeys.find((key) => !prevKeys.includes(key));

        if (newlyAddedKey) {
          const fieldId = newlyAddedKey.replace(/#.*$/, "");

          // Add to addition order if not already there
          setFieldAdditionOrder((prev) => {
            if (!prev.includes(fieldId)) {
              return [...prev, fieldId];
            }
            return prev;
          });

          // Scroll to bottom of top section
          if (topSectionRef.current) {
            setTimeout(() => {
              if (topSectionRef.current) {
                topSectionRef.current.scrollTop =
                  topSectionRef.current.scrollHeight;
              }
            }, 150);
          }
        }
      }

      // Clean up removed fields from addition order
      const removedKeys = prevKeys.filter((key) => !newKeys.includes(key));
      if (removedKeys.length > 0) {
        setFieldAdditionOrder((prev) => {
          const removedFieldIds = removedKeys.map((key) =>
            key.replace(/#.*$/, ""),
          );
          return prev.filter((fieldId) => !removedFieldIds.includes(fieldId));
        });
      }
    }, [form, onChange, confirmedValues]);

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
          onKeyDown={handleKeyPress}
          className="pb-3"
          style={{
            height: "100%",
          }}
        >
          <div style={{ position: "relative", height: "100%" }}>
            {Object.keys(confirmedValues).filter(
              (key) => confirmedValues[key] !== undefined,
            ).length > 0 && (
              <div
                ref={topSectionRef}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  maxHeight: "400px",
                  overflowY: "auto",
                  backgroundColor: "white",
                  zIndex: 5,
                }}
                onScroll={() => {
                  // Close any open dropdowns when scrolling
                  const selectInputs = document.querySelectorAll(
                    ".ant-select-focused .ant-select-selector",
                  );
                  selectInputs.forEach((selector) => {
                    if (selector instanceof HTMLElement) {
                      selector.blur();
                    }
                  });
                }}
              >
                <Space
                  direction="vertical"
                  style={{ rowGap: 0, width: "100%" }}
                >
                  {getFieldsInputs({
                    onlyInputsWithValue: true,
                    isTopSection: true,
                  })}
                </Space>
              </div>
            )}
            <div
              style={{
                position: "absolute",
                top: topSectionHeight > 0 ? topSectionHeight : 0,
                left: 0,
                right: 0,
                padding: "12px",
                backgroundColor: "white",
                borderBottom: "2px solid #bbbbbb",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                zIndex: 5,
                transition: "top 0.2s ease",
              }}
            >
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
            <div
              style={{
                position: "absolute",
                top: topSectionHeight > 0 ? topSectionHeight + 56 : 56,
                left: 0,
                right: 0,
                bottom: 0,
                overflowY: "auto",
                paddingTop: 8,
                paddingBottom: 16,
                transition: "top 0.2s ease",
              }}
              onScroll={() => {
                // Close any open dropdowns when scrolling
                const selectInputs = document.querySelectorAll(
                  ".ant-select-focused .ant-select-selector",
                );
                selectInputs.forEach((selector) => {
                  if (selector instanceof HTMLElement) {
                    selector.blur();
                  }
                });
              }}
            >
              {getFieldsInputs({
                searchText,
              })}
            </div>
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
  const {
    onSubmit,
    isOpen,
    onClose,
    onClear: onClearCallback,
    searchFields,
    fields,
    searchValues,
    currentModel,
    context,
  } = props;
  const sfo = useRef<SearchFilterOoui>();
  const { t } = useLocale();
  const [parsedSearchFields, setParsedSearchFields] = useState<Container>();
  const sideSearchFilterRef = useRef<SideSearchFilterRef>(null);
  const [searchParams, setSearchParams] = useState<any>();

  const paramsToShow = useDeepCompareMemo(() => {
    if (!isOpen) return [];

    if (searchParams) {
      return searchParams;
    }

    if (searchValues && sfo.current?._advancedSearchContainer) {
      return getParamsForFields(
        searchValues,
        sfo.current._advancedSearchContainer,
      );
    }

    // If no advanced container yet but we have searchValues, try to estimate count
    if (searchValues) {
      return Object.keys(searchValues).filter((key) => {
        const value = searchValues[key];
        return (
          value !== null &&
          value !== undefined &&
          value !== "" &&
          (!Array.isArray(value) ||
            value.some((v) => v !== null && v !== undefined && v !== ""))
        );
      });
    }

    return [];
  }, [isOpen, searchParams, searchValues]);

  const filledFieldsCount = useDeepCompareMemo(() => {
    if (!searchValues) return 0;

    const uniqueFieldIds = new Set<string>();

    Object.keys(searchValues).forEach((key) => {
      const value = searchValues[key];
      const hasValue =
        value !== null &&
        value !== undefined &&
        value !== "" &&
        (!Array.isArray(value) ||
          value.some((v) => v !== null && v !== undefined && v !== ""));

      if (hasValue) {
        const fieldId = key.replace(/#.*$/, "");
        uniqueFieldIds.add(fieldId);
      }
    });

    return uniqueFieldIds.size;
  }, [searchValues]);

  const {
    savedSearchName,
    hasChanges,
    showSaveModal,
    saveAsNew,
    tempModalName,
    setShowSaveModal,
    setNewSearchName,
    setTempModalName,
    handleSave,
    handleSaveAsNew,
    handleModalSave,
    handleClear: handleClearSavedSearch,
    renderSavedSearchTitle,
    shouldShowSaveButtons,
    shouldShowSingleSaveButton,
    shouldShowSaveButtonGroup,
    shouldShowSaveAsNew,
  } = useSavedSearches({
    currentModel,
    context,
    searchParams:
      searchParams ||
      (searchValues && sfo.current?._advancedSearchContainer
        ? getParamsForFields(searchValues, sfo.current._advancedSearchContainer)
        : undefined),
    hasActiveFilters: Boolean(filledFieldsCount),
    isOpen,
  });

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    setSearchParams(undefined);
    setTimeout(() => {
      const searchInput = document.querySelector(
        ".ant-input[placeholder*='enterFieldToFilter'], .ant-input[placeholder*='filter']",
      );
      if (searchInput instanceof HTMLElement) {
        searchInput.focus();
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

  const handleOnChange = useDeepCompareCallback(
    (values: any) => {
      const convertedValues = normalizeValues(values);

      if (deepEqual(convertedValues, searchValues)) {
        setSearchParams(undefined);
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

  const handleClear = useDeepCompareCallback(
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

      // Clear the saved search state as well
      handleClearSavedSearch();

      if (onClearCallback) {
        onClearCallback();
      }
    },
    [searchParams, onClearCallback, handleClearSavedSearch],
  );

  const headerButtons = useDeepCompareMemo(() => {
    if (!shouldShowSaveButtons) return null;

    return shouldShowSaveButtonGroup ? (
      <Space.Compact size="small">
        <Button
          size="small"
          icon={<SaveOutlined />}
          onClick={handleSave}
          style={{ height: "24px" }}
        >
          {t("saveSearchFilter")}
        </Button>
        <Dropdown
          menu={{
            items: [
              {
                key: "saveAsNew",
                label: t("saveAsNewSearchFilter"),
                icon: <PlusOutlined />,
              },
            ],
            onClick: ({ key }) => {
              if (key === "saveAsNew") {
                handleSaveAsNew();
              }
            },
          }}
          placement="bottomRight"
        >
          <Button
            size="small"
            icon={<DownOutlined />}
            style={{ height: "24px", minWidth: "24px" }}
          />
        </Dropdown>
      </Space.Compact>
    ) : (
      <Button
        size="small"
        icon={shouldShowSaveAsNew ? <PlusOutlined /> : <SaveOutlined />}
        onClick={shouldShowSaveAsNew ? handleSaveAsNew : handleSave}
        style={{ height: "24px" }}
      >
        {shouldShowSaveAsNew
          ? t("saveAsNewSearchFilter")
          : t("saveSearchFilter")}
      </Button>
    );
  }, [
    shouldShowSaveButtons,
    shouldShowSaveButtonGroup,
    shouldShowSingleSaveButton,
    shouldShowSaveAsNew,
    hasChanges,
    t,
    handleSave,
    handleSaveAsNew,
  ]);

  return (
    <>
      <FloatingDrawer
        title={renderSavedSearchTitle(
          `${t("filter")} (${paramsToShow?.length || 0})`,
        )}
        isOpen={isOpen}
        onClose={onClose}
        headerButtons={headerButtons}
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

      <Modal
        title={saveAsNew ? t("saveAsNewSearchFilter") : t("saveSearchFilter")}
        open={showSaveModal}
        onOk={handleModalSave}
        okButtonProps={{
          disabled: !(tempModalName || savedSearchName)?.trim(),
        }}
        onCancel={useCallback(() => {
          setShowSaveModal(false);
          setNewSearchName("");
          setTempModalName("");
        }, [setShowSaveModal, setNewSearchName, setTempModalName])}
        okText={t("saveSearchFilter")}
        cancelText={t("cancel")}
        afterOpenChange={useCallback(
          (open: boolean) => {
            if (open && !tempModalName) {
              setTempModalName(savedSearchName || "");
            }
          },
          [tempModalName, savedSearchName, setTempModalName],
        )}
      >
        <Form layout="vertical">
          <Form.Item label={t("searchFilterName")} required>
            <Input
              value={tempModalName || savedSearchName || ""}
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  setTempModalName(e.target.value);
                },
                [setTempModalName],
              )}
              onKeyDown={useCallback(
                (e: React.KeyboardEvent) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    handleModalSave();
                  }
                },
                [handleModalSave],
              )}
              placeholder={t("searchFilterNamePlaceholder")}
              ref={useCallback(
                (inputRef: any) => {
                  if (inputRef?.input && showSaveModal) {
                    setTimeout(() => {
                      const htmlInput = inputRef.input;
                      htmlInput.focus();
                      const length = htmlInput.value?.length || 0;
                      htmlInput.setSelectionRange(length, length);
                    }, 0);
                  }
                },
                [showSaveModal],
              )}
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export const SideSearchFooter = ({
  onClear,
  onSubmit,
  searchParams,
  shouldShowSaveButtons,
  shouldShowSingleSaveButton,
  shouldShowSaveButtonGroup,
  handleSave,
  handleSaveAsNew,
  hasChanges,
}: {
  onClear: () => void;
  onSubmit: () => void;
  searchParams?: any[];
  shouldShowSaveButtons?: boolean;
  shouldShowSingleSaveButton?: boolean;
  shouldShowSaveButtonGroup?: boolean;
  handleSave?: () => void;
  handleSaveAsNew?: () => void;
  hasChanges?: boolean;
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
