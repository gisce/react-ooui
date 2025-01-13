import { useState, useCallback } from "react";
import { Button, Input, message, Space, Popover } from "antd";
import {
  ShareAltOutlined,
  CopyOutlined,
  CheckOutlined,
  LinkOutlined,
} from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { createShareOpenUrl } from "@/helpers/shareUrlHelper";
import { ViewType } from "@/types";
import ActionButton from "./ActionButton";

export type ShareUrlButtonProps = {
  action_id?: number;
  view_type: ViewType;
  res_id?: number;
};

export function ShareUrlButton({
  action_id,
  view_type,
  res_id,
}: ShareUrlButtonProps) {
  const { t } = useLocale();
  const [isCopied, setIsCopied] = useState(false);

  const shareUrl = action_id
    ? createShareOpenUrl({
        action_id,
        view_type,
        res_id,
      })
    : "";

  let moreDataNeededForCopying = !action_id;
  if (view_type === "form") {
    moreDataNeededForCopying = !action_id || !res_id;
  }

  const copyToClipboard = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setIsCopied(true);
      message.success(t("urlCopiedToClipboard"));
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Error copying to clipboard:", err);
      message.error(t("errorCopyingToClipboard"));
    }
  }, [shareUrl, setIsCopied, t]);

  const popoverContent = (
    <div style={{ padding: 8 }}>
      <Space.Compact style={{ width: "100%" }}>
        <Input
          value={shareUrl}
          readOnly
          style={{
            borderRadius: 6,
            flex: 1,
            marginRight: 8,
            minWidth: 300,
          }}
        />
        {isSecureContext && (
          <Button
            type="text"
            style={{
              marginRight: 8,
            }}
            icon={
              isCopied ? (
                <CheckOutlined style={{ color: "#52c41a" }} />
              ) : (
                <CopyOutlined />
              )
            }
            onClick={copyToClipboard}
          />
        )}
        <Button
          type="text"
          icon={<LinkOutlined />}
          onClick={() => window.open(shareUrl, "_blank", "noopener,noreferrer")}
        />
      </Space.Compact>
    </div>
  );

  return (
    <Popover content={popoverContent} trigger="click" placement="bottom">
      <ActionButton
        icon={<ShareAltOutlined />}
        disabled={!isSecureContext || moreDataNeededForCopying}
        tooltip={t("share")}
      />
    </Popover>
  );
}
