import { useState, useCallback } from "react";
import { Button, Input, message, Space, Popover, theme } from "antd";
import { CopyOutlined, CheckOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { createShareOpenUrl } from "@/helpers/shareUrlHelper";
import ActionButton from "./ActionButton";
import { IconExternalLink, IconShare2 } from "@tabler/icons-react";
import { useTabs } from "@/context/TabManagerContext";
import { useActionViewContext } from "@/context/ActionViewContext";
import { ActionInfo } from "@/types";

export type ShareUrlButtonProps = {
  res_id?: number;
  searchParams?: any[];
};

export function ShareUrlButton({ res_id, searchParams }: ShareUrlButtonProps) {
  const { currentView } = useActionViewContext();
  const initialView = {
    id: currentView.view_id,
    type: currentView.type,
  };
  const { token } = theme.useToken();
  const { t } = useLocale();
  const [isCopied, setIsCopied] = useState(false);
  const { currentTab } = useTabs();

  const copyToClipboard = useCallback(
    (url: string) => {
      try {
        // Create a temporary textarea element
        const tempInput = document.createElement("textarea");
        tempInput.value = url;
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
    },
    [setIsCopied, t],
  );

  if (!currentTab?.action) return null;
  const { action_id } = currentTab?.action || {};
  const finalActionData: ActionInfo = {
    ...currentTab.action,
    ...(initialView && { initialView }),
    ...(searchParams && { searchParams }),
    ...(res_id && { res_id }),
  };
  const shareUrl = createShareOpenUrl(finalActionData);
  const { type } = initialView || {};

  let moreDataNeededForCopying = !action_id;
  if (type === "form") {
    moreDataNeededForCopying = !action_id || !res_id;
  }

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
          onClick={() => copyToClipboard(shareUrl)}
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
    <div style={{ maxHeight: 28 }}>
      <Popover content={popoverContent} trigger="click" placement="bottom">
        <ActionButton
          style={{ height: 28 }}
          icon={<IconShare2 size={16} color={token.colorTextSecondary} />}
          disabled={moreDataNeededForCopying}
          tooltip={t("share")}
        />
      </Popover>
    </div>
  );
}
