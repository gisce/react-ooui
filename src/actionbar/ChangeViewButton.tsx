import { useMemo } from "react";
import { Button } from "antd";
import {
  DownOutlined,
  TableOutlined,
  FormOutlined,
  AreaChartOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import {
  useLocale,
  Dropdown,
  DropdownMenuItem,
} from "@gisce/react-formiga-components";
import showUnsavedChangesDialog from "@/ui/UnsavedChangesDialog";
import ButtonWithTooltip from "@/common/ButtonWithTooltip";
import { View } from "@/types";

type Props = {
  onChangeView: (view: View) => void;
  currentView: View;
  availableViews: View[];
  disabled?: boolean;
  formHasChanges?: boolean;
  previousView?: View;
};

const iconsForViewTypes = {
  tree: <TableOutlined />,
  form: <FormOutlined />,
  graph: <AreaChartOutlined />,
  calendar: <CalendarOutlined />,
};

function getIconForView(view?: View) {
  if (!view) {
    return <FormOutlined />;
  }

  return (iconsForViewTypes as any)?.[view.type] || <FormOutlined />;
}

function ChangeViewButton(props: Props) {
  const {
    currentView,
    availableViews,
    onChangeView,
    disabled = false,
    formHasChanges = false,
    previousView,
  } = props;
  const { t } = useLocale();

  const dropdownData = useMemo(() => {
    return [
      {
        label: t("viewAs"),
        items: availableViews.map((view, idx) => {
          const fallbackTitle =
            view.type.charAt(0).toUpperCase() + view.type.slice(1);
          return {
            id: view.view_id || idx,
            name: view.title || fallbackTitle,
            icon: getIconForView(view),
            selected: currentView.view_id === view.view_id,
          };
        }),
      },
    ];
  }, [availableViews, currentView.view_id, t]);

  function tryNavigate(callback: any) {
    if (formHasChanges) {
      showUnsavedChangesDialog({
        t,
        onOk: () => {
          callback();
        },
      });
      return;
    }

    callback();
  }

  function handleMenuClick(item: DropdownMenuItem) {
    tryNavigate(() => {
      const selectedView = availableViews.find(
        (view) => view.view_id === parseInt(item.id as string),
      );
      onChangeView(selectedView!);
    });
  }

  return (
    <div style={{ display: "flex" }}>
      <ButtonWithTooltip
        tooltip={previousView ? t("viewAs") + " " + t(previousView.type) : ""}
        icon={getIconForView(previousView)}
        style={{
          width: 50,
          borderTopRightRadius: 0,
          borderBottomRightRadius: 0,
        }}
        onClick={() => {
          handleMenuClick({ id: previousView?.view_id as number });
        }}
        disabled={disabled || availableViews.length === 1}
      />
      <Dropdown
        onRetrieveData={async () => dropdownData}
        onItemClick={handleMenuClick}
        placement="bottomRight"
        disabled={disabled || availableViews.length === 1}
      >
        <Button
          style={{
            width: 25,
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
          }}
          icon={<DownOutlined style={{ fontSize: "0.5em" }} />}
          onClick={(e) => e.preventDefault()}
        ></Button>
      </Dropdown>
    </div>
  );
}

export default ChangeViewButton;
