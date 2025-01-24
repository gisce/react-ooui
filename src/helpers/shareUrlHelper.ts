import { ActionInfo, ActionRawData } from "@/types";

const OPEN_ACTION_PATH = "action";
// Parameters to exclude from the URL
const IGNORED_PARAMS = ["target", "context", "domain", "fields"];

export const createShareOpenUrl = (action: ActionInfo) => {
  const url = new URL(window.location.origin);
  url.pathname = OPEN_ACTION_PATH;

  const finalAction = {
    ...action,
    actionRawData:
      action?.actionRawData && filterActionRawData(action.actionRawData),
  };

  // Add all non-null properties from action to URL
  Object.entries(finalAction).forEach(([key, value]) => {
    if (
      !IGNORED_PARAMS.includes(key) &&
      value &&
      (!Array.isArray(value) || value.length > 0)
    ) {
      url.searchParams.set(key, convertToString(value));
    }
  });

  return url.toString();
};

const convertToString = (value: any): string => {
  if (typeof value === "object") {
    return JSON.stringify(value);
  }
  return value.toString();
};

const filterActionRawData = (actionRawData: ActionRawData) => {
  const { context, domain, values } = actionRawData;

  const filteredData: Partial<ActionRawData> = {};

  // Handle context
  if (context) {
    if (typeof context === "string") {
      // Don't include if it's a string containing empty object
      if (context !== "{}") {
        filteredData.context = context;
      }
    } else {
      // Include if it's an object with properties
      if (typeof context === "object" && Object.keys(context).length > 0) {
        filteredData.context = context;
      }
    }
  }

  // Handle domain
  if (domain) {
    if (Array.isArray(domain)) {
      if (domain.length > 0) {
        filteredData.domain = domain;
      }
    } else if (domain !== "false") {
      filteredData.domain = domain;
    }
  }

  // Include values only if they are non-empty objects
  if (
    (filteredData.domain || filteredData.context) &&
    values &&
    typeof values === "object" &&
    Object.keys(values).length > 0
  ) {
    const { arch, ...restValues } = values; // ignore arch if exists
    filteredData.values = restValues;
  }
  // Return undefined if no properties were added to filteredData
  return Object.keys(filteredData).length > 0 ? filteredData : undefined;
};
