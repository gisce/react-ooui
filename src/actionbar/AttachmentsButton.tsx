import React, { useContext, useState } from "react";
import { LinkOutlined } from "@ant-design/icons";
import DropdownButton from "./DropdownButton";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";
import ConnectionProvider from "@/ConnectionProvider";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { Modal, Spin } from "antd";
import showErrorDialog from "@/ui/ActionErrorDialog";

type AttachmentsButtonProps = {
  attachments?: any;
  disabled?: boolean;
  onAddNewAttachment: () => void;
};

function AttachmentsButton(props: AttachmentsButtonProps) {
  const { attachments, disabled, onAddNewAttachment } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const { formRef } = useContext(ActionViewContext) as ActionViewContextType;
  const [downloading, setDownloading] = useState(false);

  return (
    <>
      <DropdownButton
        icon={<LinkOutlined />}
        disabled={disabled}
        label={`(${attachments.length})`}
        tooltip={t("attachments")}
        items={[
          { id: "addNewAttachment", name: t("addNewAttachment") },
          { id: "divider0", name: "divider" },
          ...attachments,
        ]}
        onItemClick={async (itemClicked: any) => {
          if (!itemClicked) {
            return;
          }

          if (itemClicked.id === "addNewAttachment") {
            onAddNewAttachment();
            return;
          }

          setDownloading(true);
          try {
            const [result] = await ConnectionProvider.getHandler().readObjects({
              model: "ir.attachment",
              ids: [itemClicked.id],
              context: (formRef.current as any).getContext(),
            });

            if (!result.datas) {
              // TODO: maybe open a dialog message to inform that the attachment hasn't got data? or maybe open the attachment in a new form-tab?
              return;
            }

            const fileType: any = await getMimeType(result.datas!);
            openBase64InNewTab(result.datas, fileType.mime);
          } catch (error) {
            showErrorDialog(error);
          }
          setDownloading(false);
        }}
      />
      <Modal
        title={t("downloadingAttachment")}
        visible={downloading}
        footer={null}
        closable={false}
        centered
      >
        <Spin />
      </Modal>
    </>
  );
}

export default AttachmentsButton;
