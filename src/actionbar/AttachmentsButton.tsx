import React, { useCallback, useContext, useEffect, useState } from "react";
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

export type AttachmentsButtonProps = {
  attachments?: any;
  disabled?: boolean;
  onAddNewAttachment: () => void;
  onViewAttachmentDetails: (attachment: Attachment) => void;
};

function AttachmentsButton(props: AttachmentsButtonProps) {
  const {
    attachments,
    disabled = false,
    onAddNewAttachment,
    onViewAttachmentDetails,
  } = props;
  const { formRef } = useContext(ActionViewContext) as ActionViewContextType;
  const [preloading, setPreloading] = useState(false);
  const [preloadedAttachments, setPreloadedAttachments] = useState<
    Attachment[]
  >([]);

  const preloadAttachments = useCallback(async () => {
    setPreloading(true);
    try {
      const results = await ConnectionProvider.getHandler().readObjects({
        model: "ir.attachment",
        ids: attachments.map((a: any) => a.id),
        context: (formRef.current as any).getContext(),
      });
      setPreloadedAttachments(
        results.map((r: any) => ({
          id: r.id,
          name: r.name,
          datas: r.datas,
        }))
      );
    } catch (error) {
      showErrorDialog(error as any);
    }
    setPreloading(false);
  }, attachments);

  const downloadAttachment = useCallback(async (attachment: any) => {
    const fileType: any = await getMimeType(attachment.datas);
    openBase64InNewTab(attachment.datas, fileType.mime);
  }, attachments);

  const openAttachmentDetail = useCallback(async (attachment: any) => {
    onViewAttachmentDetails(attachment);
  }, attachments);

  useEffect(() => {
    preloadAttachments();
  }, [attachments, preloadAttachments]);

  return (
    <AttachmentsButtonWrapper
      numberOfAttachments={attachments.length}
      attachments={preloadedAttachments}
      disabled={disabled}
      loading={preloading}
      onAddNewAttachment={onAddNewAttachment}
      onDownloadAttachment={downloadAttachment}
      onOpenAttachmentDetail={openAttachmentDetail}
    />
  );
}

export default AttachmentsButton;
