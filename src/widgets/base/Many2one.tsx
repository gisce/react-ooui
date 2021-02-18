import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { SearchOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { Many2one as Many2oneOoui } from "ooui";
import FormItem from "@/common/FormItem";

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
  const { ooui, onOpenDetailClick, onSearchClick } = props;
  const { id, label, nolabel, tooltip } = ooui;

  return (
    <FormItem name={id} label={label} tooltip={tooltip} nolabel={nolabel}>
      <Many2oneInput />
    </FormItem>
  );
};

interface Many2oneInputProps {
  value?: any[];
  onChange?: (value: any[]) => void;
  disabled?: boolean;
}

const Many2oneInput: React.FC<Many2oneInputProps> = (
  props: Many2oneInputProps
) => {
  const { value, onChange, disabled } = props;

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
          disabled={true}
          className="text-black"
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
