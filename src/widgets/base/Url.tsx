import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import Field from "@/common/Field";
import { Char as CharOoui } from "ooui";
import { WidgetProps } from "@/types";
import Config from "@/Config";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
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
  onChange?: (value: string) => void;
}

function UrlInput(props: UrlProps) {
  const { ooui, value, onChange } = props;
  const { id, readOnly, required } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  const [editMode, setEditMode] = useState(false);

  let showInput = editMode;

  if (readOnly && !editMode) {
    showInput = false;
  }

  if (!value && !readOnly) {
    showInput = true;
  }

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Row gutter={8} wrap={false} align="middle">
      {!readOnly ? (
        <Col flex="32px">
          <Button
            icon={editMode ? <CheckOutlined /> : <EditOutlined />}
            onClick={() => {
              if (value && isURL(value!)) {
                setEditMode(!editMode);
              }
            }}
            tabIndex={-1}
          />
        </Col>
      ) : null}
      <Col flex="auto">
        {showInput ? (
          <Input
            id={id}
            onChange={onValueStringChange}
            className={requiredClass}
            value={value}
            onBlur={() => {
              if (value && isURL(value!)) {
                setEditMode(false);
              }
            }}
          />
        ) : (
          <a href={value} style={{ color: "#1890ff" }} target="_blank">
            {value}
          </a>
        )}
      </Col>
    </Row>
  );
}
