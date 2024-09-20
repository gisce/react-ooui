export type TreeDataForHash = {
  treeViewId?: number;
  model: string;
};

export const getKey = (dataForHash: TreeDataForHash) => {
  if (!dataForHash.treeViewId || !dataForHash.model) {
    return undefined;
  }
  return `columnState-${dataForHash.treeViewId}-${dataForHash.model}`;
};
