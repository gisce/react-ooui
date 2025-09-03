import React, { useCallback, useState, useMemo } from "react";
import deepEqual from "deep-equal";
import { Input, Typography } from "antd";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { useActionViewContext } from "@/context/ActionViewContext";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { SavedSearchApi } from "@/ui/SavedSearchesButton";
import { useDeepCompareEffect, useDeepCompareCallback } from "use-deep-compare";
import { ErpFeatureKeys } from "@/models/erpFeature";

const { Text } = Typography;

export interface UseSavedSearchesOptions {
  currentModel?: string;
  context?: any;
  searchParams?: any[];
  hasActiveFilters?: boolean;
  internalSavedSearch?: SavedSearchApi | null;
  setInternalSavedSearch?: (search: SavedSearchApi | null) => void;
  onSave?: () => void;
}

export interface UseSavedSearchesReturn {
  savedSearchName: string;
  hasChanges: boolean;
  showSaveModal: boolean;
  isModalSaveAsNew: boolean;
  modalInputValue: string;
  setSavedSearchName: (name: string) => void;
  setShowSaveModal: (show: boolean) => void;
  setModalInputValue: (name: string) => void;
  handleSave: () => Promise<void>;
  handleSaveAsNew: () => void;
  handleModalSave: () => Promise<void>;
  handleClear: () => void;
  renderSavedSearchTitle: (mainTitle: string) => React.ReactNode;
  shouldShowSaveButtons: boolean;
  shouldShowSingleSaveButton: boolean;
  shouldShowSaveButtonGroup: boolean;
  shouldShowSaveAsNew: boolean;
}

