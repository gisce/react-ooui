import {
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useState,
  CSSProperties,
} from "react";
import FormActionBar from "@/actionbar/FormActionBar";
import {
  CommentsSidePanel,
  COMMENTS_PANEL_WIDTH,
} from "@/actionbar/CommentsSidePanel";
import { FormView } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import Form from "@/widgets/views/Form";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useRecordComments } from "@/hooks/useRecordComments";
import { useConfigContext } from "@/context/ConfigContext";

export type FormActionViewProps = {
  formView?: FormView;
  visible: boolean;
  formRef: any;
  model: string;
  currentId?: number;
  domain: any;
  context: any;
  defaultValues?: any;
  forcedValues?: any;
  readOnly?: boolean;
  results: any[];
  setResults: (value: any[]) => void;
  setCurrentItemIndex: (value?: number) => void;
};

export const FormActionView = (props: FormActionViewProps) => {
  const {
    visible,
    formRef,
    model,
    currentId,
    domain,
    formView,
    context,
    defaultValues,
    forcedValues,
    readOnly,
    results,
    setResults,
    setCurrentItemIndex,
  } = props;

  const {
    commentsPanelVisible,
    setCommentsPanelVisible,
    setCommentCount,
    setRefreshComments,
  } = useActionViewContext();
  const { globalValues } = useConfigContext();

  const containerRef = useRef<HTMLDivElement>(null);
  const [panelTopOffset, setPanelTopOffset] = useState(0);

  useEffect(() => {
    if (!visible) return;

    const stickyHeader = containerRef.current
      ?.previousElementSibling as HTMLElement;

    const updateOffset = () => {
      if (stickyHeader) {
        const rect = stickyHeader.getBoundingClientRect();
        setPanelTopOffset(rect.bottom - 15);
      }
    };

    updateOffset();

    const resizeObserver = new ResizeObserver(updateOffset);
    if (stickyHeader) {
      resizeObserver.observe(stickyHeader);
    }

    window.addEventListener("resize", updateOffset);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateOffset);
    };
  }, [visible]);

  const { comments, loading, fetchComments, addComment } = useRecordComments({
    model,
    resourceId: currentId,
    context,
  });

  useEffect(() => {
    setCommentCount?.(comments.length);
  }, [comments.length, setCommentCount]);

  useEffect(() => {
    if (currentId) {
      fetchComments();
    }
  }, [currentId, fetchComments]);

  useEffect(() => {
    setRefreshComments?.(fetchComments);
    return () => setRefreshComments?.(undefined);
  }, [fetchComments, setRefreshComments]);

  const handleAddComment = useCallback(
    async (body: string) => {
      await addComment(body);
      await fetchComments();
    },
    [addComment, fetchComments],
  );

  const handleClosePanel = useCallback(() => {
    setCommentsPanelVisible?.(false);
  }, [setCommentsPanelVisible]);

  const handleSubmitSucceed = useCallback(
    (id?: number, values?: any) => {
      if (id === undefined) return;
      const itemIndex = results!.findIndex((item: any) => {
        return item.id === id;
      });
      if (itemIndex === -1) {
        results!.push(values);
        setResults(results);
        setCurrentItemIndex(results!.length - 1);
      }
    },
    [results, setResults, setCurrentItemIndex],
  );

  const containerStyle = useMemo(
    (): CSSProperties => ({ display: "flex", flex: 1, overflow: "hidden" }),
    [],
  );

  const formWrapperStyle = useMemo(
    (): CSSProperties => ({
      flex: 1,
      overflow: "auto",
      marginRight: commentsPanelVisible ? COMMENTS_PANEL_WIDTH : 0,
      transition: "margin-right 0.3s ease",
    }),
    [commentsPanelVisible],
  );

  if (!visible) {
    return null;
  }

  return (
    <>
      <TitleHeader>
        <FormActionBar toolbar={formView?.toolbar} />
      </TitleHeader>
      <div ref={containerRef} style={containerStyle}>
        <div style={formWrapperStyle}>
          <Form
            rootForm={true}
            ref={formRef}
            model={model}
            defaultValues={defaultValues}
            forcedValues={forcedValues}
            readOnly={readOnly}
            formView={formView}
            actionDomain={domain}
            id={currentId}
            parentContext={context}
            onSubmitSucceed={handleSubmitSucceed}
          />
        </div>
        {currentId !== undefined && (
          <CommentsSidePanel
            visible={commentsPanelVisible ?? false}
            comments={comments}
            loading={loading}
            onClose={handleClosePanel}
            topOffset={panelTopOffset}
            onAddComment={handleAddComment}
            onFetchComments={fetchComments}
            currentUserId={globalValues?.uid}
          />
        )}
      </div>
    </>
  );
};
