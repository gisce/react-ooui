import { useCallback, useContext, useEffect, useState } from "react";
import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";
import ConnectionProvider from "@/ConnectionProvider";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import showErrorDialog from "@/ui/ActionErrorDialog";
import {
  Attachment,
  AttachmentsButtonWrapper,
} from "./AttachmentsButtonWrapper";
import { Modal, Spin } from "antd";
import { useLocale } from "@gisce/react-formiga-components";

export type AttachmentsButtonProps = {
  attachments?: any;
  disabled?: boolean;
  onAddNewAttachment: () => void;
  onListAllAttachments: () => void;
  onViewAttachmentDetails: (attachment: Attachment) => void;
};

function AttachmentsButton(props: AttachmentsButtonProps) {
  const {
    attachments,
    disabled = false,
    onAddNewAttachment,
    onListAllAttachments,
    onViewAttachmentDetails,
  } = props;
  const { formRef } = useContext(ActionViewContext) as ActionViewContextType;
  const [preloading, setPreloading] = useState(false);
  const [preloadedAttachments, setPreloadedAttachments] = useState<
    Attachment[]
  >([]);
  const [downloading, setDownloading] = useState(false);
  const { t } = useLocale();

  const preloadAttachments = useCallback(async () => {
    setPreloading(true);
    try {
      const results = await ConnectionProvider.getHandler().readObjects({
        model: "ir.attachment",
        ids: attachments.map((a: any) => a.id),
        fieldsToRetrieve: ["name", "datas_fname", "link"],
        context: (formRef.current as any).getContext(),
      });
      setPreloadedAttachments(
        results.map((r: any) => ({
          id: r.id,
          name: r.name,
          datas_fname: r.datas_fname,
          link: r.link,
        })),
      );
    } catch (error) {
      showErrorDialog(error as any);
    }
    setPreloading(false);
  }, [attachments, formRef]);

  const openAttachmentLink = useCallback(
    async (attachment: any) => {
      if (attachment.link) {
        window.open(attachment.link);
        return;
      }

      setDownloading(true);

      let retrievedAttachment;

      try {
        const results = await ConnectionProvider.getHandler().readObjects({
          model: "ir.attachment",
          ids: [attachment.id],
          context: (formRef.current as any).getContext(),
        });
        retrievedAttachment = results[0];
      } catch (error) {
        showErrorDialog(error as any);
      }

      setDownloading(false);

      if (!retrievedAttachment) {
        return;
      }

      if (retrievedAttachment.datas) {
        const fileType: any = await getMimeType(retrievedAttachment.datas);
        openBase64InNewTab(retrievedAttachment.datas, fileType.mime);
      } else {
        onViewAttachmentDetails(retrievedAttachment);
      }
    },
    [formRef, onViewAttachmentDetails],
  );

  const openAttachmentDetail = useCallback(
    async (attachment: any) => {
      onViewAttachmentDetails(attachment);
    },
    [onViewAttachmentDetails],
  );

  useEffect(() => {
    preloadAttachments();
  }, [preloadAttachments]);

  return (
    <>
      <AttachmentsButtonWrapper
        numberOfAttachments={attachments.length}
        attachments={preloadedAttachments}
        disabled={disabled}
        loading={preloading}
        onAddNewAttachment={onAddNewAttachment}
        onListAllAttachments={onListAllAttachments}
        onopenAttachmentLink={openAttachmentLink}
        onOpenAttachmentDetail={openAttachmentDetail}
      />
      <Modal
        title={t("downloadingAttachment")}
        open={downloading}
        footer={null}
        closable={false}
        centered
        maskClosable={false}
      >
        <Spin />
      </Modal>
    </>
  );
}

export default AttachmentsButton;
