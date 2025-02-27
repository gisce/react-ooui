import { FC } from "react";
import Link from "antd/es/typography/Link";
import { useLocale } from "@gisce/react-formiga-components";

interface NameSearchWarningProps {
  onFilterSearchClick: () => void;
}

export const NameSearchWarning: FC<NameSearchWarningProps> = ({
  onFilterSearchClick,
}) => {
  const { t } = useLocale();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onFilterSearchClick();
  };

  // Get the full translated text and the clickable part
  const fullText = t("nameSearchLimitNote");
  const clickablePart = t("filterSearchLink");

  // Split the text at the clickable part
  const textParts = fullText.split(clickablePart);

  // If the text contains the clickable part, render it with a link
  if (textParts.length > 1) {
    return (
      <span style={{ fontSize: "12px", color: "#666" }}>
        {textParts[0]}
        <Link
          onClick={handleClick}
          style={{
            fontWeight: 600,
            fontSize: "12px",
            color: "#1890ff",
          }}
        >
          {clickablePart}
        </Link>
        {textParts[1]}
      </span>
    );
  }

  // Fallback if the text doesn't contain the clickable part
  return <span style={{ fontSize: "12px", color: "#666" }}>{fullText}</span>;
};
