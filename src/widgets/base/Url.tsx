import React, { useState } from "react";
import { Input } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import isURL from "validator/lib/isURL";

export const Url = (props: WidgetProps) => {
  const { ooui } = props;
  const { required } = ooui as CharOoui;

  return (
    <Field required={required} {...props}>
      <UrlInput ooui={ooui as CharOoui} />
    </Field>
  );
};

interface UrlProps {
  ooui: CharOoui;
  value?: string;
}

function UrlInput(props: UrlProps) {
  const { ooui, value } = props;
  const { id, readOnly, required } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  const [editMode, setEditMode] = useState(false);

  function handleClick(e: any) {
    e.preventDefault();
    if (readOnly) {
      window.open(value, "_blank");
    } else {
      setEditMode(true);
    }
  }

  let showInput = editMode;

  if (readOnly && !editMode) {
    showInput = false;
  }

  if (!isURL(value!) && !editMode) {
    showInput = true;
  }

  return (
    <Field required={required} {...props}>
      {showInput ? (
        <Input
          id={id}
          className={requiredClass}
          value={value}
          onBlur={() => {
            setEditMode(false);
          }}
        />
      ) : (
        <a href={value} onClick={handleClick}>
          {value}
        </a>
      )}
    </Field>
  );
}
