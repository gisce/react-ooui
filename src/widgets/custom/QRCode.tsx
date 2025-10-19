import { useEffect, useRef, useState, useMemo } from "react";
import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import QRCodeLib from "qrcode";

export const QRCode = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <QRCodeInput {...props} />
    </Field>
  );
};

export const QRCodeInput = (props: any) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState<string>("");
  const { value, ooui } = props;

  // Default options that can be overridden by ooui configuration
  const qrOptions = useMemo(
    () => ({
      width: ooui.width || 200,
      height: ooui.height || 200,
      margin: ooui.margin || 2,
      color: {
        dark: ooui.darkColor || "#000000",
        light: ooui.lightColor || "#ffffff",
      },
      errorCorrectionLevel: ooui.errorCorrectionLevel || "M",
    }),
    [
      ooui.width,
      ooui.height,
      ooui.margin,
      ooui.darkColor,
      ooui.lightColor,
      ooui.errorCorrectionLevel,
    ],
  );

  useEffect(() => {
    if (!value || !canvasRef.current) {
      return;
    }

    const generateQRCode = async () => {
      try {
        setError("");
        await QRCodeLib.toCanvas(canvasRef.current, String(value), qrOptions);
      } catch (err) {
        setError(`Error generating QR code: ${err}`);
        console.error("QR Code generation error:", err);
      }
    };

    generateQRCode();
  }, [value, qrOptions]);

  if (!value) {
    return (
      <div style={{ color: "#999", fontStyle: "italic" }}>
        No data to generate QR code
      </div>
    );
  }

  if (error) {
    return <div style={{ color: "#ff4d4f", fontSize: "12px" }}>{error}</div>;
  }

  return (
    <div style={{ textAlign: "center" }}>
      <canvas
        ref={canvasRef}
        style={{
          maxWidth: "100%",
          height: "auto",
          border: ooui.border ? "1px solid #d9d9d9" : "none",
          borderRadius: ooui.borderRadius || "4px",
        }}
      />
      {ooui.showValue && (
        <div
          style={{
            marginTop: "8px",
            fontSize: "12px",
            color: "#666",
            wordBreak: "break-all",
          }}
        >
          {value}
        </div>
      )}
    </div>
  );
};
