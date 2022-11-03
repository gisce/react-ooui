import React, { useContext, useRef } from "react";
import { Row, Space } from "antd";
import Field from "@/common/Field";
import { Image as ImageOoui } from "@gisce/ooui";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import {
  FolderOpenOutlined,
  DownloadOutlined,
  ClearOutlined,
} from "@ant-design/icons";

import { toBase64, getMimeType } from "@/helpers/filesHelper";
import iconMapper from "@/helpers/iconMapper";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type Props = {
  ooui: ImageOoui;
};

export const Image = (props: Props) => {
  const { ooui } = props;
  const { required, id } = ooui;

  const Icon: React.ElementType = iconMapper(id) as any;

  if (Icon) {
    return <Icon />;
  }

  return (
    <Field required={required} {...props}>
      <ImageInput ooui={ooui} />
    </Field>
  );
};

interface ImageInputProps {
  ooui: ImageOoui;
  value?: string;
  onChange?: (value: string | undefined) => void;
}

export const ImageInput = (props: ImageInputProps) => {
  const { ooui, value, onChange } = props;
  const { readOnly } = ooui as ImageOoui;
  const inputFile = useRef(null);
  const { t } = useContext(LocaleContext) as LocaleContextType;

  const triggerChange = (changedValue?: string) => {
    onChange?.(changedValue);
  };

  async function downloadFile() {
    const fileType = await getMimeType(value!);
    const linkSource = `data:${fileType?.mime};base64,${value}`;
    const downloadLink = document.createElement("a");

    downloadLink.href = linkSource;
    downloadLink.download = `image.${fileType?.ext}`;
    downloadLink.click();
  }

  async function onChangeFile(event: any) {
    event.stopPropagation();
    event.preventDefault();
    const file = event.target.files[0];
    const b64: string = await toBase64(file);
    triggerChange(b64);
  }

  function clearFile() {
    triggerChange(undefined);
  }

  return (
    <>
      <Row gutter={8} wrap={false} justify="center">
        {value && (
          <img
            src={`data:image/*;base64,${value}`}
            style={{ maxWidth: "100px" }}
          />
        )}
        <input
          type="file"
          id="file"
          ref={inputFile}
          accept="image/*"
          style={{ display: "none" }}
          onChange={onChangeFile}
        />
      </Row>
      <Row gutter={8} wrap={false} justify="center" className="pt-5">
        <Space>
          <ButtonWithTooltip
            tooltip={t("uploadNewImage")}
            icon={<FolderOpenOutlined />}
            disabled={readOnly}
            onClick={() => {
              const fileUploadField = inputFile.current as any;
              fileUploadField.click();
            }}
          />
          <ButtonWithTooltip
            tooltip={t("download")}
            disabled={!value}
            onClick={downloadFile}
            icon={<DownloadOutlined />}
          />
          <ButtonWithTooltip
            tooltip={t("clear")}
            disabled={readOnly || !value}
            onClick={clearFile}
            icon={<ClearOutlined />}
          />
        </Space>
      </Row>
    </>
  );
};
