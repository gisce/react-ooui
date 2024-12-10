import React, { CSSProperties, useContext, useState } from "react";
import { Checkbox as AntCheckbox, Col, Input, Row, theme } from "antd";
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
const { useToken } = theme;

const { defaultAlgorithm, defaultSeed } = theme;

const mapToken = defaultAlgorithm(defaultSeed);

type CharProps = WidgetProps & {
  ooui: CharOoui;
  isSearchField?: boolean;
};

export const Char = (props: CharProps) => {
  const { ooui, isSearchField = false } = props;
  const { id, readOnly, required, translatable } = ooui as CharOoui;
  const { token } = useToken();
  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;

  let input = (
    <CharInput
      ooui={ooui}
      requiredStyle={requiredStyle}
      isSearchField={isSearchField}
    />
  );

  if (translatable && !readOnly && !isSearchField) {
    input = (
      <TranslatableChar ooui={ooui} field={id} requiredStyle={requiredStyle} />
    );
  }

  return (
    <Field required={required} {...props}>
      {input}
    </Field>
  );
};

const CharInput = ({
  value,
  ooui,
  requiredStyle,
  isSearchField,
  onChange,
}: {
  value?: any;
  ooui: CharOoui;
  requiredStyle: CSSProperties | undefined;
  isSearchField: boolean;
  onChange?: (value: string) => void;
}) => {
  const forceDisabled =
    Array.isArray(value) || Boolean(ooui.selectionValues.size);
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};
  const { id, readOnly, isPassword, translatable, required } = ooui;
  const showCount = ooui.size !== undefined && ooui.showCount;
  const { token } = useToken();

  if (ooui.selectionValues.size) {
    value = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    value = value[1];
  }

  const Component = required ? RequiredChar : Input;

  let input = (
    <Component
      addonBefore={
        ooui.prefix ? (
          <div style={{ color: token.colorTextDisabled }}>{ooui.prefix}</div>
        ) : null
      }
      addonAfter={
        ooui.suffix ? (
          <div style={{ color: token.colorTextDisabled }}>{ooui.suffix}</div>
        ) : null
      }
      value={value}
      disabled={readOnly || (translatable && !isSearchField)}
      id={id}
      showCount={showCount}
      maxLength={ooui.size}
      onBlur={elementHasLostFocus}
      onChange={(event: any) => {
        onChange?.(event.target.value);
      }}
    />
  );

  if (isPassword) {
    const PasswordComponent = isPassword ? RequiredPassword : Input.Password;
    input = (
      <PasswordComponent
        addonBefore={
          ooui.prefix ? (
            <div style={{ color: token.colorTextDisabled }}>{ooui.prefix}</div>
          ) : null
        }
        addonAfter={
          ooui.suffix ? (
            <div style={{ color: token.colorTextDisabled }}>{ooui.suffix}</div>
          ) : null
        }
        value={value}
        disabled={readOnly}
        id={id}
        onBlur={elementHasLostFocus}
        onChange={(event: any) => {
          onChange?.(event.target.value);
        }}
      />
    );
  }

  if (forceDisabled) {
    input = (
      <Input
        value={value}
        id={id}
        disabled
        addonBefore={
          ooui.prefix ? (
            <div style={{ color: token.colorTextDisabled }}>{ooui.prefix}</div>
          ) : null
        }
        addonAfter={
          ooui.suffix ? (
            <div style={{ color: token.colorTextDisabled }}>{ooui.suffix}</div>
          ) : null
        }
      />
    );
  }

  return input;
};

const TranslatableChar = ({
  ooui,
  value,
  field,
  requiredStyle,
  onChange,
}: {
  ooui: CharOoui;
  value?: string;
  field: string;
  requiredStyle: CSSProperties | undefined;
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
  const [translationModalVisible, setTranslationModalVisible] = useState(false);
  const { t } = useLocale();

  if (!activeId) {
    return (
      <>
        <Row gutter={8} wrap={false}>
          <Col flex="auto">
            <Input
              addonBefore={
                ooui.prefix ? (
                  <div style={{ color: token.colorTextDisabled }}>
                    {ooui.prefix}
                  </div>
                ) : null
              }
              addonAfter={
                ooui.suffix ? (
                  <div style={{ color: token.colorTextDisabled }}>
                    {ooui.suffix}
                  </div>
                ) : null
              }
              value={value}
              id={field}
              style={requiredStyle}
              onChange={(event: any) => {
                onChange?.(event.target.value);
              }}
              onBlur={elementHasLostFocus}
            />
          </Col>
          <Col flex="none">
            <ButtonWithTooltip
              tooltip={t("translate")}
              icon={<TranslationOutlined />}
              onClick={async () => {
                if (formHasChanges?.()) {
                  showInfo(t("saveBeforeTranslate"));
                } else {
                  showInfo(t("enterTextBeforeTranslate"));
                }
              }}
            >
              {t("translate")}
            </ButtonWithTooltip>
          </Col>
        </Row>
      </>
    );
  }

  return (
    <>
      <div
        onClick={() => {
          if (formHasChanges?.()) {
            showInfo(t("saveBeforeTranslate"));
            return;
          }

          if (!translationModalVisible) {
            setTranslationModalVisible(true);
          }
        }}
      >
        <Input
          value={value}
          disabled={true}
          id={field}
          onChange={(event: any) => {
            onChange?.(event.target.value);
          }}
          onBlur={elementHasLostFocus}
          style={{ cursor: "pointer", pointerEvents: "none", ...requiredStyle }}
        />
      </div>
      <TranslationModal
        id={activeId!}
        model={activeModel}
        field={field}
        visible={translationModalVisible}
        onCloseModal={() => {
          setTranslationModalVisible(false);
        }}
        onSubmitSucceed={() => {
          setTranslationModalVisible(false);
          fetchValues?.();
        }}
      />
    </>
  );
};

const RequiredChar = styled(Input)`
  .ant-input {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;

const RequiredPassword = styled(Input.Password)`
  .ant-input {
    background-color: ${mapToken.colorPrimaryBg};
  }
`;
