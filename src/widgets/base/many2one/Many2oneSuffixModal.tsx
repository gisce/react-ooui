import React from "react";
import { Modal, Button, Space } from "antd";

type Props = {
  visible: boolean;
  items: any[];
  onItemClicked: (item: any) => void;
  onCancel: () => void;
};

export const Many2oneSuffixModal = (props: Props) => {
  const { visible, onCancel, items, onItemClicked } = props;

  return (
    <Modal
      title={"Seleccioneu la vostra acció"}
      centered
      visible={visible}
      footer={null}
      destroyOnClose
      onCancel={onCancel}
    >
      <Space direction="vertical" className="w-full">
        {items.map((item) => {
          return (
            <Button
              className="w-full"
              onClick={() => {
                onItemClicked(item);
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
