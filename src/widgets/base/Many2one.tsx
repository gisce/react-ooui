import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { SearchOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { Many2one as Many2oneOoui } from "ooui";
import Field from "@/common/Field";
import Config from "@/Config";

type Props = {
  ooui: Many2oneOoui;
  onOpenDetailClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
  onSearchClick?:
    | ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void)
    | undefined;
};

export const Many2one = (props: Props) => {
  const { ooui } = props;
  return (
    <Field {...props}>
      <Many2oneInput ooui={ooui} />
    </Field>
  );
};

interface Many2oneInputProps {
  ooui: Many2oneOoui;
  value?: any[];
  onChange?: (value: any[]) => void;
  disabled?: boolean;
}

const Many2oneInput: React.FC<Many2oneInputProps> = (
  props: Many2oneInputProps
) => {
  const { value, onChange, disabled, ooui } = props;
  const { required } = ooui;
  const requiredClass = required ? Config.requiredClass : undefined;

  const [m2oValue, setM2oValue] = useState<any[]>();

  const triggerChange = (changedValue: any[]) => {
    if (onChange) {
    }
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  return (
    <Row gutter={8} className="pt-1 pb-1">
      <Col flex="auto">
        <Input
          type="text"
          value={value && value[1]}
          onChange={onValueStringChange}
          disabled={disabled}
          className={requiredClass}
        />
      </Col>
      <Col flex="32px">
        <Button icon={<FolderOpenOutlined />} disabled={disabled} />
      </Col>
      <Col flex="32px">
        <Button icon={<SearchOutlined />} disabled={disabled} />
      </Col>
    </Row>
  );
};
