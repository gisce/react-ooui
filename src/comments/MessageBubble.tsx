import { memo, useState, useCallback, useMemo, CSSProperties } from "react";
import { Typography, theme, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { RecordComment } from "@/types/comments";
import dayjs from "@/helpers/dayjs";
import { UserAvatar } from "@/ui/UserAvatar";
import { CommentMarkdown } from "@/ui/CommentMarkdown";
import showConfirmDialog from "@/ui/ConfirmDialog";

const { Text } = Typography;
const { useToken } = theme;

const DAY_SEPARATOR_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 12,
  marginTop: 16,
  marginBottom: 12,
  width: "100%",
};

const AVATAR_NAME_GROUP_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
};

const NAME_STYLE: CSSProperties = {
  fontSize: 13,
  fontWeight: 600,
};

export type MessageBubbleProps = {
  comment: RecordComment;
  isOwnMessage: boolean;
  isFirstInGroup: boolean;
  isFirstOfDay: boolean;
  dayLabel?: string;
  model: string;
  resourceId: number;
  skipSeparator?: boolean;
  onDeleteComment?: (commentId: number) => void;
};

export const MessageBubble = memo(
  ({
    comment,
    isOwnMessage,
    isFirstInGroup,
    isFirstOfDay,
    dayLabel,
    model,
    resourceId,
    skipSeparator = false,
    onDeleteComment,
  }: MessageBubbleProps) => {
    const { token } = useToken();
    const { t } = useLocale();
    const [isHovered, setIsHovered] = useState(false);
    const [isRemoveHovered, setIsRemoveHovered] = useState(false);

    const userName = comment["create_uid.name"];
    const absoluteTime = dayjs(comment.create_date).format(
      "HH:mm · DD/MM/YYYY",
    );
    const timeOnly = dayjs(comment.create_date).format("HH:mm");

    const containerStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        flexDirection: "column",
        alignItems: isOwnMessage ? "flex-end" : "flex-start",
        marginBottom: 8,
      }),
      [isOwnMessage],
    );

    const separatorStyle = useMemo(
      (): CSSProperties => ({
        width: "70%",
        height: 1,
        backgroundColor: token.colorBorderSecondary,
        marginTop: 8,
        marginBottom: 8,
        alignSelf: "center",
      }),
      [token.colorBorderSecondary],
    );

    const dayLineStyle = useMemo(
      (): CSSProperties => ({
        flex: 1,
        height: 1,
        backgroundColor: token.colorBorderSecondary,
      }),
      [token.colorBorderSecondary],
    );

    const dayLabelStyle = useMemo(
      (): CSSProperties => ({
        fontSize: 12,
        fontWeight: 500,
        color: token.colorTextTertiary,
      }),
      [token.colorTextTertiary],
    );

    const headerStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        alignItems: "center",
        justifyContent: isOwnMessage ? "flex-end" : "flex-start",
        gap: 8,
        marginBottom: 6,
        width: "100%",
      }),
      [isOwnMessage],
    );

    const bubbleStyle = useMemo(
      (): CSSProperties => ({
        backgroundColor: isOwnMessage
          ? token.colorPrimaryBg
          : token.colorFillTertiary,
        padding: "8px 12px",
        borderRadius: 12,
        display: "inline-block",
      }),
      [token.colorPrimaryBg, token.colorFillTertiary, isOwnMessage],
    );

    const bubbleRowStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        alignItems: "center",
        gap: 8,
        justifyContent: isOwnMessage ? "flex-end" : "flex-start",
        marginLeft: isOwnMessage ? 0 : 32,
        marginRight: isOwnMessage ? 28 : 0,
      }),
      [isOwnMessage],
    );

    const inlineTimestampStyle = useMemo(
      (): CSSProperties => ({
        fontSize: 10,
        color: token.colorTextQuaternary,
        flexShrink: 0,
        opacity: isOwnMessage && isHovered && onDeleteComment ? 0 : 1,
        transition: "opacity 0.12s ease-out",
      }),
      [token.colorTextQuaternary, isOwnMessage, isHovered, onDeleteComment],
    );

    const bubbleRowWrapperStyle = useMemo(
      (): CSSProperties => ({
        position: "relative",
        borderRadius: 6,
        padding: "4px 8px",
        width: "100%",
        backgroundColor:
          isOwnMessage && isHovered && onDeleteComment
            ? "rgba(0, 0, 0, 0.04)"
            : "transparent",
        transition: "background-color 0.1s ease-out",
      }),
      [isHovered, isOwnMessage, onDeleteComment],
    );

    const removeActionStyle = useMemo(
      (): CSSProperties => ({
        position: "absolute",
        top: "50%",
        left: 8,
        transform: "translateY(-50%)",
        zIndex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 12,
        color: isRemoveHovered ? token.colorError : token.colorTextQuaternary,
        cursor: "pointer",
        opacity: isHovered ? 1 : 0,
        transition: "opacity 0.12s ease-out, color 0.15s ease",
        pointerEvents: isHovered ? "auto" : "none",
      }),
      [isHovered, isRemoveHovered, token.colorTextQuaternary, token.colorError],
    );

    const handleRemoveMouseEnter = useCallback(
      () => setIsRemoveHovered(true),
      [],
    );
    const handleRemoveMouseLeave = useCallback(
      () => setIsRemoveHovered(false),
      [],
    );
    const handleMouseEnter = useCallback(() => setIsHovered(true), []);
    const handleMouseLeave = useCallback(() => setIsHovered(false), []);

    const handleDeleteClick = useCallback(() => {
      showConfirmDialog({
        confirmMessage: t("confirmDeleteComment"),
        t,
        onOk: () => {
          onDeleteComment?.(comment.id);
        },
      });
    }, [t, onDeleteComment, comment.id]);

    const avatarNameElement = (
      <div style={AVATAR_NAME_GROUP_STYLE}>
        {isOwnMessage ? (
          <>
            <Text style={NAME_STYLE}>{userName}</Text>
            <UserAvatar
              userName={userName}
              size={28}
              style={{ flexShrink: 0 }}
            />
          </>
        ) : (
          <>
            <UserAvatar
              userName={userName}
              size={28}
              style={{ flexShrink: 0 }}
            />
            <Text style={NAME_STYLE}>{userName}</Text>
          </>
        )}
      </div>
    );

    const inlineTimestamp = (
      <Tooltip title={absoluteTime}>
        <Text style={inlineTimestampStyle}>{timeOnly}</Text>
      </Tooltip>
    );

    return (
      <ErrorBoundary>
        <>
          {isFirstOfDay && dayLabel && (
            <div style={DAY_SEPARATOR_STYLE}>
              <div style={dayLineStyle} />
              <Text style={dayLabelStyle}>{dayLabel}</Text>
              <div style={dayLineStyle} />
            </div>
          )}
          {isFirstInGroup && !isFirstOfDay && !skipSeparator && (
            <div style={separatorStyle} />
          )}
          <div style={containerStyle}>
            {isFirstInGroup && (
              <div style={headerStyle}>{avatarNameElement}</div>
            )}
            <div
              style={bubbleRowWrapperStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {isOwnMessage && onDeleteComment && (
                <Tooltip title={t("delete")} placement="top">
                  <span
                    style={removeActionStyle}
                    onClick={handleDeleteClick}
                    onMouseEnter={handleRemoveMouseEnter}
                    onMouseLeave={handleRemoveMouseLeave}
                  >
                    <DeleteOutlined />
                  </span>
                </Tooltip>
              )}
              <div style={bubbleRowStyle}>
                {isOwnMessage && inlineTimestamp}
                <div style={bubbleStyle}>
                  <CommentMarkdown
                    comment={comment}
                    model={model}
                    resourceId={resourceId}
                  />
                </div>
                {!isOwnMessage && inlineTimestamp}
              </div>
            </div>
          </div>
        </>
      </ErrorBoundary>
    );
  },
);

MessageBubble.displayName = "MessageBubble";
