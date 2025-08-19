import { CloseOutlined } from "@ant-design/icons";
import { theme } from "antd";
const { useToken } = theme;

type TabProps = {
  tabKey: string;
  label: string;
  onClose: (key: string) => void;
  isActive: boolean;
  onSelected: (key: string) => void;
};

function Tab(props: TabProps) {
  const { label, onClose, tabKey, isActive, onSelected } = props;
  const { token } = useToken();
  const bgColor = isActive ? token.colorBgContainer : token.colorPrimaryBg;

  const outlineColor = token.colorPrimaryActive;

  return (
    <div
      onClick={() => {
        !isActive && onSelected(tabKey);
      }}
      style={{
        cursor: "pointer",
        height: 40,
        paddingTop: 7,
        paddingBottom: 5,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: bgColor,
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: token.borderRadius,
        borderTopRightRadius: token.borderRadius,
        marginLeft: 2,
        minWidth: "fit-content",
        flexShrink: 0,
        whiteSpace: "nowrap",
        borderBottom: `2px solid ${outlineColor}`,
        ...(isActive && {
          borderLeft: `2px solid ${outlineColor}`,
          borderTop: `2px solid ${outlineColor}`,
          borderRight: `2px solid ${outlineColor}`,
          borderBottom: "none",
          zIndex: 1,
          position: "relative",
        }),
      }}
    >
      <div
        style={{
          color: token.colorPrimaryActive,
          userSelect: "none",
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
          fontWeight: isActive ? "bold" : "normal",
        }}
      >
        {label || ""}
      </div>
      <div
        style={{
          paddingLeft: 5,
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CloseOutlined
          style={{
            color: token.colorPrimaryActive,
          }}
          onClick={(e) => {
            e.stopPropagation();
            onClose(tabKey);
          }}
        />
      </div>
    </div>
  );
}

export default Tab;
