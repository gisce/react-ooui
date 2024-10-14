import { useCallback, useEffect } from "react";
import ConnectionProvider from "@/ConnectionProvider";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { useShowErrorDialog } from "@/ui/GenericErrorDialog";

export const useNextPrevious = () => {
  const {
    isInfiniteTree,
    totalItems,
    currentItemIndex,
    setCurrentId,
    setCurrentItemIndex,
    results,
    searchQuery,
  } = useActionViewContext(true);

  const [fetchRequest, cancelRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().searchForTree,
  );

  useEffect(() => {
    return () => {
      cancelRequest();
    };
  }, [cancelRequest]);

  const showErrorDialog = useShowErrorDialog();

  const fetchNextRecord = useCallback(
    async (offset: number) => {
      try {
        const { params, model, name_search, context, order } = searchQuery!;
        const { results: nextRecords } = await fetchRequest({
          params,
          model,
          context,
          limit: 1,
          offset,
          order,
          name_search,
          skipRead: true,
        });
        return nextRecords[0]?.id;
      } catch (err) {
        showErrorDialog(err);
      }
    },
    [fetchRequest, searchQuery, showErrorDialog],
  );

  const updateCurrentItem = useCallback(
    (index: number, id: number) => {
      setCurrentItemIndex?.(index);
      setCurrentId?.(id);
    },
    [setCurrentItemIndex, setCurrentId],
  );

  const handleInfiniteNavigation = useCallback(
    async (direction: "next" | "previous") => {
      if (!results) return;

      const isNext = direction === "next";
      const nextIndex = isNext ? currentItemIndex! + 1 : currentItemIndex! - 1;
      const isWithinBounds = isNext ? nextIndex < totalItems : nextIndex >= 0;
      const shouldWrap = isNext ? nextIndex === totalItems : nextIndex === -1;

      if (isWithinBounds) {
        const itemInResults = results[nextIndex]?.id;
        if (itemInResults) {
          updateCurrentItem(nextIndex, itemInResults);
        } else {
          const id = await fetchNextRecord(nextIndex);
          if (id) updateCurrentItem(nextIndex, id);
        }
      } else if (shouldWrap) {
        const wrapIndex = isNext ? 0 : totalItems - 1;
        const id = await fetchNextRecord(wrapIndex);
        if (id) updateCurrentItem(wrapIndex, id);
      }
    },
    [results, currentItemIndex, totalItems, fetchNextRecord, updateCurrentItem],
  );

  const handleFiniteNavigation = useCallback(
    (direction: "next" | "previous") => {
      if (!results || results.length === 0) return;

      const isNext = direction === "next";
      const nextIndex = isNext ? currentItemIndex! + 1 : currentItemIndex! - 1;
      const shouldWrap = isNext
        ? nextIndex === results.length
        : nextIndex === -1;
      const newIndex = shouldWrap
        ? isNext
          ? 0
          : results.length - 1
        : nextIndex;

      updateCurrentItem(newIndex, results[newIndex].id);
    },
    [results, currentItemIndex, updateCurrentItem],
  );

  const onNextClick = useCallback(() => {
    if (isInfiniteTree) {
      handleInfiniteNavigation("next");
    } else {
      handleFiniteNavigation("next");
    }
  }, [isInfiniteTree, handleInfiniteNavigation, handleFiniteNavigation]);

  const onPreviousClick = useCallback(() => {
    if (isInfiniteTree) {
      handleInfiniteNavigation("previous");
    } else {
      handleFiniteNavigation("previous");
    }
  }, [isInfiniteTree, handleInfiniteNavigation, handleFiniteNavigation]);

  return {
    onNextClick,
    onPreviousClick,
  };
};
