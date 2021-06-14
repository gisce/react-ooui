import React from "react";
import { Row, Col, Button, Input, Space } from "antd";
import Field from "@/common/Field";
import { Binary as BinaryOoui } from "ooui";
import Config from "@/Config";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import {
  FolderOpenOutlined,
  DownloadOutlined,
  ClearOutlined,
  EyeOutlined,
} from "@ant-design/icons";

type Props = {
  ooui: BinaryOoui;
};

export const Binary = (props: Props) => {
  const { ooui } = props;

  return (
    <Field {...props}>
      <BinaryInput ooui={ooui} />
    </Field>
  );
};

interface BinaryInputProps {
  ooui: BinaryOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export const BinaryInput = (props: BinaryInputProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui as BinaryOoui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;

  return (
    <Row gutter={8} wrap={false}>
      <Col flex="auto">
        <Input type="text" disabled={true} className={requiredClass} />
      </Col>
      <Col flex="256px">
        <Space>
          <Button icon={<FolderOpenOutlined />} disabled={readOnly}>
            Select
          </Button>
          <Button icon={<EyeOutlined />} disabled={readOnly}>
            Open
          </Button>
          <ButtonWithTooltip
            tooltip={"Download"}
            disabled={readOnly}
            icon={<DownloadOutlined />}
          />
          <ButtonWithTooltip
            tooltip={"Clear"}
            disabled={readOnly}
            icon={<ClearOutlined />}
          />
        </Space>
      </Col>
    </Row>
  );
};
