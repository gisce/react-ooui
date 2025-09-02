import React, { useCallback, useState, useMemo, useEffect } from "react";
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
  isOpen?: boolean;
}

export interface UseSavedSearchesReturn {
  savedSearchName: string;
  hasChanges: boolean;
  showSaveModal: boolean;
  saveAsNew: boolean;
  newSearchName: string;
  tempModalName: string;
  setSavedSearchName: (name: string) => void;
  setShowSaveModal: (show: boolean) => void;
  setNewSearchName: (name: string) => void;
  setTempModalName: (name: string) => void;
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
  isOpen,
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

  const [internalSavedSearch, setInternalSavedSearch] =
    useState<SavedSearchApi | null>(contextCurrentSavedSearch);
  const [savedSearchName, setSavedSearchName] = useState<string>(
    contextCurrentSavedSearch?.name || "",
  );

  const currentSavedSearch = internalSavedSearch;
  const setCurrentSavedSearch = setInternalSavedSearch;
  const [isEditingName, setIsEditingName] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [isExplicitlyCleared, setIsExplicitlyCleared] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [saveAsNew, setSaveAsNew] = useState(false);
  const [newSearchName, setNewSearchName] = useState("");
  const [tempModalName, setTempModalName] = useState("");

  const [updateRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().update,
  );
  const [createRequest] = useNetworkRequest(
    ConnectionProvider.getHandler().create,
  );

  useDeepCompareEffect(() => {
    if (!savedSearchesEnabled) {
      setInternalSavedSearch(null);
      setSavedSearchName("");
      return;
    }

    if (
      contextCurrentSavedSearch &&
      contextCurrentSavedSearch.id !== internalSavedSearch?.id &&
      !isExplicitlyCleared
    ) {
      setInternalSavedSearch(contextCurrentSavedSearch);
      setSavedSearchName(contextCurrentSavedSearch.name);
      setIsExplicitlyCleared(false);

      // When a saved search is loaded from context, reset hasChanges
      setHasChanges(false);
    } else if (
      !contextCurrentSavedSearch &&
      internalSavedSearch &&
      !isExplicitlyCleared
    ) {
      setInternalSavedSearch(null);
      setSavedSearchName("");
      setHasChanges(Boolean(searchParams?.length));
    }
  }, [
    savedSearchesEnabled,
    contextCurrentSavedSearch,
    internalSavedSearch?.id,
    isExplicitlyCleared,
  ]);

  useDeepCompareEffect(() => {
    // Only reset explicit clear flag when user starts adding parameters after clearing
    if (isExplicitlyCleared && searchParams?.length) {
      setIsExplicitlyCleared(false);
    }
  }, [searchParams, isExplicitlyCleared]);

