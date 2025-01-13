import { message } from "antd";
import { ShareAltOutlined } from "@ant-design/icons";
import ActionButton from "./ActionButton";
import { useLocale } from "@gisce/react-formiga-components";
import { createShareOpenUrl } from "@/helpers/shareUrlHelper";
import { ViewType } from "@/types";
import { useCallback } from "react";

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
  let disabled = !action_id;
  if (view_type === "form") {
    disabled = !action_id || !res_id;
  }

  const onClick = useCallback(() => {
    if (disabled || !action_id) return;
    const url = createShareOpenUrl({
      action_id,
      view_type,
      res_id,
    });
    navigator.clipboard.writeText(url);
    message.success(t("urlCopiedToClipboard"));
  }, [disabled, action_id, view_type, res_id, t]);

  console.log({
    disabled,
    action_id,
    view_type,
    res_id,
  });

  return (
    <ActionButton
      icon={<ShareAltOutlined />}
      tooltip={t("share")}
      disabled={disabled}
      onClick={onClick}
    />
  );
}
