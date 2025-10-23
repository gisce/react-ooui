import { useState, useEffect, useCallback } from "react";
import { Modal, Input, Form } from "antd";
import { useLocale } from "@gisce/react-formiga-components";

type FavouriteNameModalProps = {
  visible: boolean;
  initialName: string;
  onSave: (name: string) => Promise<void>;
  onCancel: () => void;
};

export const FavouriteNameModal = (props: FavouriteNameModalProps) => {
  const { visible, initialName, onSave, onCancel } = props;
  const { t } = useLocale();
  const [name, setName] = useState(initialName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setName(initialName);
  }, [initialName]);

  useEffect(() => {
    if (!visible) {
      setLoading(false);
    }
  }, [visible]);

  const handleSave = useCallback(async () => {
    setLoading(true);
    try {
      await onSave(name);
    } finally {
      setLoading(false);
    }
  }, [onSave, name]);

  const handleKeyDown = useCallback(
    async (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        e.preventDefault();
        setLoading(true);
        try {
          await onSave(name);
        } finally {
          setLoading(false);
        }
      }
    },
    [onSave, name],
  );

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }, []);

  return (
    <Modal
      title={t("saveFavourite")}
      open={visible}
      onOk={handleSave}
      onCancel={onCancel}
      okText={t("save")}
      cancelText={t("cancel")}
      confirmLoading={loading}
      centered
      destroyOnClose
    >
      <Form layout="vertical">
        <Form.Item label={t("favouriteName")} required>
          <Input
            value={name}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={t("enterFavouriteName")}
            autoFocus
          />
        </Form.Item>
      </Form>
    </Modal>
  );
};
