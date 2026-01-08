import { useState, useEffect } from "react";
import { useDeepCompareCallback } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "./useNetworkRequest";
import { UserStatus } from "@/types/comments";

export type UseParticipantsOpts = {
  model: string;
  resourceId?: number;
  userStatus: UserStatus | null;
  context?: any;
};

export const useParticipants = (opts: UseParticipantsOpts) => {
  const { model, resourceId, userStatus, context } = opts;
  const [updating, setUpdating] = useState(false);
  const [localMuted, setLocalMuted] = useState(userStatus?.is_muted ?? false);

  const [executeRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  // Sync with userStatus when it changes
  useEffect(() => {
    setLocalMuted(userStatus?.is_muted ?? false);
  }, [userStatus?.is_muted]);

  const toggleMute = useDeepCompareCallback(async () => {
    if (!resourceId) return;

    const previousValue = localMuted;
    const newValue = !previousValue;

    // Optimistic update
    setLocalMuted(newValue);

    setUpdating(true);
    try {
      await executeRequest({
        model,
        action: "set_conversation_muted",
        payload: [resourceId, newValue],
        context,
      });
    } catch {
      // Rollback on error
      setLocalMuted(previousValue);
    } finally {
      setUpdating(false);
    }
  }, [model, resourceId, localMuted, context, executeRequest]);

  return {
    isMuted: localMuted,
    updating,
    toggleMute,
    isParticipant: userStatus?.is_participant ?? false,
    cancelRequest,
  };
};
