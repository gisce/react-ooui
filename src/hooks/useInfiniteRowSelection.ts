import { useCallback, useMemo } from "react";
import { useLocale } from "@gisce/react-formiga-components";
import showConfirmDialog from "@/ui/ConfirmDialog";

export interface SelectedRowItem {
  id: number;
}

export interface UseInfiniteRowSelectionProps {
  selectedRowItems?: SelectedRowItem[];
  setSelectedRowItems?: (items: SelectedRowItem[]) => void;
  onChangeSelectedRowKeys?: (keys: number[]) => void;
  totalRows?: number | null;
  maxRowsToSelect?: number;
  onSelectAll?: () => Promise<SelectedRowItem[]>;
}

export interface UseInfiniteRowSelectionReturn {
  selectedRowKeys: number[];
  changeSelectedRowItems: (items: SelectedRowItem[]) => void;
  changeSelectedRowKeys: (keys: number[]) => void;
  onSelectionCheckboxClicked: () => Promise<void>;
}

export const useInfiniteRowSelection = ({
  selectedRowItems = [],
  setSelectedRowItems,
  onChangeSelectedRowKeys,
  totalRows,
  maxRowsToSelect = 200,
  onSelectAll,
}: UseInfiniteRowSelectionProps): UseInfiniteRowSelectionReturn => {
  const { t } = useLocale();

  // Convert selected items to keys
  const selectedRowKeys = useMemo(() => {
    return selectedRowItems.map((item) => item.id);
  }, [selectedRowItems]);

  // Change selected row items
  const changeSelectedRowItems = useCallback(
    (newSelectedRowItems: SelectedRowItem[]) => {
      setSelectedRowItems?.(newSelectedRowItems);
      onChangeSelectedRowKeys?.(newSelectedRowItems.map((item) => item.id));
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

  // Change selected row keys
  const changeSelectedRowKeys = useCallback(
    (newSelectedRowKeys: number[]) => {
      const newItems = newSelectedRowKeys.map((id: number) => ({ id }));
      setSelectedRowItems?.(newItems);
      onChangeSelectedRowKeys?.(newSelectedRowKeys);
    },
    [onChangeSelectedRowKeys, setSelectedRowItems],
  );

  // Handle selection checkbox click (select all/none)
  const onSelectionCheckboxClicked = useCallback(async () => {
    const mustSelectAll = selectedRowItems.length === 0;

    if (mustSelectAll) {
      if (totalRows && totalRows > maxRowsToSelect) {
        showConfirmDialog({
          confirmMessage: t("confirmSelectAllRegisters").replace(
            "{totalRecords}",
            totalRows.toString(),
          ),
          t,
          onOk: async () => {
            if (onSelectAll) {
              const allItems = await onSelectAll();
              changeSelectedRowItems(allItems);
            }
          },
        });
      } else {
        if (onSelectAll) {
          const allItems = await onSelectAll();
          changeSelectedRowItems(allItems);
        }
      }
    } else {
      setSelectedRowItems?.([]);
    }
  }, [
    changeSelectedRowItems,
    maxRowsToSelect,
    onSelectAll,
    selectedRowItems.length,
    setSelectedRowItems,
    t,
    totalRows,
  ]);

  return {
    selectedRowKeys,
    changeSelectedRowItems,
    changeSelectedRowKeys,
    onSelectionCheckboxClicked,
  };
};
