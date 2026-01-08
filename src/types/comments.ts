export type RecordComment = {
  id: number;
  body: string;
  res_model: string;
  res_id: number;
  create_date: string;
  create_uid: number;
  "create_uid.login": string;
  "create_uid.name": string;
};

export type MentionUser = {
  id: number;
  login: string;
  name: string;
};

export type Participant = {
  id: number;
  user_id: number;
  name: string;
  is_muted: boolean;
  last_message_read?: number;
};
