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
import { ReloadOutlined, SendOutlined, CloseOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import {
  RecordComment,
  MentionUser,
  Participant,
  PendingComment,
} from "@/types/comments";
import dayjs from "@/helpers/dayjs";
import { UserAvatar } from "@/ui/UserAvatar";
import { ParticipantsSection } from "./ParticipantsSection";
import { PendingMessageBubble } from "./PendingMessageBubble";
import { MessageBubble } from "./MessageBubble";
import { UnreadDivider } from "./UnreadDivider";
import { nanoid } from "nanoid";

const { Title, Text } = Typography;
const { useToken } = theme;

const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

const getDayLabel = (date: string): string =>
  capitalize(dayjs(date).calendar());

export const COMMENTS_PANEL_WIDTH = 450;
export const COMMENTS_PANEL_GAP = 8;

const TEXT_AREA_AUTO_SIZE = { minRows: 1, maxRows: 4 };

const CENTERED_CONTAINER_STYLE: CSSProperties = {
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

const HEADER_TITLE_GROUP_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 4,
};

export type CommentsSidePanelProps = {
  visible: boolean;
  comments: RecordComment[];
  loading: boolean;
  model: string;
  resourceId: number;
  onClose: () => void;
  onAddComment: (body: string) => Promise<void>;
  onDeleteComment?: (commentId: number) => void;
  onFetchComments: (opts?: { silent?: boolean }) => void;
  onFetchMentionUsers: (query: string) => Promise<MentionUser[]>;
  currentUserId?: number;
  canAddComment?: boolean;
  participants?: Participant[];
  participantsLoading?: boolean;
  isParticipant?: boolean;
  isMuted?: boolean;
  muteUpdating?: boolean;
  onToggleMute?: () => void;
  lastMessageRead?: number | false;
  onMarkAsRead?: (messageId: number) => void;
};

const CommentsSidePanelComponent = (props: CommentsSidePanelProps) => {
  const {
    visible,
    comments,
    loading,
    model,
    resourceId,
    onClose,
    onAddComment,
    onDeleteComment,
    onFetchComments,
    onFetchMentionUsers,
    currentUserId,
    canAddComment,
    participants = [],
    participantsLoading = false,
    isParticipant = false,
    isMuted = false,
    muteUpdating = false,
    onToggleMute,
    lastMessageRead,
    onMarkAsRead,
  } = props;

  const { token } = useToken();
  const { t } = useLocale();

  const [newComment, setNewComment] = useState("");
  const [pendingComments, setPendingComments] = useState<PendingComment[]>([]);
  const [shouldRender, setShouldRender] = useState(visible);
  const [mentionUsers, setMentionUsers] = useState<MentionUser[]>([]);
  const [mentionSearching, setMentionSearching] = useState(false);
  const [mentionDropdownOpen, setMentionDropdownOpen] = useState(false);
  const [hasScrolledToUnread, setHasScrolledToUnread] = useState(false);
  const [dividerMounted, setDividerMounted] = useState(false);
  const [hasFetchedSinceOpen, setHasFetchedSinceOpen] = useState(false);
  const [recentlySent, setRecentlySent] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const mentionsRef = useRef<any>(null);
  const contentAreaRef = useRef<HTMLDivElement>(null);
  const messageRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const recentlySentTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const prevLoadingRef = useRef(loading);
  const unreadDividerRef = useRef<HTMLDivElement | null>(null);

  const newestMessageId = comments.length > 0 ? comments[0].id : null;
  const isReadStatusKnown = lastMessageRead !== undefined;

  const isSendingMessage = useMemo(
    () => pendingComments.some((p) => p.status === "sending"),
    [pendingComments],
  );

  const firstUnreadMessageId = useMemo(() => {
    if (isSendingMessage || recentlySent) {
      return null;
    }
    if (lastMessageRead === false || lastMessageRead === undefined) {
      return null;
    }
    const unreadComments = comments.filter(
      (c) => c.id > (lastMessageRead as number),
    );
    if (unreadComments.length === 0) return null;
    return unreadComments[unreadComments.length - 1].id;
  }, [comments, lastMessageRead, isSendingMessage, recentlySent]);

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

  useEffect(() => {
    if (visible) {
      setShouldRender(true);
      setNewComment("");
      setHasFetchedSinceOpen(false);
      onFetchComments();
      setTimeout(() => mentionsRef.current?.focus(), 300);
    }
  }, [visible, onFetchComments]);

  useEffect(() => {
    const wasLoading = prevLoadingRef.current;
    prevLoadingRef.current = loading;
    if (wasLoading && !loading && visible) {
      setHasFetchedSinceOpen(true);
    }
  }, [loading, visible]);

  useEffect(() => {
    return () => {
      if (recentlySentTimeoutRef.current) {
        clearTimeout(recentlySentTimeoutRef.current);
      }
    };
  }, []);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const scrollToElement = useCallback((element: HTMLDivElement) => {
    if (!contentAreaRef.current) return;
    const container = contentAreaRef.current;
    const containerRect = container.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const relativeTop =
      elementRect.top - containerRect.top + container.scrollTop;
    const containerPadding = 16;
    const targetScroll = relativeTop - containerPadding;
    container.scrollTo({ top: targetScroll, behavior: "smooth" });
  }, []);

  const unreadDividerRefCallback = useCallback(
    (element: HTMLDivElement | null) => {
      unreadDividerRef.current = element;
      setDividerMounted(element !== null);
    },
    [],
  );

  useEffect(() => {
    if (
      visible &&
      comments.length > 0 &&
      !loading &&
      !hasScrolledToUnread &&
      isReadStatusKnown &&
      hasFetchedSinceOpen
    ) {
      if (firstUnreadMessageId && dividerMounted && unreadDividerRef.current) {
        setHasScrolledToUnread(true);
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (unreadDividerRef.current) {
              scrollToElement(unreadDividerRef.current);
            }
          });
        });
      } else if (!firstUnreadMessageId) {
        scrollToBottom();
        setHasScrolledToUnread(true);
      }
    }
  }, [
    visible,
    comments.length,
    loading,
    hasScrolledToUnread,
    isReadStatusKnown,
    hasFetchedSinceOpen,
    firstUnreadMessageId,
    dividerMounted,
    scrollToBottom,
    scrollToElement,
  ]);

  const handleExitComplete = useCallback(() => {
    setShouldRender(false);
    setHasScrolledToUnread(false);
    setDividerMounted(false);
    setHasFetchedSinceOpen(false);
    setPendingComments([]);
    setRecentlySent(false);
    if (recentlySentTimeoutRef.current) {
      clearTimeout(recentlySentTimeoutRef.current);
      recentlySentTimeoutRef.current = null;
    }
    if (
      onMarkAsRead &&
      newestMessageId &&
      newestMessageId !== lastMessageRead
    ) {
      onMarkAsRead(newestMessageId);
    }
  }, [onMarkAsRead, newestMessageId, lastMessageRead]);

  const sendMessage = useCallback(
    async (tempId: string, body: string) => {
      try {
        await onAddComment(body);
        setPendingComments((prev) => prev.filter((p) => p.tempId !== tempId));
        if (recentlySentTimeoutRef.current) {
          clearTimeout(recentlySentTimeoutRef.current);
        }
        setRecentlySent(true);
        recentlySentTimeoutRef.current = setTimeout(
          () => setRecentlySent(false),
          1000,
        );
      } catch {
        setPendingComments((prev) =>
          prev.map((p) =>
            p.tempId === tempId ? { ...p, status: "failed" as const } : p,
          ),
        );
      }
    },
    [onAddComment],
  );

  const handleSend = useCallback(() => {
    const body = newComment.trim();
    if (!body) return;

    const tempId = nanoid();
    const pendingMessage: PendingComment = {
      tempId,
      body,
      status: "sending",
      createdAt: new Date().toISOString(),
    };

    setPendingComments((prev) => [...prev, pendingMessage]);
    setNewComment("");
    setTimeout(scrollToBottom, 100);
    setTimeout(() => mentionsRef.current?.focus(), 0);

    void sendMessage(tempId, body);
  }, [newComment, scrollToBottom, sendMessage]);

  const handleRetry = useCallback(
    (tempId: string) => {
      const pending = pendingComments.find((p) => p.tempId === tempId);
      if (!pending) return;

      setPendingComments((prev) =>
        prev.map((p) =>
          p.tempId === tempId ? { ...p, status: "sending" as const } : p,
        ),
      );

      void sendMessage(tempId, pending.body);
    },
    [pendingComments, sendMessage],
  );

  const handleToggleMute = useCallback(async () => {
    await onToggleMute?.();
    onFetchComments({ silent: true });
  }, [onToggleMute, onFetchComments]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (
        e.key === "Enter" &&
        !e.shiftKey &&
        !mentionDropdownOpen &&
        newComment.trim()
      ) {
        e.preventDefault();
        handleSend();
      }
    },
    [handleSend, mentionDropdownOpen, newComment],
  );

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
          <ErrorBoundary>
            <div style={panelHeaderStyle}>
              <div style={HEADER_TITLE_GROUP_STYLE}>
                <Title level={5} style={TITLE_STYLE}>
                  {t("comments")}
                </Title>
                <Tooltip title={t("refresh")}>
                  <Button
                    type="text"
                    icon={
                      <ReloadOutlined style={{ color: token.colorPrimary }} />
                    }
                    onClick={() => onFetchComments()}
                    size="small"
                  />
                </Tooltip>
              </div>
              <Button
                type="text"
                icon={<CloseOutlined />}
                onClick={onClose}
                size="small"
              />
            </div>
          </ErrorBoundary>

          {onToggleMute && (
            <ErrorBoundary>
              <ParticipantsSection
                participants={participants}
                isParticipant={isParticipant}
                isMuted={isMuted}
                loading={participantsLoading}
                updating={muteUpdating}
                onToggleMute={handleToggleMute}
              />
            </ErrorBoundary>
          )}

          <ErrorBoundary>
            <div ref={contentAreaRef} style={contentAreaStyle}>
              {loading && comments.length === 0 ? (
                <div style={CENTERED_CONTAINER_STYLE}>
                  <Spin />
                </div>
              ) : comments.length === 0 ? (
                <div style={CENTERED_CONTAINER_STYLE}>
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
                    const isFirstUnread = comment.id === firstUnreadMessageId;

                    return (
                      <div
                        key={comment.id}
                        data-message-id={comment.id}
                        ref={(el) => {
                          if (el) {
                            messageRefs.current.set(comment.id, el);
                          }
                        }}
                      >
                        {isFirstUnread && (
                          <UnreadDivider
                            ref={unreadDividerRefCallback}
                            label={t("newMessages")}
                          />
                        )}
                        <MessageBubble
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
                          skipSeparator={isFirstUnread}
                          onDeleteComment={onDeleteComment}
                        />
                      </div>
                    );
                  })}
                  {pendingComments.map((pending) => (
                    <PendingMessageBubble
                      key={pending.tempId}
                      pending={pending}
                      onRetry={handleRetry}
                    />
                  ))}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>
          </ErrorBoundary>

          {canAddComment && (
            <ErrorBoundary>
              <div style={footerStyle}>
                <div
                  style={{ display: "flex", gap: 8, alignItems: "flex-end" }}
                >
                  <Mentions
                    ref={mentionsRef}
                    value={newComment}
                    onChange={setNewComment}
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
                    style={{ flex: 1 }}
                  />
                  <Button
                    type="primary"
                    icon={<SendOutlined />}
                    onClick={handleSend}
                    disabled={!newComment.trim()}
                  />
                </div>
              </div>
            </ErrorBoundary>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const CommentsSidePanel = memo(CommentsSidePanelComponent);
