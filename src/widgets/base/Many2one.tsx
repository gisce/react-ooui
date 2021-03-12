import React, { useState } from "react";
import { Input, Button, Row, Col } from "antd";
import {
  SearchOutlined,
  FolderOpenOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { Many2one as Many2oneOoui } from "ooui";
import Field from "@/common/Field";
import Config from "@/Config";
import { SearchModal } from "@/widgets/modals/SearchModal";
import { FormModal } from "@/widgets/modals/FormModal";
import ConnectionProvider from "@/ConnectionProvider";

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
}

const Many2oneInput: React.FC<Many2oneInputProps> = (
  props: Many2oneInputProps
) => {
  const { value, onChange, ooui } = props;
  const { required, relation, readOnly } = ooui;
  const requiredClass = required ? Config.requiredClass : undefined;
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);

  const triggerChange = (changedValue: any[]) => {
    onChange?.({ ...value, ...changedValue });
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    triggerChange([undefined, e.target.value]);
  };

  const id = value && value[0];
  const text = (value && value[1]) || "";

  const onElementLostFocus = async () => {
    if (!id && !searching && text.trim().length > 0) {
      setSearching(true);

      try {
        const results: any[] = await ConnectionProvider.getHandler().execute({
          model: relation,
          action: "name_search",
        });

        if (results.length > 0) {
          triggerChange(results[0]);
        } else {
          triggerChange([undefined, ""]);
          setShowSearchModal(true);
        }
      } catch (err) {
        // TODO: handle error
      } finally {
        setSearching(false);
      }
    }
  };

  return (
    <Row gutter={8} className="pt-1 pb-1">
      <Col flex="auto">
        <Input
          type="text"
          value={text}
          onChange={onValueStringChange}
          disabled={readOnly}
          className={requiredClass}
          onBlur={onElementLostFocus}
        />
      </Col>
      <Col flex="32px">
        <Button
          icon={<FolderOpenOutlined />}
          disabled={readOnly || id === undefined}
          onClick={() => {
            setShowFormModal(true);
          }}
          tabIndex={-1}
        />
      </Col>
      <Col flex="32px">
        <Button
          icon={searching ? <LoadingOutlined /> : <SearchOutlined />}
          disabled={readOnly || searching}
          onClick={() => {
            setShowSearchModal(true);
          }}
          tabIndex={-1}
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
        onSubmitSucceed={(value: any) => {
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
