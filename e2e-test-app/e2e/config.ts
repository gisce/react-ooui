export const E2E_TEST_APP_CONFIG = {
  BASE_URL: "http://localhost:6006",
  IFRAME: "story",
  STORIES: {
    TREE_ACTION_VIEW: {
      INFINITE: "tree-action-view-infinite",
      PAGINATED: "tree-action-view-paginated",
    },
    ONE2MANY: {
      INFINITE: "one2many-infinite",
    },
  },
} as const;

export const getStoryUrl = (storyId: string) =>
  `${E2E_TEST_APP_CONFIG.BASE_URL}/${E2E_TEST_APP_CONFIG.IFRAME}/${storyId}`;
