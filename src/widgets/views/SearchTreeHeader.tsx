import { useLocale } from "@gisce/react-formiga-components";
import { Row, Col, Spin, Typography } from "antd";
import { ReactNode } from "react";
const { Text, Link } = Typography;

export type SearchTreeHeaderProps = {
  totalRows?: number | null;
  selectedRowKeys: number[];
  customMiddleComponent?: ReactNode;
  onClearSelection?: () => void;
};

export const SearchTreeHeader = ({
  totalRows,
  selectedRowKeys,
  customMiddleComponent,
  onClearSelection,
}: SearchTreeHeaderProps) => {
  const { t } = useLocale();

  // Calculate column spans based on whether middle component exists
  const sideColSpan = customMiddleComponent ? 6 : 12;
  const middleColSpan = 12;

  return (
    <Row
      align="bottom"
      className="pb-4"
      style={{ height: 40, maxHeight: 40, overflow: "hidden" }}
    >
      <Col span={sideColSpan}>
        <SearchTreeSelectionSummary
          selectedRowKeys={selectedRowKeys}
          onClearSelection={onClearSelection}
        />
      </Col>
      {customMiddleComponent && (
        <Col span={middleColSpan} className="text-center">
          {customMiddleComponent}
        </Col>
      )}
      <Col
        span={sideColSpan}
        style={{ paddingRight: 10 }}
        className="text-right"
      >
        {totalRows === undefined && <Spin />}
        {totalRows !== null &&
          totalRows !== undefined &&
          `${t("totalRegisters")} ${totalRows}`}
      </Col>
    </Row>
  );
};

const SearchTreeSelectionSummary = ({
  selectedRowKeys,
  onClearSelection,
}: {
  selectedRowKeys: number[];
  onClearSelection?: () => void;
}) => {
  const { t } = useLocale();

  const clearSelectionLink = onClearSelection ? (
    <>
      {" "}
      - <Link onClick={onClearSelection}>{t("clearSelection")}</Link>
    </>
  ) : null;

  if (selectedRowKeys.length === 1) {
    return (
      <>
        1 {t("selectedRegisters")} - (id:{" "}
        <Text copyable>{String(selectedRowKeys[0])}</Text>){clearSelectionLink}
      </>
    );
  } else if (selectedRowKeys.length > 1) {
    return (
      <>
        {selectedRowKeys.length} {t("selectedRegisters") + " "}
        <Text
          copyable={{
            text: selectedRowKeys.join(", "),
          }}
        ></Text>
        {clearSelectionLink}
      </>
    );
  }
};
