import React from "react";
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
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        borderTopLeftRadius: token.borderRadius,
        borderTopRightRadius: token.borderRadius,
        marginLeft: 2,
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
          fontWeight: isActive ? 500 : "normal",
        }}
      >
        {label}
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
