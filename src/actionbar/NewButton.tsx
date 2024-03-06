import { FileAddOutlined } from "@ant-design/icons";
import ActionButton from "./ActionButton";
import { useActionViewContext } from "@/context/ActionViewContext";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import { useLocale } from "@gisce/react-formiga-components";

type Props = {
  disabled?: boolean;
};

function NewButton(props: Props) {
  const { disabled = false } = props;

  const { formHasChanges, onNewClicked: onNewClickedProps } =
    useActionViewContext();
  const { t } = useLocale();

  const onNewClicked = () => {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        t,
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
