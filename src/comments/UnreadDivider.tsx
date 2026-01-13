import { memo, forwardRef, useMemo, CSSProperties } from "react";
import { theme } from "antd";

const { useToken } = theme;

export type UnreadDividerProps = {
  label: string;
};

const UnreadDividerComponent = forwardRef<HTMLDivElement, UnreadDividerProps>(
  (props: UnreadDividerProps, ref) => {
    const { label } = props;
    const { token } = useToken();

    const containerStyle = useMemo(
      (): CSSProperties => ({
        display: "flex",
        alignItems: "center",
        gap: 12,
        marginTop: 16,
        marginBottom: 12,
        width: "100%",
      }),
      [],
    );

    const lineStyle = useMemo(
      (): CSSProperties => ({
        flex: 1,
        height: 2,
        backgroundColor: token.colorWarning,
      }),
      [token.colorWarning],
    );

    const labelStyle = useMemo(
      (): CSSProperties => ({
        fontSize: 12,
        fontWeight: 600,
        color: token.colorWarning,
        textTransform: "uppercase",
        letterSpacing: 0.5,
      }),
      [token.colorWarning],
    );

    return (
      <div ref={ref} style={containerStyle} role="separator" aria-label={label}>
        <div style={lineStyle} />
        <span style={labelStyle}>{label}</span>
        <div style={lineStyle} />
      </div>
    );
  },
);

UnreadDividerComponent.displayName = "UnreadDivider";

export const UnreadDivider = memo(UnreadDividerComponent);
