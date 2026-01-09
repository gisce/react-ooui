import { useState, useEffect, useCallback } from "react";
import { Modal, InputNumber, Form, Typography } from "antd";
import { useLocale } from "@gisce/react-formiga-components";

const { Text } = Typography;

type SetColumnLimitModalProps = {
  visible: boolean;
  initialLimit: number | undefined;
  onSave: (limit: number | undefined) => void;
  onCancel: () => void;
};

export const SetColumnLimitModal = (props: SetColumnLimitModalProps) => {
  const { visible, initialLimit, onSave, onCancel } = props;
  const { t } = useLocale();
  const [limit, setLimit] = useState<number | undefined>(initialLimit);

  useEffect(() => {
    setLimit(initialLimit);
  }, [initialLimit]);

  const handleSave = useCallback(() => {
    // Empty, null, 0 or undefined removes the limit
    const finalLimit = limit && limit > 0 ? limit : undefined;
    onSave(finalLimit);
  }, [onSave, limit]);

  const handleChange = useCallback((value: number | null) => {
    setLimit(value ?? undefined);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSave();
        return;
      }
      const allowedKeys = [
        "Backspace",
        "Delete",
        "ArrowLeft",
        "ArrowRight",
        "ArrowUp",
        "ArrowDown",
        "Tab",
        "Home",
        "End",
      ];
      if (
        !allowedKeys.includes(e.key) &&
        !/^\d$/.test(e.key) &&
        !e.ctrlKey &&
        !e.metaKey
      ) {
        e.preventDefault();
      }
    },
    [handleSave],
  );

  return (
    <Modal
      title={t("set_column_limit")}
      open={visible}
      onOk={handleSave}
      onCancel={onCancel}
      okText={t("save")}
      cancelText={t("cancel")}
      centered
      destroyOnHidden
    >
      <Form layout="vertical">
        <Form.Item label={t("column_limit")}>
          <InputNumber
            value={limit}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            min={0}
            precision={0}
            style={{ width: "100%" }}
            autoFocus
          />
          <Text type="secondary" style={{ marginTop: 8, display: "block" }}>
            {t("column_limit_description")}
          </Text>
        </Form.Item>
      </Form>
    </Modal>
  );
};
