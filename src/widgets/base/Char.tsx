import React, { useContext, useState } from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { TranslationModal } from "../modals/TranslationModal";
import { FormContext, FormContextType } from "@/context/FormContext";

type CharProps = WidgetProps & {
  isSearchField?: boolean;
};

export const Char = (props: CharProps) => {
  const { ooui, isSearchField = false } = props;
  const { id, readOnly, isPassword, required, translatable } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  let input = (
    <Input
      disabled={readOnly || (translatable && !isSearchField)}
      id={id}
      className={requiredClass}
    />
  );

  if (isPassword) {
    input = <Input.Password disabled={readOnly} id={id} />;
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
        <Input
          value={value}
          disabled={true}
          id={field}
          className={requiredClass}
          onChange={(event: any) => {
            onChange?.(event.target.value);
          }}
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
