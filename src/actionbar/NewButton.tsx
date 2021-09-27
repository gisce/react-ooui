import React, { useContext } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import ActionButton from "./ActionButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { LocaleContext, LocaleContextType } from "@/context/LocaleContext";

type Props = {
  disabled?: boolean;
};

function NewButton(props: Props) {
  const { disabled = false } = props;

  const { formHasChanges, onNewClicked: onNewClickedProps } = useContext(
    ActionViewContext
  ) as ActionViewContextType;
  const { t, lang } = useContext(LocaleContext) as LocaleContextType;

  const onNewClicked = () => {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        lang,
        onOk: () => {
          onNewClickedProps();
        },
      });
      return;
    }

    onNewClickedProps();
  };

  return (
    <ActionButton
      icon={<FileAddOutlined />}
      tooltip={t("new")}
      onClick={onNewClicked}
      disabled={disabled}
    />
  );
}
export default NewButton;
