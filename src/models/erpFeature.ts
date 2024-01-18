export enum ErpFeatureKeys {
  FEATURE_VIEW_JSON_ATTRS = "view_json_attrs",
  FEATURE_ADVANCED_EXPORT = "export_data2",
  FEATURE_OMNISEARCH = "omnisearch",
  // ... add more features here
}

export const ErpAllFeatureKeys: string[] = Object.values(ErpFeatureKeys);

export type ErpFeaturesMap = {
  [key in ErpFeatureKeys]?: boolean;
};
