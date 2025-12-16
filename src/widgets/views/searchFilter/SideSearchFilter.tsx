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
import { useActionViewContext } from "@/context/ActionViewContext";

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

    useDeepCompareEffect(() => {
      form.setFieldsValue(searchValues);
      const normalized = normalizeValues(searchValues || {});
      setConfirmedValues(normalized);

      const existingFields = Object.keys(normalized).filter(
        (key) => normalized[key] !== undefined,
      );
      const existingFieldIds = existingFields.map((key) =>
        key.replace(/#.*$/, ""),
      );
      setFieldAdditionOrder(existingFieldIds);

      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchValues]);

    useDeepCompareEffect(() => {
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

      if (!deepEqual(normalizedTouchedValues, prevConfirmedValues)) {
        onChange?.(touchedValues);
      }

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
          // Prevent form submission on Enter
          event.preventDefault();

          // Focus on the first visible filtered field
          if (searchFields) {
            const rows = searchFields?.rows;
            const fields = rows?.flatMap((row) => row) as Field[];

            // Sort fields alphabetically like they're displayed
            const sortedFields = fields.sort((a, b) =>
              normalizeString(a.label).localeCompare(normalizeString(b.label)),
            );

            // Find the first field that matches the search
            const firstMatchingField = sortedFields.find(
              (field) => !searchText || matchSearch(searchText, field),
            );

            if (firstMatchingField) {
              const fieldContainerId = `field-container-${firstMatchingField.id}-bottom`;
              const container = document.getElementById(fieldContainerId);
              if (container) {
                const input = container.querySelector(
                  "input, .ant-select-selector",
                );
                if (input instanceof HTMLElement) {
                  input.focus();
                  if (input.classList.contains("ant-select-selector")) {
                    input.click();
                  }
                }
              }
            }
          }
        }
      },
      [searchFields, searchText],
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
  const parsedSearchFieldsRef = useRef<Container>();
  const sideSearchFilterRef = useRef<SideSearchFilterRef>(null);

  // Get global context to sync initially
  const {
    currentSavedSearch: globalCurrentSavedSearch,
    searchParams: globalSearchParams,
  } = useActionViewContext();

  // Internal search params for the sidebar (independent of global context)
  const [internalSearchParams, setInternalSearchParams] = useState<any[]>([]);

  // Internal search values for the sidebar (independent of global context)
  const [internalSearchValues, setInternalSearchValues] = useState<any>({});

  const paramsToShow = useDeepCompareMemo(() => {
    return internalSearchParams;
  }, [internalSearchParams]);

  const titleText = useDeepCompareMemo(() => {
    return `${t("filter")} (${paramsToShow?.length || 0})`;
  }, [t, paramsToShow]);

  const filledFieldsCount = useDeepCompareMemo(() => {
    if (!internalSearchValues) return 0;

    const uniqueFieldIds = new Set<string>();

    Object.keys(internalSearchValues).forEach((key) => {
      const value = internalSearchValues[key];
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
  }, [internalSearchValues]);

  const [internalSavedSearch, setInternalSavedSearch] = useState<any>(null);

  useDeepCompareEffect(() => {
    if (isOpen) {
      setInternalSavedSearch(globalCurrentSavedSearch || null);
    }
  }, [isOpen, globalCurrentSavedSearch]);

  const {
    savedSearchName,
    hasChanges,
    showSaveModal,
    isModalSaveAsNew,
    modalInputValue,
    setShowSaveModal,
    setModalInputValue,
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
    searchParams: internalSearchParams,
    hasActiveFilters: Boolean(filledFieldsCount),
    internalSavedSearch,
    setInternalSavedSearch,
    onSave: useCallback(() => {
      // Trigger tree refresh without closing sidebar
      const newParams = getParamsForFields(
        internalSearchValues,
        sfo.current?._advancedSearchContainer,
      );
      onSubmit({
        params: newParams,
        values: normalizeValues(internalSearchValues),
        closeSidebar: false,
      });
    }, [onSubmit, internalSearchValues]),
  });

  const wasOpenRef = useRef(false);

  useDeepCompareEffect(() => {
    if (isOpen && !wasOpenRef.current) {
      // Opening sidebar for the first time or after being closed
      // Add a small delay to ensure the context has been fully updated
      setTimeout(() => {
        if (!globalCurrentSavedSearch) {
          // No saved search - check if we have search params to preserve
          if (globalSearchParams && globalSearchParams.length > 0) {
            // Preserve existing search params
            setInternalSearchValues(searchValues || {});
            setInternalSearchParams(globalSearchParams);
          } else {
            // No saved search and no params - reset to empty
            setInternalSearchValues({});
            setInternalSearchParams([]);
          }
        } else {
          // Has saved search - load it
          setInternalSearchValues(searchValues || {});
          const initialParams =
            globalSearchParams && globalSearchParams.length > 0
              ? globalSearchParams
              : searchValues && sfo.current?._advancedSearchContainer
              ? getParamsForFields(
                  searchValues,
                  sfo.current._advancedSearchContainer,
                )
              : [];
          setInternalSearchParams(initialParams || []);
        }
      }, 0);
    }

    wasOpenRef.current = isOpen;
  }, [isOpen, globalSearchParams, searchValues, globalCurrentSavedSearch]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
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
    parsedSearchFieldsRef.current = sfo.current._advancedSearchContainer;
  }, [fields, searchFields, isOpen]);

  const onFinish = useCallback(
    (values: any, closeSidebar = true) => {
      const newParams = getParamsForFields(
        values,
        sfo.current?._advancedSearchContainer,
      );
      onSubmit({
        params: newParams,
        values: normalizeValues(values),
        closeSidebar,
      });
    },
    [onSubmit],
  );

  const handleSubmit = useCallback(() => {
    sideSearchFilterRef.current?.submit();
  }, []);

  const handleOnChange = useDeepCompareCallback(
    (values: any) => {
      const convertedValues = normalizeValues(values);
      setInternalSearchValues(convertedValues);

      if (deepEqual(convertedValues, internalSearchValues)) {
        setInternalSearchParams([]);
        return;
      }
      const newParams = getParamsForFields(
        values,
        sfo.current?._advancedSearchContainer,
      );
      setInternalSearchParams(newParams);
    },
    [internalSearchValues],
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
        const newSearchParams = internalSearchParams
          ? internalSearchParams.filter(
              (entry: [string]) =>
                entry[0].replace(/#.*$/, "") !== field.replace(/#.*$/, ""),
            )
          : [];
        setInternalSearchParams(newSearchParams);
        return;
      }

      sideSearchFilterRef.current?.resetFields();
      sideSearchFilterRef.current?.setFieldsValue({});
      sideSearchFilterRef.current?.resetInitialValues?.();

      setInternalSearchParams([]);
      setInternalSearchValues({});

      handleClearSavedSearch();

      if (onClearCallback) {
        onClearCallback();
      }
    },
    [internalSearchParams, onClearCallback, handleClearSavedSearch],
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
        title={renderSavedSearchTitle(titleText)}
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
            key={`${internalSavedSearch?.id || "no-saved-search"}-${
              Object.keys(internalSearchValues).length
            }`}
            ref={sideSearchFilterRef}
            searchFields={parsedSearchFieldsRef.current}
            onSubmit={onFinish}
            searchValues={internalSearchValues}
            onChange={handleOnChange}
            onClear={handleClear}
          />
        )}
      </FloatingDrawer>

      <Modal
        title={
          isModalSaveAsNew ? t("saveAsNewSearchFilter") : t("saveSearchFilter")
        }
        open={showSaveModal}
        onOk={handleModalSave}
        okButtonProps={{
          disabled: !(modalInputValue || savedSearchName)?.trim(),
        }}
        onCancel={useCallback(() => {
          setShowSaveModal(false);
          setModalInputValue("");
        }, [setShowSaveModal, setModalInputValue])}
        okText={t("saveSearchFilter")}
        cancelText={t("cancel")}
        afterOpenChange={useCallback(
          (open: boolean) => {
            if (open && !modalInputValue) {
              setModalInputValue(savedSearchName || "");
            }
          },
          [modalInputValue, savedSearchName, setModalInputValue],
        )}
      >
        <Form layout="vertical">
          <Form.Item label={t("searchFilterName")} required>
            <Input
              value={modalInputValue || savedSearchName || ""}
              onChange={useCallback(
                (e: React.ChangeEvent<HTMLInputElement>) => {
                  setModalInputValue(e.target.value);
                },
                [setModalInputValue],
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
