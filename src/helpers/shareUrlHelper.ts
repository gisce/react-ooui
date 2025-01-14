import { ActionInfo } from "@/types";

export const createShareOpenUrl = (action: ActionInfo) => {
  const url = new URL(window.location.href);
  url.pathname += url.pathname.endsWith("/") ? "open" : "/open";

  // Parameters to exclude from the URL
  const ignoredParams = ["target"];

  // Add all non-null properties from action to URL
  Object.entries(action).forEach(([key, value]) => {
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
