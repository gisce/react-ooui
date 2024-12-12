import { memo } from "react";
import { theme } from "antd";
const { useToken } = theme;

export const AddonElement = memo(({ content }: { content: string }) => {
  const { token } = useToken();
  return <div style={{ color: token.colorTextDisabled }}>{content}</div>;
});
AddonElement.displayName = "AddonElement";
