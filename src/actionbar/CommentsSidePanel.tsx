import {
  memo,
  useState,
  useCallback,
  useRef,
  useEffect,
  useMemo,
  CSSProperties,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Typography,
  Button,
  Input,
  Avatar,
  Spin,
  Empty,
  theme,
  Tooltip,
} from "antd";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { RecordComment } from "@/types/comments";
import { colorFromString } from "@/helpers/formHelper";
import dayjs from "@/helpers/dayjs";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { useToken } = theme;

export const COMMENTS_PANEL_WIDTH = 450;
const TEXT_AREA_AUTO_SIZE = { minRows: 1, maxRows: 4 };
const CONTENT_AREA_STYLE: CSSProperties = {
  flex: 1,
  overflowY: "auto",
  padding: 16,
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
};
const LOADING_CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};
const EMPTY_CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flex: 1,
};
const MESSAGES_WRAPPER_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-end",
  minHeight: "100%",
};
const TITLE_STYLE: CSSProperties = { margin: 0 };

export type CommentsSidePanelProps = {
  visible: boolean;
  comments: RecordComment[];
  loading: boolean;
  onClose: () => void;
  onAddComment: (body: string) => Promise<void>;
  onFetchComments: () => void;
  currentUserId?: number;
  topOffset?: number;
};

const getInitials = (name: string): string => {
  return name
    .split(" ")
    .filter((word) => word.length > 1)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");
};

type MessageBubbleProps = {
  comment: RecordComment;
  isOwnMessage: boolean;
};

const MessageBubble = memo(({ comment, isOwnMessage }: MessageBubbleProps) => {
  const { token } = useToken();
  const userName = comment["create_uid.name"];
  const initials = getInitials(userName);
  const avatarColor = colorFromString(userName);
  const absoluteTime = dayjs(comment.create_date).format("HH:mm · DD/MM/YYYY");
  const relativeTime = dayjs(comment.create_date).fromNow();

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

  const headerStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 8,
      marginBottom: 6,
      width: "100%",
    }),
    [],
  );

  const avatarNameGroupStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      gap: 8,
    }),
    [],
  );

  const avatarStyle = useMemo(
    () => ({
      backgroundColor: avatarColor,
      flexShrink: 0,
    }),
    [avatarColor],
  );

  const nameStyle = useMemo(
    (): CSSProperties => ({
      fontSize: 13,
      fontWeight: 600,
    }),
    [],
  );

  const timestampStyle = useMemo(
    (): CSSProperties => ({
      fontSize: 11,
      flexShrink: 0,
    }),
    [],
  );

  const bubbleStyle = useMemo(
    (): CSSProperties => ({
      backgroundColor: isOwnMessage
        ? token.colorPrimaryBg
        : token.colorFillTertiary,
      padding: "8px 12px",
      borderRadius: 12,
      display: "inline-block",
      marginLeft: isOwnMessage ? 0 : 32,
      marginRight: isOwnMessage ? 28 : 0,
    }),
    [token.colorPrimaryBg, token.colorFillTertiary, isOwnMessage],
  );

  const messageStyle = useMemo(
    (): CSSProperties => ({
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
    }),
    [],
  );

  const timestampElement = (
    <Tooltip title={absoluteTime}>
      <Text type="secondary" style={timestampStyle}>
        {relativeTime}
      </Text>
    </Tooltip>
  );

  const avatarNameElement = (
    <div style={avatarNameGroupStyle}>
      {isOwnMessage ? (
        <>
          <Text style={nameStyle}>{userName}</Text>
          <Avatar style={avatarStyle} size={28}>
            {initials}
          </Avatar>
        </>
      ) : (
        <>
          <Avatar style={avatarStyle} size={28}>
            {initials}
          </Avatar>
          <Text style={nameStyle}>{userName}</Text>
        </>
      )}
    </div>
  );

  return (
    <>
      <div style={separatorStyle} />
      <div style={containerStyle}>
        <div style={headerStyle}>
          {isOwnMessage ? (
            <>
              {timestampElement}
              {avatarNameElement}
            </>
          ) : (
            <>
              {avatarNameElement}
              {timestampElement}
            </>
          )}
        </div>
        <div style={bubbleStyle}>
          <Text style={messageStyle}>{comment.body}</Text>
        </div>
      </div>
    </>
  );
});
MessageBubble.displayName = "MessageBubble";

