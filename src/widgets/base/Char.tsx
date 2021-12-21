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

  return (
    <Field required={required} {...props}>
      {isPassword ? (
        <Input.Password disabled={readOnly} id={id} />
      ) : translatable && !readOnly ? (
        <TranslatableInput field={id} requiredClass={requiredClass} />
      ) : (
        <Input
          disabled={readOnly || translatable}
          id={id}
          className={requiredClass}
        />
      )}
    </Field>
  );
};

const TranslatableInput = ({
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
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const formContext = useContext(FormContext) as FormContextType;
  const { activeId, activeModel } = formContext || {};
  const [translationModalVisible, setTranslationModalVisible] = useState(false);

  return (
    <>
      <Row gutter={8} wrap={false}>
        <Col flex="auto">
          <Input
            value={value}
            disabled={true}
            id={field}
            className={requiredClass}
            onChange={(event: any) => {
              onChange?.(event.target.value);
            }}
          />
        </Col>
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
        field={field}
        visible={translationModalVisible}
        onCloseModal={() => {
          // TODO: must reload the form
          setTranslationModalVisible(false);
        }}
      />
    </>
  );
};
