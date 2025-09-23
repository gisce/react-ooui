import Field from "@/common/Field";
import ReactMarkdown from "react-markdown";
import { WidgetProps } from "@/types";
import remarkGfm from "remark-gfm";
import { useCallback, useMemo, useRef, useEffect } from "react";
import { useDeepCompareEffect } from "use-deep-compare";

export const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput {...props} />
    </Field>
  );
};

export const MarkdownInput = (props: any) => {
  const { value, ooui, onChange } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  const checkboxes = useMemo(() => {
    if (!value) return [];

    const found: Array<{ index: number; checked: boolean }> = [];
    const regex = /^(\s*[-*+]\s+)\[([x\sX])\]/gm;
    let match;

    while ((match = regex.exec(value)) !== null) {
      found.push({
        index: match.index + match[1].length,
        checked: match[2].toLowerCase() === "x",
      });
    }

    return found;
  }, [value]);

  const handleCheckboxClick = useCallback(
    (checkboxIndex: number, checked: boolean) => {
      if (!onChange || !value || checkboxIndex >= checkboxes.length) return;

      const checkbox = checkboxes[checkboxIndex];
      const before = value.substring(0, checkbox.index);
      const after = value.substring(checkbox.index + 3);
      const newCheckbox = checked ? "[x]" : "[ ]";

      onChange(before + newCheckbox + after);
    },
    [onChange, value, checkboxes],
  );

  useDeepCompareEffect(() => {
    if (!containerRef.current) return;

    const checkboxElements = containerRef.current.querySelectorAll(
      'input[type="checkbox"]',
    );

    checkboxElements.forEach((element, index) => {
      const checkbox = checkboxes[index];
      const inputElement = element as HTMLInputElement;

      if (checkbox) {
        inputElement.checked = checkbox.checked;
        inputElement.disabled = ooui?.readOnly || false;

        const newElement = inputElement.cloneNode(true) as HTMLInputElement;
        newElement.onclick = (e) => {
          e.preventDefault();
          handleCheckboxClick(index, !checkbox.checked);
        };

        inputElement.parentNode?.replaceChild(newElement, inputElement);
      }
    });
  }, [value, checkboxes, ooui?.readOnly]);

  return (
    <div
      ref={containerRef}
      style={{
        height: ooui?.height ? ooui.height + "px" : "100%",
        overflow: "auto",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="markdown-typography"
      >
        {value}
      </ReactMarkdown>
    </div>
  );
};
