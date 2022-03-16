import React, { useContext } from "react";
import { Row, Col, Typography } from "antd";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

const { Title, Text } = Typography;

type Props = {
  children?: any;
};

function TitleHeader(props: Props) {
  const { children } = props;
  const {
    title,
    currentView,
    currentId,
    currentItemIndex,
    results,
    totalItems,
    selectedRowItems,
  } = useContext(ActionViewContext) as ActionViewContextType;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  function getSummary() {
    if (currentView?.type === "form") {
      if (!currentId) {
        return "";
      }

      if (totalItems === 0) {
        return (
          <>
            {t("editingDocument")} (id: <Text copyable>{currentId}</Text>)
          </>
        );
      }

      return (
        <>
         {t("register")} {
          currentItemIndex === undefined ? 1 : currentItemIndex + 1
        } / {results!.length} {t("of")} {totalItems} - {t(
          "editingDocument"
        )} (id: <Text copyable>{currentId}</Text>)
        </>
      );

    } else if (currentView?.type === "tree" && selectedRowItems) {
      if (selectedRowItems.length === 1) {
        return (
         <>
           1 {t("selectedRegisters")} - (id: <Text copyable>{selectedRowItems[0].id}</Text>)
         </>
        )
      } else if (selectedRowItems.length > 1) {
        return (
          <>
            {selectedRowItems.length} {t("selectedRegisters")}<Text copyable={{text: selectedRowItems.map(reg => reg.id).join(", ")}}></Text>
          </>
        );
      }
    }
    return null;
  }
  return (
    <div style={{ position: "sticky", top: 80, zIndex: 99 }}>
      <Row
        className="bg-blueGray-100 shadow-md rounded"
        style={{ padding: "1em" }}
        align="middle"
      >
        <Col flex={2}>
          <Title level={3} style={{ marginBottom: 0 }}>
            {title}
          </Title>
          {getSummary()}
        </Col>
        <Col flex={3}>
          <Row justify="end">{children}</Row>
        </Col>
      </Row>
      <div className="pb-5" />
    </div>
  );
}

export default TitleHeader;
