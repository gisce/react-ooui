import { View } from "@/views/ActionView";
declare type Props = {
    onChangeView: (view: View) => void;
    currentView: View;
    availableViews: View[];
    disabled?: boolean;
    formHasChanges?: boolean;
};
declare function ChangeViewButton(props: Props): JSX.Element | null;
export default ChangeViewButton;
//# sourceMappingURL=ChangeViewButton.d.ts.map