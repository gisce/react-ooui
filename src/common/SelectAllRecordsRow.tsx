import styled from "styled-components";
import React, { useContext, useState } from "react";
import { Spin } from "antd";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";
import Link from "antd/es/typography/Link";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SelectAllRecordsRow = ({
  numberOfVisibleSelectedRows,
  totalRecords,
  numberOfTotalRows,
  onSelectAllRecords,
  numberOfRealSelectedRows,
}: {
  numberOfVisibleSelectedRows: number;
  totalRecords: number;
  numberOfTotalRows: number;
  numberOfRealSelectedRows: number;
  onSelectAllRecords: () => Promise<void>;
}) => {
  const [loading, setLoading] = useState(false);
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const translations = {
    recordsSelected: t("recordsSelected"),
    selectAllRecords: t("selectAllRecords"),
    allRecordsSelected: t("allRecordsSelected"),
  };

  if (numberOfTotalRows === 0) {
    return null;
  }

  if (
    numberOfVisibleSelectedRows < numberOfTotalRows &&
    numberOfRealSelectedRows <= numberOfTotalRows
  ) {
    return null;
  }

  if (totalRecords === numberOfVisibleSelectedRows) {
    return null;
  }

  const handleClick = async (event: any) => {
    event.preventDefault(); // prevent the default action (navigation) from happening
    event.stopPropagation();
    setLoading(true);
    await onSelectAllRecords();
    setLoading(false);
  };

  const selectRowsComponent = (
    <span>
      {translations.recordsSelected.replace(
        "{numberOfSelectedRows}",
        numberOfVisibleSelectedRows.toString(),
      ) + " "}

      {loading ? (
        <Spin />
      ) : (
        <Link onClick={handleClick} style={{ fontWeight: 600 }}>
          {translations.selectAllRecords.replace(
            "{totalRecords}",
            totalRecords.toString(),
          )}
        </Link>
      )}
    </span>
  );

  const allRowsAreSelected = (
    <span style={{ fontWeight: 600 }}>
      {translations.allRecordsSelected.replace(
        "{totalRecords}",
        numberOfRealSelectedRows.toString(),
      ) + " "}
    </span>
  );

  return (
    <Container>
      {numberOfRealSelectedRows > numberOfTotalRows
        ? allRowsAreSelected
        : selectRowsComponent}
    </Container>
  );
};
