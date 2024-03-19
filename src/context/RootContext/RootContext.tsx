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
import { GoToResourceModal } from "@/ui/GoToResourceModal";
import { useGoToResource } from "@/hooks/useGoToResource";

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
    const { updateTab, addTab, currentTab, closeTab } = useTabs();
    const { reportGenerating, generateReport } = useReport();

    useImperativeHandle(ref, () => ({
      retrieveAndOpenAction,
    }));

    const {
      openAction,
      openRelate,
      openShortcut,
      retrieveAndOpenAction,
      openDefaultActionForModel,
    } = useNavigationActions({
      openActionModal: () => {},
      addTab,
      updateTab,
    });

    const {
      actionModalOptions,
      actionModalVisible,
      onFormModalCancel,
      onFormModalSucceed,
      processAction,
    } = useAction({ generateReport, openAction });

    const {
      gtResourceModalVisible,
      setGtResourceModalVisible,
      searchingForResourceId,
      goToResourceId,
    } = useGoToResource({
      currentTab,
      openAction,
    });

    return (
      <RootContext.Provider
        value={
          {
            updateTab,
            openRelate,
            processAction,
            currentTab,
            goToResourceId,
            openShortcut,
            openDefaultActionForModel,
            closeTab,
          } as any
        }
      >
        {children}
        <ReportGeneratingModal isGenerating={reportGenerating} />
        <GoToResourceModal
          visible={gtResourceModalVisible}
          onIdSubmitted={goToResourceId}
          isSearching={searchingForResourceId}
          onCancel={() => {
            setGtResourceModalVisible(false);
          }}
        />
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