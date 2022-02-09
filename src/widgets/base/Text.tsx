import React, { useContext, useState } from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import Config from "@/Config";
import { Text as TextOoui } from "ooui";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";

const { TextArea } = Input;

type Props = {
  ooui: TextOoui;
};

const Text = (props: Props) => {
  const { ooui } = props;
  const { id, readOnly, required, height, translatable } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Field required={required} {...props}>
      {translatable ? (
        <TranslatableText
          field={id}
          requiredClass={requiredClass}
          height={height}
        />
      ) : (
        <TextArea
          disabled={readOnly || translatable}
          className={requiredClass}
          style={{ height: height ? height + "px" : "100%" }}
          rows={4}
        />
      )}
    </Field>
  );
};

const TranslatableText = ({
  value,
  field,
  requiredClass,
  onChange,
  height,
}: {
  value?: string;
  field: string;
  requiredClass: string | undefined;
  height: number | undefined;
  onChange?: (value: string) => void;
}) => {
  const formContext = useContext(FormContext) as FormContextType;
  const { activeId, activeModel, fetchValues } = formContext || {};
  const [translationModalVisible, setTranslationModalVisible] = useState(false);

  return (
    <>
      <div
        onClick={() => {
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
          }}
          id={field}
          disabled={true}
          className={requiredClass}
          rows={4}
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
