import {
  useState,
  useCallback,
  useMemo,
  useRef,
  useContext,
  useEffect,
} from "react";
import { useDeepCompareEffect } from "use-deep-compare";
import { Select, Divider, Empty, Spin, theme } from "antd";
import { SearchOutlined, PlusOutlined, CloseOutlined } from "@ant-design/icons";
import styled from "styled-components";
import debounce from "lodash/debounce";
import {
  Many2one as Many2oneOoui,
  transformDomainForChildWidget,
} from "@gisce/ooui";
import { useLocale } from "@gisce/react-formiga-components";
import Field from "@/common/Field";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { SearchModal } from "@/widgets/modals/SearchModal";
import { FormModal } from "@/widgets/modals/FormModal";
import ConnectionProvider from "@/ConnectionProvider";
import { FormContext, FormContextType } from "@/context/FormContext";
import { transformPlainMany2Ones } from "@/helpers/formHelper";
import { useErrorNotification } from "@/hooks/useErrorNotification";
import { usePermissionsState } from "@/hooks/usePermissions";
import { Many2oneSuffix } from "./Many2oneSuffix";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";

const { defaultAlgorithm, defaultSeed } = theme;
const mapToken = defaultAlgorithm(defaultSeed);

// Type definitions for single and multi-select modes
type Many2oneSingleValue = [number | undefined, string] | undefined;
type Many2oneMultiValue = Array<[number, string]>;
type Many2oneValue = Many2oneSingleValue | Many2oneMultiValue;

type Props = {
  ooui: Many2oneOoui;
};

export const Many2oneLazy = (props: Props) => {
  const { ooui } = props;
  const { required } = ooui;

  const validator = async (_: unknown, value: unknown) => {
    if (!value) throw new Error();
    if (!Array.isArray(value)) throw new Error();
    if (Array.isArray(value) && !value[0]) throw new Error();
  };

  return (
    <Field required={required} type="array" validator={validator} {...props}>
      <Many2oneLazyInput ooui={ooui} />
    </Field>
  );
};

interface Many2oneLazyWidgetProps {
  showAdvancedSearch?: boolean;
  showCreate?: boolean;
  showOpen?: boolean;
  limit?: number;
}

interface Many2oneLazyInputProps {
  ooui: Many2oneOoui;
  value?: Many2oneValue;
  onChange?: (value: Many2oneValue) => void;
  allowMultiSelect?: boolean;
}

interface SelectOption {
  value: number;
  label: string;
}

const DEFAULT_LIMIT = 5;
const DEBOUNCE_DELAY = 300;

