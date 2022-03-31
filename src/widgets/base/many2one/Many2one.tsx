import React, { useState, useRef, useEffect, useContext } from "react";
import { Input, Button, Row, Col } from "antd";
import {
  SearchOutlined,
  FolderOpenOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import styled from "styled-components";

import {
  Many2one as Many2oneOoui,
  transformDomainForChildWidget,
} from "@gisce/ooui";
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
  const {
    required,
    relation,
    readOnly,
    context,
    id: fieldName,
    domain: widgetDomain,
  } = ooui;
  const requiredClass =
    required && !readOnly ? Config.requiredClass : undefined;
  const [showSearchModal, setShowSearchModal] = useState<boolean>(false);
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [searching, setSearching] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>();
  const searchButtonTappedRef = useRef<boolean>(false);
  const [inputText, setInputText] = useState<string>("");
  const inputTextRef = useRef<string>();
  const formContext = useContext(FormContext) as FormContextType;
  const { domain, getValues, getContext, setOriginalValue } = formContext || {};
  const transformedDomain = useRef<any[]>([]);

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
    } else if (!id && !text) {
      setInputText(inputTextRef.current || "");
    }
  }, [value]);

  useEffect(() => {
    parseDomain();
  }, [domain]);

  const triggerChange = (changedValue: any[]) => {
    onChange?.(changedValue);
  };

  const onValueStringChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputTextRef.current = e.target.value;
    triggerChange([undefined, ""]);
  };

  const onElementLostFocus = async () => {
    if (!searching && inputText !== text) {
      // Debounce this event to give time to the search button onClick to set the flag
      await new Promise((resolve) => setTimeout(resolve, 100));

      // If the focus is lost because the user tapped the search button, we don't need to do nothing here
      if (searchButtonTappedRef.current) {
        triggerChange([undefined, ""]);
        return;
      }

      setSearching(true);

      try {
        if (transformedDomain.current && transformedDomain.current.length > 0) {
          tryFetchFirstResultOrShowSearch(inputTextRef.current as string);
        } else {
          const results: any[] = await ConnectionProvider.getHandler().nameSearch(
            {
              model: relation,
              payload: inputTextRef.current as string,
              context: { ...getContext?.(), ...context },
            }
          );

          if (results.length === 1) {
            inputTextRef.current = undefined;
            triggerChange(results[0]);
          } else {
            tryFetchFirstResultOrShowSearch(inputTextRef.current as string);
          }
        }
      } catch (err) {
        showErrorDialog(err);
      } finally {
        setSearching(false);
      }
    }
  };

  const tryFetchFirstResultOrShowSearch = async (text: string) => {
    if (transformedDomain.current && transformedDomain.current.length > 0) {
      const resultIds = await ConnectionProvider.getHandler().searchAllIds({
        params: transformedDomain.current,
        model: relation,
        context: { ...getContext?.(), ...context },
        totalItems: 2,
      });

      if (resultIds.length === 1) {
        fetchNameAndUpdate(resultIds[0], true);
      } else if (resultIds.length > 1) {
        setSearchText(text);
        setShowSearchModal(true);
      }
      return;
    }

    setSearchText(text);
    setShowSearchModal(true);
  };

  const fetchNameAndUpdate = async (
    id: number,
    mustUpdateOriginalForm?: boolean
  ) => {
    setSearching(true);

    try {
      const value = await ConnectionProvider.getHandler().execute({
        action: "name_get",
        payload: [id],
        model: relation,
        context: { ...getContext?.(), ...context },
      });

      triggerChange([id, value[0][1]]);

      if (mustUpdateOriginalForm) {
        setOriginalValue(ooui.id, [id, value[0][1]]);
      }
    } catch (err) {
      showErrorDialog(err);
    } finally {
      setSearching(false);
    }
  };

  async function parseDomain() {
    if (widgetDomain) {
      transformedDomain.current = transformDomainForChildWidget({
        domain: await ConnectionProvider.getHandler().evalDomain({
          domain: widgetDomain,
          values: getValues(),
          context: getContext(),
        }),
        widgetFieldName: fieldName,
      });
    }

    if (domain && domain.length > 0) {
      transformedDomain.current = transformedDomain.current.concat(
        transformDomainForChildWidget({
          domain,
          widgetFieldName: fieldName,
        })
      );
    }
  }

  async function onKeyDown(event: any) {
    if (event.code === "Enter") {
      event.preventDefault();
      event.stopPropagation();
      await onElementLostFocus();
    } else if (event.code === "Backspace" && id !== undefined) {
      event.preventDefault();
      event.stopPropagation();
      triggerChange([undefined, ""]);
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
          onKeyDown={onKeyDown}
          suffix={
            <Many2oneSuffix
              id={id}
              model={relation}
              context={{ ...getContext?.(), ...context }}
            />
          }
        />
      </Col>
      <Col flex="32px">
        <Button
          icon={<FolderOpenOutlined />}
          disabled={id === undefined || text === "" || inputText === undefined}
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
            tryFetchFirstResultOrShowSearch(text);
          }}
          tabIndex={-1}
        />
      </Col>
      <SearchModal
        model={relation}
        domain={
          domain &&
          transformDomainForChildWidget({
            domain,
            widgetFieldName: fieldName,
          })
        }
        context={{ ...getContext?.(), ...context }}
        visible={showSearchModal}
        nameSearch={!id ? searchText : undefined}
        onSelectValues={(ids: number[]) => {
          setShowSearchModal(false);
          fetchNameAndUpdate(ids[0]);
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
        parentContext={{ ...getContext?.(), ...context }}
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
