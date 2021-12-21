import React, { useContext } from "react";
import { Col, Input, Row } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { TranslationOutlined } from "@ant-design/icons";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

export const Char = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, isPassword, required, translatable } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const { t } = useContext(LocaleContext) as LocaleContextType;

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
      <Row gutter={8} wrap={false}>
        <Col flex="auto">{input()}</Col>
        <Col flex="32px">
          <ButtonWithTooltip
            tooltip={t("translate")}
            icon={<TranslationOutlined />}
            onClick={() => {}}
          >
            {t("translate")}
          </ButtonWithTooltip>
        </Col>
      </Row>
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
