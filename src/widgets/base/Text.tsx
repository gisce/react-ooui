import React, { CSSProperties, useContext, useState } from "react";
import { Input, Row, theme } from "antd";
import Field from "@/common/Field";
import { Text as TextOoui } from "@gisce/ooui";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { TranslationOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import showInfo from "@/ui/InfoDialog";
const { useToken } = theme;

const { TextArea } = Input;

type Props = {
  ooui: TextOoui;
};

const Text = (props: Props) => {
  const { ooui } = props;
  const { id, readOnly, required, height, translatable } = ooui;
  const { token } = useToken();
  const requiredStyle =
    required && !readOnly
      ? { backgroundColor: token.colorPrimaryBg }
      : undefined;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  return (
    <Field required={required} {...props}>
      {translatable ? (
        <TranslatableText
          field={id}
          height={height}
          requiredStyle={requiredStyle}
        />
      ) : (
        <TextArea
          disabled={readOnly || translatable}
          style={{
            minHeight: height ? height + "px" : "100%",
            ...requiredStyle,
          }}
          rows={4}
          onBlur={elementHasLostFocus}
        />
      )}
    </Field>
  );
};

const TranslatableText = ({
  value,
  field,
  requiredStyle,
  onChange,
  height,
}: {
  value?: string;
  field: string;
  requiredStyle: CSSProperties | undefined;
  height: number | undefined;
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
          <TextArea
            value={value}
            onChange={(event: any) => {
              onChange?.(event.target.value);
            }}
            style={{
              height: height ? height + "px" : "100%",
              ...requiredStyle,
            }}
            id={field}
            rows={4}
            onBlur={elementHasLostFocus}
          />
        </Row>
        <Row justify="end" style={{ paddingTop: 5 }}>
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
        <TextArea
          value={value}
          onChange={(event: any) => {
            onChange?.(event.target.value);
          }}
          style={{
            height: height ? height + "px" : "100%",
            cursor: "pointer",
            pointerEvents: "none",
            ...requiredStyle,
          }}
          id={field}
          disabled={true}
          rows={4}
          onBlur={elementHasLostFocus}
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

export default Text;
