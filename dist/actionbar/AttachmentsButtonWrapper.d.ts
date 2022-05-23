/// <reference types="react" />
export declare type Attachment = {
    id: number;
    name: string;
    datas: string;
    link: string;
};
export declare type AttachmentsButtonWrapperProps = {
    attachments: Attachment[] | undefined;
    numberOfAttachments: number;
    disabled: boolean;
    loading: boolean;
    onAddNewAttachment: () => void;
    onopenAttachmentLink: (attachment: Attachment) => void;
    onOpenAttachmentDetail: (attachment: Attachment) => void;
};
export declare const AttachmentsButtonWrapper: (props: AttachmentsButtonWrapperProps) => JSX.Element;
//# sourceMappingURL=AttachmentsButtonWrapper.d.ts.map