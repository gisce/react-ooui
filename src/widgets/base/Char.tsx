import React, { useContext, useState } from "react";
import { Col, Input, Row } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "@gisce/ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { TranslationOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showInfo from "@/ui/InfoDialog";

type CharProps = WidgetProps & {
  isSearchField?: boolean;
};

export const Char = (props: CharProps) => {
  const { ooui, isSearchField = false } = props;
  const { id, readOnly, isPassword, required, translatable } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  let input = (
    <Input
      disabled={readOnly || (translatable && !isSearchField)}
      id={id}
      className={requiredClass}
      maxLength={(ooui as CharOoui).size}
      onBlur={elementHasLostFocus}
    />
  );

  if (isPassword) {
    input = (
      <Input.Password
        disabled={readOnly}
        id={id}
        onBlur={elementHasLostFocus}
      />
    );
  }

  if (translatable && !readOnly && !isSearchField) {
    input = <TranslatableChar field={id} requiredClass={requiredClass} />;
  }

  return (
    <Field required={required} {...props}>
      {input}
    </Field>
  );
};

const TranslatableChar = ({
  value,
  field,
  requiredClass,
  onChange,
}: {
  value?: string;
  field: string;
  requiredClass: string | undefined;
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
  const { t } = useContext(LocaleContext) as LocaleContextType;

  if (!activeId) {
    return (
      <>
        <Row gutter={8} wrap={false}>
          <Col flex="auto">
            <Input
              value={value}
              id={field}
              className={requiredClass}
              onChange={(event: any) => {
                onChange?.(event.target.value);
              }}
              onBlur={elementHasLostFocus}
            />
          </Col>
          <Col flex="32px">
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
          className={requiredClass}
          onChange={(event: any) => {
            onChange?.(event.target.value);
          }}
          onBlur={elementHasLostFocus}
          style={{ cursor: "pointer" }}
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
