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

  const { model } = rest;

  const { modalWidth } = useWindowDimensions();
  const [formTitle, setFormTitle] = useState<string>(title!);
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentShortcutId, setCurrentShortcutId] = useState<number>();
  const { action_id, res_id, action_type, view_id } = actionData || {};

  useEffect(() => {
    if (isMenuAction) {
      checkFavourite();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [actionData, isMenuAction]);

  async function checkFavourite() {
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

  const contentWidth = modalWidth * 0.95;
  return (
    <FormModalProvider setTitle={setFormTitle}>
      <Modal
        title={isMenuAction ? header() : formTitle}
        centered
        width={modalWidth}
        open={visible}
        footer={null}
        destroyOnClose
        onCancel={onCancel}
        maskClosable={false}
      >
        <Form
          key={`${model}-${id}-${action_id}-${res_id}-${action_type}-${view_id}-${title}`}
          id={id}
          showFooter={true}
          insideButtonModal={buttonModal}
          onCancel={onCancel}
          parentWidth={contentWidth}
          {...rest}
        />
      </Modal>
    </FormModalProvider>
  );
};