export const Many2oneLazyInput: React.FC<Many2oneLazyInputProps> = (
  props: Many2oneLazyInputProps,
) => {
  const { value, onChange, ooui, allowMultiSelect = false } = props;
  const {
    required,
    relation,
    readOnly,
    context,
    id: fieldName,
    domain: widgetDomain,
  } = ooui;

  const { t } = useLocale();
  const { showErrorNotification } = useErrorNotification();

  const formContext = useContext(FormContext) as FormContextType;
  const {
    domain,
    getFields,
    getContext,
    elementHasLostFocus,
    getAllHierarchyValues,
  } = formContext || {};

  const [options, setOptions] = useState<SelectOption[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [searchDomain, setSearchDomain] = useState<unknown[]>([]);
  const transformedDomain = useRef<unknown[]>([]);
  const hasLoadedInitial = useRef<boolean>(false);
  const fetchedNamesForIds = useRef<Set<number>>(new Set());

  const widgetProps: Many2oneLazyWidgetProps = useMemo(
    () => ({
      showAdvancedSearch: ooui.parsedWidgetProps?.showAdvancedSearch ?? true,
      showCreate: ooui.parsedWidgetProps?.showCreate ?? true,
      showOpen: ooui.parsedWidgetProps?.showOpen ?? true,
      limit: ooui.parsedWidgetProps?.limit ?? DEFAULT_LIMIT,
    }),
    [ooui.parsedWidgetProps],
  );

  const { permissions } = usePermissionsState({
    model: relation,
    permissions: ["create"],
    enabled: true,
  });

  const canCreate = permissions?.create ?? false;

  const disableArrowMenu = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_DISABLE_ARROW_MENU,
  );

  const shouldShowMenu = useMemo(() => {
    let result = true;
    if (disableArrowMenu === true) {
      result = false;
    }
    if (ooui.showMenu !== undefined) {
      result = ooui.showMenu;
    }
    return result;
  }, [ooui.showMenu, disableArrowMenu]);

  // Normalize value based on mode (single vs multi-select)
  const normalizedMultiValue = useMemo((): Array<[number, string]> => {
    if (!allowMultiSelect) return [];
    if (value === undefined || value === null) return [];
    // Check if it's already in multi format: [[id, name], ...]
    if (
      Array.isArray(value) &&
      value.length > 0 &&
      Array.isArray(value[0]) &&
      typeof value[0][0] === "number"
    ) {
      return value as Array<[number, string]>;
    }
    // Single value format [id, name] - convert to multi format
    if (Array.isArray(value) && typeof value[0] === "number") {
      return [[value[0], value[1] as string]];
    }
    return [];
  }, [value, allowMultiSelect]);

  // Handle both array format [id, name] and plain number format (from URL params)
  const normalizedSingleValue = useMemo((): [number, string] | undefined => {
    if (allowMultiSelect) return undefined;
    if (value === undefined || value === null) {
      return undefined;
    }
    // If value is a number (not an array), convert to [id, ""] format
    if (typeof value === "number") {
      return [value, ""] as [number, string];
    }
    // Handle single value format [id, name]
    if (Array.isArray(value) && typeof value[0] === "number") {
      return value as [number, string];
    }
    return undefined;
  }, [value, allowMultiSelect]);

  // Single mode: id and text from normalized value
  const id = normalizedSingleValue?.[0];
  const text = normalizedSingleValue?.[1] ?? "";

  // Multi mode: array of selected ids for the Select component
  const selectedIds = useMemo(
    () => normalizedMultiValue.map((item) => item[0]),
    [normalizedMultiValue],
  );

  const [executeEvalDomain, cancelEvalDomain] = useNetworkRequest(
    ConnectionProvider.getHandler().evalDomain,
  );

  const [executeNameSearch, cancelNameSearch] = useNetworkRequest(
    ConnectionProvider.getHandler().nameSearch,
  );

  const [executeNameGet, cancelNameGet] = useNetworkRequest(
    ConnectionProvider.getHandler().execute,
  );

  useEffect(() => {
    return () => {
      cancelEvalDomain();
      cancelNameSearch();
      cancelNameGet();
    };
  }, [cancelEvalDomain, cancelNameSearch, cancelNameGet]);

  const triggerChange = useCallback(
    (changedValue: Many2oneValue) => {
      onChange?.(changedValue);
      elementHasLostFocus?.();
    },
    [onChange, elementHasLostFocus],
  );

  const triggerMultiChange = useCallback(
    (changedValue: Array<[number, string]>) => {
      onChange?.(changedValue);
      elementHasLostFocus?.();
    },
    [onChange, elementHasLostFocus],
  );

  const parseDomain = useCallback(async () => {
    transformedDomain.current = [];

    if (widgetDomain) {
      transformedDomain.current = await executeEvalDomain({
        domain: widgetDomain,
        values: transformPlainMany2Ones({
          fields: getFields?.() ?? {},
          values: getAllHierarchyValues?.() ?? {},
        }),
        fields: getFields?.() ?? {},
        context: getContext?.() ?? {},
      });
    }

    if (domain && domain.length > 0) {
      transformedDomain.current = transformedDomain.current.concat(
        transformDomainForChildWidget({
          domain,
          widgetFieldName: fieldName,
        }),
      );
    }

    setSearchDomain(transformedDomain.current);
  }, [
    widgetDomain,
    domain,
    fieldName,
    getFields,
    getContext,
    getAllHierarchyValues,
    executeEvalDomain,
  ]);

  const performNameSearch = useCallback(
    async (searchValue: string) => {
      // Guard: don't search if relation is not defined
      if (!relation) {
        console.warn(
          "Many2oneLazy: Cannot perform name_search without relation",
        );
        return;
      }

      setLoading(true);
      try {
        await parseDomain();

        const results: Array<[number, string]> = await executeNameSearch({
          model: relation,
          payload: searchValue,
          context: { ...getContext?.(), ...context },
          limit: widgetProps.limit,
          attrs:
            transformedDomain.current.length > 0
              ? transformedDomain.current
              : undefined,
        });

        const searchOptions: SelectOption[] = results.map(
          ([resultId, resultName]) => ({
            value: resultId,
            label: resultName,
          }),
        );

        setOptions(searchOptions);
      } catch (err) {
        showErrorNotification(err);
      } finally {
        setLoading(false);
      }
    },
    [
      relation,
      context,
      getContext,
      widgetProps.limit,
      parseDomain,
      showErrorNotification,
      executeNameSearch,
    ],
  );

  const debouncedSearch = useMemo(
    () =>
      debounce((searchValue: string) => {
        void performNameSearch(searchValue);
      }, DEBOUNCE_DELAY),
    [performNameSearch],
  );

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  const handleDropdownVisibleChange = useCallback(
    (open: boolean) => {
      setDropdownOpen(open);
      if (open && !hasLoadedInitial.current) {
        hasLoadedInitial.current = true;
        void performNameSearch("");
      }
    },
    [performNameSearch],
  );

  const handleSearch = useCallback(
    (searchValue: string) => {
      debouncedSearch(searchValue);
    },
    [debouncedSearch],
  );

  const fetchNameAndUpdate = useCallback(
    async (selectedId: number) => {
      // Guard: don't fetch if relation is not defined
      if (!relation) {
        console.warn("Many2oneLazy: Cannot fetch name without relation");
        return;
      }

      setLoading(true);
      try {
        const result = await executeNameGet({
          action: "name_get",
          payload: [selectedId],
          model: relation,
          context: { ...getContext?.(), ...context },
        });

        triggerChange([selectedId, result[0][1]]);
      } catch (err) {
        showErrorNotification(err);
      } finally {
        setLoading(false);
      }
    },
    [
      relation,
      context,
      getContext,
      triggerChange,
      showErrorNotification,
      executeNameGet,
    ],
  );

  // Multi-select: fetch names for multiple IDs and update
  const fetchNamesAndUpdate = useCallback(
    async (
      newIds: number[],
      existingItems: Array<[number, string]>,
    ): Promise<void> => {
      if (newIds.length === 0) {
        triggerMultiChange(existingItems);
        return;
      }

      // Guard: don't fetch if relation is not defined
      if (!relation) {
        console.warn("Many2oneLazy: Cannot fetch names without relation");
        return;
      }

      setLoading(true);
      try {
        const result = await executeNameGet({
          action: "name_get",
          payload: newIds,
          model: relation,
          context: { ...getContext?.(), ...context },
        });

        // Build map of id -> name from response
        const nameMap = new Map<number, string>();
        result.forEach((item: [number, string]) => {
          nameMap.set(item[0], item[1]);
        });

        // Create new items from fetched names
        const newItems: Array<[number, string]> = newIds
          .map((itemId) => {
            const name = nameMap.get(itemId);
            return name ? ([itemId, name] as [number, string]) : null;
          })
          .filter((item): item is [number, string] => item !== null);

        // Combine existing items with new items
        triggerMultiChange([...existingItems, ...newItems]);
      } catch (err) {
        showErrorNotification(err);
      } finally {
        setLoading(false);
      }
    },
    [
      relation,
      context,
      getContext,
      triggerMultiChange,
      showErrorNotification,
      executeNameGet,
    ],
  );

  // Single mode: fetch name for ID when text is missing
  useDeepCompareEffect(() => {
    if (!allowMultiSelect && id && !text && relation) {
      if (!fetchedNamesForIds.current.has(id)) {
        fetchedNamesForIds.current.add(id);
        const fetchName = async () => {
          try {
            const result = await executeNameGet({
              action: "name_get",
              payload: [id],
              model: relation,
              context: { ...getContext?.(), ...context },
            });
            if (result?.[0]?.[1]) {
              onChange?.([id, result[0][1]]);
            }
          } catch {
            // Silently fail - the ID is still valid for searching
          }
        };
        fetchName();
      }
    }
  }, [
    allowMultiSelect,
    id,
    text,
    relation,
    context,
    getContext,
    onChange,
    executeNameGet,
  ]);

  // Multi mode: fetch names for IDs with missing names
  useDeepCompareEffect(() => {
    if (allowMultiSelect && relation && normalizedMultiValue.length > 0) {
      const idsWithMissingNames = normalizedMultiValue
        .filter(
          ([itemId, name]) => !name && !fetchedNamesForIds.current.has(itemId),
        )
        .map(([itemId]) => itemId);

      if (idsWithMissingNames.length > 0) {
        idsWithMissingNames.forEach((itemId) =>
          fetchedNamesForIds.current.add(itemId),
        );

        const fetchNames = async () => {
          try {
            const result = await executeNameGet({
              action: "name_get",
              payload: idsWithMissingNames,
              model: relation,
              context: { ...getContext?.(), ...context },
            });

            // Build map of id -> name from response
            const nameMap = new Map<number, string>();
            result.forEach((item: [number, string]) => {
              nameMap.set(item[0], item[1]);
            });

            // Update existing items with fetched names
            const updatedItems = normalizedMultiValue.map(
              ([itemId, name]): [number, string] => {
                if (!name && nameMap.has(itemId)) {
                  return [itemId, nameMap.get(itemId)!];
                }
                return [itemId, name];
              },
            );

            onChange?.(updatedItems);
          } catch {
            // Silently fail - IDs are still valid for searching
          }
        };
        fetchNames();
      }
    }
  }, [
    allowMultiSelect,
    normalizedMultiValue,
    relation,
    context,
    getContext,
    onChange,
    executeNameGet,
  ]);

  // Single mode: handle value change
  const handleSingleChange = useCallback(
    (selectedValue: number | undefined) => {
      if (selectedValue === undefined) {
        triggerChange([undefined, ""]);
        void performNameSearch("");
      } else {
        void fetchNameAndUpdate(selectedValue);
      }
    },
    [triggerChange, fetchNameAndUpdate, performNameSearch],
  );

  // Multi mode: handle selection changes
  const handleMultiChange = useCallback(
    (selectedValues: number[]) => {
      // Find which IDs are new (not in current selection)
      const currentIds = new Set(
        normalizedMultiValue.map(([itemId]) => itemId),
      );
      const newIds = selectedValues.filter((itemId) => !currentIds.has(itemId));

      // Keep existing items that are still selected
      const existingItems = normalizedMultiValue.filter(([itemId]) =>
        selectedValues.includes(itemId),
      );

      // Fetch names for new IDs
      void fetchNamesAndUpdate(newIds, existingItems);
    },
    [normalizedMultiValue, fetchNamesAndUpdate],
  );

  // Remove a single item in multi-select mode
  const handleRemoveItem = useCallback(
    (itemIdToRemove: number) => {
      const updatedItems = normalizedMultiValue.filter(
        ([itemId]) => itemId !== itemIdToRemove,
      );
      triggerMultiChange(updatedItems);
    },
    [normalizedMultiValue, triggerMultiChange],
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      // Only handle backspace clear in single mode
      if (!allowMultiSelect && event.code === "Backspace" && id !== undefined) {
        event.preventDefault();
        event.stopPropagation();
        triggerChange([undefined, ""]);
        void performNameSearch("");
      }
    },
    [allowMultiSelect, id, triggerChange, performNameSearch],
  );

  const handleAdvancedSearchClick = useCallback(() => {
    setDropdownOpen(false);
    setShowSearchModal(true);
  }, []);

  const handleCreateClick = useCallback(() => {
    setDropdownOpen(false);
    setShowFormModal(true);
  }, []);

  const handleSearchModalSelect = useCallback(
    async (ids: number[]) => {
      setShowSearchModal(false);
      if (ids.length === 0) return;

      if (allowMultiSelect) {
        // Multi mode: add selected IDs to existing selection
        const currentIds = new Set(
          normalizedMultiValue.map(([itemId]) => itemId),
        );
        const newIds = ids.filter((itemId) => !currentIds.has(itemId));
        void fetchNamesAndUpdate(newIds, normalizedMultiValue);
      } else {
        // Single mode: just select the first one
        await fetchNameAndUpdate(ids[0]);
      }
    },
    [
      allowMultiSelect,
      normalizedMultiValue,
      fetchNameAndUpdate,
      fetchNamesAndUpdate,
    ],
  );

  const handleSearchModalClose = useCallback(() => {
    setShowSearchModal(false);
  }, []);

  const handleFormModalSuccess = useCallback(
    (createdId?: number) => {
      setShowFormModal(false);
      if (createdId) {
        void fetchNameAndUpdate(createdId);
      }
    },
    [fetchNameAndUpdate],
  );

  const handleFormModalCancel = useCallback(() => {
    setShowFormModal(false);
  }, []);

  const dropdownRender = useCallback(
    (menu: React.ReactNode) => (
      <DropdownContainer>
        {menu}
        {(widgetProps.showAdvancedSearch ||
          (widgetProps.showCreate && canCreate)) && (
          <DropdownFooter>
            <StyledDivider />
            {widgetProps.showAdvancedSearch && (
              <DropdownOption onClick={handleAdvancedSearchClick}>
                <SearchOutlined /> {t("advanced_search")}
              </DropdownOption>
            )}
            {widgetProps.showCreate && canCreate && (
              <DropdownOption onClick={handleCreateClick}>
                <PlusOutlined /> {t("createNewRecord")}
              </DropdownOption>
            )}
          </DropdownFooter>
        )}
      </DropdownContainer>
    ),
    [
      widgetProps.showAdvancedSearch,
      widgetProps.showCreate,
      canCreate,
      handleAdvancedSearchClick,
      handleCreateClick,
      t,
    ],
  );

  const notFoundContent = useMemo(() => {
    if (loading) {
      return <Spin size="small" />;
    }
    return (
      <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description={t("no_results")}
      />
    );
  }, [loading, t]);

  const labelRender = useCallback(
    (labelProps: { label?: React.ReactNode; value?: string | number }) => {
      if (labelProps.value && text) {
        return <SelectedValue>{text}</SelectedValue>;
      }
      return <>{labelProps.label}</>;
    },
    [text],
  );

  // Tag renderer for multi-select mode
  const tagRender = useCallback(
    (tagProps: {
      label: React.ReactNode;
      value: number;
      closable: boolean;
      onClose: () => void;
    }) => {
      const { value: tagValue, closable, onClose } = tagProps;
      // Find the name for this ID from normalizedMultiValue
      const item = normalizedMultiValue.find(([itemId]) => itemId === tagValue);
      const displayName = item?.[1] || `ID: ${tagValue}`;

      const handleClose = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        handleRemoveItem(tagValue);
        onClose();
      };

      return (
        <SelectedTag>
          <span>{displayName}</span>
          {closable && !readOnly && (
            <CloseButton onClick={handleClose}>
              <CloseOutlined />
            </CloseButton>
          )}
        </SelectedTag>
      );
    },
    [normalizedMultiValue, handleRemoveItem, readOnly],
  );

  const CustomSelect: typeof Select =
    required && !readOnly ? RequiredSelect : Select;

  const shouldHideInput = !allowMultiSelect && !dropdownOpen && !!id;

  return (
    <>
      <SelectWrapper $hideInput={shouldHideInput}>
        <CustomSelect
          showSearch
          allowClear={false}
          open={dropdownOpen}
          mode={allowMultiSelect ? "multiple" : undefined}
          value={allowMultiSelect ? selectedIds : id}
          loading={loading}
          disabled={readOnly}
          filterOption={false}
          onSearch={handleSearch}
          onChange={
            allowMultiSelect
              ? (handleMultiChange as (value: unknown) => void)
              : (handleSingleChange as (value: unknown) => void)
          }
          onDropdownVisibleChange={handleDropdownVisibleChange}
          onKeyDown={handleKeyDown}
          dropdownRender={dropdownRender}
          notFoundContent={notFoundContent}
          options={options}
          labelRender={allowMultiSelect ? undefined : labelRender}
          tagRender={allowMultiSelect ? tagRender : undefined}
          suffixIcon={
            !allowMultiSelect && id && widgetProps.showOpen ? (
              <Many2oneSuffix
                id={id}
                model={relation}
                context={{ ...getContext?.(), ...context }}
                openOnly={!shouldShowMenu}
              />
            ) : undefined
          }
        >
          {!allowMultiSelect && id && text && (
            <Select.Option key={id} value={id}>
              {text}
            </Select.Option>
          )}
          {allowMultiSelect &&
            normalizedMultiValue.map(([itemId, itemName]) => (
              <Select.Option key={itemId} value={itemId}>
                {itemName || `ID: ${itemId}`}
              </Select.Option>
            ))}
        </CustomSelect>
      </SelectWrapper>
      <SearchModal
        model={relation}
        domain={searchDomain}
        context={{ ...getContext?.(), ...context }}
        visible={showSearchModal}
        canCreate={canCreate && widgetProps.showCreate}
        onSelectValues={handleSearchModalSelect}
        onCloseModal={handleSearchModalClose}
      />
      <FormModal
        model={relation}
        parentContext={{ ...getContext?.(), ...context }}
        visible={showFormModal}
        onSubmitSucceed={handleFormModalSuccess}
        onCancel={handleFormModalCancel}
      />
    </>
  );
};

