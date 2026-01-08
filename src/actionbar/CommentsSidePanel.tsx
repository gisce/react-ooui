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
  Spin,
  Empty,
  theme,
  Tooltip,
  Mentions,
} from "antd";
import { CloseOutlined, SendOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { RecordComment, MentionUser, Participant } from "@/types/comments";
import dayjs from "@/helpers/dayjs";
import { UserAvatar } from "@/ui/UserAvatar";
import { CommentMarkdown } from "@/ui/CommentMarkdown";
import { ParticipantsSection } from "./ParticipantsSection";

const { Title, Text } = Typography;
const { useToken } = theme;

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

const getDayLabel = (date: string): string => {
  // dayjs calendar() uses locale-specific formats configured in helpers/dayjs.ts
  return capitalize(dayjs(date).calendar());
};

export const COMMENTS_PANEL_WIDTH = 450;
export const COMMENTS_PANEL_GAP = 8;
const TEXT_AREA_AUTO_SIZE = { minRows: 1, maxRows: 4 };
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
};
const TITLE_STYLE: CSSProperties = { margin: 0 };

export type CommentsSidePanelProps = {
  visible: boolean;
  comments: RecordComment[];
  loading: boolean;
  model: string;
  resourceId: number;
  onClose: () => void;
  onAddComment: (body: string) => Promise<void>;
  onFetchComments: () => void;
  onFetchMentionUsers: (query: string) => Promise<MentionUser[]>;
  currentUserId?: number;
  canAddComment?: boolean;
  participants?: Participant[];
  participantsLoading?: boolean;
  isMuted?: boolean;
  muteUpdating?: boolean;
  onToggleMute?: () => void;
};

type MessageBubbleProps = {
  comment: RecordComment;
  isOwnMessage: boolean;
  isFirstInGroup: boolean;
  isFirstOfDay: boolean;
  dayLabel?: string;
  model: string;
  resourceId: number;
};

const MessageBubble = memo(
  ({
    comment,
    isOwnMessage,
    isFirstInGroup,
    isFirstOfDay,
    dayLabel,
    model,
    resourceId,
  }: MessageBubbleProps) => {
    const { token } = useToken();
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

    const daySeparatorStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginTop: 16,
        marginBottom: 12,
        width: "100%",
      }),
      [],
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

    const avatarNameGroupStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        alignItems: "center",
        gap: 8,
      }),
      [],
    );

    const nameStyle = useMemo(
      (): CSSProperties => ({
        fontSize: 13,
        fontWeight: 600,
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
      }),
      [token.colorTextQuaternary],
    );

    const avatarNameElement = (
      <div style={avatarNameGroupStyle}>
        {isOwnMessage ? (
          <>
            <Text style={nameStyle}>{userName}</Text>
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
            <Text style={nameStyle}>{userName}</Text>
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
      <>
        {isFirstOfDay && dayLabel && (
          <div style={daySeparatorStyle}>
            <div style={dayLineStyle} />
            <Text style={dayLabelStyle}>{dayLabel}</Text>
            <div style={dayLineStyle} />
          </div>
        )}
        {isFirstInGroup && !isFirstOfDay && <div style={separatorStyle} />}
        <div style={containerStyle}>
          {isFirstInGroup && <div style={headerStyle}>{avatarNameElement}</div>}
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
      </>
    );
  },
);
MessageBubble.displayName = "MessageBubble";

