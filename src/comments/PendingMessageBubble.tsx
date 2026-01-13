import { memo, useMemo, useCallback, CSSProperties } from "react";
import { Button, theme } from "antd";
import { ExclamationCircleFilled, LoadingOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { PendingComment } from "@/types/comments";

const { useToken } = theme;

const CONTAINER_STYLE: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  marginBottom: 8,
};

const BUBBLE_ROW_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  justifyContent: "flex-end",
  marginRight: 28,
};

const ICON_STYLE: CSSProperties = { fontSize: 12 };

export type PendingMessageBubbleProps = {
  pending: PendingComment;
  onRetry: (tempId: string) => void;
};

const PendingMessageBubbleComponent = ({
  pending,
  onRetry,
}: PendingMessageBubbleProps) => {
  const { token } = useToken();
  const { t } = useLocale();
  const isSending = pending.status === "sending";
  const isFailed = pending.status === "failed";

  const bubbleStyle = useMemo(
    (): CSSProperties => ({
      backgroundColor: isFailed
        ? `${token.colorError}15`
        : token.colorPrimaryBg,
      padding: "8px 12px",
      borderRadius: 12,
      display: "inline-block",
      maxWidth: "80%",
      border: isFailed ? `1px solid ${token.colorError}` : "none",
      opacity: isSending ? 0.85 : 1,
    }),
    [token.colorPrimaryBg, token.colorError, isFailed, isSending],
  );

  const statusStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontSize: 11,
      color: isFailed ? token.colorError : token.colorTextQuaternary,
    }),
    [token.colorError, token.colorTextQuaternary, isFailed],
  );

  const retryButtonStyle = useMemo(
    (): CSSProperties => ({
      fontSize: 11,
      height: "auto",
      padding: "0 4px",
      color: token.colorError,
    }),
    [token.colorError],
  );

  const bodyStyle = useMemo(
    (): CSSProperties => ({
      fontSize: 13,
      lineHeight: 1.5,
      whiteSpace: "pre-wrap",
      wordBreak: "break-word",
      color: isFailed ? token.colorError : token.colorText,
    }),
    [token.colorText, token.colorError, isFailed],
  );

  const handleRetryClick = useCallback(() => {
    onRetry(pending.tempId);
  }, [onRetry, pending.tempId]);

  return (
    <ErrorBoundary>
      <div style={CONTAINER_STYLE}>
        <div style={BUBBLE_ROW_STYLE}>
          <div style={statusStyle}>
            {isSending && (
              <>
                <LoadingOutlined spin style={ICON_STYLE} />
                <span>{t("sending")}</span>
              </>
            )}
            {isFailed && (
              <>
                <ExclamationCircleFilled style={ICON_STYLE} />
                <span>{t("failedToSend")}</span>
                <Button
                  type="link"
                  size="small"
                  style={retryButtonStyle}
                  onClick={handleRetryClick}
                >
                  {t("retry")}
                </Button>
              </>
            )}
          </div>
          <div style={bubbleStyle}>
            <div style={bodyStyle}>{pending.body}</div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export const PendingMessageBubble = memo(PendingMessageBubbleComponent);
