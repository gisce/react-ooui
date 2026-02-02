import { useEffect, useCallback, useMemo, CSSProperties } from "react";
import FormActionBar from "@/actionbar/FormActionBar";
import {
  CommentsSidePanel,
  COMMENTS_PANEL_WIDTH,
  COMMENTS_PANEL_GAP,
} from "@/comments/CommentsSidePanel";
import { FormView } from "@/types";
import TitleHeader from "@/ui/TitleHeader";
import Form from "@/widgets/views/Form";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useRecordComments } from "@/hooks/useRecordComments";
import { useParticipants } from "@/hooks/useParticipants";
import { useConfigContext, useFeatureIsEnabled } from "@/context/ConfigContext";
import { ErpFeatureKeys } from "@/models/erpFeature";
import { theme } from "antd";

const { useToken } = theme;

export type FormActionViewProps = {
  formView?: FormView;
  visible: boolean;
  formRef: any;
  model: string;
  currentId?: number | string;
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
    permissions,
    objectProps,
  } = useActionViewContext();
  const { globalValues } = useConfigContext();
  const { token } = useToken();
  const commentsFeatureEnabled = useFeatureIsEnabled(
    ErpFeatureKeys.FEATURE_COMMENTS_SYSTEM,
  );
  const commentsAllowed =
    commentsFeatureEnabled && !objectProps?.without_comments;

  const {
    comments,
    participants,
    userStatus,
    loading,
    fetchComments,
    addComment,
    deleteComment,
    fetchMentionUsers,
    markAsRead,
  } = useRecordComments({
    model,
    resourceId: currentId,
    context,
  });

  const {
    isParticipant,
    isMuted,
    updating: muteUpdating,
    toggleMute,
  } = useParticipants({
    model,
    resourceId: currentId,
    userStatus,
    context,
  });

  useEffect(() => {
    if (!commentsAllowed) {
      setCommentCount?.(0);
      setCommentsPanelVisible?.(false);
      return;
    }
    setCommentCount?.(0);
  }, [commentsAllowed, currentId, setCommentCount, setCommentsPanelVisible]);

  useEffect(() => {
    if (!commentsAllowed) return;
    setCommentCount?.(comments.length);
  }, [commentsAllowed, comments.length, setCommentCount]);

  useEffect(() => {
    if (!commentsAllowed) return;
    if (currentId) {
      fetchComments();
    }
  }, [commentsAllowed, currentId, fetchComments]);

  useEffect(() => {
    if (!commentsAllowed) return;
    setRefreshComments?.(fetchComments);
    return () => setRefreshComments?.(undefined);
  }, [commentsAllowed, fetchComments, setRefreshComments]);

  const handleAddComment = useCallback(
    async (body: string) => {
      const newCommentId = await addComment(body);
      await fetchComments({ silent: true });
      if (newCommentId) {
        markAsRead(newCommentId);
      }
    },
    [addComment, fetchComments, markAsRead],
  );

  const handleClosePanel = useCallback(() => {
    setCommentsPanelVisible?.(false);
  }, [setCommentsPanelVisible]);

  const handleSubmitSucceed = useCallback(
    (id?: number | string, values?: any) => {
      if (id === undefined || !results) return;
      const itemIndex = results.findIndex((item: any) => item.id === id);
      if (itemIndex === -1) {
        const updatedResults = [...results, values];
        setResults(updatedResults);
        setCurrentItemIndex(updatedResults.length - 1);
      }
    },
    [results, setResults, setCurrentItemIndex],
  );

  const wrapperStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      flexDirection: "column",
      height: "calc(100vh - 80px)",
    }),
    [],
  );

  const containerStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      flex: 1,
      overflow: "hidden",
      position: "relative",
      minHeight: 0,
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
        commentsAllowed && commentsPanelVisible
          ? COMMENTS_PANEL_WIDTH + COMMENTS_PANEL_GAP
          : 0,
      transition: "margin-right 0.3s ease",
    }),
    [
      commentsAllowed,
      commentsPanelVisible,
      token.colorTextQuaternary,
      token.colorBgContainer,
    ],
  );

  if (!visible) {
    return null;
  }

  return (
    <div style={wrapperStyle}>
      <TitleHeader>
        <FormActionBar toolbar={formView?.toolbar} />
      </TitleHeader>
      <div style={containerStyle}>
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
        {commentsAllowed && currentId !== undefined && (
          <CommentsSidePanel
            visible={commentsPanelVisible ?? false}
            comments={comments}
            loading={loading}
            model={model}
            resourceId={currentId}
            onClose={handleClosePanel}
            onAddComment={handleAddComment}
            onDeleteComment={deleteComment}
            onFetchComments={fetchComments}
            onFetchMentionUsers={fetchMentionUsers}
            currentUserId={globalValues?.uid}
            canAddComment={permissions?.write}
            participants={participants}
            participantsLoading={loading}
            isParticipant={isParticipant}
            isMuted={isMuted}
            muteUpdating={muteUpdating}
            onToggleMute={userStatus ? toggleMute : undefined}
            lastMessageRead={userStatus?.last_message_read}
            onMarkAsRead={userStatus ? markAsRead : undefined}
          />
        )}
      </div>
    </div>
  );
};
