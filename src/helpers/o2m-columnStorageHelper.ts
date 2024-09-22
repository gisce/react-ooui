export type One2manyTreeDataForHash = {
  parentViewId?: number;
  treeViewId?: number;
  one2ManyFieldName: string;
};

export type O2mDataForHashWithModel = One2manyTreeDataForHash & {
  model: string;
};

export const getKey = (dataForHash: O2mDataForHashWithModel) => {
  return `columnState-${dataForHash.parentViewId}-${dataForHash.treeViewId}-${dataForHash.one2ManyFieldName}-${dataForHash.model}`;
};
