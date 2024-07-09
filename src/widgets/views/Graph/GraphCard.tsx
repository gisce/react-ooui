import { ExportOutlined } from "@ant-design/icons";
import { Row, Col, Typography, theme } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { GraphCardProps } from "./GraphCard.types";
const { useToken } = theme;

const { Text } = Typography;

export const GraphCard = (props: GraphCardProps) => {
  const { title, children, action, openAction, parms } = props;
  const { token } = useToken();

  const hasDragAndDrop = Object.keys(parms).length > 0;

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
            cursor: hasDragAndDrop ? "grab" : undefined,
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
      <div style={{ padding: hasDragAndDrop ? undefined : 10 }}>
        <ErrorBoundary>{children}</ErrorBoundary>
      </div>
    </div>
  );
};
