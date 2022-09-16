import React, { useContext } from "react";
import { Modal, Button, Space } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type Props = {
  visible: boolean;
  items: any[];
  onItemClicked: (item: any) => void;
  onCancel: () => void;
};

export const Many2oneSuffixModal = (props: Props) => {
  const { visible, onCancel, items = [], onItemClicked } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  return (
    <Modal
      title={t("selectAction")}
      centered
      visible={visible}
      footer={null}
      destroyOnClose
      onCancel={onCancel}
      maskClosable={false}
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
