import React from "react";
import PropTypes from "prop-types";
import { Button as AntButton } from "antd";
import "./Button.css";

export const Button = ({ type, activated, onClick, ...props }) => {
  return (
    <AntButton {...props} type={type} disabled={!activated} onClick={onClick}>
      {props.children}
    </AntButton>
  );
};

Button.propTypes = {
  /**
   * What type should the button be?
   */
  type: PropTypes.oneOf(["primary", "default"]),
  /**
   * Activated state of button
   */
  activated: PropTypes.bool,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
  /**
   * Label
   */
  children: PropTypes.string.isRequired,
};

Button.defaultProps = {
  type: "default",
  activated: true
};
