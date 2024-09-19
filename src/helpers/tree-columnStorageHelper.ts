export type TreeDataForHash = {
  treeViewId?: number;
  model: string;
};

export const getKey = (dataForHash: TreeDataForHash) => {
  return `columnState-${dataForHash.treeViewId}-${dataForHash.model}`;
};
