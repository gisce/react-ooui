import React from "react";
import PropTypes from "prop-types";
import { Form, Input } from "antd";
import "./ManyToOne.css";

export const ManyToOne = ({
  id,
  label,
  defaultValue,
  values,
  placeholder,
  onSearch,
  ...props
}) => {
  return (
    <Form.Item label={label}>
      <Input.Search
        placeholder={placeholder}
        onSearch={onSearch}
        //style={{ width: 200 }}
    / >
    </Form.Item>
  );
};

ManyToOne.propTypes = {
  /**
   * The ID for selection
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
   * Callback when user clicks search button
   */
  onSearch: PropTypes.func,
};
