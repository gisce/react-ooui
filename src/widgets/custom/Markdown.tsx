import Field from "@/common/Field";
import ReactMarkdown from "react-markdown";
import { WidgetProps } from "@/types";
import remarkGfm from "remark-gfm";
import { useCallback, forwardRef, useRef, useState, useEffect } from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

export const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput />
    </Field>
  );
};

export const MarkdownInput = forwardRef<HTMLDivElement, any>(
  (props: any, ref) => {
    const { value = "", onChange, ...restProps } = props;
    const { ooui } = restProps;
    const [internalValue, setInternalValue] = useState(value);
    const isProcessingCheckbox = useRef(false);

    useEffect(() => {
      if (!isProcessingCheckbox.current) {
        setInternalValue(value);
      }
    }, [value]);

    const handleCheckboxClick = useCallback(
      (checkboxElement: HTMLInputElement) => {
        if (!onChange || isProcessingCheckbox.current) return;

        isProcessingCheckbox.current = true;

        try {
          const container = checkboxElement.closest(".markdown-typography");
          if (!container) return;

          const allCheckboxes = container.querySelectorAll(
            'input[type="checkbox"]',
          );
          let clickedIndex = -1;

          allCheckboxes.forEach((cb, index) => {
            if (cb === checkboxElement) {
              clickedIndex = index;
            }
          });

          if (clickedIndex === -1) return;

          const lines = (internalValue || "").split("\n");
          let checkboxCount = 0;
          let updated = false;

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const match = line.match(/^(\s*[-*+]\s*)\[([ xX])\]/);

            if (match) {
              if (checkboxCount === clickedIndex) {
                const isCurrentlyChecked = match[2].trim() !== "";
                const newState = !isCurrentlyChecked;

                lines[i] = line.replace(
                  /^(\s*[-*+]\s*)\[([ xX])\]/,
                  (_m: string, prefix: string) =>
                    `${prefix}[${newState ? "x" : " "}]`,
                );

                updated = true;
                break;
              }
              checkboxCount++;
            }
          }

          if (updated) {
            const newValue = lines.join("\n");
            setInternalValue(newValue);
            onChange(newValue);
          }
        } catch (error) {
          console.error("Error handling checkbox click:", error);
        } finally {
          setTimeout(() => {
            isProcessingCheckbox.current = false;
          }, 100);
        }
      },
      [internalValue, onChange],
    );

    return (
      <ErrorBoundary>
        <div
          ref={ref}
          style={{
            height: ooui?.height ? ooui.height + "px" : "100%",
            overflow: "auto",
          }}
        >
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className="markdown-typography"
            components={{
              input: (props: any) => {
                if (props.type === "checkbox") {
                  return (
                    <input
                      {...props}
                      disabled={false}
                      onChange={(e) => {
                        handleCheckboxClick(e.currentTarget);
                      }}
                      style={{ cursor: "pointer" }}
                    />
                  );
                }
                return <input {...props} />;
              },
            }}
          >
            {internalValue || ""}
          </ReactMarkdown>
        </div>
      </ErrorBoundary>
    );
  },
);

MarkdownInput.displayName = "MarkdownInput";
