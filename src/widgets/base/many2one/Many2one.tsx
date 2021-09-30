import React, { useState, useRef, useEffect, useContext } from "react";
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
import showErrorDialog from "@/ui/GenericErrorDialog";
import { FormContext, FormContextType } from "@/context/FormContext";

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
  const [inputText, setInputText] = useState<string>();
  const inputTextRef = useRef<string>();
  const formContext = useContext(FormContext) as FormContextType;
  const { getContext } = formContext || {};

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
    } else if (id && text.length > 0) {
      setInputText(text);
    }
  }, [value]);

  const triggerChange = (changedValue: any[]) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputTextRef.current = e.target.value;
    setInputText(inputTextRef.current);
  };

  const onElementLostFocus = async () => {
    if (!searching && (inputTextRef.current as string)?.trim().length > 0) {
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
          payload: inputTextRef.current as string,
          context: getContext?.(),
        });

        if (results.length === 1) {
          inputTextRef.current = undefined;
          triggerChange(results[0]);
        } else {
          setSearchText(inputTextRef.current as string);
          setShowSearchModal(true);
        }
      } catch (err) {
        showErrorDialog(err);
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
        context: getContext?.(),
      });

      triggerChange([id, value[0][1]]);
    } catch (err) {
      showErrorDialog(err);
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
          value={inputText}
          disabled={readOnly}
          onChange={onValueStringChange}
          className={requiredClass}
          onBlur={onElementLostFocus}
          onKeyUp={onKeyUp}
          suffix={<Many2oneSuffix id={id} model={relation} context={getContext?.()} />}
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
          inputTextRef.current = undefined;
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
