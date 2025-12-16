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
import { SearchOutlined, PlusOutlined } from "@ant-design/icons";
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
  limit?: number;
}

interface Many2oneLazyInputProps {
  ooui: Many2oneOoui;
  value?: [number | undefined, string];
  onChange?: (value: [number | undefined, string]) => void;
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
  const { value, onChange, ooui } = props;
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
  const fetchedNameForId = useRef<number | undefined>(undefined);

  const widgetProps: Many2oneLazyWidgetProps = useMemo(
    () => ({
      showAdvancedSearch: ooui.parsedWidgetProps?.showAdvancedSearch ?? true,
      showCreate: ooui.parsedWidgetProps?.showCreate ?? true,
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

  // Handle both array format [id, name] and plain number format (from URL params)
  const normalizedValue = useMemo(() => {
    if (value === undefined || value === null) {
      return undefined;
    }
    // If value is a number (not an array), convert to [id, ""] format
    if (typeof value === "number") {
      return [value, ""] as [number, string];
    }
    return value;
  }, [value]);

  const id = normalizedValue?.[0];
  const text = normalizedValue?.[1] ?? "";

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
    (changedValue: [number | undefined, string]) => {
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

  useDeepCompareEffect(() => {
    if (id && !text && relation && fetchedNameForId.current !== id) {
      fetchedNameForId.current = id;
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
  }, [id, text, relation, context, getContext, onChange, executeNameGet]);

  const handleChange = useCallback(
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

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (event.code === "Backspace" && id !== undefined) {
        event.preventDefault();
        event.stopPropagation();
        triggerChange([undefined, ""]);
        void performNameSearch("");
      }
    },
    [id, triggerChange, performNameSearch],
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
      if (ids.length > 0) {
        await fetchNameAndUpdate(ids[0]);
      }
    },
    [fetchNameAndUpdate],
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

  const CustomSelect: typeof Select =
    required && !readOnly ? RequiredSelect : Select;

  const shouldHideInput = !dropdownOpen && !!id;

  return (
    <>
      <SelectWrapper $hideInput={shouldHideInput}>
        <CustomSelect
          showSearch
          allowClear={false}
          open={dropdownOpen}
          value={id}
          loading={loading}
          disabled={readOnly}
          filterOption={false}
          onSearch={handleSearch}
          onChange={handleChange}
          onDropdownVisibleChange={handleDropdownVisibleChange}
          onKeyDown={handleKeyDown}
          dropdownRender={dropdownRender}
          notFoundContent={notFoundContent}
          options={options}
          labelRender={labelRender}
          suffixIcon={
            id ? (
              <Many2oneSuffix
                id={id}
                model={relation}
                context={{ ...getContext?.(), ...context }}
                openOnly={!shouldShowMenu}
              />
            ) : undefined
          }
        >
          {id && text && (
            <Select.Option key={id} value={id}>
              {text}
            </Select.Option>
          )}
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
