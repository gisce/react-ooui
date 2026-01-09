import { memo, useMemo, CSSProperties } from "react";
import { Typography, Button, Spin, Tooltip, Avatar, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { BellOutlined, BellFilled } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { Participant } from "@/types/comments";
import { UserAvatar } from "@/ui/UserAvatar";

const { Text } = Typography;
const { useToken } = theme;

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
    }),
    [token.colorBorder, token.colorBgLayout],
  );

  const notificationRowStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: 12,
    }),
    [],
  );

  const notificationTextStyle = useMemo(
    (): CSSProperties => ({
      flex: 1,
      minWidth: 0,
    }),
    [],
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

  const participantsRowStyle = useMemo(
    (): CSSProperties => ({
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 12,
    }),
    [],
  );

  const participantsLabelStyle = useMemo(
    (): CSSProperties => ({
      fontSize: 12,
      fontWeight: 600,
      flexShrink: 0,
    }),
    [],
  );

  if (loading) {
    return (
      <div style={sectionStyle}>
        <Spin size="small" />
      </div>
    );
  }

  return (
    <ErrorBoundary>
      <div style={sectionStyle}>
        <div style={notificationRowStyle}>
          <div style={notificationTextStyle}>
            <Text style={explanatoryTextStyle}>
              {!isParticipant
                ? t("notParticipant")
                : isMuted
                ? t("mutedNotifications")
                : t("receivingNotifications")}
            </Text>
          </div>
          <Tooltip
            placement="left"
            title={
              !isParticipant || isMuted ? t("subscribe") : t("unsubscribe")
            }
          >
            <Button
              type={isParticipant && !isMuted ? "primary" : "default"}
              loading={updating}
              onClick={onToggleMute}
              icon={
                !isParticipant || isMuted ? <BellOutlined /> : <BellFilled />
              }
            />
          </Tooltip>
        </div>

        {participants.length > 0 && (
          <div style={participantsRowStyle}>
            <Text style={participantsLabelStyle}>
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
