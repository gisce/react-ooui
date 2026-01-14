import { memo, useMemo, CSSProperties } from "react";
import { Typography, Button, Spin, Tooltip, Avatar, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { BellOutlined, BellFilled } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { Participant } from "@/types/comments";
import { UserAvatar } from "@/ui/UserAvatar";

const { Text } = Typography;
const { useToken } = theme;

const NOTIFICATION_ROW_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between",
  gap: 12,
};

const NOTIFICATION_TEXT_STYLE: CSSProperties = {
  flex: 1,
  minWidth: 0,
};

const PARTICIPANTS_ROW_STYLE: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 8,
  marginTop: 12,
};

const PARTICIPANTS_LABEL_STYLE: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  flexShrink: 0,
};

export type ParticipantsSectionProps = {
  participants: Participant[];
  isParticipant: boolean;
  isMuted: boolean;
  loading: boolean;
  updating: boolean;
  onToggleMute: () => void;
};

const ParticipantsSectionComponent = ({
  participants,
  isParticipant,
  isMuted,
  loading,
  updating,
  onToggleMute,
}: ParticipantsSectionProps) => {
  const { token } = useToken();
  const { t } = useLocale();

  const sectionStyle = useMemo(
    (): CSSProperties => ({
      padding: "12px 16px",
      borderBottom: `1px solid ${token.colorBorder}`,
      backgroundColor: token.colorBgLayout,
      flexShrink: 0,
      minHeight: 82,
    }),
    [token.colorBorder, token.colorBgLayout],
  );

  const explanatoryTextStyle = useMemo(
    (): CSSProperties => ({
      fontSize: 12,
      color: token.colorTextSecondary,
      marginTop: 4,
      display: "block",
    }),
    [token.colorTextSecondary],
  );

  const isSubscribed = isParticipant && !isMuted;

  const notificationStatusText = useMemo(() => {
    if (!isParticipant) return t("notParticipant");
    if (isMuted) return t("mutedNotifications");
    return t("receivingNotifications");
  }, [isParticipant, isMuted, t]);

  if (loading) {
    return (
      <div
        style={{
          ...sectionStyle,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Spin size="small" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div style={sectionStyle}>
        <div style={NOTIFICATION_ROW_STYLE}>
          <div style={NOTIFICATION_TEXT_STYLE}>
            <Text style={explanatoryTextStyle}>{notificationStatusText}</Text>
          </div>
          <Tooltip
            placement="left"
            title={isSubscribed ? t("unsubscribe") : t("subscribe")}
          >
            <Button
              type={isSubscribed ? "primary" : "default"}
              loading={updating}
              onClick={onToggleMute}
              icon={isSubscribed ? <BellFilled /> : <BellOutlined />}
            />
          </Tooltip>
        </div>

        {participants.length > 0 && (
          <div style={PARTICIPANTS_ROW_STYLE}>
            <Text style={PARTICIPANTS_LABEL_STYLE}>
              {t("participants") + ":"}
            </Text>
            <Avatar.Group
              max={{ count: 5, style: { backgroundColor: token.colorPrimary } }}
              size={24}
            >
              {participants.map((participant) => (
                <ErrorBoundary key={participant.id}>
                  <Tooltip title={participant.name}>
                    <span>
                      <UserAvatar userName={participant.name} size={24} />
                    </span>
                  </Tooltip>
                </ErrorBoundary>
              ))}
            </Avatar.Group>
          </div>
        )}
      </div>
    </ErrorBoundary>
  );
};

export const ParticipantsSection = memo(ParticipantsSectionComponent);
