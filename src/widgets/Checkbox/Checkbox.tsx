import React from "react";
import PropTypes from "prop-types";
import { Form, Checkbox as AntCheckbox } from "antd";
import "./Checkbox.css";
import { CheckboxChangeEvent } from "antd/lib/checkbox";

export const Checkbox = ({
  id,
  label,
  description,
  checked,
  activated,
  onChange,
  ...props
}: {
  id: string;
  label?: string;
  description?: string;
  checked?: boolean;
  activated?: boolean;
  onChange?: ((e: CheckboxChangeEvent) => void) | undefined;
}) => {
  return (
    <Form.Item label={label}>
      <AntCheckbox
        {...props}
        id={id}
        checked={checked}
        disabled={!activated}
        onChange={onChange}
      >
        {description}
      </AntCheckbox>
    </Form.Item>
  );
};

Checkbox.propTypes = {
  /**
   * The ID for checkbox
   */
  id: PropTypes.string,
  /**
   * Checked value
   */
  checked: PropTypes.bool,
  /**
   * Activated
   */
  activated: PropTypes.bool,
  /**
   * Callback when user checks
   */
  onChange: PropTypes.func,
};

Checkbox.defaultProps = {
  activated: true,
};
