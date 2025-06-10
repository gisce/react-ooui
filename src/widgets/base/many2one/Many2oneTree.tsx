import { Space } from "antd";
import React, { useMemo } from "react";
import { Many2one as Many2oneOoui } from "@gisce/ooui";
import { Many2oneSuffix } from "./Many2oneSuffix";
import { useUserFeatureIsEnabled } from "@/context/ConfigContext";
import { UserFeatureKeys } from "@/models/userFeature";

export type Many2oneTreeProps = { m2oField: any; ooui: Many2oneOoui };

export const Many2oneTree = (props: Many2oneTreeProps): React.ReactElement => {
  const { m2oField, ooui } = props;

  const disableArrowMenu = useUserFeatureIsEnabled(
    UserFeatureKeys.FEATURE_MANY2ONE_DISABLE_ARROW_MENU,
  );

  const shouldShowMenu = useMemo(() => {
    if (ooui.showMenu === true) {
      return true;
    }
    return !disableArrowMenu;
  }, [ooui.showMenu, disableArrowMenu]);

  if (!m2oField) {
    return <></>;
  }

  return (
    <Space>
      <>{m2oField.value}</>
      {shouldShowMenu && (
        <Many2oneSuffix id={m2oField.id} model={m2oField.model} />
      )}
    </Space>
  );
};
