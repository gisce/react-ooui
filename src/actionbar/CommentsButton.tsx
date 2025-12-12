import { memo } from "react";
import { MessageOutlined } from "@ant-design/icons";
import { useLocale } from "@gisce/react-formiga-components";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { Badge } from "antd";

export type CommentsButtonProps = {
  disabled: boolean;
  commentCount: number;
  onClick: () => void;
};

const CommentsButtonComponent = (props: CommentsButtonProps) => {
  const { disabled, commentCount, onClick } = props;
  const { t } = useLocale();

  return (
    <ButtonWithTooltip
      tooltip={t("comments")}
      disabled={disabled}
      onClick={onClick}
    >
      <MessageOutlined />
      {commentCount > 0 && (
        <Badge
          count={commentCount}
          size="small"
          color="gray"
          style={{ fontSize: 8 }}
        />
      )}
    </ButtonWithTooltip>
  );
};

export const CommentsButton = memo(CommentsButtonComponent);
