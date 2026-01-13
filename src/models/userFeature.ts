export enum UserFeatureKeys {
  FEATURE_MANY2ONE_DISABLE_ARROW_MENU = "widget.many2one.disable.arrow_menu",
  FEATURE_MANY2ONE_DISABLE_FOLDER = "widget.many2one.disable.folder",
  FEATURE_MANY2ONE_SELECTION_TO_LAZY = "widget.many2one.selection_to_many2onelazy",
  FEATURE_ONE2MANY_ENABLE_NEW_TABLE = "widget.one2many.enable_new_table",
  FEATURE_DATE_USE_MASKED_INPUT = "widget.date.use_masked_input",
  FEATURE_TEST_FEATURE = "test.feature",
}

export const UserAllFeatureKeys: string[] = Object.values(UserFeatureKeys);

export type UserFeaturesMap = {
  [key in UserFeatureKeys]?: boolean;
};

export interface UserFeaturesState {
  features: UserFeaturesMap;
  canWriteFeatureFlags: boolean;
}
