import { useContext, useRef, useState, useCallback, useMemo } from "react";
import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  DragEndEvent,
  closestCenter,
} from "@dnd-kit/core";
import { restrictToHorizontalAxis } from "@dnd-kit/modifiers";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  horizontalListSortingStrategy,
} from "@dnd-kit/sortable";

import {
  TabManagerContext,
  TabManagerContextType,
} from "@/context/TabManagerContext";
import Tab from "./tabs/Tab";

function TabSelector() {
  const tabManagerContext = useContext(
    TabManagerContext,
  ) as TabManagerContextType;
  const {
    activeKey,
    tabs = [],
    onRemoveTab,
    onChangeTab,
    onReorderTabs,
    onUpdateTabTitle,
  } = tabManagerContext || {};

  const dragStartPosition = useRef<{ x: number; y: number } | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = useCallback((event: any) => {
    setIsDragging(true);
    if (event.activatorEvent && "clientX" in event.activatorEvent) {
      const mouseEvent = event.activatorEvent as MouseEvent;
      dragStartPosition.current = {
        x: mouseEvent.clientX,
        y: mouseEvent.clientY,
      };
    }
  }, []);

  const handleDragCancel = useCallback(() => {
    setIsDragging(false);
    dragStartPosition.current = null;
  }, []);

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;

      if (
        dragStartPosition.current &&
        event.activatorEvent &&
        "clientX" in event.activatorEvent
      ) {
        const mouseEvent = event.activatorEvent as MouseEvent;
        const deltaX = Math.abs(
          mouseEvent.clientX - dragStartPosition.current.x,
        );
        const deltaY = Math.abs(
          mouseEvent.clientY - dragStartPosition.current.y,
        );

        if (deltaY > deltaX) {
          dragStartPosition.current = null;
          return;
        }
      }

      if (active.id !== over?.id) {
        const oldIndex = tabs.findIndex((tab: any) => tab.key === active.id);
        const newIndex = tabs.findIndex((tab: any) => tab.key === over?.id);

        if (oldIndex !== -1 && newIndex !== -1 && onReorderTabs) {
          onReorderTabs(oldIndex, newIndex);
        }
      }

      setIsDragging(false);
      dragStartPosition.current = null;
    },
    [tabs, onReorderTabs],
  );

  const tabItems = useMemo(() => tabs.map((tab: any) => tab.key), [tabs]);

  const outerStyle = useMemo(
    () => ({
      flex: 1,
      maxWidth: "100%",
      marginRight: "16px",
      height: "40px",
      minHeight: "40px",
      maxHeight: "40px",
      overflow: "hidden" as const,
    }),
    [],
  );

  const innerStyle = useMemo(
    () => ({
      display: "flex" as const,
      flexDirection: "row" as const,
      overflowX: isDragging ? ("hidden" as const) : ("auto" as const),
      overflowY: "hidden" as const,
      WebkitOverflowScrolling: isDragging
        ? ("auto" as const)
        : ("touch" as const),
      position: "relative" as const,
      height: "40px",
      minHeight: "40px",
      maxHeight: "40px",
    }),
    [isDragging],
  );

  return (
    <div style={outerStyle}>
      <div style={innerStyle}>
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          onDragCancel={handleDragCancel}
          modifiers={[restrictToHorizontalAxis]}
        >
          <SortableContext
            items={tabItems}
            strategy={horizontalListSortingStrategy}
          >
            {tabs.map((tab: any) => (
              <Tab
                key={tab.key}
                tabKey={tab.key}
                label={tab.title}
                onClose={onRemoveTab}
                isActive={activeKey === tab.key}
                onSelected={onChangeTab}
                onTitleChange={onUpdateTabTitle}
              />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
}

export default TabSelector;
