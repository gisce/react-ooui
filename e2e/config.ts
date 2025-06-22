export const STORYBOOK_CONFIG = {
  BASE_URL: "http://localhost:6006",
  IFRAME: "iframe.html",
  STORIES: {
    TREE_ACTION_VIEW: {
      INFINITE: "views-treeactionview--infinite",
      PAGINATED: "views-treeactionview--paginated",
    },
  },
} as const;

export const getStoryUrl = (storyId: string) =>
  `${STORYBOOK_CONFIG.BASE_URL}/${STORYBOOK_CONFIG.IFRAME}?id=${storyId}`;
