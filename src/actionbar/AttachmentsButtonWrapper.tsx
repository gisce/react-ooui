import { useRef } from "react";
import {
  DownOutlined,
  FormOutlined,
  DownloadOutlined,
  LinkOutlined,
  FileAddOutlined,
  TableOutlined,
} from "@ant-design/icons";
import { Button, Row, Col, Tooltip } from "antd";
import {
  Dropdown,
  DropdownRef,
  useLocale,
} from "@gisce/react-formiga-components";

export type Attachment = {
  id: number;
  name: string;
  datas: string;
  link: string;
};

export type AttachmentsButtonWrapperProps = {
  attachments: Attachment[] | undefined;
  numberOfAttachments: number;
  disabled: boolean;
  loading: boolean;
  onAddNewAttachment: () => void;
  onListAllAttachments: () => void;
  onOpenAttachmentLink: (attachment: Attachment) => void;
  onOpenAttachmentDetail: (attachment: Attachment) => void;
};

export const AttachmentsButtonWrapper = (
  props: AttachmentsButtonWrapperProps,
) => {
  const {
    numberOfAttachments,
    attachments = [],
    disabled,
    onAddNewAttachment,
    onOpenAttachmentLink,
    onOpenAttachmentDetail,
    onListAllAttachments,
  } = props;
  const { t } = useLocale();
  const dropdownRef = useRef<DropdownRef>(null);

  const button = (
    <Button>
      <LinkOutlined />
      {`(${numberOfAttachments})`}
      <DownOutlined style={{ fontSize: 12 }} />
    </Button>
  );

  return (
    <Dropdown
      ref={dropdownRef}
      onRetrieveData={async () => [
        {
          items: attachments.map((attachment) => {
            const Icon = attachment.link ? LinkOutlined : DownloadOutlined;
            const right = (
              <Row wrap={false} align="middle" key={attachment.id} gutter={8}>
                <Col style={{ textAlign: "center" }}>
                  {((attachment as any).datas_fname || attachment.link) && (
                    <Tooltip
                      title={
                        attachment.link
                          ? t("openAttachmentLink")
                          : t("download")
                      }
                    >
                      <Icon
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dropdownRef.current?.close();
                          onOpenAttachmentLink(attachment);
                        }}
                      />
                    </Tooltip>
                  )}
                </Col>
                <Col style={{ textAlign: "center" }}>
                  <Tooltip title={t("openAttachment")}>
                    <FormOutlined
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        dropdownRef.current?.close();
                        onOpenAttachmentDetail(attachment);
                      }}
                    />
                  </Tooltip>
                </Col>
              </Row>
            );

            return {
              id: attachment.id as number,
              name: attachment.name,
              disableClick: true,
              right,
            };
          }),
        },
      ]}
      placement="bottomRight"
      disabled={disabled}
      header={
        <div style={{ padding: 5 }}>
          <a
            style={{ display: "block", paddingBottom: 5 }}
            href="#"
            onClick={() => {
              dropdownRef.current?.close();
              onListAllAttachments();
            }}
          >
            <TableOutlined /> {t("listAllAttachments")}
          </a>
          <a
            style={{ display: "block" }}
            href="#"
            onClick={() => {
              dropdownRef.current?.close();
              onAddNewAttachment();
            }}
          >
            <FileAddOutlined /> {t("addNewAttachment")}
          </a>
        </div>
      }
    >
      {button}
    </Dropdown>
  );
};
