import { useState } from "react";
import { useDeepCompareCallback, useDeepCompareEffect } from "use-deep-compare";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "./useNetworkRequest";
import { UserStatus } from "@/types/comments";

export type UseParticipantsOpts = {
  model: string;
  resourceId?: number;
  userStatus: UserStatus | null;
  context?: any;
};

type OptimisticState = {
  isParticipant: boolean;
  isMuted: boolean;
};

export const useParticipants = (opts: UseParticipantsOpts) => {
  const { model, resourceId, userStatus, context } = opts;
  const [updating, setUpdating] = useState(false);
  const [optimisticState, setOptimisticState] =
    useState<OptimisticState | null>(null);

  const [executeRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().rawExecute,
  );

  const serverIsParticipant = userStatus?.is_participant ?? false;
  const serverIsMuted = userStatus?.is_muted ?? false;

  // Use optimistic state if available, otherwise use server state
  const isParticipant = optimisticState?.isParticipant ?? serverIsParticipant;
  const isMuted = optimisticState?.isMuted ?? serverIsMuted;

  // Clear optimistic state when server state updates (after refetch)
  useDeepCompareEffect(() => {
    setOptimisticState(null);
  }, [userStatus]);

  const toggleMute = useDeepCompareCallback(async () => {
    if (!resourceId || updating) return;

    // Determine if user is currently NOT receiving notifications:
    // - Non-participants don't receive (even if is_muted is false)
    // - Participants with is_muted=true don't receive
    const isNotReceiving = !serverIsParticipant || serverIsMuted;

    // If not receiving -> send false (subscribe/unmute)
    // If receiving -> send true (mute)
    const newMutedValue = !isNotReceiving;

    // Optimistic update - subscribing always makes you a participant
    setOptimisticState({
      isParticipant: true,
      isMuted: newMutedValue,
    });

    setUpdating(true);
    try {
      await executeRequest({
        model,
        action: "set_conversation_muted",
        payload: [resourceId, newMutedValue],
        context,
      });
    } catch {
      // Revert to server state on error
      setOptimisticState(null);
    } finally {
      setUpdating(false);
    }
  }, [
    model,
    resourceId,
    updating,
    serverIsParticipant,
    serverIsMuted,
    context,
    executeRequest,
  ]);

  return {
    isMuted,
    isParticipant,
    updating,
    toggleMute,
    cancelRequest,
  };
};
