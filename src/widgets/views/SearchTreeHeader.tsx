import { useLocale } from "@gisce/react-formiga-components";
import { Row, Col, Spin, Typography } from "antd";
const { Text } = Typography;

export type SearchTreeHeaderProps = {
  totalRows?: number;
  selectedRowKeys: number[];
  allVisibleKeysSelected: boolean;
};

export const SearchTreeHeader = ({
  totalRows,
  selectedRowKeys,
  allVisibleKeysSelected,
}: SearchTreeHeaderProps) => {
  const { t } = useLocale();

  return (
    <Row align="bottom" className="pb-4">
      <Col span={12}>
        <SearchTreeSelectionSummary selectedRowKeys={selectedRowKeys} />
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
        {selectedRowKeys.length} {t("selectedRegisters")}
        <Text
          copyable={{
            text: selectedRowKeys.join(", "),
          }}
        ></Text>
      </>
    );
  }
};
