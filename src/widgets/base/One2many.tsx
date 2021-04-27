import React, { useEffect } from "react";
import { Button } from "antd";
import Field from "@/common/Field";
import { One2many as One2manyOoui } from "ooui";
import { WidgetProps } from "@/types";
import {
  FileAddOutlined,
  EditOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  MinusOutlined,
} from "@ant-design/icons";

export const One2many = (props: WidgetProps) => {
  const { ooui } = props;
  const { id, readOnly, required } = ooui as One2manyOoui;

  const separator = () => {
    return <div className="inline-block w-3" />;
  };

  const index = () => {
    return <span className="pl-1 pr-1">(1/1)</span>;
  };

  const topBar = () => {
    return (
      <div className="flex">
        <div className="h-8 flex flex-grow bg-gray-700 text-gray-200">
          <div className="h-full flex flex-col justify-center items-center">
            <span className="pl-2 font-bold">Contactes de l'empresa</span>
          </div>
        </div>
        <div className="h-8 flex-none pl-2">
          <Button icon={<FileAddOutlined />} />
          <Button icon={<EditOutlined />} />
          <Button icon={<DeleteOutlined />} />
          {separator()}
          <Button icon={<LeftOutlined />} />
          {index()}
          <Button icon={<RightOutlined />} />
          {separator()}
          <Button icon={<AlignLeftOutlined />} />
        </div>
      </div>
    );
  };

  return topBar();
};
