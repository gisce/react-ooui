import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Row, Col } from "antd";
import {
  SearchOutlined,
  FolderOpenOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import { Many2one as Many2oneOoui } from "ooui";
import Field from "@/common/Field";
import Config from "@/Config";
import { SearchModal } from "@/widgets/modals/SearchModal";
import { FormModal } from "@/widgets/modals/FormModal";
import ConnectionProvider from "@/ConnectionProvider";
import { Many2oneSuffix } from "./Many2oneSuffix";
import { FormView } from "@/types/index";
import { processValues } from "@/helpers/formHelper";

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
  const { required } = ooui;
  const validator = async (_: any, value: any) => {
    if (!value) throw new Error();
    if (!Array.isArray(value)) throw new Error();
    if (Array.isArray(value) && !value[0]) throw new Error();
  };

  return (
    <Field required={required} type={"array"} validator={validator} {...props}>
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
  const { required, relation, readOnly, domain } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>();
  const searchButtonTappedRef = useRef<boolean>(false);
  const [formView, setFormView] = useState<FormView>();
  const [targetValues, setTargetValues] = useState<any>();

  const id = value && value[0];
  const text = (value && value[1]) || "";

  useEffect(() => {
    if (!Array.isArray(value) && !isNaN(value as any)) {
      fetchNameAndUpdate(value as any);
    }
  }, [value]);

  useEffect(() => {
    if (id && text.length === 0) {
      fetchNameAndUpdate(id);
    }
  }, [value]);

  useEffect(() => {
    if (!id) {
      return;
    }

    fetchFormData();
  }, [id]);

  const triggerChange = (changedValue: any[]) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    triggerChange([undefined, e.target.value]);
  };

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

        if (results.length === 1) {
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

  async function fetchFormData() {
    const formView = await ConnectionProvider.getHandler().getView({
      model: relation,
      type: "form",
    });
    setFormView(formView);
    const { fields, arch } = formView;

    const values = (
      await ConnectionProvider.getHandler().readObjects({
        arch,
        model: relation,
        ids: [id],
        fields,
      })
    )[0];

    setTargetValues({ ...processValues(values, fields), active_id: id });
  }

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

  async function onKeyUp(event: any) {
    if (event.keyCode === 13) {
      event.preventDefault();
      event.stopPropagation();
      await onElementLostFocus();
    }
  }

  const CustomInput: any = required && !readOnly ? RequiredInput : Input;

  return (
    <Row gutter={8} wrap={false}>
      <Col flex="auto">
        <CustomInput
          type="text"
          value={text}
          onChange={onValueStringChange}
          disabled={readOnly}
          className={requiredClass}
          onBlur={onElementLostFocus}
          onKeyUp={onKeyUp}
          suffix={
            <Many2oneSuffix
              id={id}
              formView={formView}
              targetValues={targetValues}
            />
          }
        />
      </Col>
      <Col flex="32px">
        <Button
          icon={<FolderOpenOutlined />}
          disabled={id === undefined || text === ""}
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
        domain={domain}
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
        onSubmitSucceed={(id?: number) => {
          setShowFormModal(false);
          fetchNameAndUpdate(id!);
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

const RequiredInput = styled(Input)`
  .ant-input {
    background-color: ${Config.requiredColor};
  }
`;
