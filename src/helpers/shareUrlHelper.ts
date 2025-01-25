import { ActionInfo, ActionRawData } from "@/types";

const OPEN_ACTION_PATH = "action";
// Parameters to exclude from the URL
const ALLOWED_VALUES_KEYS = ["active_id", "active_ids", "id", "parent_id"];
const ALLOWED_PARAMETERS = [
  "model",
  "views",
  "initialView",
  "action_id",
  "action_type",
  "res_id",
  "limit",
  "actionRawData",
  "searchParams",
];

export const createShareOpenUrl = (action: ActionInfo) => {
  const url = new URL(window.location.origin);
  url.pathname = OPEN_ACTION_PATH;

  const finalAction = {
    ...action,
    actionRawData:
      action?.actionRawData && filterActionRawData(action.actionRawData),
  };

  // Filter allowed parameters and add them to URL
  const allowedParams = filterAllowedParameters(finalAction);
  Object.entries(allowedParams).forEach(([key, value]) => {
    if (value && (!Array.isArray(value) || value.length > 0)) {
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
    // Only include allowed keys from values
    const filteredValues = filterAllowedValues(values);
    filteredData.values =
      Object.keys(filteredValues).length > 0 ? filteredValues : undefined;
  }

  // Return undefined if no properties were added to filteredData
  return Object.keys(filteredData).length > 0 ? filteredData : undefined;
};

export const filterAllowedParameters = (parameters: any) => {
  if (!parameters || typeof parameters !== "object") {
    return {};
  }
  return Object.fromEntries(
    Object.entries(parameters).filter(([key]) =>
      ALLOWED_PARAMETERS.includes(key),
    ),
  );
};

export const filterAllowedValues = (values: any) => {
  if (!values || typeof values !== "object") {
    return {};
  }
  return Object.fromEntries(
    Object.entries(values).filter(([key]) => ALLOWED_VALUES_KEYS.includes(key)),
  );
};
