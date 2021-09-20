import React from "react";
import { LinkOutlined } from "@ant-design/icons";
import DropdownButton from "./DropdownButton";

import { getMimeType, openBase64InNewTab } from "@/helpers/filesHelper";

type AttachmentsButtonProps = {
  attachments?: any;
  disabled?: boolean;
  onAddNewAttachment: () => void;
};

function AttachmentsButton(props: AttachmentsButtonProps) {
  const { attachments, disabled, onAddNewAttachment } = props;

  return (
    <DropdownButton
      icon={<LinkOutlined />}
      disabled={disabled}
      label={`(${attachments.length})`}
      tooltip="Attachments"
      items={[
        { id: "addNewAttachment", name: "Add new attachment" },
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

        const fileType: any = await getMimeType(itemClicked.datas!);
        openBase64InNewTab(itemClicked.datas, fileType.mime);
      }}
    />
  );
}

export default AttachmentsButton;
