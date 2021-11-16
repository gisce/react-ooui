import React, { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Tooltip } from "antd";
import Form, { FormProps } from "@/widgets/views/Form";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import FormModalProvider from "@/context/FormModalContext";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";

type FormModalProps = FormProps & {
  visible: boolean;
  title?: string;
  buttonModal?: boolean;
  isMenuAction?: boolean;
  actionData?: any;
};

export const FormModal = (props: FormModalProps) => {
  const {
    visible,
    id,
    title,
    buttonModal = false,
    onCancel,
    isMenuAction = false,
    actionData,
    ...rest
  } = props;

  const { modalWidth } = useWindowDimensions();
  const [formTitle, setFormTitle] = useState<string>(title!);
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentShortcutId, setCurrentShortcutId] = useState<number>();

  useEffect(() => {
    if (isMenuAction) {
      checkFavourite();
    }
  }, [actionData, isMenuAction]);

  async function checkFavourite() {
    const { action_id, res_id, action_type, view_id } = actionData;

    const result = await ConnectionProvider.getHandler().isShortcutFavorite({
      action_id,
      action_type,
      view_id,
      res_id: res_id || false,
    });

    setIsFavourite(result !== false);

    if (result !== false) {
      setCurrentShortcutId(result as number);
    }
  }

  async function toggleFavourite() {
    if (isFavourite && currentShortcutId) {
      await ConnectionProvider.getHandler().removeFavourite({
        shortcut_id: currentShortcutId,
      });
    } else {
      const { action_id, res_id, action_type, view_id } = actionData;

      await ConnectionProvider.getHandler().addFavourite({
        action_id,
        action_type,
        view_id,
        res_id: res_id || false,
      });
    }

    setIsFavourite(!isFavourite);
  }

  function onTitleChange(newTitle: string) {
    if (formTitle) {
      return;
    }

    setFormTitle(newTitle);
  }

  function header() {
    return (
      <Row align="middle">
        <Col>
          <Button
            type={isFavourite ? "primary" : "default"}
            icon={
              isFavourite ? (
                <StarFilled style={{ color: "white" }} />
              ) : (
                <StarOutlined />
              )
            }
            style={{ width: 30 }}
            onClick={toggleFavourite}
          ></Button>
        </Col>
        <Col style={{ paddingLeft: 10 }}>{formTitle}</Col>
      </Row>
    );
  }

  return (
    <FormModalProvider setTitle={onTitleChange}>
      <Modal
        title={isMenuAction ? header() : formTitle}
        centered
        width={modalWidth}
        visible={visible}
        footer={null}
        destroyOnClose
        onCancel={onCancel}
      >
        <Form
          id={id}
          showFooter={true}
          insideButtonModal={buttonModal}
          onCancel={onCancel}
          {...rest}
        />
      </Modal>
    </FormModalProvider>
  );
};
