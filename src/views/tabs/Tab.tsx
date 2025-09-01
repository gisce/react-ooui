import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { CloseOutlined } from "@ant-design/icons";
import { theme, Input, InputRef } from "antd";
import { useSortable } from "@dnd-kit/sortable";
const { useToken } = theme;

type TabProps = {
  tabKey: string;
  label: string;
  onClose: (key: string) => void;
  isActive: boolean;
  onSelected: (key: string) => void;
  onTitleChange?: (key: string, newTitle: string) => void;
};

function Tab(props: TabProps) {
  const { label, onClose, tabKey, isActive, onSelected, onTitleChange } = props;
  const { token } = useToken();
  const bgColor = isActive ? token.colorBgContainer : token.colorPrimaryBg;
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(label);
  const inputRef = useRef<InputRef>(null);

  const outlineColor = token.colorPrimaryActive;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: tabKey });

  const style = useMemo(
    () => ({
      transform: transform
        ? `translateX(${transform.x}px) translateY(0px)`
        : undefined,
      transition,
      opacity: isDragging ? 0.5 : 1,
      zIndex: isDragging ? 1000 : isActive ? 1 : "auto",
    }),
    [transform, transition, isDragging, isActive],
  );

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  useEffect(() => {
    setEditValue(label);
  }, [label]);

  const handleDoubleClick = useCallback(() => {
    setIsEditing(true);
    setEditValue(label);
  }, [label]);

  const handleSaveEdit = useCallback(() => {
    if (onTitleChange && editValue.trim() !== label.trim()) {
      onTitleChange(tabKey, editValue.trim());
    }
    setIsEditing(false);
  }, [onTitleChange, editValue, label, tabKey]);

  const handleCancelEdit = useCallback(() => {
    setEditValue(label);
    setIsEditing(false);
  }, [label]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Enter") {
        handleSaveEdit();
      } else if (e.key === "Escape") {
        handleCancelEdit();
      }
    },
    [handleSaveEdit, handleCancelEdit],
  );

  const handleInputBlur = useCallback(() => {
    handleSaveEdit();
  }, [handleSaveEdit]);

  return (
    <div
      ref={setNodeRef}
      style={useMemo(
        () => ({
          ...style,
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
          borderBottom: isDragging ? "none" : `2px solid ${outlineColor}`,
          ...(!isDragging &&
            isActive && {
              borderLeft: `2px solid ${outlineColor}`,
              borderTop: `2px solid ${outlineColor}`,
              borderRight: `2px solid ${outlineColor}`,
              borderBottom: "none",
              position: "relative",
            }),
        }),
        [
          style,
          bgColor,
          token.borderRadius,
          isDragging,
          outlineColor,
          isActive,
        ],
      )}
      {...attributes}
      onClick={useCallback(() => {
        if (!isDragging && !isEditing && !isActive) {
          onSelected(tabKey);
        }
      }, [isDragging, isEditing, isActive, onSelected, tabKey])}
      onMouseDown={useCallback(
        (e: React.MouseEvent) => {
          if (e.button === 1) {
            e.preventDefault();
            onClose(tabKey);
          }
        },
        [onClose, tabKey],
      )}
    >
      <div
        {...(!isEditing ? listeners : {})}
        style={useMemo(
          () => ({
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
            cursor: isDragging ? "grabbing" : "grab",
          }),
          [token.colorPrimaryActive, isActive, isDragging],
        )}
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
            onMouseDown={(e) => e.stopPropagation()}
          />
        ) : (
          label || ""
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
          onClick={useCallback(
            (e: React.MouseEvent) => {
              e.stopPropagation();
              onClose(tabKey);
            },
            [onClose, tabKey],
          )}
        />
      </div>
    </div>
  );
}

export default Tab;
