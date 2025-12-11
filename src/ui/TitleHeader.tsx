import React, { useContext, useMemo } from "react";
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
  children?: React.ReactNode;
  showSummary?: boolean;
  subtitle?: React.ReactNode;
};

const TitleHeader: React.FC<Props> = ({
  title: titleProps,
  children,
  showSummary = true,
  subtitle,
}) => {
  const {
    title,
    currentView,
    currentId,
    currentItemIndex,
    results,
    totalItems,
    selectedRowItems,
    treeType,
  } = useContext(ActionViewContext) as ActionViewContextType;
  const { t } = useLocale();
  const { token } = useToken();

  const summary = useMemo(() => {
    if (!showSummary) return null;

    if (currentView?.type === "form" && currentId) {
      if (totalItems === 0 || totalItems === undefined || !results?.length) {
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

      const currentItemNumber = (currentItemIndex ?? 0) + 1;
      const itemCount = treeType === "infinite" ? totalItems : results?.length;
      return (
        <>
          {t("register")} {currentItemNumber}{" "}
          {treeType === "infinite" ? t("of") : "/"} {itemCount}{" "}
          {treeType !== "infinite" && `${t("of")} ${totalItems}`} -{" "}
          {t("editingDocument")} (id: <Text copyable>{currentId}</Text>)
        </>
      );
    }

    if (currentView?.type === "tree" && selectedRowItems?.length) {
      if (selectedRowItems.length === 1) {
        return (
          <>
            1 {t("selectedRegisters")} - (id:{" "}
            <Text copyable>{selectedRowItems[0].id}</Text>)
          </>
        );
      }
      return (
        <>
          {selectedRowItems.length} {t("selectedRegisters")}
          <Text
            copyable={{
              text: selectedRowItems.map((reg) => reg.id).join(", "),
            }}
          />
        </>
      );
    }

    return null;
  }, [
    showSummary,
    currentView?.type,
    currentId,
    selectedRowItems,
    totalItems,
    currentItemIndex,
    treeType,
    results?.length,
    t,
  ]);

  return (
    <div style={{ zIndex: 3 }}>
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
          {subtitle}
          {summary}
        </Col>
        <Col flex={3}>
          <Row justify="end">{children}</Row>
        </Col>
      </Row>
      <div className="pb-5" />
    </div>
  );
};

export default TitleHeader;
