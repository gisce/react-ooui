import { useContext, useState, memo, useCallback, useMemo } from "react";
import { Col, Input, Row, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Field from "@/common/Field";
import { Char as CharOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { TranslationOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import showInfo from "@/ui/InfoDialog";
import styled from "styled-components";
import { AddonElement } from "@/common/AddonElement";

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

type CharProps = WidgetProps & {
  ooui: CharOoui;
  isSearchField?: boolean;
};

interface BaseInputProps {
  component: React.ComponentType<any>;
  ooui: CharOoui;
  value: string | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

const BaseInput = memo(
  ({
    component: Component,
    ooui,
    value,
    onChange,
    onBlur,
    disabled,
    ...props
  }: BaseInputProps) => {
    const renderAddonElement = useCallback((content?: string) => {
      return content ? <AddonElement content={content} /> : null;
    }, []);

    return (
      <Component
        addonBefore={renderAddonElement(ooui.prefix)}
        addonAfter={renderAddonElement(ooui.suffix)}
        value={value}
        disabled={disabled}
        id={ooui.id}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
      />
    );
  },
);
BaseInput.displayName = "BaseInput";

export const Char = (props: CharProps) => {
  const { ooui, isSearchField = false } = props;
  const { id, readOnly, required, translatable } = ooui as CharOoui;

  let input = <CharInput ooui={ooui} isSearchField={isSearchField} />;

  if (translatable && !readOnly && !isSearchField) {
    input = <TranslatableCharComp ooui={ooui} field={id} />;
  }

  return (
    <ErrorBoundary>
      <Field required={required} {...props}>
        {input}
      </Field>
    </ErrorBoundary>
  );
};

const CharInput = memo(
  ({
    value,
    ooui,
    isSearchField,
    onChange,
  }: {
    value?: any;
    ooui: CharOoui;
    isSearchField: boolean;
    onChange?: (value: string) => void;
  }) => {
    const formContext = useContext(FormContext) as FormContextType;
    const { elementHasLostFocus } = formContext || {};
    const { readOnly, isPassword, translatable, required } = ooui;

    const computedValue = useMemo(() => {
      if (!value) return value;

      if (ooui.selectionValues?.size) {
        return ooui.selectionValues.get(value);
      }
      return Array.isArray(value) ? value[1] : value;
    }, [ooui, value]);

    const isRequired = useMemo(
      () => required && !readOnly,
      [required, readOnly],
    );

    const forceDisabled = useMemo(
      () => Array.isArray(value) || Boolean(ooui.selectionValues?.size),
      [value, ooui.selectionValues],
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
      },
      [onChange],
    );

    if (isPassword) {
      const PasswordComponent = isRequired ? RequiredPassword : Input.Password;
      return (
        <BaseInput
          component={PasswordComponent}
          ooui={ooui}
          value={computedValue}
          disabled={readOnly}
          onBlur={elementHasLostFocus}
          onChange={handleChange}
        />
      );
    }

    const Component = isRequired ? RequiredChar : Input;
    return (
      <BaseInput
        component={Component}
        ooui={ooui}
        value={computedValue}
        disabled={readOnly || forceDisabled || (translatable && !isSearchField)}
        showCount={ooui.size !== undefined && ooui.showCount}
        maxLength={ooui.size}
        onBlur={elementHasLostFocus}
        onChange={handleChange}
      />
    );
  },
);
CharInput.displayName = "CharInput";

const TranslatableCharComp = memo(
  ({
    ooui,
    value,
    field,
    onChange,
  }: {
    ooui: CharOoui;
    value?: string;
    field: string;
    onChange?: (value: string) => void;
  }) => {
    const formContext = useContext(FormContext) as FormContextType;
    const {
      activeId,
      activeModel,
      fetchValues,
      formHasChanges,
      elementHasLostFocus,
    } = formContext || {};
    const [translationModalVisible, setTranslationModalVisible] =
      useState(false);
    const { t } = useLocale();
    const { required, readOnly } = ooui;

    const isRequired = useMemo(
      () => required && !readOnly,
      [required, readOnly],
    );

    const handleChange = useCallback(
      (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(event.target.value);
      },
      [onChange],
    );

    const handleTranslationClick = useCallback(() => {
      if (formHasChanges?.()) {
        showInfo(t("saveBeforeTranslate"));
        return;
      }
      setTranslationModalVisible(true);
    }, [formHasChanges, t]);

    const handleModalClose = useCallback(() => {
      setTranslationModalVisible(false);
    }, []);

    const handleModalSubmit = useCallback(() => {
      setTranslationModalVisible(false);
      fetchValues?.({
        forceRefresh: true,
      });
    }, [fetchValues]);

    const Component = isRequired ? RequiredTranslatableChar : TranslatableChar;

    if (!activeId) {
      const NonActiveComponent = isRequired ? RequiredChar : Input;
      return (
        <Row gutter={8} wrap={false}>
          <Col flex="auto">
            <BaseInput
              component={NonActiveComponent}
              ooui={ooui}
              value={value}
              id={field}
              onChange={handleChange}
              onBlur={elementHasLostFocus}
            />
          </Col>
          <Col flex="none">
            <ButtonWithTooltip
              tooltip={t("translate")}
              icon={<TranslationOutlined />}
              onClick={handleTranslationClick}
            >
              {t("translate")}
            </ButtonWithTooltip>
          </Col>
        </Row>
      );
    }

    return (
      <>
        <div onClick={handleTranslationClick}>
          <BaseInput
            component={Component}
            ooui={ooui}
            value={value}
            disabled={true}
            id={field}
            onChange={handleChange}
            onBlur={elementHasLostFocus}
          />
        </div>
        <TranslationModal
          id={activeId}
          model={activeModel}
          field={field}
          visible={translationModalVisible}
          onCloseModal={handleModalClose}
          onSubmitSucceed={handleModalSubmit}
        />
      </>
    );
  },
);
TranslatableCharComp.displayName = "TranslatableCharComp";

const TranslatableChar = styled(Input)<{ disabled?: boolean }>`
  &.ant-input {
    cursor: ${(props) => (props.disabled ? "pointer" : "text")};
    pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  }
`;

const RequiredTranslatableChar = styled(Input)`
  &.ant-input {
    background-color: ${mapToken.colorPrimaryBg};
    cursor: pointer;
    pointer-events: none;
  }
`;

const RequiredChar = styled(Input)`
  &.ant-input {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;

const RequiredPassword = styled(Input.Password)`
  &.ant-input-affix-wrapper {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;
