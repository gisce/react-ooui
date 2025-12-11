import { useEffect, useCallback, useMemo, useRef, CSSProperties } from "react";
import FormActionBar from "@/actionbar/FormActionBar";
import {
  CommentsSidePanel,
  COMMENTS_PANEL_WIDTH,
  COMMENTS_PANEL_GAP,
} from "@/actionbar/CommentsSidePanel";
import { FormView } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import Form from "@/widgets/views/Form";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useRecordComments } from "@/hooks/useRecordComments";
import { useConfigContext, useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { theme } from "antd";

const { useToken } = theme;

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
  const { token } = useToken();
  const commentsEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_COMMENTS_SYSTEM,
  );

  const containerRef = useRef<HTMLDivElement>(null);

  const { comments, loading, fetchComments, addComment, fetchMentionUsers } =
    useRecordComments({
      model,
      resourceId: currentId,
      context,
    });

  useEffect(() => {
    if (!commentsEnabled) return;
    setCommentCount?.(comments.length);
  }, [commentsEnabled, comments.length, setCommentCount]);

  useEffect(() => {
    if (!commentsEnabled) return;
    if (currentId) {
      fetchComments();
    }
  }, [commentsEnabled, currentId, fetchComments]);

  useEffect(() => {
    if (!commentsEnabled) return;
    setRefreshComments?.(fetchComments);
    return () => setRefreshComments?.(undefined);
  }, [commentsEnabled, fetchComments, setRefreshComments]);

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
    (): CSSProperties => ({
      display: "flex",
      flex: 1,
      overflow: "hidden",
      position: "relative",
      height: "calc(100vh - 80px - 102px)",
      backgroundColor: token.colorBgContainer,
    }),
    [token.colorBgContainer],
  );

  const formWrapperStyle = useMemo(
    (): CSSProperties => ({
      flex: 1,
      overflow: "auto",
      scrollbarWidth: "thin",
      scrollbarColor: `${token.colorTextQuaternary} ${token.colorBgContainer}`,
      paddingRight: COMMENTS_PANEL_GAP,
      marginRight:
        commentsEnabled && commentsPanelVisible
          ? COMMENTS_PANEL_WIDTH + COMMENTS_PANEL_GAP
          : 0,
      transition: "margin-right 0.3s ease",
    }),
    [
      commentsEnabled,
      commentsPanelVisible,
      token.colorTextQuaternary,
      token.colorBgContainer,
    ],
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
        {commentsEnabled && currentId !== undefined && (
          <CommentsSidePanel
            visible={commentsPanelVisible ?? false}
            comments={comments}
            loading={loading}
            model={model}
            resourceId={currentId}
            onClose={handleClosePanel}
            onAddComment={handleAddComment}
            onFetchComments={fetchComments}
            onFetchMentionUsers={fetchMentionUsers}
            currentUserId={globalValues?.uid}
          />
        )}
      </div>
    </>
  );
};
