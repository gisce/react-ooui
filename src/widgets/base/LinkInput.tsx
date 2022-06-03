import React, { useContext, useEffect, useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { Char as CharOoui } from "@gisce/ooui";
import Config from "@/Config";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";
import { FormContext, FormContextType } from "@/context/FormContext";

interface LinkInputProps {
  ooui: CharOoui;
  value?: string;
  onChange?: (value: string) => void;
  valueValidator: (value?: string) => boolean;
  linkPrefix?: string;
}

export const LinkInput = (props: LinkInputProps) => {
  const { ooui, value, onChange, valueValidator, linkPrefix = "" } = props;
  const { id, readOnly, required } = ooui as CharOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const formContext = useContext(FormContext) as FormContextType;
  const { elementHasLostFocus } = formContext || {};

  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);

  useEffect(() => {
    if (readOnly && !editMode) {
      setShowInput(false);
    }

    if (!value && !readOnly) {
      setEditMode(true);
      setShowInput(true);
    }
  }, [editMode, readOnly]);

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <Row gutter={8} wrap={false} align="middle">
      {!readOnly ? (
        <Col flex="32px">
          {editMode ? (
            <Button
              icon={<CheckOutlined />}
              onClick={() => {
                if (valueValidator(value)) {
                  setEditMode(false);
                  setShowInput(false);
                }
              }}
              tabIndex={-1}
            />
          ) : (
            <Button
              icon={<EditOutlined />}
              onClick={() => {
                setEditMode(true);
                setShowInput(true);
              }}
              tabIndex={-1}
            />
          )}
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
              if (valueValidator(value)) {
                setEditMode(false);
                setShowInput(false);
                elementHasLostFocus?.();
              }
            }}
          />
        ) : (
          <a
            href={`${linkPrefix}${value}`}
            style={{ color: "#1890ff", paddingRight: 15 }}
            target="_blank"
          >
            {value}
          </a>
        )}
      </Col>
    </Row>
  );
};
