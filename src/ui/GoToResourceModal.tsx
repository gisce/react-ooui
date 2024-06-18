import { useRef } from "react";
import { Button, Col, Form, Input, Modal, Row, Space } from "antd";
import { PlusOutlined, EnterOutlined, CloseOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";

type Props = {
  visible: boolean;
  onIdSubmitted: (ids: number[], openInSameTab?: boolean) => void;
  onCancel: () => void;
  isSearching: boolean;
};

export const GoToResourceModal = (props: Props) => {
  const { visible, onIdSubmitted, onCancel, isSearching } = props;

  const { t } = useLocale();
  const inputRef = useRef<null | HTMLElement>(null);
  const openInSameTab = useRef(false);

  function handleSubmit(values: any) {
    const ids = values.id.split(",").map((id: string) => parseInt(id.trim()));
    onIdSubmitted(ids, openInSameTab.current);
    openInSameTab.current = false;
  }

  return (
    <Modal
      title={t("goToResourceId")}
      centered
      open={visible}
      width={600}
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
          <Input style={{ width: "100%" }} autoFocus ref={inputRef as any} />
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
                tabIndex={1}
                loading={isSearching}
                style={{ marginLeft: 15 }}
                icon={<PlusOutlined />}
                htmlType="submit"
                disabled={isSearching}
                onClick={() => {
                  openInSameTab.current = true;
                }}
              >
                {t("openInSameWindow")}
              </Button>
              <Button
                tabIndex={0}
                loading={isSearching}
                style={{ marginLeft: 15 }}
                icon={<EnterOutlined />}
                htmlType="submit"
                type="primary"
                disabled={isSearching}
                onClick={() => {
                  openInSameTab.current = false;
                }}
              >
                {t("openInNewTab")}
              </Button>
            </Space>
          </Col>
        </Row>
      </Form>
    </Modal>
  );
};
