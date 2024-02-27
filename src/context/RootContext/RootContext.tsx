import { useNavigationActions } from "@/hooks/useNavigationActions";
import {
  createContext,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";
import { FormModal, useTabs } from "../..";
import { ReportGeneratingModal } from "@/ui/ReportGeneratingModal";
import { useReport } from "@/hooks/useReport";
import { useAction } from "@/hooks/useAction";
import { RootContextType } from "./RootContext.types";
import { ViewType } from "@/types";

export const RootContext = createContext<RootContextType | undefined>(
  undefined,
);

type RootProviderProps = {
  children?: React.ReactNode;
};

export interface RootProviderRef {
  retrieveAndOpenAction: ({
    action,
    values,
    forced_values,
    initialViewType,
    res_id,
    domain,
  }: {
    action: string;
    values?: any;
    forced_values?: any;
    initialViewType?: ViewType;
    res_id?: number;
    domain?: any;
  }) => Promise<void>;
}

export const RootProvider = forwardRef<RootProviderRef, RootProviderProps>(
  (props, ref) => {
    const { children } = props;
    const { updateTab, addTab, currentTab } = useTabs();
    const { reportGenerating, generateReport } = useReport();

    useImperativeHandle(ref, () => ({
      retrieveAndOpenAction,
    }));

    const { openAction, openRelate, retrieveAndOpenAction } =
      useNavigationActions({
        openActionModal: () => {},
        addTab,
      });
    const {
      actionModalOptions,
      actionModalVisible,
      onFormModalCancel,
      onFormModalSucceed,
      processAction,
    } = useAction({ generateReport, openAction });

    return (
      <RootContext.Provider
        value={{ updateTab, openRelate, processAction, currentTab } as any}
      >
        {children}
        <ReportGeneratingModal isGenerating={reportGenerating} />
        <FormModal
          buttonModal
          parentContext={actionModalOptions.context}
          model={actionModalOptions.model!}
          formView={actionModalOptions.formView}
          visible={actionModalVisible}
          onSubmitSucceed={onFormModalSucceed}
          onCancel={onFormModalCancel}
          showFooter={false}
          actionDomain={actionModalOptions.domain}
          isMenuAction={actionModalOptions?.actionData !== undefined}
          actionData={actionModalOptions?.actionData}
        />
      </RootContext.Provider>
    );
  },
);
RootProvider.displayName = "RootProvider";

export const useNavigation = (): RootContextType => {
  const context = useContext<RootContextType | undefined>(RootContext);

  if (!context) {
    throw new Error(
      "RootProvider context is undefined, please verify you are calling useNavigation() as child of a <RootProvider> component.",
    );
  }

  return context;
};
