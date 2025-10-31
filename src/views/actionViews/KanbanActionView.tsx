import { Fragment, useCallback, useState, memo, useEffect } from "react";
import { FormView, KanbanView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import TreeActionBar from "@/actionbar/TreeActionBar";
import { KanbanComponent, KanbanRef } from "@/widgets/views/Kanban/Kanban";
import { useActionViewContext } from "@/context/ActionViewContext";
import { KanbanRecord } from "@/widgets/views/Kanban/useKanbanData";
import { FormModal } from "@/widgets/modals/FormModal";

export type KanbanActionViewProps = {
  kanbanView: KanbanView;
  visible: boolean;
  model: string;
  domain: any;
  context: any;
  availableViews: View[];
  viewRef: any;
};

const KanbanActionViewComponent = (props: KanbanActionViewProps) => {
  const {
    visible,
    kanbanView,
    model,
    context,
    domain,
    availableViews,
    viewRef,
  } = props;

  const { searchParams = [], setViewIsLoading } = useActionViewContext();

  const [isLoading, setIsLoading] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<
    KanbanRecord | undefined
  >();

  // Use viewRef from props instead of creating a new ref
  const kanbanRef = viewRef as React.RefObject<KanbanRef>;

  useEffect(() => {
    setViewIsLoading?.(isLoading);
  }, [isLoading, setViewIsLoading]);

  const handleCardClick = useCallback((record: KanbanRecord) => {
    setSelectedRecord(record);
    setShowFormModal(true);
  }, []);

  const onCancelFormModal = useCallback(() => {
    setShowFormModal(false);
    setSelectedRecord(undefined);
  }, []);

  const onFormModalSubmitSucceed = useCallback(() => {
    setShowFormModal(false);
    setSelectedRecord(undefined);
    kanbanRef.current?.refreshResults();
  }, [kanbanRef]);

  if (!visible) {
    return null;
  }

  const formView = availableViews.find((v) => v.type === "form") as FormView;

  return (
    <Fragment>
      <TitleHeader showSummary={true}>
        <TreeActionBar
          domain={domain}
          toolbar={kanbanView.toolbar}
          parentContext={context}
          treeExpandable={false}
        />
      </TitleHeader>
      <KanbanComponent
        ref={kanbanRef}
        kanbanView={kanbanView}
        model={model}
        domain={domain}
        context={context}
        searchParams={searchParams}
        onCardClick={handleCardClick}
        onLoadingChange={setIsLoading}
      />
      {formView && (
        <FormModal
          formView={formView}
          model={model}
          id={selectedRecord?.id}
          visible={showFormModal}
          onSubmitSucceed={onFormModalSubmitSucceed}
          parentContext={context}
          onCancel={onCancelFormModal}
        />
      )}
    </Fragment>
  );
};

export const KanbanActionView = memo(KanbanActionViewComponent);
