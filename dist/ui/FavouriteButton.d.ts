export declare type Shortcut = {
    id: number;
    name: string;
    resource: string;
    res_id: number;
    view_id?: number;
    type: "tree" | "form";
};
declare type Props = {
    onRetrieveShortcuts: () => Promise<Shortcut[]>;
};
declare const FavouriteButton: (props: Props) => JSX.Element;
export default FavouriteButton;
//# sourceMappingURL=FavouriteButton.d.ts.map