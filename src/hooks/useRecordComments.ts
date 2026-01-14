import { useState, useEffect, useRef, useCallback } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "./useNetworkRequest";
import {
  RecordComment,
  MentionUser,
  Participant,
  UserStatus,
} from "@/types/comments";

export type UseRecordCommentsOpts = {
  model: string;
  resourceId?: number;
  context?: any;
};

export const useRecordComments = (opts: UseRecordCommentsOpts) => {
  const { model, resourceId, context } = opts;
  const [comments, setComments] = useState<RecordComment[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [userStatus, setUserStatus] = useState<UserStatus | null>(null);
  const [loading, setLoading] = useState(false);

  const [executeRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  const prevResourceIdRef = useRef(resourceId);

  const resetState = useCallback(() => {
    setComments([]);
    setParticipants([]);
    setUserStatus(null);
  }, []);

  // Reset state when navigating to a different record (not on initial mount)
  useEffect(() => {
    if (prevResourceIdRef.current !== resourceId) {
      resetState();
      prevResourceIdRef.current = resourceId;
    }
  }, [resourceId, resetState]);

  const fetchComments = useDeepCompareCallback(
    async (opts?: { silent?: boolean }) => {
      if (!resourceId) {
        resetState();
        return;
      }

      if (!opts?.silent) {
        setLoading(true);
      }
      try {
        const result = await executeRequest({
          model,
          action: "get_comments",
          payload: [[resourceId]],
          context,
        });

        // Detect format: new format is object with 'comments' key, old format is array
        if (result && !Array.isArray(result) && "comments" in result) {
          // New format: { comments, participants, user_status }
          setComments(result.comments || []);
          setParticipants(result.participants || []);
          setUserStatus(result.user_status || null);
        } else {
          // Old format: array of comments (backward compatibility)
          setComments(result || []);
          setParticipants([]);
          setUserStatus(null);
        }
      } catch (error) {
        resetState();
      } finally {
        if (!opts?.silent) {
          setLoading(false);
        }
      }
    },
    [model, resourceId, context, executeRequest, resetState],
  );

  const addComment = useDeepCompareCallback(
    async (body: string) => {
      if (!resourceId || !body.trim()) {
        return null;
      }

      const commentId = await executeRequest({
        model,
        action: "add_comment",
        payload: [resourceId, body],
        context,
      });
      return commentId;
    },
    [model, resourceId, context, executeRequest],
  );

  const fetchMentionUsers = useDeepCompareCallback(
    async (query: string): Promise<MentionUser[]> => {
      if (!resourceId) {
        return [];
      }

      try {
        const result = await executeRequest({
          model,
          action: "autocomplete_users_for_mentions",
          payload: [resourceId, query],
          context,
        });
        return result || [];
      } catch {
        return [];
      }
    },
    [model, resourceId, context, executeRequest],
  );

  const markAsRead = useDeepCompareCallback(
    async (messageId: number) => {
      if (!resourceId || !messageId) {
        return;
      }

      try {
        await executeRequest({
          model,
          action: "set_comments_read_until",
          payload: [resourceId, messageId],
          context,
        });

        // Update local userStatus to reflect the new last_message_read
        setUserStatus((prev) =>
          prev ? { ...prev, last_message_read: messageId } : prev,
        );
      } catch {
        // Silently fail - reading status is not critical
      }
    },
    [model, resourceId, context, executeRequest],
  );

  const deleteComment = useDeepCompareCallback(
    (commentId: number) => {
      if (!commentId) {
        return;
      }

      const commentToRestore = comments.find((c) => c.id === commentId);
      if (!commentToRestore) {
        return;
      }

      setComments((prev) => prev.filter((c) => c.id !== commentId));

      ConnectionProvider.getHandler()
        .deleteObjects({
          model: "message.comment",
          ids: [commentId],
          context,
        })
        .catch(() => {
          setComments((prev) =>
            [...prev, commentToRestore].sort((a, b) => b.id - a.id),
          );
        });
    },
    [comments, context],
  );

  return {
    comments,
    participants,
    userStatus,
    loading,
    fetchComments,
    addComment,
    deleteComment,
    fetchMentionUsers,
    markAsRead,
    cancelRequest,
    commentCount: comments.length,
  };
};
