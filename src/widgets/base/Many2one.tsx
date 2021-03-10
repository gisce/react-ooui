import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import { SearchOutlined, FolderOpenOutlined } from "@ant-design/icons";
import { Many2one as Many2oneOoui } from "ooui";
import Field from "@/common/Field";
import Config from "@/Config";
import { SearchModal } from "@/widgets/modals/SearchModal";
import { FormModal } from "@/widgets/modals/FormModal";

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
  const { required, relation } = ooui;
  const requiredClass = required ? Config.requiredClass : undefined;
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);

  const triggerChange = (changedValue: any[]) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const id = value && value[0];

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
        <Button
          icon={<FolderOpenOutlined />}
          disabled={disabled || id === undefined}
          onClick={() => {
            setShowFormModal(true);
          }}
        />
      </Col>
      <Col flex="32px">
        <Button
          icon={<SearchOutlined />}
          disabled={disabled}
          onClick={() => {
            setShowSearchModal(true);
          }}
        />
      </Col>
      <SearchModal
        model={relation}
        visible={showSearchModal}
        onSelectValue={(value) => {
          triggerChange(value);
          setShowSearchModal(false);
        }}
        onCloseModal={() => {
          setShowSearchModal(false);
        }}
      />
      <FormModal
        model={relation}
        id={value && value[0]}
        visible={showFormModal}
        onSubmitSuceed={(value: any) => {
          triggerChange(value);
          setShowFormModal(false);
        }}
        onCancel={() => {
          setShowFormModal(false);
        }}
      />
    </Row>
  );
};
