import { useCallback, useState, RefObject } from "react";
import { ConnectionProvider } from "..";
import { showErrorDialog } from "@/ui/GenericErrorDialog";

type UseDuplicateItemProps = {
  currentId?: number;
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

  const duplicate = useCallback(async () => {
    try {
      if (!currentId) {
        return;
      }
      setDuplicatingItem(true);
      const newId = await ConnectionProvider.getHandler().duplicate({
        id: currentId,
        model: currentModel,
        context,
      });
      if (newId) {
        await onItemDuplicated?.(newId);
      }
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setDuplicatingItem(false);
    }
  }, [currentId, currentModel, onItemDuplicated, context]);

  return {
    duplicatingItem,
    duplicate,
  };
};
