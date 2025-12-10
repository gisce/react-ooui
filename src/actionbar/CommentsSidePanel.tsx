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
  Space,
} from "antd";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { RecordComment } from "@/types/comments";
import { colorFromString } from "@/helpers/formHelper";
import dayjs from "@/helpers/dayjs";

const { Title, Text } = Typography;
const { TextArea } = Input;
const { useToken } = theme;

const PANEL_WIDTH = 350;
const TEXT_AREA_AUTO_SIZE = { minRows: 1, maxRows: 4 };
const CONTENT_AREA_STYLE: CSSProperties = {
  flex: 1,
  overflowY: "auto",
  padding: 16,
};
const LOADING_CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
};
const TITLE_STYLE: CSSProperties = { margin: 0 };

export type CommentsSidePanelProps = {
  visible: boolean;
  comments: RecordComment[];
  loading: boolean;
  onClose: () => void;
  onAddComment: (body: string) => Promise<void>;
  currentUserId?: number;
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
  const userName = comment.create_uid[1];
  const initials = getInitials(userName);
  const avatarColor = colorFromString(userName);
  const formattedTime = dayjs(comment.create_date).format("HH:mm");
  const formattedDate = dayjs(comment.create_date).format("DD/MM/YYYY");

  const containerStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      flexDirection: isOwnMessage ? "row-reverse" : "row",
      alignItems: "flex-start",
      gap: 8,
      marginBottom: 16,
    }),
    [isOwnMessage],
  );

  const avatarStyle = useMemo(
    () => ({
      backgroundColor: avatarColor,
      flexShrink: 0,
    }),
    [avatarColor],
  );

  const contentWrapperStyle = useMemo(
    (): CSSProperties => ({
      maxWidth: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: isOwnMessage ? "flex-end" : "flex-start",
    }),
    [isOwnMessage],
  );

  const headerStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      gap: 8,
      marginBottom: 4,
      flexDirection: isOwnMessage ? "row-reverse" : "row",
    }),
    [isOwnMessage],
  );

  const bubbleStyle = useMemo(
    () => ({
      backgroundColor: isOwnMessage
        ? token.colorBgTextHover
        : token.colorFillSecondary,
      padding: "8px 12px",
      borderRadius: 12,
      borderTopLeftRadius: isOwnMessage ? 12 : 4,
      borderTopRightRadius: isOwnMessage ? 4 : 12,
    }),
    [isOwnMessage, token.colorBgTextHover, token.colorFillSecondary],
  );

  return (
    <div style={containerStyle}>
      <Avatar style={avatarStyle} size={36}>
        {initials}
      </Avatar>
      <div style={contentWrapperStyle}>
        <div style={headerStyle}>
          <Text strong style={{ fontSize: 12 }}>
            {userName}
          </Text>
          <Text type="secondary" style={{ fontSize: 11 }}>
            {formattedTime}
          </Text>
          <Text type="secondary" style={{ fontSize: 11 }}>
            {formattedDate}
          </Text>
        </div>
        <div style={bubbleStyle}>
          <Text style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
            {comment.body}
          </Text>
        </div>
      </div>
    </div>
  );
});
MessageBubble.displayName = "MessageBubble";

const CommentsSidePanelComponent = (props: CommentsSidePanelProps) => {
  const { visible, comments, loading, onClose, onAddComment, currentUserId } =
    props;
  const { token } = useToken();
  const { t } = useLocale();
  const [newComment, setNewComment] = useState("");
  const [sending, setSending] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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
      height: "100%",
      backgroundColor: token.colorBgContainer,
      borderLeft: `1px solid ${token.colorBorder}`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      flexShrink: 0,
    }),
    [token.colorBgContainer, token.colorBorder],
  );

  const panelHeaderStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "12px 16px",
      borderBottom: `1px solid ${token.colorBorder}`,
      backgroundColor: token.colorBgElevated,
    }),
    [token.colorBorder, token.colorBgElevated],
  );

  const footerStyle = useMemo(
    () => ({
      padding: 12,
      borderTop: `1px solid ${token.colorBorder}`,
      backgroundColor: token.colorBgElevated,
    }),
    [token.colorBorder, token.colorBgElevated],
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{ width: PANEL_WIDTH, opacity: 1 }}
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

          <div style={CONTENT_AREA_STYLE}>
            {loading ? (
              <div style={LOADING_CONTAINER_STYLE}>
                <Spin />
              </div>
            ) : comments.length === 0 ? (
              <Empty
                description={t("noComments")}
                image={Empty.PRESENTED_IMAGE_SIMPLE}
              />
            ) : (
              <>
                {comments.map((comment) => (
                  <MessageBubble
                    key={comment.id}
                    comment={comment}
                    isOwnMessage={comment.create_uid[0] === currentUserId}
                  />
                ))}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          <div style={footerStyle}>
            <Space.Compact style={{ width: "100%" }}>
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
            </Space.Compact>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CommentsSidePanel = memo(CommentsSidePanelComponent);
