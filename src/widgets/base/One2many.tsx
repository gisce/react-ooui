import React, { useState } from "react";
import { Button } from "antd";
import { One2many as One2manyOoui } from "ooui";
import { WidgetProps } from "@/types";
import { Form } from "@/index";
import { SimpleTree } from "@/index";
import { Form as FormOoui, Tree as TreeOoui } from "ooui";

import {
  FileAddOutlined,
  EditOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
} from "@ant-design/icons";

const ids = [6];

export const One2many = (props: WidgetProps) => {
  const { ooui } = props;
  const {
    id,
    readOnly,
    required,
    relation,
    views,
    mode,
  } = ooui as One2manyOoui;

  const [viewMode, setViewMode] = useState<string>(mode[0]);
  const [itemIndex, setItemIndex] = useState<number>(0);

  const separator = () => {
    return <div className="inline-block w-3" />;
  };

  const index = () => {
    return (
      <span className="pl-1 pr-1">
        ({itemIndex + 1}/{ids.length})
      </span>
    );
  };

  const toggleViewMode = () => {
    if (mode.length > 1) {
      setViewMode(viewMode === "form" ? "tree" : "form");
    }
  };

  const getTitle = () => {
    const type = viewMode === "form" ? FormOoui : TreeOoui;
    const ooui = new type(views[viewMode].fields);
    ooui.parse(views[viewMode].arch);
    return (ooui as any).string;
  };

  const topBar = () => {
    return (
      <div className="flex mb-2">
        <div className="h-8 flex flex-grow bg-gray-700 text-gray-200">
          <div className="h-full flex flex-col justify-center items-center">
            <span className="pl-2 font-bold">{getTitle()}</span>
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
          <Button icon={<AlignLeftOutlined />} onClick={toggleViewMode} />
        </div>
      </div>
    );
  };

  const content = () => {
    if (viewMode === "form") {
      return (
        <Form
          model={relation}
          id={6}
          onCancel={() => {
            console.log();
          }}
          onSubmitSucceed={(value: any) => {
            console.log();
          }}
        />
      );
    }

    return (
      <SimpleTree
        model={relation}
        ids={ids}
        formView={views.form}
        treeView={views.tree}
        onRowClicked={() => {
          console.log();
        }}
      />
    );
  };

  return (
    <>
      {topBar()}
      {content()}
    </>
  );
};
