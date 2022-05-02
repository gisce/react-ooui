import React, { useContext, useState } from "react";
import {
  DownOutlined,
  FormOutlined,
  DownloadOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { Popover, Button, Row, Col, Tooltip, Spin } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

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
  onopenAttachmentLink: (attachment: Attachment) => void;
  onOpenAttachmentDetail: (attachment: Attachment) => void;
};

export const AttachmentsButtonWrapper = (
  props: AttachmentsButtonWrapperProps
) => {
  const { numberOfAttachments, disabled } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;
  const [popoverVisible, setPopoverVisible] = useState<boolean>(false);

  const button = (
    <Button disabled={disabled}>
      <LinkOutlined />
      {`(${numberOfAttachments})`}
      <DownOutlined style={{ fontSize: 12 }} />
    </Button>
  );

  if (disabled) {
    return button;
  }

  return (
    <Popover
      onVisibleChange={(visible: boolean) => setPopoverVisible(visible)}
      visible={popoverVisible}
      placement="bottom"
      content={Content(props, setPopoverVisible)}
      title={t("attachments")}
      arrowContent={null}
    >
      {button}
    </Popover>
  );
};

const Content = (
  props: AttachmentsButtonWrapperProps,
  setPopoverVisible: (visible: boolean) => void
) => {
  const {
    attachments = [],
    loading,
    onAddNewAttachment,
    onopenAttachmentLink,
    onOpenAttachmentDetail,
  } = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  if (loading) {
    return <Spin style={{ padding: 20 }} />;
  }

  return (
    <>
      <a
        href="#"
        onClick={() => {
          setPopoverVisible(false);
          onAddNewAttachment();
        }}
      >
        {t("addNewAttachment")}
      </a>
      {attachments.length > 0 && (
        <>
          <li className=" ant-dropdown-menu-item-divider"></li>
          {attachments.map((attachment: any) => {
            const Icon = attachment.link ? LinkOutlined : DownloadOutlined;
            return (
              <Row
                style={{ paddingTop: 4, paddingBottom: 4 }}
                wrap={false}
                align="middle"
                key={attachment.id}
              >
                <Col flex="auto">{attachment.name}</Col>
                <Col flex="25px" style={{ textAlign: "center" }}>
                  {(attachment.datas_fname || attachment.link) && (
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
                          setPopoverVisible(false);
                          onopenAttachmentLink(attachment);
                        }}
                      />
                    </Tooltip>
                  )}
                </Col>
                <Col flex="25px" style={{ textAlign: "center" }}>
                  <Tooltip title={t("openAttachment")}>
                    <FormOutlined
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        setPopoverVisible(false);
                        onOpenAttachmentDetail(attachment);
                      }}
                    />
                  </Tooltip>
                </Col>
              </Row>
            );
          })}
        </>
      )}
    </>
  );
};
