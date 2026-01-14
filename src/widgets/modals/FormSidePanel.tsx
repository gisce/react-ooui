import { useState, useCallback, useMemo, memo } from "react";
import { Button } from "antd";
import Form, { FormProps } from "@/widgets/views/Form";
import FormModalProvider from "@/context/FormModalContext";
import { StarOutlined, StarFilled } from "@ant-design/icons";
import ConnectionProvider from "@/ConnectionProvider";
import { FavouriteNameModal } from "@/ui/FavouriteNameModal";
import { useFavouriteActions } from "@/hooks/useFavouriteActions";
import { useDeepCompareEffect } from "use-deep-compare";
import { FloatingDrawer } from "@/ui/FloatingDrawer";
import useWindowDimensions from "@/hooks/useWindowDimensions";

type FormSidePanelProps = FormProps & {
  visible: boolean;
  title?: string;
  buttonModal?: boolean;
  isMenuAction?: boolean;
  actionData?: any;
};

const DRAWER_WIDTH_PERCENT = 0.4;
const CONTENT_PADDING = 32;

export const FormSidePanel = memo((props: FormSidePanelProps) => {
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
  const { width: windowWidth } = useWindowDimensions();

  const drawerWidth = useMemo(
    () => Math.max(windowWidth * DRAWER_WIDTH_PERCENT, 500),
    [windowWidth],
  );
  const contentWidth = useMemo(
    () => drawerWidth - CONTENT_PADDING,
    [drawerWidth],
  );

  const [formTitle, setFormTitle] = useState<string>(title!);
  const [isFavourite, setIsFavourite] = useState(false);
  const [currentShortcutId, setCurrentShortcutId] = useState<number>();
  const { action_id, res_id, action_type, view_id } = actionData || {};

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

  const handleClose = useCallback(() => {
    onCancel?.();
  }, [onCancel]);

  const headerButtons = useMemo(
    () =>
      isMenuAction && !shouldSkipFavourite ? (
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
        />
      ) : undefined,
    [isMenuAction, shouldSkipFavourite, isFavourite, toggleFavouriteAction],
  );

  return (
    <FormModalProvider setTitle={setFormTitle}>
      <FloatingDrawer
        title={formTitle}
        isOpen={visible}
        onClose={handleClose}
        headerButtons={headerButtons}
        width={drawerWidth}
      >
        <div style={{ padding: "16px" }}>
          <Form
            key={`${model}-${id}-${action_id}-${res_id}-${action_type}-${view_id}-${title}`}
            id={id || res_id}
            showFooter={true}
            insideButtonModal={buttonModal}
            onCancel={onCancel}
            parentWidth={contentWidth}
            {...rest}
          />
        </div>
      </FloatingDrawer>

      <FavouriteNameModal
        visible={showNameModal}
        initialName={initialName}
        onSave={handleSaveFavourite}
        onCancel={handleCancelNameModal}
      />
    </FormModalProvider>
  );
});

FormSidePanel.displayName = "FormSidePanel";
