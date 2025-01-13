import { ViewType } from "@/types";

export const createShareOpenUrl = ({
  action_id,
  view_type,
  res_id,
}: {
  action_id: number;
  view_type?: ViewType;
  res_id?: number;
}) => {
  const url = new URL(window.location.href);
  url.pathname += url.pathname.endsWith("/") ? "open" : "/open";
  url.searchParams.set("action_id", action_id.toString());
  view_type && url.searchParams.set("view_type", view_type);
  res_id && url.searchParams.set("res_id", res_id?.toString());
  return url.toString();
};
