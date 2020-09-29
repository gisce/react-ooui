import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";
import "./Checkbox.css";

export const Check_box = ({
                         id,
                         value,
                         placeholder,
                         onChange,
                         ...props
                     }) => {
    return (
        <Checkbox
            {...props}
            id={id}
            placeholder={placeholder}
            onChange={onChange}
        >
            {props.children}
        </Checkbox>
    );
};

Check_box.propTypes = {
    /**
     * The ID for input
     */
    id: PropTypes.string,
    /**
     * The input content value
     */
    value: PropTypes.bool,
    /**
     * A placeholder for the input
     */
    placeholder: PropTypes.string,
    /**
     * Callback when user input
     */
    onChange: PropTypes.func,
};
