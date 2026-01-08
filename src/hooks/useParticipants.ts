import { useState } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "./useNetworkRequest";
import { Participant } from "@/types/comments";

export type UseParticipantsOpts = {
  model: string;
  resourceId?: number;
  currentUserId?: number;
  context?: any;
};

type RawParticipant = {
  id: number;
  user_id: [number, string] | false;
  is_muted: boolean;
  last_message_read?: number;
};

export const useParticipants = (opts: UseParticipantsOpts) => {
  const { model, resourceId, currentUserId, context } = opts;
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [loading, setLoading] = useState(false);
  const [updating, setUpdating] = useState(false);

  const [searchRequest, cancelSearchRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().search,
  );
  const [updateRequest, cancelUpdateRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().update,
  );

  const fetchParticipants = useDeepCompareCallback(async () => {
    if (!resourceId) {
      setParticipants([]);
      return;
    }

    setLoading(true);
    try {
      const result: RawParticipant[] = await searchRequest({
        model: "message.participant",
        params: [
          ["res_model", "=", model],
          ["res_id", "=", resourceId],
        ],
        fieldsToRetrieve: ["id", "user_id", "is_muted", "last_message_read"],
        context,
      });

      if (!result || result.length === 0) {
        setParticipants([]);
        return;
      }

      const participantsWithNames: Participant[] = result.map((p) => ({
        id: p.id,
        user_id: Array.isArray(p.user_id) ? p.user_id[0] : 0,
        name: Array.isArray(p.user_id) ? p.user_id[1] : "?",
        is_muted: p.is_muted,
        last_message_read: p.last_message_read,
      }));

      setParticipants(participantsWithNames);
    } catch {
      setParticipants([]);
    } finally {
      setLoading(false);
    }
  }, [model, resourceId, context, searchRequest]);

  const currentUserParticipant =
    participants.find((p) => p.user_id === currentUserId) || null;

  const toggleMute = useDeepCompareCallback(async () => {
    if (!currentUserParticipant) return;

    const previousValue = currentUserParticipant.is_muted;

    // Optimistic update
    setParticipants((prev) =>
      prev.map((p) =>
        p.id === currentUserParticipant.id
          ? { ...p, is_muted: !previousValue }
          : p,
      ),
    );

    setUpdating(true);
    try {
      await updateRequest({
        model: "message.participant",
        id: currentUserParticipant.id,
        values: { is_muted: !previousValue },
        fields: { is_muted: { type: "boolean" } },
        context,
      });
    } catch {
      // Rollback on error
      setParticipants((prev) =>
        prev.map((p) =>
          p.id === currentUserParticipant.id
            ? { ...p, is_muted: previousValue }
            : p,
        ),
      );
    } finally {
      setUpdating(false);
    }
  }, [currentUserParticipant, context, updateRequest]);

  const cancelRequest = () => {
    cancelSearchRequest();
    cancelUpdateRequest();
  };

  return {
    participants,
    loading,
    updating,
    fetchParticipants,
    toggleMute,
    currentUserParticipant,
    isMuted: currentUserParticipant?.is_muted ?? false,
    cancelRequest,
  };
};
