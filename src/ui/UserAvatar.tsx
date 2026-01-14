import { memo, useMemo, CSSProperties } from "react";
import { Avatar } from "antd";
import type { AvatarProps } from "antd";
import { colorFromString } from "@/helpers/formHelper";

export type UserAvatarProps = Omit<AvatarProps, "children"> & {
  userName: string;
  style?: CSSProperties;
};

const getInitials = (name: string): string => {
  if (!name) return "?";
  return name
    .split(" ")
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
};

const UserAvatarComponent = (props: UserAvatarProps) => {
  const { userName, style, ...avatarProps } = props;

  const initials = useMemo(() => getInitials(userName), [userName]);
  const backgroundColor = useMemo(
    () => colorFromString(userName || ""),
    [userName],
  );

  const mergedStyle = useMemo(
    (): CSSProperties => ({
      backgroundColor,
      ...style,
    }),
    [backgroundColor, style],
  );

  return (
    <Avatar {...avatarProps} style={mergedStyle} aria-label={userName}>
      {initials}
    </Avatar>
  );
};

export const UserAvatar = memo(UserAvatarComponent);
