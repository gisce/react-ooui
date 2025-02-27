import React, { useEffect, useState, useRef } from "react";
import { Button, Col, Form, Input, Row, Tooltip } from "antd";
import { useLocale } from "@gisce/react-formiga-components";
import { CloseCircleFilled } from "@ant-design/icons";

type Props = {
  onSearch: (searchValue?: string) => void;
  searchText?: string;
  disabled?: boolean;
};

function SearchBar(props: Props) {
  const { onSearch, disabled = false, searchText } = props;
  const { t } = useLocale();
  const [form] = Form.useForm();
  const [mustShowClearSuffix, setMustShowClearSuffix] =
    useState<boolean>(false);
  const isProcessingRef = useRef(false);
  const internalValueRef = useRef<string | undefined>(searchText);

  function handleSubmit(values: any) {
    const searchValue = values.search;
    internalValueRef.current = searchValue;
    onSearch(searchValue);
  }

  // Handle external searchText changes
  useEffect(() => {
    if (!isProcessingRef.current && searchText !== internalValueRef.current) {
      internalValueRef.current = searchText;
      form.setFieldsValue({ search: searchText });
      setMustShowClearSuffix(searchText ? searchText.length > 0 : false);
    }
  }, [searchText, form]);

  function clear() {
    isProcessingRef.current = true;
    internalValueRef.current = undefined;
    setMustShowClearSuffix(false);
    form.setFieldsValue({ search: undefined });
    onSearch(undefined);

    // Reset the processing flag after a short delay
    setTimeout(() => {
      isProcessingRef.current = false;
    }, 200);
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    internalValueRef.current = value;
    setMustShowClearSuffix(value.length > 0);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      autoComplete="off"
      initialValues={{ search: searchText }}
    >
      <Row align="middle" justify="end">
        <Col>
          <Form.Item name="search" noStyle>
            <Input
              autoFocus
              disabled={disabled}
              onChange={handleInputChange}
              style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
              suffix={
                (mustShowClearSuffix ||
                  (searchText && searchText.length > 0)) && (
                  <Tooltip title={t("clear")}>
                    <CloseCircleFilled
                      style={{ color: "rgba(0,0,0,.45)" }}
                      onClick={clear}
                    />
                  </Tooltip>
                )
              }
            />
          </Form.Item>
        </Col>
        <Col>
          <Button
            htmlType="submit"
            disabled={disabled}
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
          >
            {t("search")}
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBar;
