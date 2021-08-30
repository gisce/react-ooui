import React, { useEffect, useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { Char as CharOoui } from "ooui";
import Config from "@/Config";
import { EditOutlined, CheckOutlined } from "@ant-design/icons";

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
              }
            }}
          />
        ) : (
          <a
            href={`${linkPrefix}${value}`}
            style={{ color: "#1890ff" }}
            target="_blank"
          >
            {value}
          </a>
        )}
      </Col>
    </Row>
  );
};
