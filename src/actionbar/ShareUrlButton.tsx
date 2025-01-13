import { message } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import ActionButton from "./ActionButton";
import { useLocale } from "@gisce/react-formiga-components";
import { createShareOpenUrl } from "@/helpers/shareUrlHelper";
import { ViewType } from "@/types";
import { useCallback } from "react";
import { ActionBarSeparator } from "./FormActionBar";

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

  // Check if we're in a secure context
  const isSecureContext = window.isSecureContext;

  let moreDataNeededForCopying = !action_id;
  if (view_type === "form") {
    moreDataNeededForCopying = !action_id || !res_id;
  }

  const onClick = useCallback(() => {
    if (!action_id) return;
    const url = createShareOpenUrl({
      action_id,
      view_type,
      res_id,
    });
    navigator.clipboard.writeText(url);
    message.success(t("urlCopiedToClipboard"));
  }, [action_id, view_type, res_id, t]);

  return (
    <ActionButton
      icon={<ShareAltOutlined />}
      disabled={!isSecureContext || moreDataNeededForCopying}
      tooltip={t("share")}
      onClick={onClick}
    />
  );
}
