import React, { useContext } from "react";
import { Modal, Button, Space } from "antd";
import { useLocale, DropdownMenuItem } from "@gisce/react-formiga-components";

type Props = {
  visible: boolean;
  items: DropdownMenuItem[];
  onItemClicked?: (item: DropdownMenuItem) => void;
  onCancel: () => void;
};

export const Many2oneSuffixModal = (props: Props) => {
  const { visible, onCancel, items = [], onItemClicked } = props;
  const { t } = useLocale();

  return (
    <Modal
      title={t("selectAction")}
      centered
      open={visible}
      footer={null}
      destroyOnClose
      onCancel={onCancel}
      maskClosable={false}
    >
      <Space direction="vertical" className="w-full">
        {items.map((item) => {
          return (
            <Button
              key={item.id}
              className="w-full"
              onClick={() => {
                onItemClicked?.(item);
              }}
            >
              {item.name}
            </Button>
          );
        })}
      </Space>
    </Modal>
  );
};
