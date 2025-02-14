import { useCallback, useState, RefObject } from "react";
import { ConnectionProvider } from "..";
import { showErrorDialog } from "@/ui/GenericErrorDialog";

type UseDuplicateItemProps = {
  currentId?: number;
  currentModel: string;
  formRef: RefObject<any>;
  onItemDuplicated?: (id: number) => void;
};

export const useDuplicateItem = ({
  currentId,
  currentModel,
  formRef,
  onItemDuplicated,
}: UseDuplicateItemProps) => {
  const [duplicatingItem, setDuplicatingItem] = useState(false);

  const handleDuplicate = useCallback(async () => {
    try {
      if (!currentId) {
        return;
      }
      setDuplicatingItem(true);
      const newId = await ConnectionProvider.getHandler().duplicate({
        id: currentId,
        model: currentModel,
        context: (formRef.current as any).getContext(),
      });
      if (newId) {
        await onItemDuplicated?.(newId);
      }
    } catch (e) {
      showErrorDialog(JSON.stringify(e));
    } finally {
      setDuplicatingItem(false);
    }
  }, [currentId, currentModel, formRef, onItemDuplicated]);

  return {
    duplicatingItem,
    handleDuplicate,
  };
};
