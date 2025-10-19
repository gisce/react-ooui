import React, { useState } from "react";
import { QRCodeInput } from "@gisce/react-ooui";
import { Input, Space, Card, Typography, Form, Divider, Checkbox } from "antd";

const { Title, Paragraph } = Typography;

export const QRCodeDemo = () => {
  const [value, setValue] = useState("https://github.com/gisce/react-ooui");
  const [showValue, setShowValue] = useState(true);
  const [width, setWidth] = useState(200);
  const [border, setBorder] = useState(true);

  const mockOoui = {
    width: width,
    height: width,
    showValue: showValue,
    border: border,
    borderRadius: "8px",
    darkColor: "#000000",
    lightColor: "#ffffff",
    errorCorrectionLevel: "M",
    margin: 2,
  };

  const mockProps = {
    value: value,
    ooui: mockOoui,
    readOnly: false,
    visible: true,
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <Title level={2}>QR Code Widget Demo</Title>
      
      <Paragraph>
        This demo shows the QR Code widget that can generate QR codes from string values.
        The widget supports various customization options like size, colors, and display settings.
      </Paragraph>

      <Card title="QR Code Configuration" style={{ marginBottom: "20px" }}>
        <Form layout="vertical">
          <Form.Item label="Text/URL to encode">
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter text or URL to generate QR code"
            />
          </Form.Item>
          
          <Space wrap>
            <Form.Item label="Width/Height">
              <Input
                type="number"
                value={width}
                onChange={(e) => setWidth(Number(e.target.value))}
                min={100}
                max={400}
                style={{ width: "100px" }}
              />
            </Form.Item>
            
            <Form.Item label="Show Value Text">
              <Checkbox
                checked={showValue}
                onChange={(e) => setShowValue(e.target.checked)}
              >
                Show value text below QR code
              </Checkbox>
            </Form.Item>
            
            <Form.Item label="Show Border">
              <Checkbox
                checked={border}
                onChange={(e) => setBorder(e.target.checked)}
              >
                Show border around QR code
              </Checkbox>
            </Form.Item>
          </Space>
        </Form>
      </Card>

      <Card title="Generated QR Code">
        <div style={{ textAlign: "center" }}>
          <QRCodeInput {...mockProps} />
        </div>
      </Card>

      <Divider />

      <Card title="Example Use Cases" size="small">
        <Space direction="vertical" size="small">
          <div>
            <strong>URLs:</strong>{" "}
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setValue("https://www.gisce.net"); }}
            >
              Website Links
            </a>
          </div>
          <div>
            <strong>Contact Info:</strong>{" "}
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setValue("MECARD:N:John Doe;TEL:+1234567890;EMAIL:john@example.com;;"); }}
            >
              Business Card
            </a>
          </div>
          <div>
            <strong>WiFi:</strong>{" "}
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setValue("WIFI:T:WPA;S:NetworkName;P:password123;H:;;"); }}
            >
              Network Credentials
            </a>
          </div>
          <div>
            <strong>Simple Text:</strong>{" "}
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); setValue("Hello, this is a QR code with some text!"); }}
            >
              Plain Text
            </a>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default QRCodeDemo;