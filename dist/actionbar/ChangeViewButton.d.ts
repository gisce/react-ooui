import { ViewType } from "@/types";
declare type Props = {
    onChangeView: (view: ViewType) => void;
    currentView: ViewType;
    availableViews: ViewType[];
    disabled?: boolean;
    formHasChanges?: boolean;
};
declare function ChangeViewButton(props: Props): JSX.Element;
export default ChangeViewButton;
//# sourceMappingURL=ChangeViewButton.d.ts.map