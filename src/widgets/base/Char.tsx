import React, { useContext, useState } from "react";
import { Col, Input, Row } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { TranslationOutlined } from "@ant-design/icons";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";

export const Char = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, isPassword, required, translatable } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const formContext = useContext(FormContext) as FormContextType;
  const { activeId, activeModel } = formContext || {};
  const [translationModalVisible, setTranslationModalVisible] = useState(false);

  function input() {
    return (
      <Input
        disabled={readOnly || translatable}
        id={id}
        className={requiredClass}
      />
    );
  }

  function translatableInput() {
    return (
      <>
        <Row gutter={8} wrap={false}>
          <Col flex="auto">{input()}</Col>
          <Col flex="32px">
            <ButtonWithTooltip
              tooltip={t("translate")}
              icon={<TranslationOutlined />}
              onClick={() => {
                // TODO: must ensure that model is previously saved and validated, like a button
                setTranslationModalVisible(true);
              }}
            >
              {t("translate")}
            </ButtonWithTooltip>
          </Col>
        </Row>
        <TranslationModal
          id={activeId!}
          model={activeModel}
          field={id}
          visible={translationModalVisible}
          onCloseModal={() => {
            // TODO: must reload the form
            setTranslationModalVisible(false);
          }}
        />
      </>
    );
  }

  return (
    <Field required={required} {...props}>
      {isPassword ? (
        <Input.Password disabled={readOnly} id={id} />
      ) : translatable ? (
        translatableInput()
      ) : (
        input()
      )}
    </Field>
  );
};