const CommentsSidePanelComponent = (props: CommentsSidePanelProps) => {
  const {
    visible,
    comments,
    loading,
    onClose,
    onAddComment,
    onFetchComments,
    currentUserId,
    topOffset = 0,
  } = props;
  const { token } = useToken();
  const { t } = useLocale();
  const [newComment, setNewComment] = useState("");
  const [sending, setSending] = useState(false);
  const [shouldRender, setShouldRender] = useState(visible);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      onFetchComments();
    }
  }, [visible, onFetchComments]);

  const handleExitComplete = useCallback(() => {
    setShouldRender(false);
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    if (visible && comments.length > 0) {
      scrollToBottom();
    }
  }, [visible, comments.length, scrollToBottom]);

  const handleSend = useCallback(async () => {
    if (!newComment.trim() || sending) return;

    setSending(true);
    try {
      await onAddComment(newComment.trim());
      setNewComment("");
      setTimeout(scrollToBottom, 100);
    } finally {
      setSending(false);
    }
  }, [newComment, sending, onAddComment, scrollToBottom]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend],
  );

  const handleCommentChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setNewComment(e.target.value);
    },
    [],
  );

  const panelStyle = useMemo(
    (): CSSProperties => ({
      position: "fixed",
      top: topOffset,
      right: 0,
      bottom: 0,
      width: COMMENTS_PANEL_WIDTH,
      backgroundColor: token.colorBgContainer,
      borderLeft: `1px solid ${token.colorBorder}`,
      borderTop: `1px solid ${token.colorBorder}`,
      borderTopLeftRadius: token.borderRadiusLG,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      zIndex: 50,
    }),
    [
      token.colorBgContainer,
      token.colorBorder,
      topOffset,
      token.borderRadiusLG,
    ],
  );

  const panelHeaderStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      borderBottom: `1px solid ${token.colorBorder}`,
      backgroundColor: token.colorBgElevated,
      flexShrink: 0,
    }),
    [token.colorBorder, token.colorBgElevated],
  );

  const footerStyle = useMemo(
    (): CSSProperties => ({
      padding: 12,
      borderTop: `1px solid ${token.colorBorder}`,
      backgroundColor: token.colorBgElevated,
      flexShrink: 0,
    }),
    [token.colorBorder, token.colorBgElevated],
  );

  if (!shouldRender) {
    return null;
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: COMMENTS_PANEL_WIDTH, opacity: 1 }}
          exit={{ width: 0, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          style={panelStyle}
        >
          <div style={panelHeaderStyle}>
            <Title level={5} style={TITLE_STYLE}>
              {t("comments")}
            </Title>
            <Button
              type="text"
              icon={<CloseOutlined />}
              onClick={onClose}
              size="small"
            />
          </div>

          <ErrorBoundary>
            <div style={CONTENT_AREA_STYLE}>
              {loading ? (
                <div style={LOADING_CONTAINER_STYLE}>
                  <Spin />
                </div>
              ) : comments.length === 0 ? (
                <div style={EMPTY_CONTAINER_STYLE}>
                  <Empty
                    description={t("noComments")}
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                  />
                </div>
              ) : (
                <div style={MESSAGES_WRAPPER_STYLE}>
                  {[...comments].reverse().map((comment) => (
                    <MessageBubble
                      key={comment.id}
                      comment={comment}
                      isOwnMessage={comment.create_uid === currentUserId}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </ErrorBoundary>

          <div style={footerStyle}>
            <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
              <TextArea
                value={newComment}
                onChange={handleCommentChange}
                onKeyDown={handleKeyDown}
                placeholder={t("writeComment")}
                autoSize={TEXT_AREA_AUTO_SIZE}
                disabled={sending}
                style={{ flex: 1 }}
              />
              <Button
                type="primary"
                icon={<SendOutlined />}
                onClick={handleSend}
                loading={sending}
                disabled={!newComment.trim()}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CommentsSidePanel = memo(CommentsSidePanelComponent);
