import Field from "@/common/Field";
import ReactMarkdown, { Components } from "react-markdown";
import { WidgetProps } from "@/types";
import remarkGfm from "remark-gfm";
import {
  useCallback,
  forwardRef,
  useRef,
  useState,
  useEffect,
  CSSProperties,
} from "react";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";

export const Markdown = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <MarkdownInput />
    </Field>
  );
};

export const transformMentions = (text: string): string => {
  return text.replace(/@(\p{L}[\p{L}\p{N}._-]*)/gu, "**@$1**");
};

export type MarkdownInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  ooui?: { height?: number };
  components?: Components;
  containerStyle?: CSSProperties;
  className?: string;
};

export const MarkdownInput = forwardRef<HTMLDivElement, MarkdownInputProps>(
  (props, ref) => {
    const {
      value = "",
      onChange,
      ooui,
      components: customComponents,
      containerStyle,
      className = "markdown-typography",
    } = props;
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

          const taskListPattern = /^(\s*[-*+]\s*)\[([ xX])\](\s+)(\S)/;

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            const match = line.match(taskListPattern);

            if (match) {
              if (checkboxCount === clickedIndex) {
                const checkboxChar = match[2];
                const isCurrentlyChecked = checkboxChar !== " ";
                const newState = !isCurrentlyChecked;

                lines[i] = line.replace(
                  taskListPattern,
                  (
                    _m: string,
                    prefix: string,
                    _checkbox: string,
                    spacing: string,
                    firstChar: string,
                  ) =>
                    `${prefix}[${newState ? "x" : " "}]${spacing}${firstChar}`,
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

    const defaultContainerStyle: CSSProperties = {
      height: ooui?.height ? ooui.height + "px" : "100%",
      overflow: "auto",
    };

    const defaultComponents: Components = {
      input: (inputProps: any) => {
        const { node, ...rest } = inputProps;
        if (rest.type === "checkbox") {
          return (
            <input
              {...rest}
              disabled={false}
              onChange={(e) => {
                handleCheckboxClick(e.currentTarget);
              }}
              style={{ cursor: "pointer" }}
            />
          );
        }
        return <input {...rest} />;
      },
    };

    const mergedComponents: Components = {
      ...defaultComponents,
      ...customComponents,
    };

    return (
      <ErrorBoundary>
        <div ref={ref} style={containerStyle ?? defaultContainerStyle}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            className={className}
            components={mergedComponents}
          >
            {transformMentions(internalValue || "")}
          </ReactMarkdown>
        </div>
      </ErrorBoundary>
    );
  },
);

MarkdownInput.displayName = "MarkdownInput";
