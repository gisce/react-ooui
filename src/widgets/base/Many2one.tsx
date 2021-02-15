import React from "react";
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
      <Row gutter={8}>
        <Col flex="auto">
          <Input disabled={ooui.readOnly} />
        </Col>
        <Col flex="32px">
          <Button
            icon={<FolderOpenOutlined />}
            onClick={onOpenDetailClick}
            disabled={ooui.readOnly}
          />
        </Col>
        <Col flex="32px">
          <Button
            icon={<SearchOutlined />}
            onClick={onSearchClick}
            disabled={ooui.readOnly}
          />
        </Col>
      </Row>
    </FormItem>
  );
};