const RequiredSelect = styled(Select)`
  &.ant-select:not(.ant-select-customize-input) .ant-select-selector {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;

const StyledDivider = styled(Divider)`
  margin: 4px 0;
`;

const DropdownContainer = styled.div`
  &:has(${() => DropdownFooter}:hover) {
    .ant-select-item-option-active:not(:hover) {
      background-color: transparent;
    }
  }
`;

const DropdownFooter = styled.div``;

const DropdownOption = styled.div`
  min-height: 26px;
  padding: 0px 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  line-height: 22px;
  box-sizing: border-box;
  border-radius: ${mapToken.borderRadiusSM}px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`;

const SelectedValue = styled.span`
  user-select: none;
`;

const SelectWrapper = styled.div<{ $hideInput: boolean }>`
  .ant-select-selection-search-input {
    ${({ $hideInput }) =>
      $hideInput &&
      `
      caret-color: transparent !important;
      color: transparent !important;
    `}
  }
`;

const SelectedTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px 8px;
  background-color: ${mapToken.colorFillSecondary};
  border-radius: ${mapToken.borderRadiusSM}px;
  font-size: ${mapToken.fontSize}px;
  line-height: 1.4;
  margin: 2px 4px 2px 0;
`;

const CloseButton = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 10px;
  color: ${mapToken.colorTextSecondary};
  margin-left: 2px;

  &:hover {
    color: ${mapToken.colorText};
  }
`;
