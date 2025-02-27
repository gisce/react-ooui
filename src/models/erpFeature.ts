export enum ErpFeatureKeys {
  FEATURE_VIEW_JSON_ATTRS = "view_json_attrs",
  FEATURE_ADVANCED_EXPORT = "export_data2",
  FEATURE_OMNISEARCH = "omnisearch",
  FEATURE_READFORVIEW = "read_for_view",
  FEATURE_USERVIEWPREFS = "user_view_prefs",
  FEATURE_GET_TOOLBAR = "get_toolbar",
  FEATURE_MANY2ONE_SORT = "many2one_sort",
  // ... add more features here
}

export const ErpAllFeatureKeys: string[] = Object.values(ErpFeatureKeys);

export type ErpFeaturesMap = {
  [key in ErpFeatureKeys]?: boolean;
};
