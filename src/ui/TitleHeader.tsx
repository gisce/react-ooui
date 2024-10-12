import React, { useContext } from "react";
import { Row, Col, Typography, theme } from "antd";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import { useLocale } from "@gisce/react-formiga-components";
import { CopyOutlined } from "@ant-design/icons";

const { useToken } = theme;

const { Title, Text } = Typography;

type Props = {
  title?: string;
  children?: any;
  showSummary?: boolean;
};

function TitleHeader(props: Props) {
  const { title: titleProps, children, showSummary = true } = props;
  const {
    title,
    currentView,
    currentId,
    currentItemIndex,
    results,
    totalItems,
    selectedRowItems,
    isInfiniteTree,
  } = useContext(ActionViewContext) as ActionViewContextType;
  const { t } = useLocale();
  const { token } = useToken();

  function getSummary() {
    if (currentView?.type === "form") {
      if (!currentId) {
        return "";
      }

      if (totalItems === 0) {
        return (
          <>
            {t("editingDocument")} (id:{" "}
            <Text
              copyable={{ icon: <CopyOutlined style={{ color: "red" }} /> }}
            >
              {currentId}
            </Text>
            )
          </>
        );
      }

      return (
        <>
          {t("register")}{" "}
          {isInfiniteTree
            ? `${currentItemIndex === undefined ? 1 : currentItemIndex + 1} ${t(
                "of",
              )} ${totalItems}`
            : `${currentItemIndex === undefined ? 1 : currentItemIndex + 1} / ${
                results!.length
              } ${t("of")} ${totalItems}`}{" "}
          - {t("editingDocument")} (id: <Text copyable>{currentId}</Text>)
        </>
      );
    } else if (currentView?.type === "tree" && selectedRowItems) {
      if (selectedRowItems.length === 1) {
        return (
          <>
            1 {t("selectedRegisters")} - (id:{" "}
            <Text copyable>{selectedRowItems[0].id}</Text>)
          </>
        );
      } else if (selectedRowItems.length > 1) {
        return (
          <>
            {selectedRowItems.length} {t("selectedRegisters")}
            <Text
              copyable={{
                text: selectedRowItems.map((reg) => reg.id).join(", "),
              }}
            ></Text>
          </>
        );
      }
    }
    return null;
  }
  return (
    <div
      style={{
        position: "sticky",
        top: 80,
        zIndex: 3,
      }}
    >
      <Row
        className="shadow-md"
        style={{
          padding: "1em",
          borderRadius: token.borderRadius,
          backgroundColor: token.colorPrimaryBg,
          minHeight: "82px",
        }}
        align="middle"
      >
        <Col flex={2}>
          <Title level={3} style={{ marginBottom: 0 }}>
            {titleProps || title}
          </Title>
          {showSummary && getSummary()}
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
