import React from "react";
import PropTypes from "prop-types";
import { Form, Button as AntButton } from "antd";
import "./Button.css";

export const Button = ({
  type,
  activated,
  onClick,
  label,
  ...props
}: {
  type?:
    | "text"
    | "link"
    | "ghost"
    | "default"
    | "primary"
    | "dashed"
    | undefined;
  activated?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  label?: string;
  children?: React.ReactNode,
}) => {
  return (
    <Form.Item label={label}>
      <AntButton {...props} type={type} disabled={!activated} onClick={onClick}>
        {props.children}
      </AntButton>
    </Form.Item>
  );
};

Button.propTypes = {
  /**
   * Label
   */
  label: PropTypes.string,
  /**
   * Button caption
   */
  children: PropTypes.string.isRequired,
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
};

Button.defaultProps = {
  type: "default",
  activated: true,
};
