import React from "react";
import PropTypes from "prop-types";
import { Input } from "antd";
import "./Char.css";

export const Char = ({
  id,
  value,
  placeholder,
  onChange,
  onPressEnter,
  ...props
}) => {
  return (
    <Input
      {...props}
      id={id}
      placeholder={placeholder}
      onChange={onChange}
      onPressEnter={onPressEnter}
    >
      {props.children}
    </Input>
  );
};

Char.propTypes = {
  /**
   * The ID for input
   */
  id: PropTypes.string,
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
