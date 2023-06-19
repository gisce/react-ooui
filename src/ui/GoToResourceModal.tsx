import React, { useContext } from "react";
import { Button, Col, Form, InputNumber, Modal, Row, Space } from "antd";
import { CheckOutlined, CloseOutlined } from "@ant-design/icons";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type Props = {
  visible: boolean;
  onIdSubmitted: (id: number) => void;
  onCancel: () => void;
  isSearching: boolean;
};

export const GoToResourceModal = (props: Props) => {
  const { visible, onIdSubmitted, onCancel, isSearching } = props;

  const { t } = useContext(LocaleContext) as LocaleContextType;

  function handleSubmit(values: any) {
    onIdSubmitted(values.id);
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
    >
      <Form layout="vertical" onFinish={handleSubmit} autoComplete="off">
        <Form.Item
          name={"id"}
          label={t("searchId")}
          rules={[
            {
              required: true,
              type: "number",
            },
          ]}
        >
          <InputNumber style={{ width: "100%" }} autoFocus />
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
