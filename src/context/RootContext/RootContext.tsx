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
import {
  RetrieveAndOpenActionArgs,
  RootContextType,
} from "./RootContext.types";
import { GoToResourceModal } from "@/ui/GoToResourceModal";
import { useGoToResource } from "@/hooks/useGoToResource";
import { LoadedTab } from "@/types/tab";

export const RootContext = createContext<RootContextType | undefined>(
  undefined,
);

type RootProviderProps = {
  children?: React.ReactNode;
};

export interface RootProviderRef {
  retrieveAndOpenAction: (args: RetrieveAndOpenActionArgs) => Promise<void>;
}

export const RootProvider = forwardRef<RootProviderRef, RootProviderProps>(
  (props, ref) => {
    const { children } = props;
    const { updateTab, addTab, currentTab, closeTab, getTab } = useTabs();
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
      currentTab: currentTab as LoadedTab,
      openAction,
    });

    return (
      <RootContext.Provider
        value={{
          processAction,
          goToResourceId,
          openRelate,
          openShortcut,
          openDefaultActionForModel,
          currentTab,
          closeTab,
          getTab,
          updateTab,
        }}
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