  // Detect changes when searchParams differ from saved search domain
  useDeepCompareEffect(() => {
    if (!savedSearchesEnabled || isExplicitlyCleared) {
      return;
    }

    if (currentSavedSearch) {
      // If we have a saved search, check if current params differ from saved domain
      const hasChangedFromSaved = !deepEqual(
        searchParams,
        currentSavedSearch.domain,
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
    currentSavedSearch?.domain,
    savedSearchesEnabled,
    isExplicitlyCleared,
  ]);

  const [wasOpen, setWasOpen] = useState(false);
  useEffect(() => {
    if (isOpen && !wasOpen && isExplicitlyCleared) {
      setIsExplicitlyCleared(false);
    }
    setWasOpen(isOpen || false);
  }, [isOpen, wasOpen, isExplicitlyCleared]);

  const handleSave = useDeepCompareCallback(async () => {
    if (!savedSearchesEnabled || !currentModel || !searchParams?.length) return;

    try {
      if (currentSavedSearch) {
        const nameToUse = savedSearchName || "Unnamed Search";

        await updateRequest({
          model: "ir.search",
          id: currentSavedSearch.id,
          values: {
            domain: searchParams,
            name: nameToUse,
          },
          fields: ["domain", "name"],
          context,
        });

        const updatedSearch = {
          ...currentSavedSearch,
          domain: searchParams,
          name: nameToUse,
        };
        setCurrentSavedSearch(updatedSearch);
        setSavedSearchName(nameToUse);
        setHasChanges(false);
        setContextCurrentSavedSearch?.(updatedSearch);

        if (savedSearches && setSavedSearches) {
          const updatedSavedSearches = savedSearches.map((search: any) =>
            search.id === currentSavedSearch.id ? updatedSearch : search,
          );
          setSavedSearches(updatedSavedSearches);
        }
      } else {
        if (!savedSearchName.trim()) {
          setSaveAsNew(false);
          setTempModalName(savedSearchName || "");
          setShowSaveModal(true);
          return;
        }

        const newSearch = await createRequest({
          model: "ir.search",
          values: {
            model: currentModel,
            domain: searchParams,
            name: savedSearchName,
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
          setCurrentSavedSearch(createdSearch);
          setHasChanges(false);
          setContextCurrentSavedSearch?.(createdSearch);
        }
      }
    } catch (error) {
      console.error("Error saving search:", error);
    }
  }, [
    savedSearchesEnabled,
    currentModel,
    searchParams,
    currentSavedSearch,
    savedSearchName,
    context,
    updateRequest,
    createRequest,
    setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
  ]);

  const handleSaveAsNew = useCallback(() => {
    if (!savedSearchesEnabled) return;
    setSaveAsNew(true);
    setNewSearchName("");
    setTempModalName(savedSearchName || "");
    setShowSaveModal(true);
  }, [savedSearchesEnabled, savedSearchName]);

  const handleModalSave = useDeepCompareCallback(async () => {
    if (!savedSearchesEnabled || !currentModel || !searchParams?.length) return;

    const nameToUse = saveAsNew
      ? tempModalName
      : tempModalName || savedSearchName || "Unnamed Search";

    if (!nameToUse.trim()) return;

    try {
      if (saveAsNew || !currentSavedSearch) {
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
          setCurrentSavedSearch(createdSearch);
          setSavedSearchName(nameToUse);
          if (saveAsNew) {
            setNewSearchName(nameToUse);
          }
          setHasChanges(false);
          setContextCurrentSavedSearch?.(createdSearch);
        }
      } else {
        await updateRequest({
          model: "ir.search",
          id: currentSavedSearch.id,
          values: {
            domain: searchParams,
            name: nameToUse,
          },
          fields: ["domain", "name"],
          context,
        });

        const updatedSearch = {
          ...currentSavedSearch,
          domain: searchParams,
          name: nameToUse,
        };
        setCurrentSavedSearch(updatedSearch);
        setSavedSearchName(nameToUse);
        setHasChanges(false);
        setContextCurrentSavedSearch?.(updatedSearch);

        if (savedSearches && setSavedSearches) {
          const updatedSavedSearches = savedSearches.map((search: any) =>
            search.id === currentSavedSearch.id ? updatedSearch : search,
          );
          setSavedSearches(updatedSavedSearches);
        }
      }

      setShowSaveModal(false);
      setNewSearchName("");
      setTempModalName("");
    } catch (error) {
      console.error("Error saving search:", error);
    }
  }, [
    savedSearchesEnabled,
    currentModel,
    searchParams,
    saveAsNew,
    tempModalName,
    savedSearchName,
    currentSavedSearch,
    context,
    createRequest,
    updateRequest,
    setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
  ]);

  const handleNameClick = useCallback(() => {
    if (currentSavedSearch) {
      setIsEditingName(true);
    }
  }, [currentSavedSearch]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSavedSearchName(e.target.value);
    },
    [],
  );

  const updateSavedSearchName = useDeepCompareCallback(async () => {
    if (
      currentSavedSearch &&
      savedSearchName !== currentSavedSearch.name &&
      savedSearchName.trim()
    ) {
      try {
        await updateRequest({
          model: "ir.search",
          id: currentSavedSearch.id,
          values: {
            name: savedSearchName.trim(),
          },
          fields: ["name"],
          context,
        });

        const updatedSearch = {
          id: currentSavedSearch.id,
          model: currentSavedSearch.model,
          domain: currentSavedSearch.domain,
          name: savedSearchName.trim(),
        };
        setCurrentSavedSearch(updatedSearch);

        if (savedSearches && setSavedSearches) {
          const updatedSavedSearches = savedSearches.map((search: any) =>
            search.id === currentSavedSearch.id ? updatedSearch : search,
          );
          setSavedSearches(updatedSavedSearches);
        }

        setContextCurrentSavedSearch?.((prev: any) => {
          return prev?.id === updatedSearch.id ? updatedSearch : updatedSearch;
        });
      } catch (error) {
        console.error("Error updating search name:", error);
        setSavedSearchName(currentSavedSearch.name);
      }
    }
  }, [
    currentSavedSearch,
    savedSearchName,
    updateRequest,
    context,
    setContextCurrentSavedSearch,
    savedSearches,
    setSavedSearches,
  ]);

  const handleNameKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsEditingName(false);
        updateSavedSearchName();
      } else if (e.key === "Escape") {
        setSavedSearchName(currentSavedSearch?.name || "");
        setIsEditingName(false);
      }
    },
    [currentSavedSearch, updateSavedSearchName],
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
        (currentSavedSearch || hasChanges) &&
        !isExplicitlyCleared
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
                    cursor: currentSavedSearch ? "pointer" : "default",
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
      currentSavedSearch,
      hasChanges,
      isEditingName,
      handleNameChange,
      handleNameKeyDown,
      handleNameBlur,
      handleNameClick,
      savedSearchesEnabled,
      isExplicitlyCleared,
    ],
  );

  const shouldShowSaveButtons = useMemo(
    () =>
      savedSearchesEnabled &&
      !isExplicitlyCleared &&
      Boolean(searchParams?.length || hasActiveFilters || currentSavedSearch),
    [
      savedSearchesEnabled,
      searchParams?.length,
      hasActiveFilters,
      currentSavedSearch,
      isExplicitlyCleared,
    ],
  );

  const shouldShowSingleSaveButton = useMemo(() => {
    // No saved search: show "Save" (creates new)
    if (!currentSavedSearch) return true;

    // Has saved search but no changes: show "Save As New" only
    if (currentSavedSearch && !hasChanges) return true;

    // Has saved search and changes: show button group with dropdown
    return false;
  }, [currentSavedSearch, hasChanges]);

  const shouldShowSaveButtonGroup = useMemo(
    () => Boolean(currentSavedSearch && hasChanges),
    [currentSavedSearch, hasChanges],
  );

  const shouldShowSaveAsNew = useMemo(
    () => Boolean(currentSavedSearch && !hasChanges),
    [currentSavedSearch, hasChanges],
  );

  const handleClear = useCallback(() => {
    if (!savedSearchesEnabled) return;
    setInternalSavedSearch(null);
    setSavedSearchName("");
    setHasChanges(false);
    setIsExplicitlyCleared(true);
  }, [savedSearchesEnabled]);

  return {
    savedSearchName,
    hasChanges,
    showSaveModal,
    saveAsNew,
    newSearchName,
    tempModalName,
    setSavedSearchName,
    setShowSaveModal,
    setNewSearchName,
    setTempModalName,
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
