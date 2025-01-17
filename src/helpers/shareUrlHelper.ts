import { ActionInfo, ActionRawData } from "@/types";

const OPEN_ACTION_PATH = "openAction";

export const createShareOpenUrl = (action: ActionInfo) => {
  const url = new URL(window.location.href);
  url.pathname += url.pathname.endsWith("/")
    ? OPEN_ACTION_PATH
    : `/${OPEN_ACTION_PATH}`;

  // Parameters to exclude from the URL
  const ignoredParams = ["target", "context", "domain"];

  const finalAction = {
    ...action,
    actionRawData:
      action?.actionRawData && filterActionRawData(action.actionRawData),
  };

  // Add all non-null properties from action to URL
  Object.entries(finalAction).forEach(([key, value]) => {
    if (
      !ignoredParams.includes(key) &&
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
  const { context, domain, values, fields } = actionRawData;

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

  // Include values and fields only if they are non-empty objects
  if (
    (filteredData.domain || filteredData.context) &&
    values &&
    typeof values === "object" &&
    Object.keys(values).length > 0
  ) {
    const { arch, ...restValues } = values; // ignore arch if exists
    filteredData.values = restValues;
  }
  if (
    (filteredData.domain || filteredData.context) &&
    fields &&
    typeof fields === "object" &&
    Object.keys(fields).length > 0
  ) {
    filteredData.fields = fields;
  }

  // Return undefined if no properties were added to filteredData
  return Object.keys(filteredData).length > 0 ? filteredData : undefined;
};
