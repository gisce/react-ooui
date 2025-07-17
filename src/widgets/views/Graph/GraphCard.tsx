import { ExportOutlined, InfoCircleOutlined } from "@ant-design/icons";
import { Row, Col, Typography, theme, Tooltip } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import { GraphCardProps } from "./GraphCard.types";
const { useToken } = theme;

const { Text } = Typography;

export const GraphCard = (props: GraphCardProps) => {
  const {
    title,
    children,
    action,
    openAction,
    parms,
    tooltip,
    card = false,
  } = props;
  const { token } = useToken();

  const hasDragAndDrop = Object.keys(parms).length > 0;

  return (
    <div
      className={hasDragAndDrop ? "shadow-md" : undefined}
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
          borderBottom: card ? "none" : "1px solid #ddd",
          backgroundColor: card ? token.colorBgBase : token.colorPrimaryBg,
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
          {tooltip ? (
            <>
              <Tooltip title={tooltip}>
                <InfoCircleOutlined className="pr-1 text-xs" />
              </Tooltip>
              <Text ellipsis={true}>{title}</Text>
            </>
          ) : (
            <Text
              ellipsis={true}
              style={{
                color: card
                  ? token.colorTextDescription
                  : token.colorTextHeading,
                fontWeight: card ? "normal" : "bold",
              }}
            >
              {title}
            </Text>
          )}
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
      {!hasDragAndDrop && (
        <div style={{ padding: 10 }}>
          <ErrorBoundary>{children}</ErrorBoundary>
        </div>
      )}
      {hasDragAndDrop && <ErrorBoundary>{children}</ErrorBoundary>}
    </div>
  );
};
