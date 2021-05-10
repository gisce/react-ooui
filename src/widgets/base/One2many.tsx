import React, { useState, useEffect } from "react";
import { One2many as One2manyOoui } from "ooui";
import Field from "@/common/Field";
import { Button, Spin, Alert, Modal } from "antd";
import { Form } from "@/index";
import { SimpleTree } from "@/index";
import { Form as FormOoui, Tree as TreeOoui } from "ooui";
import { Views } from "@/types";
import ConnectionProvider from "@/ConnectionProvider";
import { FormModal } from "@/widgets/modals/FormModal";

import {
  FileAddOutlined,
  EditOutlined,
  DeleteOutlined,
  LeftOutlined,
  RightOutlined,
  AlignLeftOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

type Props = {
  ooui: One2manyOoui;
};

const { confirm } = Modal;

export const One2many = (props: Props) => {
  const { ooui } = props;
  return (
    <Field {...props}>
      <One2manyInput ooui={ooui} />
    </Field>
  );
};

interface One2ManyInputProps {
  ooui: One2manyOoui;
  value?: number[];
  onChange?: (value: any[]) => void;
}

const One2manyInput: React.FC<One2ManyInputProps> = (
  props: One2ManyInputProps
) => {
  const { value = [], onChange, ooui } = props;

  const triggerChange = (changedValue: number[]) => {
    onChange?.(changedValue);
  };

  const {
    id,
    readOnly,
    required,
    relation,
    views: oouiViews,
    mode,
  } = ooui as One2manyOoui;

  const [views, setViews] = useState<Views>(new Map<string, any>());

  const [currentView, setCurrentView] = useState<string>("tree");
  const [itemIndex, setItemIndex] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();
  const [showFormModal, setShowFormModal] = useState<boolean>(false);
  const [modalItemId, setModalItemId] = useState<number>();

  const showRemoveConfirm = () => {
    confirm({
      title: "Remove item",
      icon: <ExclamationCircleOutlined />,
      centered: true,
      content: "Are you sure you want to remove this item?",
      okText: "Yes, remove it",
      onOk() {
        onConfirmRemove();
      },
    });
  };

  const getViewData = async (type: "form" | "tree") => {
    if (oouiViews[type]) {
      return oouiViews[type];
    }
    return await ConnectionProvider.getHandler().getView(relation, type);
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      if (mode && mode.length > 0) {
        setCurrentView(mode[0]);
      }

      const formView = await getViewData("form");
      const treeView = await getViewData("tree");
      views.set("form", formView);
      views.set("tree", treeView);
      setViews(views);
    } catch (err) {
      setError(err);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [ooui]);

  const separator = () => {
    return <div className="inline-block w-3" />;
  };

  const index = () => {
    let itemToShow = "_";
    if (value.length === 0) {
      itemToShow = "_";
    } else {
      itemToShow = (itemIndex + 1).toString();
    }
    return (
      <span className="pl-1 pr-1">
        ({itemToShow}/{value.length})
      </span>
    );
  };

  const toggleViewMode = () => {
    if (currentView === "form" && views.get("tree")) {
      setCurrentView("tree");
    } else if (currentView === "tree" && views.get("form")) {
      setCurrentView("form");
    }
  };

  const getTitle = () => {
    const type = currentView === "form" ? FormOoui : TreeOoui;
    const ooui = new type(views.get(currentView).fields);
    ooui.parse(views.get(currentView).arch);
    return (ooui as any).string;
  };

  const previousItem = () => {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    }
  };

  const nextItem = () => {
    const totalItems = value.length;
    if (itemIndex < totalItems - 1) {
      setItemIndex(itemIndex + 1);
    }
  };

  const editItem = () => {
    setModalItemId(value[itemIndex]);
    setShowFormModal(true);
  };

  const createItem = () => {
    setModalItemId(undefined);
    setShowFormModal(true);
  };

  const onConfirmRemove = async () => {
    setIsLoading(true);
    setError(undefined);

    try {
      await ConnectionProvider.getHandler().delete({
        arch: views.get("form").arch,
        model: relation,
        ids: [value[itemIndex]],
      });
    } catch (err) {
      setError(err);
    }

    setItemIndex(0);
    triggerChange(value.filter((id) => id !== value[itemIndex]));
    setIsLoading(false);
    fetchData();
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
          <Button icon={<FileAddOutlined onClick={createItem} />} />
          {currentView === "form" && (
            <Button icon={<EditOutlined />} onClick={editItem} />
          )}
          {currentView === "form" && (
            <Button icon={<DeleteOutlined onClick={showRemoveConfirm} />} />
          )}
          {separator()}
          {currentView === "form" && (
            <>
              <Button icon={<LeftOutlined />} onClick={previousItem} />
              {index()}
              <Button icon={<RightOutlined />} onClick={nextItem} />
              {separator()}
            </>
          )}
          <Button icon={<AlignLeftOutlined />} onClick={toggleViewMode} />
        </div>
      </div>
    );
  };

  const content = () => {
    if (currentView === "form") {
      return (
        <Form
          model={relation}
          id={value[itemIndex]}
          onCancel={() => {}}
          onSubmitSucceed={() => {
            fetchData();
          }}
        />
      );
    }

    return (
      <SimpleTree
        model={relation}
        ids={value}
        formView={views.get("form")}
        treeView={views.get("tree")}
        onRowClicked={(event: any) => {
          const { id } = event;
          setModalItemId(id);
          setShowFormModal(true);
        }}
      />
    );
  };

  if (isLoading) {
    return <Spin />;
  }

  if (error) {
    return <Alert className="mt-10" message={error} type="error" banner />;
  }

  return (
    <>
      {topBar()}
      {content()}
      <FormModal
        model={relation}
        id={modalItemId}
        visible={showFormModal}
        onSubmitSucceed={(event: any) => {
          const [id] = event;
          if (!value.includes(id)) {
            triggerChange(value.concat(id));
          }

          setShowFormModal(false);
          fetchData();
        }}
        onCancel={() => {
          setShowFormModal(false);
        }}
      />
    </>
  );
};
