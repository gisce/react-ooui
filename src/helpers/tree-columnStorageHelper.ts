export type TreeDataForHash = {
  treeViewId?: number;
  model: string;
};

export const getKey = (dataForHash: TreeDataForHash) => {
  if (!dataForHash.model) {
    return undefined;
  }

  const treeViewIdPart = dataForHash.treeViewId ?? "tree";
  return `columnState-${treeViewIdPart}-${dataForHash.model}`;
};
