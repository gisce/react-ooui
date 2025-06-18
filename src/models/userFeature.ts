export enum UserFeatureKeys {
  FEATURE_MANY2ONE_DISABLE_ARROW_MENU = "widget.many2one.disable.arrow_menu",
  FEATURE_MANY2ONE_DISABLE_FOLDER = "widget.many2one.disable.folder",
  FEATURE_GET_TOOLBAR_SORT_BY_LAST_RUN = "orm.get_toolbar.sort_by_last_run",
}

export const UserAllFeatureKeys: string[] = Object.values(UserFeatureKeys);

export type UserFeaturesMap = {
  [key in UserFeatureKeys]?: boolean;
};

export interface UserFeaturesState {
  features: UserFeaturesMap;
  canWriteFeatureFlags: boolean;
}
