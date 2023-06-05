import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Form, Input, Row, Tooltip } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import { CloseCircleFilled } from "@ant-design/icons";

type Props = {
  onSearch: (searchValue?: string) => void;
  searchText?: string;
  disabled?: boolean;
};

function SearchBar(props: Props) {
  const { onSearch, disabled = false, searchText } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const [form] = Form.useForm();
  const [mustShowClearSuffix, setMustShowClearSuffix] =
    useState<boolean>(false);

  function handleSubmit(values: any) {
    onSearch(values.search);
  }

  useEffect(() => {
    form.setFieldsValue({ search: searchText });
  }, [searchText]);

  function clear() {
    setMustShowClearSuffix(false);
    form.setFieldsValue({ search: undefined });
    onSearch(undefined);
  }

  return (
    <Form form={form} onFinish={handleSubmit} autoComplete="off">
      <Row align="middle" justify="end">
        <Col>
          <Form.Item name={"search"} noStyle>
            <Input
              autoFocus
              disabled={disabled}
              onChange={(e) => {
                setMustShowClearSuffix(e.target.value.length > 0);
              }}
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
