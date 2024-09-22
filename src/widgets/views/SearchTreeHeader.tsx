import { useLocale } from "@gisce/react-formiga-components";
import { Row, Col, Spin, Typography, Alert } from "antd";
const { Text } = Typography;

export type SearchTreeHeaderProps = {
  totalRows?: number;
  selectedRowKeys: number[];
  allRowSelectedMode: boolean;
};

export const SearchTreeHeader = ({
  totalRows,
  selectedRowKeys,
  allRowSelectedMode,
}: SearchTreeHeaderProps) => {
  const { t } = useLocale();

  return (
    <Row
      align="bottom"
      className="pb-4"
      style={{ height: 40, maxHeight: 40, overflow: "hidden" }}
    >
      <Col span={12}>
        {allRowSelectedMode ? (
          <span>{`${selectedRowKeys.length} ${t("selectedRegisters")}`}</span>
        ) : (
          <SearchTreeSelectionSummary selectedRowKeys={selectedRowKeys} />
        )}
        {/* <SearchTreeSelectionSummary selectedRowKeys={selectedRowKeys} /> */}
        {/* <SelectAllRecordsRow
          numberOfVisibleSelectedRows={numberOfVisibleSelectedRows}
          numberOfRealSelectedRows={selectedRowKeys?.length || 0}
          numberOfTotalRows={totalRows.length}
          totalRecords={total || 0}
          onSelectAllRecords={onSelectAllRecords}
        /> */}
      </Col>
      <Col span={12} className="text-right">
        {totalRows ? `${t("totalRegisters")}: ${totalRows}` : <Spin />}
      </Col>
    </Row>
  );
};

const SearchTreeSelectionSummary = ({
  selectedRowKeys,
}: {
  selectedRowKeys: number[];
}) => {
  const { t } = useLocale();
  if (selectedRowKeys.length === 1) {
    return (
      <>
        1 {t("selectedRegisters")} - (id:{" "}
        <Text copyable>{selectedRowKeys[0]}</Text>)
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
      </>
    );
  }
};
