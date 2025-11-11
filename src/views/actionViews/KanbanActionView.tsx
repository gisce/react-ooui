import {
  Fragment,
  useCallback,
  useState,
  memo,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { FormView, KanbanView, TreeView, View } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import TreeActionBar from "@/actionbar/TreeActionBar";
import { KanbanComponent, KanbanRef } from "@/widgets/views/Kanban/Kanban";
import { useActionViewContext } from "@/context/ActionViewContext";
import { KanbanRecord } from "@/widgets/views/Kanban/types";
import { FormModal } from "@/widgets/modals/FormModal";
import { SearchTreeHeader } from "@/widgets/views/SearchTreeHeader";
import { SideSearchFilter } from "@/widgets/views/searchFilter/SideSearchFilter";
import { NameSearchWarning } from "@/widgets/views/Tree/NameSearchWarning";
import { useSearchTreeState } from "@/hooks/useSearchTreeState";
import { mergeSearchFields } from "@/helpers/formHelper";
import { useAvailableHeight } from "@/hooks/useAvailableHeight";

const HEIGHT_OFFSET = 10;

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

  const { setViewIsLoading } = useActionViewContext();

  const {
    searchVisible,
    setSearchVisible,
    selectedRowItems,
    setSelectedRowItems,
    searchParams,
    setSearchParams,
    searchValues,
    setSearchValues,
    searchTreeNameSearch,
    setSearchTreeNameSearch,
  } = useSearchTreeState({ useLocalState: false });

  const [isLoading, setIsLoading] = useState(true);
  const [showFormModal, setShowFormModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState<
    KanbanRecord | undefined
  >();
  const [totalRows, setTotalRows] = useState<number | null>(null);

  const kanbanRef = viewRef as React.RefObject<KanbanRef>;
  const containerRef = useRef<HTMLDivElement>(null);
  const titleHeaderRef = useRef<HTMLDivElement>(null);
  const searchHeaderRef = useRef<HTMLDivElement>(null);
  const availableHeight = useAvailableHeight({
    elementRef: containerRef,
    offset: HEIGHT_OFFSET,
    dependencies: [searchHeaderRef.current],
    observedRefs: [titleHeaderRef, searchHeaderRef],
  });

  const containerStyle = useMemo(
    () => ({
      overflow: "hidden",
      height: `${availableHeight}px`,
      minHeight: `${availableHeight}px`,
      maxHeight: `${availableHeight}px`,
    }),
    [availableHeight],
  );

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

  const handleTotalRowsChange = useCallback((total: number) => {
    setTotalRows(total);
  }, []);

  const onSideSearchFilterClose = useCallback(
    () => setSearchVisible?.(false),
    [setSearchVisible],
  );

  const onSideSearchFilterSubmit = useCallback(
    ({ params, values, closeSidebar = true }: any) => {
      setSelectedRowItems?.([]);
      setSearchTreeNameSearch?.(undefined);
      setSearchParams?.(params);
      setSearchValues?.(values);
      if (closeSidebar) {
        setSearchVisible?.(false);
      }
    },
    [
      setSelectedRowItems,
      setSearchTreeNameSearch,
      setSearchParams,
      setSearchValues,
      setSearchVisible,
    ],
  );

  const onSideSearchFilterClear = useCallback(() => {
    setSearchParams?.([]);
    setSearchValues?.({});
    setSearchVisible?.(false);
  }, [setSearchParams, setSearchValues, setSearchVisible]);

  const formView = useMemo(
    () => availableViews.find((v) => v.type === "form") as FormView,
    [availableViews],
  );

  const treeView = useMemo(
    () => availableViews.find((v) => v.type === "tree") as TreeView | undefined,
    [availableViews],
  );

  const sideSearchFilterProps = useMemo(
    () => ({
      isOpen: searchVisible || false,
      fields: {
        ...formView?.fields,
        ...treeView?.fields,
        ...kanbanView?.fields,
      },
      searchFields: mergeSearchFields([
        formView?.search_fields,
        treeView?.search_fields,
        kanbanView?.search_fields,
      ]),
      searchValues,
      currentModel: model,
      context,
    }),
    [
      searchVisible,
      formView,
      treeView,
      kanbanView,
      searchValues,
      model,
      context,
    ],
  );

  const selectedRowKeys = useMemo(() => {
    return selectedRowItems?.map((item: any) => item.id) || [];
  }, [selectedRowItems]);

  const shouldShowNameSearchWarning =
    searchTreeNameSearch && totalRows !== undefined && totalRows !== null;

  if (!visible) {
    return null;
  }

  return (
    <Fragment>
      <SideSearchFilter
        {...sideSearchFilterProps}
        onClose={onSideSearchFilterClose}
        onSubmit={onSideSearchFilterSubmit}
        onClear={onSideSearchFilterClear}
      />
      <div ref={titleHeaderRef}>
        <TitleHeader showSummary={true}>
          <TreeActionBar
            domain={domain}
            toolbar={kanbanView.toolbar}
            parentContext={context}
            treeExpandable={false}
          />
        </TitleHeader>
      </div>
      <div ref={searchHeaderRef}>
        <SearchTreeHeader
          selectedRowKeys={selectedRowKeys}
          totalRows={totalRows}
          customMiddleComponent={
            shouldShowNameSearchWarning ? (
              <NameSearchWarning
                onFilterSearchClick={() => setSearchVisible?.(true)}
              />
            ) : undefined
          }
        />
      </div>
      <div ref={containerRef} style={containerStyle}>
        <KanbanComponent
          ref={kanbanRef}
          kanbanView={kanbanView}
          model={model}
          domain={domain}
          context={context}
          searchParams={searchParams || []}
          nameSearch={searchTreeNameSearch}
          onCardClick={handleCardClick}
          onLoadingChange={setIsLoading}
          onTotalRowsChange={handleTotalRowsChange}
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
