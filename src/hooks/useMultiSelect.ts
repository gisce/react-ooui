import { useCallback, useRef } from "react";

type SelectionItem = { id: number };

type SelectionModifiers = {
  isCtrlCmd: boolean;
  isShift: boolean;
};

type UseMultiSelectProps = {
  selectedItems: SelectionItem[];
  setSelectedItems: (items: SelectionItem[]) => void;
  getOrderedIds?: (itemId: number) => number[] | null;
};

type UseMultiSelectReturn = {
  handleSelect: (item: SelectionItem, modifiers: SelectionModifiers) => void;
  clearSelection: () => void;
};

export const useMultiSelect = ({
  selectedItems,
  setSelectedItems,
  getOrderedIds,
}: UseMultiSelectProps): UseMultiSelectReturn => {
  const anchorIdRef = useRef<number | null>(null);

  const handleSelect = useCallback(
    (item: SelectionItem, modifiers: SelectionModifiers) => {
      const { isCtrlCmd, isShift } = modifiers;
      const isAlreadySelected = selectedItems.some((s) => s.id === item.id);

      if (isShift && anchorIdRef.current !== null && getOrderedIds) {
        const orderedIds = getOrderedIds(item.id);

        if (orderedIds && orderedIds.includes(anchorIdRef.current)) {
          const anchorIndex = orderedIds.indexOf(anchorIdRef.current);
          const clickedIndex = orderedIds.indexOf(item.id);

          const startIndex = Math.min(anchorIndex, clickedIndex);
          const endIndex = Math.max(anchorIndex, clickedIndex);

          const rangeIds = orderedIds.slice(startIndex, endIndex + 1);
          setSelectedItems(rangeIds.map((id) => ({ id })));
          return;
        }
      }

      if (isCtrlCmd) {
        if (isAlreadySelected) {
          setSelectedItems(selectedItems.filter((s) => s.id !== item.id));
        } else {
          setSelectedItems([...selectedItems, item]);
        }
        anchorIdRef.current = item.id;
      } else {
        if (isAlreadySelected && selectedItems.length === 1) {
          setSelectedItems([]);
          anchorIdRef.current = null;
        } else {
          setSelectedItems([item]);
          anchorIdRef.current = item.id;
        }
      }
    },
    [selectedItems, setSelectedItems, getOrderedIds],
  );

  const clearSelection = useCallback(() => {
    setSelectedItems([]);
    anchorIdRef.current = null;
  }, [setSelectedItems]);

  return { handleSelect, clearSelection };
};
