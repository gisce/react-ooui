import React, {useContext} from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import {Card, Space, Typography, Avatar, Tag, Timeline, TimelineItemProps} from "antd"
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

const { Meta } = Card;
const { Text} = Typography;

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import md5 from "md5";


dayjs.extend(relativeTime);

type GravatarProps = {
  email: string,
  size?: number,
  theme: string,
}

type CommentDataType = {
  id: number,
  isSender: boolean,
  isAuthor: boolean,
  text: string,
  email: string,
  date: string,
  author: string,
}

type CommentProps = {
  data: CommentDataType,
  style?: any,
}

type CommentsTypeProps = {
  data: CommentDataType[],
}

type CommentsTimelineProps = {
  value?: EventsType[],
}


type EventActionType = {
  date: string,
  action: string,
}

export type EventsType = {
  type: "action" | "comment",
  event: EventActionType | CommentDataType

}

const Gravatar = ({ email, size = 40, theme = '' } : GravatarProps) => {
  // Genera el enlace de Gravatar utilizando el email
  const gravatarUrl = `https://www.gravatar.com/avatar/${md5(email)}?s=${size}&d=${theme}`;

  return (
    <Avatar src={gravatarUrl} size={size} />
  );
};


function TextWithNewlines({ text }:{text: string}) {
  const textParts = text.split('\n');

  return (
    <div>
      {textParts.map((part, index) => (
        <React.Fragment key={index}>
          {part}
          {index !== textParts.length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
}

export const Comment = (props: CommentProps) => {
  const {data, style} = props;
  const { t } = useContext(LocaleContext) as LocaleContextType;
  return (
    <Card key={data.id} style={{...style, ...{textAlign: 'start'}}}>
      <Meta avatar={<Gravatar email={data.email} theme='mp'/>}
            title={data.author}
            description={(
              <Space direction="horizontal">
                <span title={data.date}>{dayjs(data.date).fromNow()}</span>
                {data.isAuthor && <Tag color="blue">{t('author')}</Tag>}
              </Space>
            )} style={{marginBottom: '5px'}}/>
      <Text>
        <TextWithNewlines text={data.text} />
      </Text>
    </Card>
  )
}

export const Comments = (props: CommentsTypeProps) => {
  const { data = [] } = props;
  const comments = data.map((c) => {
      const style = {float: c.isSender ? 'right' : 'left', width: '60%'};
      return <Comment data={c} style={style}/>
    });
  return (
    <div>
      <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
        {comments}
      </Space>
    </div>
  )
}


export const CommentsTimeline = (props: CommentsTimelineProps) => {
  const { value } = props;
  const items = (value || []).map(i => {
    if (i.type === 'action') {
      return {
        children: `${i.event.date} - ${(i.event as EventActionType).action}`
      }
    } else if (i.type === "comment") {
      return {
        color: 'gray',
        position: (i.event as CommentDataType).isSender ? 'left' : 'right',
        label: i.event.date,
        children: <Comment data={i.event as CommentDataType} />,
      }
    }
  })
  return <Timeline mode="alternate" items={items as TimelineItemProps[]} />
}

export const CommentsTimelineField = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <CommentsTimeline />
    </Field>
  );
}