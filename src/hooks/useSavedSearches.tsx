import React, { useCallback, useState, useMemo } from "react";
import { Input, Typography } from "antd";
import { useFeatureIsEnabled } from "@/context/ConfigContext";
import { useActionViewContext } from "@/context/ActionViewContext";
import ConnectionProvider from "@/ConnectionProvider";
import { useNetworkRequest } from "@/hooks/useNetworkRequest";
import { SavedSearchApi } from "@/ui/SavedSearchesButton";
import deepEqual from "deep-equal";
import { useDeepCompareEffect, useDeepCompareCallback } from "use-deep-compare";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { mergeParams } from "@/helpers/searchHelper";

const { Text } = Typography;

export interface UseSavedSearchesOptions {
  currentModel?: string;
  context?: any;
  searchParams?: any[];
  hasActiveFilters?: boolean;
  domain?: any[];
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
  renderSavedSearchTitle: (mainTitle: string) => React.ReactNode;
  shouldShowSaveButtons: boolean;
  shouldShowSingleSaveButton: boolean;
  shouldShowSaveButtonGroup: boolean;
}

export const useSavedSearches = ({
  currentModel,
  context,
  searchParams,
  hasActiveFilters,
  domain,
}: UseSavedSearchesOptions): UseSavedSearchesReturn => {
  const savedSearchesEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_SAVED_SEARCHES,
  );
  const {
    currentSavedSearch: contextCurrentSavedSearch,
    setCurrentSavedSearch: setContextCurrentSavedSearch,
  } = useActionViewContext();

  const [currentSavedSearch, setCurrentSavedSearch] =
    useState<SavedSearchApi | null>(contextCurrentSavedSearch);
  const [savedSearchName, setSavedSearchName] = useState<string>(
    contextCurrentSavedSearch?.name || "",
  );
  const [isEditingName, setIsEditingName] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [hasNameChanges, setHasNameChanges] = useState(false);
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
      setCurrentSavedSearch(null);
      setSavedSearchName("");
      return;
    }

    if (
      contextCurrentSavedSearch &&
      contextCurrentSavedSearch.id !== currentSavedSearch?.id
    ) {
      setCurrentSavedSearch(contextCurrentSavedSearch);
      setSavedSearchName(contextCurrentSavedSearch.name);
      setHasNameChanges(false);

      // Check if current search params still match the saved search
      if (searchParams && searchParams.length > 0) {
        const stillMatches = deepEqual(
          contextCurrentSavedSearch.domain,
          searchParams,
        );
        setHasChanges(!stillMatches);
      } else {
        // If no searchParams yet, assume no changes (initial load)
        setHasChanges(false);
      }
    } else if (!contextCurrentSavedSearch && currentSavedSearch) {
      setCurrentSavedSearch(null);
      setSavedSearchName("");
      setHasChanges(Boolean(searchParams?.length));
      setHasNameChanges(false);
    }
  }, [
    savedSearchesEnabled,
    contextCurrentSavedSearch,
    searchParams,
    currentSavedSearch?.id,
  ]);

  useDeepCompareEffect(() => {
    if (savedSearchesEnabled && currentSavedSearch) {
      if (!searchParams?.length) {
        setHasChanges(true);
      } else {
        const hasSearchChanges = !deepEqual(
          currentSavedSearch.domain,
          searchParams,
        );
        setHasChanges(hasSearchChanges);
      }
    } else {
      setHasChanges(false);
    }
  }, [savedSearchesEnabled, currentSavedSearch, searchParams]);

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
        setHasNameChanges(false);
        setContextCurrentSavedSearch?.(updatedSearch);
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
          setHasNameChanges(false);
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
          setHasNameChanges(false);
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
        setHasNameChanges(false);
        setContextCurrentSavedSearch?.(updatedSearch);
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
  ]);

  const handleNameClick = useCallback(() => {
    if (currentSavedSearch) {
      setIsEditingName(true);
    }
  }, [currentSavedSearch]);

  const handleNameChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSavedSearchName(e.target.value);
      if (currentSavedSearch) {
        setHasNameChanges(currentSavedSearch.name !== e.target.value);
      }
    },
    [currentSavedSearch],
  );

  const handleNameKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        setIsEditingName(false);
      } else if (e.key === "Escape") {
        setSavedSearchName(currentSavedSearch?.name || "");
        setIsEditingName(false);
      }
    },
    [currentSavedSearch],
  );

  const handleNameBlur = useDeepCompareCallback(async () => {
    setIsEditingName(false);

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

        setCurrentSavedSearch({
          ...currentSavedSearch,
          name: savedSearchName.trim(),
        });
      } catch (error) {
        console.error("Error updating search name:", error);
        setSavedSearchName(currentSavedSearch.name);
      }
    }
  }, [currentSavedSearch, savedSearchName, updateRequest, context]);

  const renderSavedSearchTitle = useDeepCompareCallback(
    (mainTitle: string) => {
      if (
        savedSearchesEnabled &&
        savedSearchName &&
        (currentSavedSearch || hasChanges)
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
    ],
  );

  const shouldShowSaveButtons = useMemo(
    () =>
      savedSearchesEnabled &&
      Boolean(searchParams?.length || hasActiveFilters || currentSavedSearch),
    [
      savedSearchesEnabled,
      searchParams?.length,
      hasActiveFilters,
      currentSavedSearch,
    ],
  );

  const shouldShowSingleSaveButton = useMemo(
    () => !currentSavedSearch || !hasChanges || (hasChanges && hasNameChanges),
    [currentSavedSearch, hasChanges, hasNameChanges],
  );

  const shouldShowSaveButtonGroup = useMemo(
    () => Boolean(currentSavedSearch && hasChanges && !hasNameChanges),
    [currentSavedSearch, hasChanges, hasNameChanges],
  );

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
    renderSavedSearchTitle,
    shouldShowSaveButtons,
    shouldShowSingleSaveButton,
    shouldShowSaveButtonGroup,
  };
};
