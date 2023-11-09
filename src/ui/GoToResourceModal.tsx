import React, { useContext, useRef } from "react";
import { Button, Col, Form, Input, Modal, Row, Space, Checkbox } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type Props = {
  visible: boolean;
  onIdSubmitted: (ids: number[]) => void;
  onCancel: () => void;
  isSearching: boolean;
};

export const GoToResourceModal = (props: Props) => {
  const { visible, onIdSubmitted, onCancel, isSearching } = props;

  const { t } = useContext(LocaleContext) as LocaleContextType;

  const inputRef = useRef<null | HTMLElement>();

  function handleSubmit(values: any) {
    const ids = values.id.split(',').map((id:string) => parseInt(id.trim()))
    onIdSubmitted(ids);
  }

  return (
    (<Modal
      title={t("goToResourceId")}
      centered
      open={visible}
      footer={null}
      destroyOnClose
      onCancel={onCancel}
      maskClosable={false}
      afterOpenChange={(open) => open && inputRef.current?.focus()}
    >
      <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
        <Form.Item
          name={"id"}
          label={t("searchId")}
          rules={[
            {
              required: true,
            },
          ]}
          help={t("searchIdHelp")}
        >
          <Input style={{ width: "100%" }} autoFocus ref={inputRef as any}/>
        </Form.Item>
        <Row align="middle" justify="end">
          <Col>
            <Space>
              <Button
                icon={<CloseOutlined />}
                htmlType="button"
                onClick={onCancel}
                disabled={isSearching}
              >
                {t("cancel")}
              </Button>
              <Button
                loading={isSearching}
                style={{ marginLeft: 15 }}
                icon={<CheckOutlined />}
                htmlType="submit"
                type="primary"
                disabled={isSearching}
              >
                {t("ok")}
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Modal>)
  );
};
