import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import "./Char.css";

export const Char = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  onPressEnter,
  ...props
}) => {
  return (
    <Form.Item label={label}>
      <Input
        {...props}
        id={id}
        label={label}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onPressEnter={onPressEnter}
      >
        {props.children}
      </Input>
    </Form.Item>
  );
};

Char.propTypes = {
  /**
   * The ID for input
   */
  id: PropTypes.string,
  /**
   * Label
   */
  label: PropTypes.string,
  /**
   * The input content value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * A placeholder for the input
   */
  placeholder: PropTypes.string,
  /**
   * Callback when user input
   */
  onChange: PropTypes.func,
  /**
   * The callback function that is triggered when Enter key is pressed
   */
  onPressEnter: PropTypes.func,
};
