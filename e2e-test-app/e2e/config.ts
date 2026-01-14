export const E2E_TEST_APP_CONFIG = {
  BASE_URL: "http://localhost:6006",
  IFRAME: "story",
  STORIES: {
    TREE_ACTION_VIEW: {
      INFINITE: "tree-action-view-infinite",
      PAGINATED: "tree-action-view-paginated",
      INFINITE_SPANISH: "tree-action-view-infinite-spanish",
      PAGINATED_SPANISH: "tree-action-view-paginated-spanish",
    },
    ONE2MANY: {
      INFINITE: "one2many-infinite",
      PAGINATED: "one2many-paginated",
      INFINITE_SPANISH: "one2many-infinite-spanish",
      PAGINATED_SPANISH: "one2many-paginated-spanish",
    },
  },
} as const;

export const getStoryUrl = (storyId: string) =>
  `${E2E_TEST_APP_CONFIG.BASE_URL}/${E2E_TEST_APP_CONFIG.IFRAME}/${storyId}`;
