import { Fragment, useCallback, useState, useRef, memo } from "react";
import { FormView, KanbanView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import KanbanActionBar from "@/actionbar/KanbanActionBar";
import { KanbanComponent, KanbanRef } from "@/widgets/views/Kanban/Kanban";
import { useActionViewContext } from "@/context/ActionViewContext";
import { KanbanRecord } from "@/widgets/views/Kanban/useKanbanData";
import { FormModal } from "@/widgets/modals/FormModal";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";

export type KanbanActionViewProps = {
  kanbanView: KanbanView;
  visible: boolean;
  model: string;
  domain: any;
  context: any;
  availableViews: View[];
};

const KanbanActionViewComponent = (props: KanbanActionViewProps) => {
  const { visible, kanbanView, model, context, domain, availableViews } = props;

  const { searchParams = [] } = useActionViewContext();

  const [isLoading, setIsLoading] = useState(false);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<
    KanbanRecord | undefined
  >();
  const kanbanRef = useRef<KanbanRef>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: 10,
  });

  const handleRefresh = useCallback(() => {
    kanbanRef.current?.refresh();
  }, []);

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
    kanbanRef.current?.refresh();
  }, []);

  if (!visible) {
    return null;
  }

  const formView = availableViews.find((v) => v.type === "form") as FormView;

  return (
    <Fragment>
      <TitleHeader showSummary={false}>
        <KanbanActionBar onRefresh={handleRefresh} isLoading={isLoading} />
      </TitleHeader>
      <div
        ref={containerRef}
        style={{
          height: availableHeight > 0 ? `${availableHeight}px` : undefined,
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
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
      </div>
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
