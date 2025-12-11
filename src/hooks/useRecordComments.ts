import { useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "./useNetworkRequest";
import { RecordComment } from "@/types/comments";

export type UseRecordCommentsOpts = {
  model: string;
  resourceId?: number;
  context?: any;
};

export const useRecordComments = (opts: UseRecordCommentsOpts) => {
  const { model, resourceId, context } = opts;
  const [comments, setComments] = useState<RecordComment[]>([]);
  const [loading, setLoading] = useState(false);

  const [executeRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  const fetchComments = useDeepCompareCallback(async () => {
    if (!resourceId) {
      setComments([]);
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
      setComments(result || []);
    } catch (error) {
      setComments([]);
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

  return {
    comments,
    loading,
    fetchComments,
    addComment,
    cancelRequest,
    commentCount: comments.length,
  };
};
