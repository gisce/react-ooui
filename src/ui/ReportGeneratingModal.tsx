import { useLocale } from "@gisce/react-formiga-components";
import { Modal, Spin } from "antd";

export const ReportGeneratingModal = ({
  isGenerating,
}: {
  isGenerating: boolean;
}) => {
  const { t } = useLocale();

  return (
    <Modal
      title={t("generatingReport")}
      open={isGenerating}
      footer={null}
      closable={false}
      centered
      maskClosable={false}
    >
      <Spin />
    </Modal>
  );
};
