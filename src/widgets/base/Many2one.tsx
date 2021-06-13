import React, { useState, useRef } from "react";
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

export const Many2oneInput: React.FC<Many2oneInputProps> = (
  props: Many2oneInputProps
) => {
  const { value, onChange, ooui } = props;
  const { required, relation, readOnly } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>();
  const searchButtonTappedRef = useRef<boolean>(false);

  const triggerChange = (changedValue: any[]) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    triggerChange([undefined, e.target.value]);
  };

  const id = value && value[0];
  const text = (value && value[1]) || "";

  const onElementLostFocus = async () => {
    if (!id && !searching && text.trim().length > 0) {
      // Debounce this event to give time to the search button onClick to set the flag
      await new Promise((resolve) => setTimeout(resolve, 100));

      // If the focus is lost because the user tapped the search button, we don't need to do nothing here
      if (searchButtonTappedRef.current) {
        triggerChange([undefined, ""]);
        return;
      }

      setSearching(true);

      try {
        const results: any[] = await ConnectionProvider.getHandler().execute({
          model: relation,
          action: "name_search",
          payload: text,
        });

        if (results.length > 0) {
          triggerChange(results[0]);
        } else {
          setSearchText(text);
          setShowSearchModal(true);
          triggerChange([undefined, ""]);
        }
      } catch (err) {
        // TODO: handle error
      } finally {
        setSearching(false);
      }
    }
  };

  const fetchNameAndUpdate = async (id: number) => {
    setSearching(true);

    try {
      const value = await ConnectionProvider.getHandler().execute({
        action: "name_get",
        payload: [id],
        model: relation,
      });

      triggerChange([id, value[0][1]]);
    } catch (err) {
      // TODO: handle error
    } finally {
      setSearching(false);
    }
  };

  return (
    <Row gutter={8} wrap={false}>
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
          disabled={id === undefined}
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
            searchButtonTappedRef.current = true;
            setSearchText(text);
            setShowSearchModal(true);
          }}
          tabIndex={-1}
        />
      </Col>
      <SearchModal
        model={relation}
        visible={showSearchModal}
        nameSearch={!id ? searchText : undefined}
        onSelectValue={(id: number) => {
          setShowSearchModal(false);
          fetchNameAndUpdate(id);
          searchButtonTappedRef.current = false;
        }}
        onCloseModal={() => {
          setShowSearchModal(false);
          searchButtonTappedRef.current = false;
        }}
      />
      <FormModal
        model={relation}
        id={value && value[0]}
        visible={showFormModal}
        onSubmitSucceed={(id: number) => {
          setShowFormModal(false);
          fetchNameAndUpdate(id);
        }}
        onCancel={() => {
          setShowFormModal(false);
        }}
        mustClearAfterSave={true}
        readOnly={readOnly}
      />
    </Row>
  );
};
