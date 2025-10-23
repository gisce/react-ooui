import { useState, useCallback } from "react";
import { Button, Col, Modal, Row } from "antd";
import Form, { FormProps } from "@/widgets/views/Form";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import FormModalProvider from "@/context/FormModalContext";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { FavouriteNameModal } from "@/ui/FavouriteNameModal";
import { useFavouriteActions } from "@/hooks/useFavouriteActions";
import { useDeepCompareEffect } from "use-deep-compare";

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

  // Skip favourite feature if action_id, action_type, and res_id are missing
  const shouldSkipFavourite = !action_id && !action_type && !res_id;

  const {
    showNameModal,
    toggleFavourite: toggleFavouriteAction,
    handleSaveFavourite: saveFavourite,
    handleCancelNameModal,
    initialName,
  } = useFavouriteActions({
    isFavourite,
    currentShortcutId,
    defaultName: formTitle,
    onFavouriteAdded: (shortcutId) => {
      setIsFavourite(true);
      setCurrentShortcutId(shortcutId);
    },
    onFavouriteRemoved: () => {
      setIsFavourite(false);
    },
  });

  useDeepCompareEffect(() => {
    if (isMenuAction && !shouldSkipFavourite) {
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

  const handleSaveFavourite = useCallback(
    async (nameToUse: string) => {
      await saveFavourite(nameToUse, {
        action_id,
        action_type,
        view_id,
        res_id: res_id || false,
      });
    },
    [saveFavourite, action_id, action_type, view_id, res_id],
  );

  function header() {
    return (
      <Row align="middle">
        {!shouldSkipFavourite && (
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
              onClick={toggleFavouriteAction}
            ></Button>
          </Col>
        )}
        <Col style={{ paddingLeft: shouldSkipFavourite ? 0 : 10 }}>
          {formTitle}
        </Col>
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
        onCancel={() => onCancel?.()}
        maskClosable={false}
      >
        <Form
          key={`${model}-${id}-${action_id}-${res_id}-${action_type}-${view_id}-${title}`}
          id={id || res_id}
          showFooter={true}
          insideButtonModal={buttonModal}
          onCancel={onCancel}
          parentWidth={contentWidth}
          {...rest}
        />
      </Modal>

      <FavouriteNameModal
        visible={showNameModal}
        initialName={initialName}
        onSave={handleSaveFavourite}
        onCancel={handleCancelNameModal}
      />
    </FormModalProvider>
  );
};
