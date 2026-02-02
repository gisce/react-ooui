export enum ErpFeatureKeys {
  FEATURE_VIEW_JSON_ATTRS = "view_json_attrs",
  FEATURE_ADVANCED_EXPORT = "export_data2",
  FEATURE_OMNISEARCH = "omnisearch",
  FEATURE_READFORVIEW = "read_for_view",
  FEATURE_USERVIEWPREFS = "user_view_prefs",
  FEATURE_GET_TOOLBAR = "get_toolbar",
  FEATURE_MANY2ONE_SORT = "many2one_sort",
  FEATURE_LOGGABLE_ACTIONS = "user_action_logs",
  FEATURE_USER_FLAGS = "user_feature_flags",
  FEATURE_CHECK_PERMS = "check_perms",
  FEATURE_SAVED_SEARCHES = "saved_searches",
  FEATURE_USER_NOTIFICATIONS = "user_notifications",
  FEATURE_SSE_SESSION_NOTIFICATIONS = "sse_session_notifications",
  FEATURE_COMMENTS_SYSTEM = "comments_system",
  FEATURE_GET_ATTACHMENTS = "get_attachments",
  FEATURE_GET_OBJECT_PROPS = "get_object_props",
  // ... add more features here
}

export const ErpAllFeatureKeys: string[] = Object.values(ErpFeatureKeys);

export interface ErpFeatureState {
  isEnabled: boolean;
  params: Record<string, unknown>;
}

export type ErpFeaturesMap = {
  [key in ErpFeatureKeys]?: ErpFeatureState;
};
