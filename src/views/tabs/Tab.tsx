import React from "react";
import { CloseOutlined } from "@ant-design/icons";

type TabProps = {
  tabKey: string;
  label: string;
  onClose: (key: string) => void;
  isActive: boolean;
  onSelected: (key: string) => void;
};

function Tab(props: TabProps) {
  const { label, onClose, tabKey, isActive, onSelected } = props;

  const bgColor = isActive ? "#ffffff" : "#F1F5F9";

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
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        marginLeft: 2,
      }}
    >
      <div
        style={{
          color: isActive ? "#001529" : "#ADB0B3",
          userSelect: "none",
          height: 40,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: 5,
          paddingRight: 5,
          marginBottom: 2,
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
          style={{ color: isActive ? "#001529" : "#ADB0B3" }}
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