const CommentsSidePanelComponent = (props: CommentsSidePanelProps) => {
  const {
    visible,
    comments,
    loading,
    model,
    resourceId,
    onClose,
    onAddComment,
    onFetchComments,
    onFetchMentionUsers,
    currentUserId,
    canAddComment,
    participants = [],
    participantsLoading = false,
    isMuted = false,
    muteUpdating = false,
    onToggleMute,
  } = props;
  const { token } = useToken();
  const { t } = useLocale();
  const [newComment, setNewComment] = useState("");
  const [sending, setSending] = useState(false);
  const [shouldRender, setShouldRender] = useState(visible);
  const [mentionUsers, setMentionUsers] = useState<MentionUser[]>([]);
  const [mentionSearching, setMentionSearching] = useState(false);
  const [mentionDropdownOpen, setMentionDropdownOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mentionsRef = useRef<any>(null);

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
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (visible && comments.length > 0 && !loading) {
      // Use setTimeout to ensure content is fully rendered before scrolling
      setTimeout(() => {
        scrollToBottom();
      }, 50);
    }
  }, [visible, comments.length, loading, scrollToBottom]);

  const handleSend = useCallback(async () => {
    if (!newComment.trim() || sending) return;

    setSending(true);
    try {
      await onAddComment(newComment.trim());
      setNewComment("");
      setTimeout(scrollToBottom, 100);
    } finally {
      setSending(false);
      setTimeout(() => mentionsRef.current?.focus(), 0);
    }
  }, [newComment, sending, onAddComment, scrollToBottom]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter" && !e.shiftKey && !mentionDropdownOpen) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend, mentionDropdownOpen],
  );

  const handleCommentChange = useCallback((value: string) => {
    setNewComment(value);
  }, []);

  const handleMentionSearch = useCallback(
    async (text: string, prefix: string) => {
      if (prefix !== "@") return;
      setMentionDropdownOpen(true);
      setMentionSearching(true);
      setMentionUsers([]);
      const users = await onFetchMentionUsers(text);
      const filteredUsers = currentUserId
        ? users.filter((user) => user.id !== currentUserId)
        : users;
      setMentionUsers(filteredUsers);
      setMentionSearching(false);
    },
    [onFetchMentionUsers, currentUserId],
  );

  const handleMentionSelect = useCallback(() => {
    setMentionDropdownOpen(false);
  }, []);

  const handleMentionBlur = useCallback(() => {
    setMentionDropdownOpen(false);
  }, []);

  const mentionOptions = useMemo(
    () =>
      mentionUsers.map((user) => ({
        value: user.login,
        label: (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <UserAvatar userName={user.name} size={24} />
            <span>{user.name}</span>
            <Text type="secondary" style={{ fontSize: 12 }}>
              @{user.login}
            </Text>
          </div>
        ),
      })),
    [mentionUsers],
  );

  const contentAreaStyle = useMemo(
    (): CSSProperties => ({
      flex: 1,
      overflowY: "auto",
      overscrollBehavior: "contain",
      scrollbarWidth: "thin",
      scrollbarColor: `${token.colorTextQuaternary} ${token.colorBgContainer}`,
      padding: 16,
      display: "flex",
      flexDirection: "column",
      minHeight: 0,
    }),
    [token.colorTextQuaternary, token.colorBgContainer],
  );

  const panelStyle = useMemo(
    (): CSSProperties => ({
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: COMMENTS_PANEL_WIDTH,
      backgroundColor: token.colorBgContainer,
      borderLeft: `1px solid ${token.colorBorder}`,
      display: "flex",
      flexDirection: "column",
      overflow: "hidden",
      zIndex: 50,
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

          {onToggleMute && (
            <ParticipantsSection
              participants={participants}
              isMuted={isMuted}
              loading={participantsLoading}
              updating={muteUpdating}
              onToggleMute={onToggleMute}
            />
          )}

          <ErrorBoundary>
            <div style={contentAreaStyle}>
              {loading && comments.length === 0 ? (
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
                  {[...comments].reverse().map((comment, index, arr) => {
                    const prevComment = index > 0 ? arr[index - 1] : null;
                    const isFirstInGroup =
                      !prevComment ||
                      prevComment.create_uid !== comment.create_uid;
                    const isFirstOfDay =
                      !prevComment ||
                      !dayjs(prevComment.create_date).isSame(
                        dayjs(comment.create_date),
                        "day",
                      );

                    return (
                      <MessageBubble
                        key={comment.id}
                        comment={comment}
                        isOwnMessage={comment.create_uid === currentUserId}
                        isFirstInGroup={isFirstInGroup || isFirstOfDay}
                        isFirstOfDay={isFirstOfDay}
                        dayLabel={
                          isFirstOfDay
                            ? getDayLabel(comment.create_date)
                            : undefined
                        }
                        model={model}
                        resourceId={resourceId}
                      />
                    );
                  })}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </ErrorBoundary>

          {canAddComment && (
            <div style={footerStyle}>
              <div style={{ display: "flex", gap: 8, alignItems: "flex-end" }}>
                <Mentions
                  ref={mentionsRef}
                  value={newComment}
                  onChange={handleCommentChange}
                  onKeyDown={handleKeyDown}
                  onSearch={handleMentionSearch}
                  onSelect={handleMentionSelect}
                  onBlur={handleMentionBlur}
                  options={mentionOptions}
                  loading={mentionSearching}
                  filterOption={false}
                  notFoundContent={
                    mentionSearching ? <Spin size="small" /> : t("noMatches")
                  }
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
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CommentsSidePanel = memo(CommentsSidePanelComponent);
