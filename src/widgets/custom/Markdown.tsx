import Field from "@/common/Field";
import ReactMarkdown from "react-markdown";
import { WidgetProps } from "@/types";
import remarkGfm from "remark-gfm";
import { useCallback, useMemo, useRef } from "react";

export const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput {...props} />
    </Field>
  );
};

export const MarkdownInput = (props: any) => {
  const { value, ooui, onChange } = props;
  const checkboxCounterRef = useRef(0);

  // Parse the markdown to find checkbox positions
  const checkboxPositions = useMemo(() => {
    if (!value) return [];
    const lines = value.split("\n");
    const positions: Array<{ lineIndex: number; checked: boolean }> = [];

    lines.forEach((line: string, lineIndex: number) => {
      const checkboxRegex = /^(\s*[-*+]?\s*)\[([x\s])\]/;
      const match = line.match(checkboxRegex);
      if (match) {
        positions.push({
          lineIndex,
          checked: match[2].toLowerCase() === "x",
        });
      }
    });

    return positions;
  }, [value]);

  const handleCheckboxChange = useCallback(
    (checkboxIndex: number, checked: boolean) => {
      if (!onChange || !value || checkboxIndex >= checkboxPositions.length)
        return;

      const lines = value.split("\n");
      const position = checkboxPositions[checkboxIndex];
      const lineIndex = position.lineIndex;

      if (lineIndex >= 0 && lineIndex < lines.length) {
        const line = lines[lineIndex];
        const checkboxRegex = /^(\s*[-*+]?\s*)\[([x\s])\]/;
        const match = line.match(checkboxRegex);

        if (match) {
          const prefix = match[1];
          const newCheckState = checked ? "x" : " ";
          lines[lineIndex] = line.replace(
            checkboxRegex,
            `${prefix}[${newCheckState}]`,
          );
          onChange(lines.join("\n"));
        }
      }
    },
    [onChange, value, checkboxPositions],
  );

  // Create stable components that don't recreate on every render
  const components = useMemo(() => {
    // Reset counter when components are recreated (when checkboxPositions change)
    checkboxCounterRef.current = 0;
    
    return {
      input: (props: any) => {
        if (props.type === "checkbox") {
          const currentIndex = checkboxCounterRef.current++;
          const position = checkboxPositions[currentIndex];

          return (
            <input
              type="checkbox"
              checked={position?.checked || false}
              onChange={(e) =>
                handleCheckboxChange(currentIndex, e.target.checked)
              }
              disabled={ooui?.readOnly}
              style={{ cursor: ooui?.readOnly ? "not-allowed" : "pointer" }}
            />
          );
        }
        return <input {...props} />;
      },
    };
  }, [checkboxPositions, handleCheckboxChange, ooui?.readOnly]);

  return (
    <div
      style={{
        height: ooui?.height ? ooui.height + "px" : "100%",
        overflow: "auto",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        className="markdown-typography"
        components={components}
      >
        {value}
      </ReactMarkdown>
    </div>
  );
};
