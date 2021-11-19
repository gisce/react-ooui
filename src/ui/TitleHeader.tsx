import React, { useContext } from "react";
import { Row, Col, Typography } from "antd";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

const { Title } = Typography;

type Props = {
  children: any;
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
  } = useContext(ActionViewContext) as ActionViewContextType;
  const { t } = useContext(LocaleContext) as LocaleContextType;

  function getSummary() {
    if (!currentId) {
      return "";
    }

    if (totalItems === 0) {
      return `${t("editingDocument")} (id: ${currentId})`;
    }

    return `${t("register")} ${
      currentItemIndex === undefined ? 1 : currentItemIndex + 1
    } / ${results!.length} ${t("of")} ${totalItems} - ${t(
      "editingDocument"
    )} (id: ${currentId})`;
  }
  return (
    <>
      <Row
        className="bg-blueGray-100 shadow-md rounded"
        style={{ padding: "1em" }}
        align="middle"
      >
        <Col flex={2}>
          <Title level={3} style={{ marginBottom: 0 }}>
            {title}
          </Title>
          {currentView?.type === "form" && getSummary()}
        </Col>
        <Col flex={3}>
          <Row justify="end">{children}</Row>
        </Col>
      </Row>
      <div className="pb-5" />
    </>
  );
}

export default TitleHeader;
