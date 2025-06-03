export enum UserFeatureKeys {
  FEATURE_MANY2ONE_DISABLE_ARROW_MENU = "widget.many2one.disable.arrow_menu",
}

export const UserAllFeatureKeys: string[] = Object.values(UserFeatureKeys);

export type UserFeaturesMap = {
  [key in UserFeatureKeys]?: boolean;
};
