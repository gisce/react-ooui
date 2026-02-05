import {
  ReactElement,
  useMemo,
  useRef,
  useState,
  useLayoutEffect,
} from "react";
import { Tooltip, theme } from "antd";
import { CustomTag } from "../../custom/Tag";
import { colorFromString } from "@/helpers/formHelper";
import { useLocale } from "@gisce/react-formiga-components";
import { useDeepCompareMemo } from "use-deep-compare";
import { useActionViewContext } from "@/context/ActionViewContext";
import { useOne2manyContext } from "@/context/One2manyContext";

const TAG_MARGIN = 8;
const MORE_INDICATOR_WIDTH = 40;

interface TagItem {
  id: string | number;
  name: string;
}

interface TagsValue {
  items?: TagItem[];
}

interface TagsTreeComponentProps {
  value: TagsValue;
}

interface OverflowMeasurementResult {
  containerRef: React.RefObject<HTMLDivElement>;
  measureRef: React.RefObject<HTMLDivElement>;
  visibleCount: number;
}

function useOverflowMeasurement(
  itemCount: number,
  enabled: boolean,
): OverflowMeasurementResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState<number>(itemCount);

  useLayoutEffect(() => {
    if (
      !enabled ||
      itemCount === 0 ||
      !containerRef.current ||
      !measureRef.current
    ) {
      setVisibleCount(itemCount);
      return;
    }

    function measure(): void {
      const container = containerRef.current;
      const measureContainer = measureRef.current;
      if (!container || !measureContainer) return;

      const children = Array.from(measureContainer.children) as HTMLElement[];
      const containerWidth = container.offsetWidth;
      const reservedWidth = itemCount > 1 ? MORE_INDICATOR_WIDTH : 0;

      let count = 0;
      let accumulatedWidth = 0;

      for (const child of children) {
        const childWidth = child.offsetWidth + TAG_MARGIN;

        if (accumulatedWidth + childWidth + reservedWidth <= containerWidth) {
          accumulatedWidth += childWidth;
          count++;
        } else {
          break;
        }
      }

      const finalCount = count >= itemCount ? itemCount : Math.max(1, count);
      setVisibleCount(finalCount);
    }

    measure();

    const observer = new ResizeObserver(measure);
    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [enabled, itemCount]);

  return { containerRef, measureRef, visibleCount };
}

function createTagElements(items: TagItem[]): ReactElement[] {
  return items.map((item) => {
    const color = colorFromString(item.name);
    return (
      <CustomTag key={String(item.id)} color={color}>
        {item.name}
      </CustomTag>
    );
  });
}

const TOOLTIP_OVERLAY_STYLE = {
  boxShadow: "0 3px 6px -4px rgba(0,0,0,.12), 0 6px 16px 0 rgba(0,0,0,.08)",
};

const MORE_INDICATOR_BASE_STYLE = {
  fontSize: "12px",
  marginLeft: "4px",
};

const HIDDEN_MEASURE_STYLE = {
  position: "absolute" as const,
  visibility: "hidden" as const,
  whiteSpace: "nowrap" as const,
  pointerEvents: "none" as const,
};

interface HiddenMeasureContainerProps {
  measureRef: React.RefObject<HTMLDivElement>;
  children: ReactElement[];
}

function HiddenMeasureContainer({
  measureRef,
  children,
}: HiddenMeasureContainerProps): ReactElement {
  return (
    <div ref={measureRef} style={HIDDEN_MEASURE_STYLE}>
      {children}
    </div>
  );
}

interface MoreIndicatorProps {
  hiddenCount: number;
}

function MoreIndicator({ hiddenCount }: MoreIndicatorProps): ReactElement {
  const { t } = useLocale();
  const { token } = theme.useToken();
  const label = t("andXMore").replace("{count}", String(hiddenCount));

  return (
    <span
      style={{ ...MORE_INDICATOR_BASE_STYLE, color: token.colorTextTertiary }}
    >
      {label}
    </span>
  );
}

interface TooltipContentProps {
  tags: ReactElement[];
}

function TooltipContent({ tags }: TooltipContentProps): ReactElement {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>{tags}</div>
  );
}

interface InfiniteTagsProps {
  items: TagItem[];
  tags: ReactElement[];
}

function InfiniteTags({ items, tags }: InfiniteTagsProps): ReactElement {
  const { token } = theme.useToken();
  const { containerRef, measureRef, visibleCount } = useOverflowMeasurement(
    items.length,
    true,
  );

  const hiddenCount = items.length - visibleCount;
  const hasOverflow = hiddenCount > 0;
  const visibleTags = tags.slice(0, visibleCount);

  const tooltipContent = hasOverflow ? (
    <TooltipContent tags={tags} />
  ) : undefined;
  const tooltipInnerStyle = useMemo(
    () => ({ color: token.colorText, padding: "8px 12px" }),
    [token.colorText],
  );

  return (
    <Tooltip
      title={tooltipContent}
      color="white"
      placement="top"
      mouseEnterDelay={0.5}
      overlayStyle={TOOLTIP_OVERLAY_STYLE}
      overlayInnerStyle={tooltipInnerStyle}
    >
      <div
        ref={containerRef}
        style={{ whiteSpace: "nowrap", lineHeight: "30px" }}
      >
        <HiddenMeasureContainer measureRef={measureRef}>
          {tags}
        </HiddenMeasureContainer>
        {visibleTags}
        {hasOverflow && <MoreIndicator hiddenCount={hiddenCount} />}
      </div>
    </Tooltip>
  );
}

interface PaginatedTagsProps {
  tags: ReactElement[];
}

function PaginatedTags({ tags }: PaginatedTagsProps): ReactElement {
  return (
    <div style={{ whiteSpace: "break-spaces", lineHeight: "30px" }}>{tags}</div>
  );
}

export function TagsTreeComponent({
  value,
}: TagsTreeComponentProps): ReactElement {
  const { treeType } = useActionViewContext();
  const { treeType: one2manyTreeType } = useOne2manyContext() || {};
  const isInfinite = (one2manyTreeType || treeType) === "infinite";

  const items = useDeepCompareMemo(() => value?.items || [], [value?.items]);

  const tags = useMemo(() => createTagElements(items), [items]);

  if (isInfinite) {
    return <InfiniteTags items={items} tags={tags} />;
  }

  return <PaginatedTags tags={tags} />;
}
