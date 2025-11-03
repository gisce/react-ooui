import React, { useRef, useMemo } from "react";
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
import { Icon, iconMapper, useLocale } from "@gisce/react-formiga-components";

type ImageProps = {
  ooui: ImageOoui;
};

type ImageRenderProps = {
  value?: string;
  style?: any;
  width?: number;
  height?: number;
};

export const ImageRender = (props: ImageRenderProps) => {
  const { value, style = {}, width, height } = props;
  if (value) {
    const size = height || width;
    const iconStyle: any = size ? { fontSize: size } : {};
    const MappedIcon = iconMapper(
      value,
      size ? { style: iconStyle } : undefined,
    );
    if (MappedIcon) {
      return <MappedIcon />;
    } else {
      const imgStyle: any = { ...style };
      if (width) {
        imgStyle.width = `${width}px`;
      }
      if (height) {
        imgStyle.height = `${height}px`;
      }
      if (!width && !height) {
        imgStyle.maxWidth = "100px";
      }
      return <img src={`data:image/*;base64,${value}`} style={imgStyle} />;
    }
  }
};

export const Image = (props: ImageProps) => {
  const { ooui } = props;
  const { required, id, width, height } = ooui;

  if (iconMapper(id)) {
    return <ImageRender value={id} width={width} height={height} />;
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
  const { readOnly, width, height } = ooui as ImageOoui;
  const inputFile = useRef(null);
  const { t } = useLocale();

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
        {useMemo(
          () => (
            <ImageRender value={value} width={width} height={height} />
          ),
          [value, width, height],
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
      {ooui.showControls && (
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
      )}
    </>
  );
};
