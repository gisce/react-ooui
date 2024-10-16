import { Fragment, useContext } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { Comments as CommentsOoui } from "@gisce/ooui";
import {
  Card,
  Space,
  Typography,
  Avatar,
  Tag,
  Timeline,
  TimelineItemProps,
} from "antd";
import { useLocale } from "@gisce/react-formiga-components";

import dayjs from "@/helpers/dayjs";
import md5 from "md5";

const { Meta } = Card;
const { Text } = Typography;

type CommentsTimelineFieldProps = WidgetProps & {
  ooui: CommentsOoui;
};

type GravatarProps = {
  email: string;
  size?: number;
  theme: string;
};

type CommentDataType = {
  id: number;
  isSender: boolean;
  isAuthor: boolean;
  text: string;
  email: string;
  date: string;
  author: string;
};

type CommentProps = {
  data: CommentDataType;
  style?: any;
};

type CommentsTypeProps = {
  data: CommentDataType[];
};

type CommentsTimelineProps = {
  value?: EventsType[];
  ooui: CommentsOoui;
};

type EventActionType = {
  date: string;
  action: string;
};

export type EventsType = {
  type: "action" | "comment";
  event: EventActionType | CommentDataType;
};

const Gravatar = ({ email, size = 40, theme = "" }: GravatarProps) => {
  // Genera el enlace de Gravatar utilizando el email
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(
    email,
  )}?s=${size}&d=${theme}`;

  return <Avatar src={gravatarUrl} size={size} />;
};

function TextWithNewlines({ text }: { text: string }) {
  const textParts = text.split("\n");

  return (
    <div>
      {textParts.map((part, index) => (
        <Fragment key={index}>
          {part}
          {index !== textParts.length - 1 && <br />}
        </Fragment>
      ))}
    </div>
  );
}

export const Comment = (props: CommentProps) => {
  const { data, style } = props;
  const { t } = useLocale();
  return (
    <Card key={data.id} style={{ ...style, ...{ textAlign: "start" } }}>
      <Meta
        avatar={<Gravatar email={data.email} theme="mp" />}
        title={data.author}
        description={
          <Space direction="horizontal">
            <span title={data.date}>{dayjs(data.date).fromNow()}</span>
            {data.isAuthor && <Tag color="blue">{t("author")}</Tag>}
          </Space>
        }
        style={{ marginBottom: "5px" }}
      />
      <Text>
        <TextWithNewlines text={data.text} />
      </Text>
    </Card>
  );
};

export const Comments = (props: CommentsTypeProps) => {
  const { data = [] } = props;
  const comments = data.map((c) => {
    const style = { float: c.isSender ? "right" : "left", width: "60%" };
    return <Comment data={c} style={style} />;
  });
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: "flex" }}>
        {comments}
      </Space>
    </div>
  );
};

export const CommentsTimeline = (props: CommentsTimelineProps) => {
  const { value, ooui } = props;
  const items = (value || []).map((i) => {
    if (i.type === "action") {
      return {
        children: `${i.event.date} - ${(i.event as EventActionType).action}`,
      };
    } else if (i.type === "comment") {
      return {
        color: "gray",
        position: (i.event as CommentDataType).isSender ? "left" : "right",
        label: i.event.date,
        children: <Comment data={i.event as CommentDataType} />,
      };
    }
  });
  return (
    <Timeline
      mode="alternate"
      items={items as TimelineItemProps[]}
      style={{
        height: ooui.height ? ooui.height + "px" : "100%",
        overflowX: "hidden",
        overflowY: "auto",
        paddingTop: "10px",
        paddingRight: "10px",
      }}
    />
  );
};

export const CommentsTimelineField = (props: CommentsTimelineFieldProps) => {
  return (
    <Field {...props}>
      <CommentsTimeline ooui={props.ooui} />
    </Field>
  );
};
