import React from "react";
import PropTypes from "prop-types";
import { Form as AntForm } from "antd";
import "./FormItem.css";

export const FormItem = ({ label, ...props }) => {
  return (
    <AntForm.Item {...props} label={label}>
      {props.children}
    </AntForm.Item>
  );
};

FormItem.propTypes = {
  /**
   * 	Label text
   */
  label: PropTypes.string,
  /**
   * Form control
   */
  children: PropTypes.object.isRequired,
};
