import React, { CSSProperties, useContext, useState } from "react";
import { Col, Input, Row, theme } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { TranslationOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import showInfo from "@/ui/InfoDialog";
const { useToken } = theme;

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
    input = <TranslatableChar field={id} requiredStyle={requiredStyle} />;
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
}: {
  value?: any;
  ooui: CharOoui;
  requiredStyle: CSSProperties | undefined;
  isSearchField: boolean;
}) => {
  const forceDisabled = Array.isArray(value);
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};
  const { id, readOnly, isPassword, translatable } = ooui;
  const showCount = ooui.size !== undefined && ooui.showCount;

  if (ooui.selectionValues.size) {
    value = ooui.selectionValues.get(value);
  } else if (Array.isArray(value)) {
    value = value[1];
  }

  let input = (
    <Input
      value={value}
      disabled={readOnly || (translatable && !isSearchField)}
      id={id}
      showCount={showCount}
      style={requiredStyle}
      maxLength={ooui.size}
      onBlur={elementHasLostFocus}
    />
  );

  if (isPassword) {
    input = (
      <Input.Password
        value={value}
        disabled={readOnly}
        id={id}
        onBlur={elementHasLostFocus}
      />
    );
  }

  if (forceDisabled) {
    input = <Input value={value} id={id} disabled />;
  }

  return input;
};

const TranslatableChar = ({
  value,
  field,
  requiredStyle,
  onChange,
}: {
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
