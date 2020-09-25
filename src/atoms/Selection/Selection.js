import React from "react";
import PropTypes from "prop-types";
import { Select } from "antd";
import "./Selection.css";

export const Selection = ({
  id,
  defaultValue,
  values,
  placeholder,
  onChange,
  ...props
}) => {
  const { Option } = Select;

  const options =
    values &&
    values.length &&
    values.map((v) => {
      return <Option value={v.id}>{v.name}</Option>;
    });

  return <Select {...props}>{options}</Select>;
};

Selection.propTypes = {
  /**
   * The ID for selection
   */
  id: PropTypes.string,
  /**
   * The input content value
   */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Selection options
   */
  values: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  /**
   * Callback when user input
   */
  onChange: PropTypes.func,
};
