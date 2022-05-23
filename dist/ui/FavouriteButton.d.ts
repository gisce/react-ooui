/// <reference types="react" />
export declare type ShortcutApi = {
    action_id: number;
    action_type: string;
    id?: number;
    name: string;
    res_id: number | boolean;
    res_model: string;
    view_id: number;
    view_type: string;
};
export declare type FavouriteOptions = {
    action_id: number;
    action_type: string;
    res_id: number | boolean;
    view_id: number;
};
declare type Props = {
    onRetrieveShortcuts: () => Promise<ShortcutApi[]>;
    onCheckIsFavourite: (options: FavouriteOptions) => Promise<number | boolean>;
    onAddFavourite: (options: FavouriteOptions) => Promise<number>;
    onRemoveFavourite: (shortcut_id: number) => Promise<void>;
};
declare const FavouriteButton: (props: Props) => JSX.Element;
export default FavouriteButton;
//# sourceMappingURL=FavouriteButton.d.ts.map