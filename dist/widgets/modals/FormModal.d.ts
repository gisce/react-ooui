/// <reference types="react" />
import { FormProps } from "@/widgets/views/Form";
declare type FormModalProps = FormProps & {
    visible: boolean;
    title?: string;
    buttonModal?: boolean;
    isMenuAction?: boolean;
    actionData?: any;
};
export declare const FormModal: (props: FormModalProps) => JSX.Element;
export {};
//# sourceMappingURL=FormModal.d.ts.map