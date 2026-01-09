export type RecordComment = {
  id: number;
  body: string;
  res_model: string;
  res_id: number;
  create_date: string;
  create_uid: number;
  "create_uid.login": string;
  "create_uid.name": string;
  is_unread?: boolean;
};

export type MentionUser = {
  id: number;
  login: string;
  name: string;
};

export type Participant = {
  id: number;
  name: string;
  login: string;
  is_muted: boolean;
};

export type UserStatus = {
  is_participant: boolean;
  is_muted: boolean;
  last_message_read: number | false;
};

export type PendingCommentStatus = "sending" | "failed";

export type PendingComment = {
  tempId: string;
  body: string;
  status: PendingCommentStatus;
  createdAt: string;
};
