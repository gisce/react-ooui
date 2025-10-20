import Field from "@/common/Field";
import { WidgetProps } from "@/types";
import { QRCode as AntdQRCode, Space, Typography } from "antd";
import { QRCode as OOUIQRCode } from "@gisce/ooui";
import type { QRCodeProps } from "antd";

// Interfaz para el componente principal QRCode que extiende WidgetProps
export interface QRCodeWidgetProps extends Omit<WidgetProps, "ooui"> {
  ooui: OOUIQRCode;
}

// Interfaz específica para el componente QRCodeInput
export interface QRCodeInputProps {
  ooui: OOUIQRCode;
  value?: any;
}

export const QRCode = (props: QRCodeWidgetProps) => {
  return (
    <Field {...props}>
      <QRCodeInput ooui={props.ooui} value={props.value} />
    </Field>
  );
};

export const QRCodeInput = (props: QRCodeInputProps) => {
  const { value, ooui } = props;

  if (!value) {
    return null;
  }

  // Extraer el ID y el texto de visualización del valor
  // Si es un many2one (array), usar el primer elemento como ID y el segundo como texto
  // Si no, usar el valor directamente
  const qrValue = Array.isArray(value) ? String(value[0]) : String(value);
  const displayValue = Array.isArray(value) ? value[1] : value;

  // Map OOUI configuration to Ant Design QRCode props
  const qrCodeProps: QRCodeProps = {
    value: qrValue,
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
    <Space direction="vertical" align="center">
      <AntdQRCode {...qrCodeProps} />
      {ooui.showValue && (
        <Typography.Text type="secondary">{displayValue}</Typography.Text>
      )}
    </Space>
  );
};
