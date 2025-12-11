import { Form } from "antd";
import { MarkdownInput } from "@/widgets/custom/Markdown";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { CSSProperties } from "react";
import { RecordComment } from "@/types/comments";

type CommentMarkdownProps = {
  comment: RecordComment;
  model: string;
  resourceId: number;
};

const PARAGRAPH_STYLE: CSSProperties = {
  margin: 0,
};

const COMMENT_COMPONENTS = {
  p: ({ children }: { children?: React.ReactNode }) => (
    <p style={PARAGRAPH_STYLE}>{children}</p>
  ),
};

export const CommentMarkdown = ({
  comment,
  model,
  resourceId,
}: CommentMarkdownProps) => {
  return (
    <ErrorBoundary>
      <Form>
        <Form.Item
          name={`comment_${comment.id}`}
          initialValue={comment.body}
          noStyle
        >
          <MarkdownInput
            value={comment.body}
            components={COMMENT_COMPONENTS}
            // className=""
          />
        </Form.Item>
      </Form>
    </ErrorBoundary>
  );
};