export const useSavedSearches = ({
  currentModel,
  context,
  searchParams,
  hasActiveFilters,
  internalSavedSearch,
  setInternalSavedSearch,
  onSave,
}: UseSavedSearchesOptions): UseSavedSearchesReturn => {
  const savedSearchesEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_SAVED_SEARCHES,
  );
  const {
    currentSavedSearch: contextCurrentSavedSearch,
    setCurrentSavedSearch: setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
  } = useActionViewContext();

  const [savedSearchName, setSavedSearchName] = useState<string>(
    internalSavedSearch?.name || "",
  );

  const [isEditingName, setIsEditingName] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [isModalSaveAsNew, setIsModalSaveAsNew] = useState(false);
  const [modalInputValue, setModalInputValue] = useState("");

  const [updateRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().update,
  );
  const [createRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().create,
  );

  // Synchronization - sync with context and update name when internalSavedSearch changes
  useDeepCompareEffect(() => {
    if (!savedSearchesEnabled) {
      setInternalSavedSearch?.(null);
      setSavedSearchName("");
      return;
    }

    // Always sync the name when internalSavedSearch changes (including from null to a value)
    if (internalSavedSearch) {
      setSavedSearchName(internalSavedSearch.name || "");
    } else {
      setSavedSearchName("");
    }

    // If using custom saved search state, sync with context
    if (
      internalSavedSearch &&
      contextCurrentSavedSearch !== internalSavedSearch
    ) {
      setInternalSavedSearch?.(contextCurrentSavedSearch);
      setHasChanges(false);
    }
  }, [
    savedSearchesEnabled,
    contextCurrentSavedSearch,
    internalSavedSearch,
    setInternalSavedSearch,
  ]);

  // Detect changes when searchParams differ from saved search domain
  useDeepCompareEffect(() => {
    if (!savedSearchesEnabled) {
      return;
    }

    if (internalSavedSearch) {
      // If we have a saved search, check if current params differ from saved domain
      const hasChangedFromSaved = !deepEqual(
        searchParams,
        internalSavedSearch.domain,
      );
      setHasChanges(hasChangedFromSaved);
    } else if (searchParams?.length) {
      // If no saved search but we have params, that means there are unsaved changes
      setHasChanges(true);
    } else {
      // No saved search and no params, no changes
      setHasChanges(false);
    }
  }, [
    searchParams,
    internalSavedSearch?.domain,
    savedSearchesEnabled,
    internalSavedSearch,
  ]);

  const handleSave = useDeepCompareCallback(async () => {
    if (!savedSearchesEnabled || !currentModel || !searchParams?.length) return;

    try {
      if (internalSavedSearch) {
        const nameToUse = savedSearchName || "Unnamed Search";

        await updateRequest({
          model: "ir.search",
          id: internalSavedSearch.id,
          values: {
            domain: searchParams,
            name: nameToUse,
          },
          fields: ["domain", "name"],
          context,
        });

        const updatedSearch = {
          ...internalSavedSearch,
          domain: searchParams,
          name: nameToUse,
        };
        setInternalSavedSearch?.(updatedSearch);
        setSavedSearchName(nameToUse);
        setHasChanges(false);
        setContextCurrentSavedSearch?.(updatedSearch);

        if (savedSearches && setSavedSearches) {
          const updatedSavedSearches = savedSearches.map((search: any) =>
            search.id === internalSavedSearch.id ? updatedSearch : search,
          );
          setSavedSearches(updatedSavedSearches);
        }

        // Trigger tree refresh after saving with parameters
        if (onSave && searchParams?.length) {
          onSave();
        }
      } else {
        if (!savedSearchName.trim()) {
          setIsModalSaveAsNew(false);
          setModalInputValue(savedSearchName || "");
          setShowSaveModal(true);
          return;
        }

        const newSearch = await createRequest({
          model: "ir.search",
          values: {
            model: currentModel,
            domain: searchParams,
            name: savedSearchName.trim(),
          },
          fields: ["model", "domain", "name"],
          context,
        });

        if (newSearch) {
          const createdSearch: SavedSearchApi = {
            id: newSearch,
            model: currentModel,
            domain: searchParams,
            name: savedSearchName,
          };
          setInternalSavedSearch?.(createdSearch);
          setHasChanges(false);
          setContextCurrentSavedSearch?.(createdSearch);

          // Trigger tree refresh after saving with parameters
          if (onSave && searchParams?.length) {
            onSave();
          }
        }
      }
    } catch (error) {
      console.error("Error saving search:", error);
    }
  }, [
    savedSearchesEnabled,
    currentModel,
    searchParams,
    internalSavedSearch,
    savedSearchName,
    context,
    updateRequest,
    createRequest,
    setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
    setInternalSavedSearch,
  ]);

  const handleSaveAsNew = useCallback(() => {
    if (!savedSearchesEnabled) return;
    setIsModalSaveAsNew(true);
    setModalInputValue(savedSearchName || "");
    setShowSaveModal(true);
  }, [savedSearchesEnabled, savedSearchName]);

  const handleModalSave = useDeepCompareCallback(async () => {
    if (!savedSearchesEnabled || !currentModel || !searchParams?.length) {
      return;
    }

    const nameToUse = (
      modalInputValue ||
      savedSearchName ||
      "Unnamed Search"
    ).trim();

    if (!nameToUse) {
      return;
    }

    try {
      if (isModalSaveAsNew || !internalSavedSearch) {
        const newSearch = await createRequest({
          model: "ir.search",
          values: {
            model: currentModel,
            domain: searchParams,
            name: nameToUse,
          },
          fields: ["model", "domain", "name"],
          context,
        });

        if (newSearch) {
          const createdSearch: SavedSearchApi = {
            id: newSearch,
            model: currentModel,
            domain: searchParams,
            name: nameToUse,
          };
          setInternalSavedSearch?.(createdSearch);
          setSavedSearchName(nameToUse);
          setHasChanges(false);
          setContextCurrentSavedSearch?.(createdSearch);

          // Trigger tree refresh after saving with parameters
          if (onSave && searchParams?.length) {
            onSave();
          }
        }
      } else {
        await updateRequest({
          model: "ir.search",
          id: internalSavedSearch.id,
          values: {
            domain: searchParams,
            name: nameToUse,
          },
          fields: ["domain", "name"],
          context,
        });

        const updatedSearch = {
          ...internalSavedSearch,
          domain: searchParams,
          name: nameToUse,
        };
        setInternalSavedSearch?.(updatedSearch);
        setSavedSearchName(nameToUse);
        setHasChanges(false);
        setContextCurrentSavedSearch?.(updatedSearch);

        if (savedSearches && setSavedSearches) {
          const updatedSavedSearches = savedSearches.map((search: any) =>
            search.id === internalSavedSearch.id ? updatedSearch : search,
          );
          setSavedSearches(updatedSavedSearches);
        }
      }

      setShowSaveModal(false);
      setModalInputValue("");
    } catch (error) {
      console.error("Error saving search:", error);
    }
  }, [
    savedSearchesEnabled,
    currentModel,
    searchParams,
    isModalSaveAsNew,
    modalInputValue,
    savedSearchName,
    internalSavedSearch,
    context,
    createRequest,
    updateRequest,
    setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
    setInternalSavedSearch,
  ]);

  const handleNameClick = useCallback(() => {
    if (internalSavedSearch) {
      setIsEditingName(true);
    }
  }, [internalSavedSearch]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSavedSearchName(e.target.value);
    },
    [],
  );

  const updateSavedSearchName = useDeepCompareCallback(async () => {
    const trimmedName = savedSearchName.trim();

    // Revert to original name if blank or whitespace-only
    if (!trimmedName) {
      setSavedSearchName(internalSavedSearch?.name || "");
      return;
    }

    if (internalSavedSearch && trimmedName !== internalSavedSearch.name) {
      try {
        await updateRequest({
          model: "ir.search",
          id: internalSavedSearch.id,
          values: {
            name: trimmedName,
          },
          fields: ["name"],
          context,
        });

        const updatedSearch = {
          id: internalSavedSearch.id,
          model: internalSavedSearch.model,
          domain: internalSavedSearch.domain,
          name: trimmedName,
        };
        setInternalSavedSearch?.(updatedSearch);

        if (savedSearches && setSavedSearches) {
          const updatedSavedSearches = savedSearches.map((search: any) =>
            search.id === internalSavedSearch.id ? updatedSearch : search,
          );
          setSavedSearches(updatedSavedSearches);
        }

        setContextCurrentSavedSearch?.(updatedSearch);
      } catch (error) {
        console.error("Error updating search name:", error);
        setSavedSearchName(internalSavedSearch.name);
      }
    }
  }, [
    internalSavedSearch,
    savedSearchName,
    updateRequest,
    context,
    setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
    setInternalSavedSearch,
  ]);

  const handleNameKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsEditingName(false);
        updateSavedSearchName();
      } else if (e.key === "Escape") {
        setSavedSearchName(internalSavedSearch?.name || "");
        setIsEditingName(false);
      }
    },
    [internalSavedSearch, updateSavedSearchName],
  );

  const handleNameBlur = useDeepCompareCallback(async () => {
    setIsEditingName(false);
    updateSavedSearchName();
  }, [updateSavedSearchName]);

  const renderSavedSearchTitle = useDeepCompareCallback(
    (mainTitle: string) => {
      if (
        savedSearchesEnabled &&
        savedSearchName &&
        (internalSavedSearch || hasChanges)
      ) {
        return (
          <div>
            <div>{mainTitle}</div>
            <div
              style={{ fontSize: "14px", color: "#666", fontWeight: "normal" }}
            >
              {isEditingName ? (
                <Input
                  value={savedSearchName}
                  onChange={handleNameChange}
                  onKeyDown={handleNameKeyDown}
                  onBlur={handleNameBlur}
                  size="small"
                  style={{ width: "200px", fontSize: "14px" }}
                  autoFocus
                />
              ) : (
                <Text
                  style={{
                    fontSize: "14px",
                    color: "#666",
                    cursor: internalSavedSearch ? "pointer" : "default",
                  }}
                  onClick={handleNameClick}
                >
                  {savedSearchName}
                </Text>
              )}
            </div>
          </div>
        );
      }

      return mainTitle;
    },
    [
      savedSearchName,
      internalSavedSearch,
      hasChanges,
      isEditingName,
      handleNameChange,
      handleNameKeyDown,
      handleNameBlur,
      handleNameClick,
      savedSearchesEnabled,
    ],
  );

  const shouldShowSaveButtons = useMemo(
    () =>
      savedSearchesEnabled &&
      Boolean(searchParams?.length || hasActiveFilters || internalSavedSearch),
    [
      savedSearchesEnabled,
      searchParams?.length,
      hasActiveFilters,
      internalSavedSearch,
    ],
  );

  const shouldShowSingleSaveButton = useMemo(() => {
    if (!internalSavedSearch) return true;
    if (internalSavedSearch && !hasChanges) return true;
    return false;
  }, [internalSavedSearch, hasChanges]);

  const shouldShowSaveButtonGroup = useMemo(
    () => Boolean(internalSavedSearch && hasChanges),
    [internalSavedSearch, hasChanges],
  );

  const shouldShowSaveAsNew = useMemo(
    () => Boolean(internalSavedSearch && !hasChanges),
    [internalSavedSearch, hasChanges],
  );

  const handleClear = useCallback(() => {
    if (!savedSearchesEnabled) return;
    setInternalSavedSearch?.(null);
    setSavedSearchName("");
    setHasChanges(false);
  }, [savedSearchesEnabled, setInternalSavedSearch]);

  return {
    savedSearchName,
    hasChanges,
    showSaveModal,
    isModalSaveAsNew,
    modalInputValue,
    setSavedSearchName,
    setShowSaveModal,
    setModalInputValue,
    handleSave,
    handleSaveAsNew,
    handleModalSave,
    handleClear,
    renderSavedSearchTitle,
    shouldShowSaveButtons,
    shouldShowSingleSaveButton,
    shouldShowSaveButtonGroup,
    shouldShowSaveAsNew,
  };
};
