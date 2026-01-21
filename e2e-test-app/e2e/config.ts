export const E2E_TEST_APP_CONFIG = {
  BASE_URL: "http://localhost:6006",
  IFRAME: "story",
  STORIES: {
    TREE_ACTION_VIEW: {
      INFINITE: "tree-action-view-infinite",
      PAGINATED: "tree-action-view-paginated",
      INFINITE_SPANISH: "tree-action-view-infinite-spanish",
      PAGINATED_SPANISH: "tree-action-view-paginated-spanish",
      INFINITE_FRENCH: "tree-action-view-infinite-french",
      INFINITE_NO_LOCALE: "tree-action-view-infinite-no-locale",
      FALSE_VALUES: "tree-false-values",
      LOCALIZED_DECIMALS: "tree-localized-decimals",
    },
    ONE2MANY: {
      INFINITE: "one2many-infinite",
      PAGINATED: "one2many-paginated",
      INFINITE_SPANISH: "one2many-infinite-spanish",
      PAGINATED_SPANISH: "one2many-paginated-spanish",
      INFINITE_FRENCH: "one2many-infinite-french",
      INFINITE_NO_LOCALE: "one2many-infinite-no-locale",
    },
    FORM: {
      DEFAULT: "form-default",
      SPANISH: "form-spanish",
      FRENCH: "form-french",
      SPANISH_LOCALIZED: "form-spanish-localized",
      FRENCH_LOCALIZED: "form-french-localized",
      ENGLISH_LOCALIZED: "form-english-localized",
    },
    BIGINT_FORM: {
      DEFAULT: "bigintform-bigint-integer-field",
      SPANISH: "bigintform-bigint-integer-field-spanish",
    },
    INTEGER_ONCHANGE: {
      NON_LOCALIZED_ENGLISH: "integeronchange-non-localized-english",
      NON_LOCALIZED_SPANISH: "integeronchange-non-localized-spanish",
      LOCALIZED_ENGLISH: "integeronchange-localized-english",
      LOCALIZED_SPANISH: "integeronchange-localized-spanish",
      WITH_INITIAL_VALUE: "integeronchange-with-initial-value",
      WITH_BIGINT_INITIAL_VALUE: "integeronchange-with-big-int-initial-value",
    },
  },
} as const;

export const getStoryUrl = (storyId: string) =>
  `${E2E_TEST_APP_CONFIG.BASE_URL}/${E2E_TEST_APP_CONFIG.IFRAME}/${storyId}`;
