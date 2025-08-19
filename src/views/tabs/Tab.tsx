import React, { useState, useRef, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import { theme, Input, InputRef } from "antd";
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
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(label);
  const inputRef = useRef<InputRef>(null);

  const outlineColor = token.colorPrimaryActive;

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setEditValue((prev) => prev || label);
  };

  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSaveEdit();
    } else if (e.key === "Escape") {
      handleCancelEdit();
    }
  };

  const handleSaveEdit = () => {
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditValue((prev) => prev || label);
    setIsEditing(false);
  };

  const handleInputBlur = () => {
    handleSaveEdit();
  };

  return (
    <div
      onClick={() => {
        !isActive && onSelected(tabKey);
      }}
      onMouseDown={(e) => {
        if (e.button === 1) {
          e.preventDefault();
          onClose(tabKey);
        }
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
        onDoubleClick={handleDoubleClick}
      >
        {isEditing ? (
          <Input
            ref={inputRef}
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
            onKeyDown={handleInputKeyDown}
            onBlur={handleInputBlur}
            style={{
              width: Math.max(editValue.length * 8, 50),
              height: 24,
              fontSize: 14,
              padding: "0 4px",
              border: `1px solid ${token.colorPrimaryActive}`,
              borderRadius: token.borderRadius,
            }}
            onClick={(e) => e.stopPropagation()}
          />
        ) : (
          editValue || label || ""
        )}
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
