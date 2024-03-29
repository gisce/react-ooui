import { DashboardGridItemProps } from "./DashboardGridItem.types";
import { ExportOutlined } from "@ant-design/icons";
import { Row, Col, Typography, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
const { useToken } = theme;

const { Text } = Typography;

export const DashboardGridItem = (props: DashboardGridItemProps) => {
  const { title, children, action, openAction } = props;
  const { token } = useToken();

  return (
    <div
      className={"shadow-md"}
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        border: "1px solid #eee",
        backgroundColor: "white",
        borderRadius: token.borderRadius,
      }}
    >
      <Row
        align="middle"
        style={{
          borderBottom: "1px solid #ddd",
          backgroundColor: token.colorPrimaryBg,
        }}
        wrap={false}
      >
        <Col
          flex="auto"
          className="draggable-head"
          style={{
            fontWeight: "bold",
            padding: "0.5rem",
            cursor: "grab",
            overflow: "hidden",
          }}
        >
          <Text ellipsis={true}>{title}</Text>
        </Col>
        {action && (
          <Col flex="25px" style={{ padding: "0.5rem" }}>
            <Row justify="end" align="middle">
              <ExportOutlined
                style={{ cursor: "pointer" }}
                onClick={() => {
                  openAction?.(action);
                }}
              />
            </Row>
          </Col>
        )}
      </Row>
      <ErrorBoundary>{children}</ErrorBoundary>
    </div>
  );
};
