import React from "react";
import PropTypes from "prop-types";
import { Form, Input, Button, Row, Col } from "antd";
import { SearchOutlined, FolderOpenOutlined } from "@ant-design/icons";
import "./ManyToOne.css";

export const ManyToOne = ({
  id,
  label,
  value,
  placeholder,
  onChange,
  onOpenDetailClick,
  onSearchClick,
  ...props
}) => {
  return (
    <Form.Item label={label}>
      <Input.Group>
        <Row gutter={8}>
          <Col flex="auto">
            <Input placeholder={placeholder} defaultValue={value} onChange={onChange} />
          </Col>
          <Col flex="32px">
            <Button icon={<FolderOpenOutlined />} onClick={onOpenDetailClick} disabled={!value} />
          </Col>
          <Col flex="32px">
            <Button icon={<SearchOutlined />} onClick={onSearchClick} />
          </Col>
        </Row>
      </Input.Group>
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
   * The input default value
   */
  defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  /**
   * Callback when user clicks open detail button
   */
  onOpenDetailClick: PropTypes.func,
  /**
   * Callback when user clicks search button
   */
  onSearchClick: PropTypes.func,
};
