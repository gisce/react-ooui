import React, { useContext } from "react";
import { Input, Row } from "antd";
import Field from "@/common/Field";
import Config from "@/Config";
import { Text as TextOoui } from "ooui";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { TranslationOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

const { TextArea } = Input;

type Props = {
  ooui: TextOoui;
};

const Text = (props: Props) => {
  const { ooui } = props;
  const { readOnly, required, height, translatable } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  function input() {
    return (
      <TextArea
        disabled={readOnly || translatable}
        className={requiredClass}
        style={{ height: height ? height + "px" : "100%" }}
        rows={4}
      />
    );
  }

  function translatableInput() {
    return (
      <>
        <Row gutter={8} wrap={false}>
          {input()}
        </Row>
        <Row justify="end" style={{ paddingTop: 5 }}>
          <ButtonWithTooltip
            tooltip="Translate"
            icon={<TranslationOutlined />}
            onClick={() => {}}
          >
            {t("translate")}
          </ButtonWithTooltip>
        </Row>
      </>
    );
  }

  return (
    <Field required={required} {...props}>
      {translatable ? translatableInput() : input()}
    </Field>
  );
};

export default Text;
