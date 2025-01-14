import { useState, useCallback } from "react";
import { Button, Input, message, Space, Popover, theme } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { createShareOpenUrl } from "@/helpers/shareUrlHelper";
import { ViewType } from "@/types";
import ActionButton from "./ActionButton";
import { IconExternalLink, IconShare2 } from "@tabler/icons-react";

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
  const { token } = theme.useToken();
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

  const copyToClipboard = useCallback(() => {
    try {
      // Create a temporary textarea element
      const tempInput = document.createElement("textarea");
      tempInput.value = shareUrl;
      document.body.appendChild(tempInput);

      // Select the text in the textarea
      tempInput.select();
      tempInput.setSelectionRange(0, 99999); // For mobile devices

      // Copy the text using execCommand
      const successful = document.execCommand("copy");

      // Clean up the temporary element
      document.body.removeChild(tempInput);

      // Handle success or failure
      if (successful) {
        setIsCopied(true);
        message.success(t("urlCopiedToClipboard"));
        setTimeout(() => setIsCopied(false), 2000);
      } else {
        throw new Error("Copy command was unsuccessful.");
      }
    } catch (err) {
      console.error("Error copying to clipboard:", err);
      message.error(t("errorCopyingToClipboard"));
    }
  }, [shareUrl, setIsCopied, t]);

  const popoverContent = (
    <div style={{ padding: 2 }}>
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
        <Button
          title={t("copyToClipboard")}
          type="text"
          style={{
            marginRight: 8,
          }}
          icon={
            isCopied ? (
              <CheckOutlined style={{ color: token.colorSuccess }} />
            ) : (
              <CopyOutlined style={{ color: token.colorTextSecondary }} />
            )
          }
          onClick={copyToClipboard}
        />
        <Button
          title={t("openInNewTab")}
          style={{ height: 28 }}
          type="text"
          icon={<IconExternalLink size={18} color={token.colorTextSecondary} />}
          onClick={() => window.open(shareUrl, "_blank", "noopener,noreferrer")}
        />
      </Space.Compact>
    </div>
  );

  return (
    <Popover content={popoverContent} trigger="click" placement="bottom">
      <ActionButton
        icon={<IconShare2 size={16} color={token.colorTextSecondary} />}
        disabled={moreDataNeededForCopying}
        tooltip={t("share")}
      />
    </Popover>
  );
}
