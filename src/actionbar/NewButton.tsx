import React, { useContext } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import ActionButton from "./ActionButton";
import {
  ActionViewContext,
  ActionViewContextType,
} from "@/context/ActionViewContext";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";

function NewButton() {
  const {
    formHasChanges,
    formIsSaving,
    onNewClicked: onNewClickedProps,
  } = useContext(ActionViewContext) as ActionViewContextType;

  const onNewClicked = () => {
    if (formHasChanges) {
      showUnsavedChangesDialog({
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
      tooltip={"New"}
      onClick={onNewClicked}
      disabled={formIsSaving}
    />
  );
}
export default NewButton;
