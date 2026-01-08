import { memo, useMemo, CSSProperties } from "react";
import { Typography, Button, Spin, Tooltip, Avatar, theme } from "antd";
import { BellOutlined, BellFilled } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import { Participant } from "@/types/comments";
import { UserAvatar } from "@/ui/UserAvatar";

const { Text } = Typography;
const { useToken } = theme;

export type ParticipantsSectionProps = {
  participants: Participant[];
  isMuted: boolean;
  loading: boolean;
  updating: boolean;
  onToggleMute: () => void;
};

const ParticipantsSectionComponent = ({
  participants,
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
    <div style={sectionStyle}>
      <div style={notificationRowStyle}>
        <div style={notificationTextStyle}>
          <Text style={explanatoryTextStyle}>
            {isMuted ? t("mutedNotifications") : t("receivingNotifications")}
          </Text>
        </div>
        <Tooltip
          placement="left"
          title={isMuted ? t("subscribe") : t("unsubscribe")}
        >
          <Button
            loading={updating}
            onClick={onToggleMute}
            icon={isMuted ? <BellOutlined /> : <BellFilled />}
          />
        </Tooltip>
      </div>

      {participants.length > 0 && (
        <div style={participantsRowStyle}>
          <Text style={participantsLabelStyle}>{t("participants") + ":"}</Text>
          <Avatar.Group
            max={{ count: 5, style: { backgroundColor: token.colorPrimary } }}
            size={24}
          >
            {participants.map((participant) => (
              <Tooltip key={participant.id} title={participant.name}>
                <span>
                  <UserAvatar userName={participant.name} size={24} />
                </span>
              </Tooltip>
            ))}
          </Avatar.Group>
        </div>
      )}
    </div>
  );
};

export const ParticipantsSection = memo(ParticipantsSectionComponent);
