import { useCallback, useState } from "react";
import { ConnectionProvider } from "..";
import { useErrorNotification } from "@/hooks/useErrorNotification";

type UseDuplicateItemProps = {
  currentId?: number | string;
  currentModel: string;
  onItemDuplicated?: (id: number) => void;
  context?: any;
};

export const useDuplicateItem = ({
  currentId,
  currentModel,
  onItemDuplicated,
  context,
}: UseDuplicateItemProps) => {
  const [duplicatingItem, setDuplicatingItem] = useState(false);
  const { showErrorNotification } = useErrorNotification();

  const duplicate = useCallback(async () => {
    try {
      if (!currentId) {
        return;
      }
      setDuplicatingItem(true);
      const newId = await ConnectionProvider.getHandler().duplicate({
        id: currentId as number,
        model: currentModel,
        context,
      });
      if (newId) {
        onItemDuplicated?.(newId);
      }
    } catch (e) {
      showErrorNotification(e);
    } finally {
      setDuplicatingItem(false);
    }
  }, [
    currentId,
    currentModel,
    context,
    onItemDuplicated,
    showErrorNotification,
  ]);

  return {
    duplicatingItem,
    duplicate,
  };
};
