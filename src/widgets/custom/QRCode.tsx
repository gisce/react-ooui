import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { QRCode as AntdQRCode } from "antd";
import type { QRCodeProps } from "antd";

export const QRCode = (props: WidgetProps) => {
  return (
    <Field {...props}>
      <QRCodeInput {...props} />
    </Field>
  );
};

export const QRCodeInput = (props: any) => {
  const { value, ooui } = props;

  if (!value) {
    return (
      <div style={{ color: "#999", fontStyle: "italic" }}>
        No data to generate QR code
      </div>
    );
  }

  // Map OOUI configuration to Ant Design QRCode props
  const qrCodeProps: QRCodeProps = {
    value: String(value),
    size: ooui.width || ooui.size || 200,
    color: ooui.darkColor || "#000000",
    bgColor: ooui.lightColor || "#ffffff",
    bordered: ooui.border !== false,
    errorLevel: ooui.errorCorrectionLevel || "M",
    style: {
      borderRadius: ooui.borderRadius || "4px",
      ...ooui.style,
    },
  };

  return (
    <div style={{ textAlign: "center" }}>
      <AntdQRCode {...qrCodeProps} />
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
