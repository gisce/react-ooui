import React from "react";
import PropTypes from "prop-types";
import { Form, Select } from "antd";
import "./Selection.css";

type OptionValue = {
  id: string,
  name: string
};

export const Selection = ({
  id,
  label,
  defaultValue,
  values,
  placeholder,
  onChange,
  ...props
}: {
  id: string;
  label?: string;
  defaultValue?: string;
  values?: OptionValue[];
  placeholder?: string;
  onChange?: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined;
}) => {
  const { Option } = Select;

  const options =
    values &&
    values.length &&
    values.map((v) => {
      return <Option value={v.id}>{v.name}</Option>;
    });

  return (
    <Form.Item label={label}>
      <Select {...props}>{options}</Select>
    </Form.Item>
  );
};

Selection.propTypes = {
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
