import { useState } from "react";
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

  const fetchComments = useDeepCompareCallback(async () => {
    if (!resourceId) {
      setComments([]);
      setParticipants([]);
      setUserStatus(null);
      return;
    }

    setLoading(true);
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
      setComments([]);
      setParticipants([]);
      setUserStatus(null);
    } finally {
      setLoading(false);
    }
  }, [model, resourceId, context, executeRequest]);

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

  return {
    comments,
    participants,
    userStatus,
    loading,
    fetchComments,
    addComment,
    fetchMentionUsers,
    markAsRead,
    cancelRequest,
    commentCount: comments.length,
  };
};
