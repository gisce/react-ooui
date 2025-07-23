export enum UserFeatureKeys {
  FEATURE_MANY2ONE_DISABLE_ARROW_MENU = "widget.many2one.disable.arrow_menu",
  FEATURE_MANY2ONE_DISABLE_FOLDER = "widget.many2one.disable.folder",
}

export const UserAllFeatureKeys: string[] = Object.values(UserFeatureKeys);

export type UserFeaturesMap = {
  [key in UserFeatureKeys]?: boolean;
};

export interface UserFeaturesState {
  features: UserFeaturesMap;
  canWriteFeatureFlags: boolean;
}
