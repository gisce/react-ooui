import { ShortcutApi } from "@/ui/FavouriteButton";

export type GraphCardProps = {
  title: string;
  id: string;
  children?: React.ReactNode;
  parms: any;
  action?: ShortcutApi;
  openAction?: (shortcutApi?: ShortcutApi) => void;
};
