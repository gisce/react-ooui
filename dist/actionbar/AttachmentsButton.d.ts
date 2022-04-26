import { Attachment } from "./AttachmentsButtonWrapper";
export declare type AttachmentsButtonProps = {
    attachments?: any;
    disabled?: boolean;
    onAddNewAttachment: () => void;
    onViewAttachmentDetails: (attachment: Attachment) => void;
};
declare function AttachmentsButton(props: AttachmentsButtonProps): JSX.Element;
export default AttachmentsButton;
//# sourceMappingURL=AttachmentsButton.d.ts.map